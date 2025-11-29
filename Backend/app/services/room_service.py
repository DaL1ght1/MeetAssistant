import uuid
import time
from datetime import datetime
from app.models.domain import Room, Participant, Role
from app.repositories.room_repo import room_repo

class RoomService:
    async def create_room(self, title: str, presenter_id: str) -> Room:
        room_id = str(uuid.uuid4())[:8]
        presenter_token = str(uuid.uuid4())
        room = Room(
            id=room_id,
            title=title,
            presenter_id=presenter_id,
            presenter_token=presenter_token,
            created_at=datetime.utcnow().isoformat() + "Z",
            participant_count=0
        )
        await room_repo.create_room(room)
        return room

    async def get_room(self, room_id: str) -> Room:
        return await room_repo.get_room(room_id)

    async def join_room(self, room_id: str, role: Role) -> Participant:
        room = await room_repo.get_room(room_id)
        if not room:
            raise ValueError("Room not found")
        
        participant_id = str(uuid.uuid4())
        await room_repo.add_participant(room_id, participant_id)
        
        # Update participant count
        count = await room_repo.get_participant_count(room_id)
        room.participant_count = count
        await room_repo.create_room(room)  # Update room
        
        return Participant(id=participant_id, room_id=room_id, role=role)

    async def validate_presenter(self, room_id: str, token: str) -> bool:
        room = await room_repo.get_room(room_id)
        if room and room.presenter_token == token:
            return True
        return False

    async def end_room(self, room_id: str, token: str):
        if await self.validate_presenter(room_id, token):
            room = await room_repo.get_room(room_id)
            if room:
                room.is_active = False
                await room_repo.create_room(room)
            return True
        return False

room_service = RoomService()

