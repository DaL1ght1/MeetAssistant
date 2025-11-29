from app.core.redis import get_redis

class PubSubRepository:
    def __init__(self):
        pass

    async def publish(self, channel: str, message: str):
        redis = await get_redis()
        await redis.publish(channel, message)

    async def subscribe(self, channel: str):
        redis = await get_redis()
        pubsub = redis.pubsub()
        await pubsub.subscribe(channel)
        return pubsub

pubsub_repo = PubSubRepository()
