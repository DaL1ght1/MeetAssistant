from pydantic import BaseModel
from typing import List, Optional
from enum import Enum
import time

class Role(str, Enum):
    PRESENTER = "presenter"
    PARTICIPANT = "participant"

class ReactionType(str, Enum):
    SPEED_UP = "speed_up"
    SLOW_DOWN = "slow_down"
    SHOW_CODE = "show_code"
    LOST = "lost"

class Room(BaseModel):
    id: str
    title: str
    presenter_id: str
    presenter_token: str
    created_at: str
    is_active: bool = True
    participant_count: int = 0

class Participant(BaseModel):
    id: str
    room_id: str
    role: Role

class Message(BaseModel):
    id: str
    room_id: str
    content: str
    sender_id: str
    timestamp: float
    sentiment_score: float = 0.0

class Reaction(BaseModel):
    id: str
    room_id: str
    type: ReactionType
    timestamp: str
    user_id: Optional[str] = None

class Question(BaseModel):
    id: str
    session_id: str
    text: str
    created_at: str
    user_id: Optional[str] = None
    sentiment: Optional[str] = None
    theme: Optional[str] = None
    is_answered: bool = False

class ReactionStats(BaseModel):
    speed_up: int = 0
    slow_down: int = 0
    show_code: int = 0
    lost: int = 0
    total: int = 0
    window_seconds: int = 60

class AgentFeedback(BaseModel):
    type: str  # "pacer", "emotion", "question", "summary"
    content: dict
    timestamp: float

