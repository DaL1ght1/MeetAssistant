from typing import List
from app.models.domain import Message, Reaction

class SummaryAgent:
    def generate_summary(self, messages: List[Message], reactions: List[Reaction]) -> str:
        # Placeholder for LLM summary
        # In a real scenario, we would send this data to an LLM API
        
        total_messages = len(messages)
        total_reactions = len(reactions)
        
        if total_messages == 0:
            return "No messages were sent during the session."
            
        summary = f"Session Summary:\n"
        summary += f"Total Messages: {total_messages}\n"
        summary += f"Total Reactions: {total_reactions}\n\n"
        
        summary += "Key Topics Discussed (Extracted from messages):\n"
        # Simple extraction of long words as "topics" for now
        words = []
        for m in messages:
            words.extend([w for w in m.content.split() if len(w) > 5])
        
        from collections import Counter
        common_words = Counter(words).most_common(5)
        for word, count in common_words:
            summary += f"- {word} ({count})\n"
            
        return summary

summary_agent = SummaryAgent()
