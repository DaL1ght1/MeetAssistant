import json
import asyncio
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from app.services.agent_service import agent_service
from app.repositories.pubsub_repo import pubsub_repo
from app.repositories.room_repo import room_repo
from app.models.domain import Message, Reaction, ReactionType, Question
import uuid
from datetime import datetime

router = APIRouter()

class ConnectionManager:
    def __init__(self):
        self.active_connections: dict[str, list[WebSocket]] = {}

    async def connect(self, websocket: WebSocket, session_id: str):
        await websocket.accept()
        if session_id not in self.active_connections:
            self.active_connections[session_id] = []
        self.active_connections[session_id].append(websocket)

    def disconnect(self, websocket: WebSocket, session_id: str):
        if session_id in self.active_connections:
            self.active_connections[session_id].remove(websocket)

    async def broadcast(self, session_id: str, message: dict):
        if session_id in self.active_connections:
            for connection in self.active_connections[session_id]:
                try:
                    await connection.send_text(json.dumps(message))
                except:
                    pass

manager = ConnectionManager()

async def generate_and_broadcast_insights(session_id: str):
    """Generate AI insights and broadcast to all clients"""
    try:
        from app.agents.pacer import pacer_agent
        from app.agents.emotion import emotion_agent
        from app.agents.question import question_agent
        
        # Get data
        messages = await room_repo.get_messages(session_id)
        reactions = await room_repo.get_reactions(session_id, 60)
        questions = await room_repo.get_questions(session_id)
        
        # Pacer analysis
        pacer_result = pacer_agent.analyze(messages, reactions)
        
        # Sentiment analysis from questions
        if questions:
            sentiments = []
            sentiment_counts = {"positive": 0, "neutral": 0, "negative": 0}
            
            for q in questions:
                if q.sentiment:
                    sentiment_counts[q.sentiment] = sentiment_counts.get(q.sentiment, 0) + 1
                    if q.sentiment == "positive":
                        sentiments.append(0.5)
                    elif q.sentiment == "negative":
                        sentiments.append(-0.5)
                    else:
                        sentiments.append(0)
            
            avg_sentiment = sum(sentiments) / len(sentiments) if sentiments else 0
            total = sum(sentiment_counts.values())
            
            overall_sentiment = "neutral"
            if avg_sentiment > 0.1:
                overall_sentiment = "positive"
            elif avg_sentiment < -0.1:
                overall_sentiment = "negative"
            
            sentiment_breakdown = {
                "interested": int((sentiment_counts["positive"] / total * 100)) if total > 0 else 0,
                "confused": int((sentiment_counts["neutral"] / total * 50)) if total > 0 else 0,
                "frustrated": int((sentiment_counts["negative"] / total * 100)) if total > 0 else 0,
                "excited": int((sentiment_counts["positive"] / total * 100)) if total > 0 else 0,
            }
        else:
            overall_sentiment = "neutral"
            sentiment_breakdown = {
                "interested": 0,
                "confused": 0,
                "frustrated": 0,
                "excited": 0
            }
        
        # Question themes
        question_texts = [q.text for q in questions]
        question_themes = question_agent.cluster_questions(question_texts)
        
        insights = {
            "pacing": {
                "recommendation": pacer_result["suggestion"],
                "confidence": 0.8,
                "trend": "stable"
            },
            "sentiment": {
                "overall": overall_sentiment,
                "breakdown": sentiment_breakdown
            },
            "question_themes": [{"theme": q["question"], "count": q["count"], "examples": [q["question"]]} for q in question_themes],
            "code_demand": {
                "level": "medium" if pacer_result.get("suggestion") == "Speed Up" else "low",
                "suggestion": "Consider showing code examples"
            },
            "updated_at": datetime.utcnow().isoformat() + "Z"
        }
        
        # Broadcast insights update
        await manager.broadcast(session_id, {
            "type": "insights_update",
            "payload": insights
        })
    except Exception as e:
        print(f"Error generating insights: {e}")


@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket, sessionId: str = None, role: str = "participant"):
    if not sessionId:
        await websocket.close(code=1008)
        return
        
    await manager.connect(websocket, sessionId)
    
    # Send connection acknowledgment
    await websocket.send_text(json.dumps({
        "type": "connection_ack",
        "payload": {"session_id": sessionId}
    }))
    
    # Send participant count update
    count = await room_repo.get_participant_count(sessionId)
    await manager.broadcast(sessionId, {
        "type": "participant_count",
        "payload": {"count": count}
    })

    try:
        while True:
            data = await websocket.receive_text()
            payload = json.loads(data)
            
            msg_type = payload.get("type")
            content = payload.get("payload") or payload.get("content") or payload
            
            if msg_type == "reaction" or (not msg_type and "type" in content):
                # Handle reaction
                reaction_type = content.get("type") if isinstance(content, dict) else content
                reaction = Reaction(
                    id=str(uuid.uuid4()),
                    room_id=sessionId,
                    type=ReactionType(reaction_type),
                    timestamp=datetime.utcnow().isoformat() + "Z",
                    user_id=content.get("user_id") if isinstance(content, dict) else None
                )
                await room_repo.store_reaction(reaction)
                
                # Broadcast to all clients (DO NOT broadcast individual reactions to avoid duplicates)
                # await manager.broadcast(sessionId, {
                #     "type": "reaction",
                #     "payload": reaction.model_dump()
                # })
                
                # Send updated stats
                stats = await room_repo.get_reaction_stats(sessionId, 60)
                await manager.broadcast(sessionId, {
                    "type": "stats_update",
                    "payload": stats.model_dump()
                })
                
                # Generate and broadcast alerts if thresholds are exceeded
                if stats.lost > 5:
                    alert = {
                        "id": f"alert-lost-{sessionId}-{int(datetime.utcnow().timestamp())}",
                        "type": "lost_room",
                        "message": f"{stats.lost} participants feeling lost",
                        "severity": "critical",
                        "created_at": datetime.utcnow().isoformat() + "Z",
                        "is_dismissed": False
                    }
                    await manager.broadcast(sessionId, {
                        "type": "alert",
                        "payload": alert
                    })
                
                if stats.speed_up > 10:
                    alert = {
                        "id": f"alert-speedup-{sessionId}-{int(datetime.utcnow().timestamp())}",
                        "type": "speed_up",
                        "message": "Many requests to speed up",
                        "severity": "warning",
                        "created_at": datetime.utcnow().isoformat() + "Z",
                        "is_dismissed": False
                    }
                    await manager.broadcast(sessionId, {
                        "type": "alert",
                        "payload": alert
                    })
                
                if stats.slow_down > 10:
                    alert = {
                        "id": f"alert-slowdown-{sessionId}-{int(datetime.utcnow().timestamp())}",
                        "type": "slow_down",
                        "message": "Many requests to slow down",
                        "severity": "warning",
                        "created_at": datetime.utcnow().isoformat() + "Z",
                        "is_dismissed": False
                    }
                    await manager.broadcast(sessionId, {
                        "type": "alert",
                        "payload": alert
                    })
                
                # Send ack to sender only
                await websocket.send_text(json.dumps({
                    "type": "reaction_ack",
                    "payload": {"success": True}
                }))
                
                # Update insights
                await generate_and_broadcast_insights(sessionId)
                
            elif msg_type == "question" or (isinstance(content, dict) and "text" in content):
                # Handle question
                question = Question(
                    id=str(uuid.uuid4()),
                    session_id=sessionId,
                    text=content.get("text") if isinstance(content, dict) else str(content),
                    created_at=datetime.utcnow().isoformat() + "Z",
                    user_id=content.get("user_id") if isinstance(content, dict) else None
                )
                
                # Analyze sentiment
                from app.agents.emotion import emotion_agent
                analysis = emotion_agent.analyze(question.text)
                question.sentiment = analysis["sentiment"].lower()
                
                await room_repo.store_question(question)
                
                # Broadcast to all clients
                await manager.broadcast(sessionId, {
                    "type": "question",
                    "payload": question.model_dump()
                })
                
                # Update insights immediately
                await generate_and_broadcast_insights(sessionId)
                
    except WebSocketDisconnect:
        manager.disconnect(websocket, sessionId)
        # Update participant count
        count = await room_repo.get_participant_count(sessionId)
        await manager.broadcast(sessionId, {
            "type": "participant_count",
            "payload": {"count": count}
        })
