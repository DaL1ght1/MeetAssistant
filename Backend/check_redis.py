import asyncio
import redis.asyncio as redis
import os

async def check_redis():
    url = os.getenv("REDIS_URL", "redis://localhost:6379/0")
    print(f"Connecting to {url}...")
    try:
        r = await redis.from_url(url, encoding="utf-8", decode_responses=True)
        await r.ping()
        print("Redis is UP!")
        await r.close()
    except Exception as e:
        print(f"Redis connection failed: {e}")

if __name__ == "__main__":
    asyncio.run(check_redis())
