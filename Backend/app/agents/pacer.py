from typing import List
from app.models.domain import Message, Reaction
import time
from datetime import datetime, timedelta

class PacerAgent:
    def analyze(self, messages: List[Message], reactions: List[Reaction], window_seconds: int = 60) -> dict:
        now = datetime.utcnow()
        cutoff = now - timedelta(seconds=window_seconds)
        
        # Filter recent messages
        recent_messages = [m for m in messages if m.timestamp and (now.timestamp() - m.timestamp) < window_seconds]
        
        # Filter recent reactions
        recent_reactions = []
        for r in reactions:
            try:
                r_time = datetime.fromisoformat(r.timestamp.replace('Z', '+00:00'))
                if r_time > cutoff:
                    recent_reactions.append(r)
            except:
                pass

        msg_rate = len(recent_messages) / window_seconds if window_seconds > 0 else 0
        reaction_rate = len(recent_reactions) / window_seconds if window_seconds > 0 else 0
        
        # Simple heuristic thresholds
        suggestion = "Optimal"
        if msg_rate > 0.5 or reaction_rate > 1.0:
            suggestion = "Slow Down"
        elif msg_rate < 0.05 and reaction_rate < 0.1:
            suggestion = "Speed Up"

        return {
            "message_rate": msg_rate,
            "reaction_rate": reaction_rate,
            "suggestion": suggestion
        }

pacer_agent = PacerAgent()

