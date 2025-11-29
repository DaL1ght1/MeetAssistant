from textblob import TextBlob

class EmotionAgent:
    def analyze(self, text: str) -> dict:
        blob = TextBlob(text)
        polarity = blob.sentiment.polarity
        
        sentiment = "Neutral"
        if polarity > 0.1:
            sentiment = "Positive"
        elif polarity < -0.1:
            sentiment = "Negative"
            
        return {
            "score": polarity,
            "sentiment": sentiment
        }

emotion_agent = EmotionAgent()
