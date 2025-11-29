import json
from app.core.redis import get_redis
from app.models.domain import Room, Message, Reaction, Question, ReactionStats
from typing import List, Optional
from datetime import datetime, timedelta

class RoomRepository:
    def __init__(self):
        pass

    async def create_room(self, room: Room):
        redis = await get_redis()
        await redis.set(f"room:{room.id}", room.model_dump_json())
        # Set expiry for room (e.g., 24 hours) to avoid stale data
        await redis.expire(f"room:{room.id}", 86400)

    async def get_room(self, room_id: str) -> Optional[Room]:
        redis = await get_redis()
        data = await redis.get(f"room:{room_id}")
        if data:
            return Room.model_validate_json(data)
        return None

    async def add_participant(self, room_id: str, participant_id: str):
        redis = await get_redis()
        await redis.sadd(f"room:{room_id}:participants", participant_id)
        await redis.expire(f"room:{room_id}:participants", 86400)

    async def get_participant_count(self, room_id: str) -> int:
        redis = await get_redis()
        count = await redis.scard(f"room:{room_id}:participants")
        return count

    async def store_message(self, message: Message):
        redis = await get_redis()
        await redis.rpush(f"room:{message.room_id}:messages", message.model_dump_json())
        await redis.expire(f"room:{message.room_id}:messages", 86400)

    async def get_messages(self, room_id: str) -> List[Message]:
        redis = await get_redis()
        data = await redis.lrange(f"room:{room_id}:messages", 0, -1)
        return [Message.model_validate_json(m) for m in data]

    async def store_reaction(self, reaction: Reaction):
        redis = await get_redis()
        await redis.rpush(f"room:{reaction.room_id}:reactions", reaction.model_dump_json())
        await redis.expire(f"room:{reaction.room_id}:reactions", 86400)

    async def get_reactions(self, room_id: str, window_seconds: int = None) -> List[Reaction]:
        redis = await get_redis()
        data = await redis.lrange(f"room:{room_id}:reactions", 0, -1)
        if not data:
            return []
        
        reactions = []
        for r_data in data:
            try:
                reactions.append(Reaction.model_validate_json(r_data))
            except Exception:
                pass  # Skip invalid reactions
        
        if window_seconds:
            from datetime import timezone
            cutoff = datetime.now(timezone.utc) - timedelta(seconds=window_seconds)
            filtered = []
            for r in reactions:
                try:
                    # Parse timestamp and make it timezone-aware
                    r_time = datetime.fromisoformat(r.timestamp.replace('Z', '+00:00'))
                    if r_time > cutoff:
                        filtered.append(r)
                except Exception as e:
                    # Include all reactions if timestamp parsing fails
                    filtered.append(r)
            return filtered
        
        return reactions


    async def get_reaction_stats(self, room_id: str, window_seconds: int = 60) -> ReactionStats:
        reactions = await self.get_reactions(room_id, window_seconds)
        stats = ReactionStats(window_seconds=window_seconds)
        
        for r in reactions:
            try:
                type_val = r.type.value if hasattr(r.type, 'value') else str(r.type)
                if type_val == "speed_up":
                    stats.speed_up += 1
                elif type_val == "slow_down":
                    stats.slow_down += 1
                elif type_val == "show_code":
                    stats.show_code += 1
                elif type_val == "lost":
                    stats.lost += 1
                stats.total += 1
            except Exception:
                pass  # Skip reactions with issues
        
        return stats


    async def store_question(self, question: Question):
        redis = await get_redis()
        await redis.rpush(f"room:{question.session_id}:questions", question.model_dump_json())
        await redis.expire(f"room:{question.session_id}:questions", 86400)

    async def get_questions(self, room_id: str) -> List[Question]:
        redis = await get_redis()
        data = await redis.lrange(f"room:{room_id}:questions", 0, -1)
        return [Question.model_validate_json(q) for q in data]

    async def close_room(self, room_id: str):
        redis = await get_redis()
        keys = await redis.keys(f"room:{room_id}*")
        if keys:
            await redis.delete(*keys)

room_repo = RoomRepository()

