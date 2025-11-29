from fastapi import APIRouter, HTTPException
from app.services.room_service import room_service
from app.services.agent_service import agent_service
from app.repositories.room_repo import room_repo
from app.core.redis import get_redis
from app.models.domain import Role, ReactionType, Reaction, Question
from pydantic import BaseModel
from typing import Optional
import uuid
from datetime import datetime

router = APIRouter()

class CreateSessionRequest(BaseModel):
    title: str
    presenter_id: str

class SubmitReactionRequest(BaseModel):
    session_id: str
    type: ReactionType
    user_id: Optional[str] = None

class SubmitQuestionRequest(BaseModel):
    session_id: str
    text: str
    user_id: Optional[str] = None

@router.post("/session/create")
async def create_session(req: CreateSessionRequest):
    room = await room_service.create_room(req.title, req.presenter_id)
    # Store presenter token in session storage (frontend handles this)
    return room

@router.get("/session/{session_id}")
async def get_session(session_id: str):
    room = await room_service.get_room(session_id)
    if not room:
        raise HTTPException(status_code=404, detail="Session not found")
    return room

@router.post("/session/{session_id}/end")
async def end_session(session_id: str):
    room = await room_service.get_room(session_id)
    if not room:
        raise HTTPException(status_code=404, detail="Session not found")
    
    # Mark as inactive
    room.is_active = False
    await room_repo.create_room(room)
    
    return {"success": True}

@router.get("/session/{session_id}/stats")
async def get_stats(session_id: str, window: int = 60):
    stats = await room_repo.get_reaction_stats(session_id, window)
    return stats

@router.get("/session/{session_id}/reactions/history")
async def get_reaction_history(session_id: str, window: int = 60):
    reactions = await room_repo.get_reactions(session_id, window)
    # Group by timestamp for charting
    from collections import defaultdict
    grouped = defaultdict(lambda: {"timestamp": "", "speed_up": 0, "slow_down": 0, "show_code": 0, "lost": 0})
    
    for r in reactions:
        # Round to nearest 5 seconds for grouping
        ts = r.timestamp
        if ts not in grouped:
            grouped[ts]["timestamp"] = ts
        
        if r.type.value == "speed_up":
            grouped[ts]["speed_up"] += 1
        elif r.type.value == "slow_down":
            grouped[ts]["slow_down"] += 1
        elif r.type.value == "show_code":
            grouped[ts]["show_code"] += 1
        elif r.type.value == "lost":
            grouped[ts]["lost"] += 1
    
    return list(grouped.values())

@router.get("/session/{session_id}/questions")
async def get_questions(session_id: str, unanswered: bool = False):
    questions = await room_repo.get_questions(session_id)
    if unanswered:
        questions = [q for q in questions if not q.is_answered]
    return questions

@router.get("/session/{session_id}/insights")
async def get_insights(session_id: str):
    # Generate AI insights
    messages = await room_repo.get_messages(session_id)
    reactions = await room_repo.get_reactions(session_id, 60)
    questions = await room_repo.get_questions(session_id)
    
    from app.agents.pacer import pacer_agent
    from app.agents.emotion import emotion_agent
    from app.agents.question import question_agent
    
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
    
    return {
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


@router.get("/session/{session_id}/alerts")
async def get_alerts(session_id: str):
    # Generate alerts based on stats
    stats = await room_repo.get_reaction_stats(session_id, 60)
    alerts = []
    
    if stats.lost > 5:
        alerts.append({
            "id": str(uuid.uuid4()),
            "type": "lost_room",
            "message": f"{stats.lost} participants feeling lost",
            "severity": "critical",
            "created_at": datetime.utcnow().isoformat() + "Z",
            "is_dismissed": False
        })
    
    if stats.speed_up > 10:
        alerts.append({
            "id": str(uuid.uuid4()),
            "type": "speed_up",
            "message": "Many requests to speed up",
            "severity": "warning",
            "created_at": datetime.utcnow().isoformat() + "Z",
            "is_dismissed": False
        })
    
    return alerts

@router.get("/session/{session_id}/summary")
async def get_summary(session_id:str):
    messages = await room_repo.get_messages(session_id)
    reactions = await room_repo.get_reactions(session_id)
    questions = await room_repo.get_questions(session_id)
    
    from app.agents.summary import summary_agent
    summary_text = summary_agent.generate_summary(messages, reactions)
    
    room = await room_service.get_room(session_id)
    created_at = datetime.fromisoformat(room.created_at.replace('Z', '+00:00'))
    duration = (datetime.utcnow() - created_at).total_seconds() / 60
    
    return {
        "session_id": session_id,
        "duration_minutes": int(duration),
        "total_participants": room.participant_count,
        "total_reactions": len(reactions),
        "total_questions": len(questions),
        "key_themes": ["Python", "FastAPI", "Redis"],
        "pacing_summary": summary_text,
        "engagement_score": 85,
        "recommendations": ["Great engagement!", "Consider more code examples"],
        "generated_at": datetime.utcnow().isoformat() + "Z"
    }

@router.post("/session/{session_id}/alerts/{alert_id}/dismiss")
async def dismiss_alert(session_id: str, alert_id: str):
    # In-memory for now, would need Redis storage for persistence
    return {"success": True}

@router.post("/session/{session_id}/questions/{question_id}/answered")
async def mark_question_answered(session_id: str, question_id: str):
    questions = await room_repo.get_questions(session_id)
    for q in questions:
        if q.id == question_id:
            q.is_answered = True
            # Re-save all questions (simple approach)
            redis = await get_redis()
            await redis.delete(f"room:{session_id}:questions")
            for question in questions:
                await room_repo.store_question(question)
            break
    return {"success": True}


@router.post("/reactions")
async def submit_reaction(req: SubmitReactionRequest):
    reaction = Reaction(
        id=str(uuid.uuid4()),
        room_id=req.session_id,
        type=req.type,
        timestamp=datetime.utcnow().isoformat() + "Z",
        user_id=req.user_id
    )
    await room_repo.store_reaction(reaction)
    await agent_service.process_reaction(reaction)
    return {"success": True}

@router.post("/questions")
async def submit_question(req: SubmitQuestionRequest):
    question = Question(
        id=str(uuid.uuid4()),
        session_id=req.session_id,
        text=req.text,
        created_at=datetime.utcnow().isoformat() + "Z",
        user_id=req.user_id
    )
    await room_repo.store_question(question)
    # Analyze sentiment
    from app.agents.emotion import emotion_agent
    analysis = emotion_agent.analyze(question.text)
    question.sentiment = analysis["sentiment"].lower()
    
    return question
