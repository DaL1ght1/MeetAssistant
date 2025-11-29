import asyncio
import json
from app.repositories.room_repo import room_repo
from app.repositories.pubsub_repo import pubsub_repo
from app.agents.pacer import pacer_agent
from app.agents.emotion import emotion_agent
from app.agents.question import question_agent
from app.agents.summary import summary_agent
from app.models.domain import Message, Reaction

class AgentService:
    async def process_message(self, message: Message):
        # 1. Analyze sentiment
        analysis = emotion_agent.analyze(message.content)
        message.sentiment_score = analysis["score"]
        
        # 2. Store message
        await room_repo.store_message(message)
        
        # 3. Publish to room (so everyone sees it)
        await pubsub_repo.publish(f"room:{message.room_id}", json.dumps({
            "type": "new_message",
            "data": message.model_dump()
        }))

    async def process_reaction(self, reaction: Reaction):
        # Already stored by controller, just publish
        await pubsub_repo.publish(f"room:{reaction.room_id}", json.dumps({
            "type": "new_reaction",
            "data": reaction.model_dump()
        }))

    async def run_periodic_analysis(self, room_id: str):
        # This would typically be a background task
        messages = await room_repo.get_messages(room_id)
        reactions = await room_repo.get_reactions(room_id, 60)
        
        # Pacer
        pacer_result = pacer_agent.analyze(messages, reactions)
        await pubsub_repo.publish(f"room:{room_id}:presenter", json.dumps({
            "type": "agent_pacer",
            "data": pacer_result
        }))
        
        # Questions (filter messages that look like questions)
        questions_data = await room_repo.get_questions(room_id)
        question_texts = [q.text for q in questions_data]
        question_result = question_agent.cluster_questions(question_texts)
        await pubsub_repo.publish(f"room:{room_id}:presenter", json.dumps({
            "type": "agent_questions",
            "data": question_result
        }))

    async def generate_summary(self, room_id: str) -> str:
        messages = await room_repo.get_messages(room_id)
        reactions = await room_repo.get_reactions(room_id)
        return summary_agent.generate_summary(messages, reactions)

agent_service = AgentService()

