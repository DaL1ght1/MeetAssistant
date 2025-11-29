import asyncio
import redis.asyncio as redis

async def debug_redis():
    r = await redis.from_url("redis://localhost:6379/0", encoding="utf-8", decode_responses=True)
    
    # Check all keys
    keys = await r.keys("room:dad45ce0*")
    print(f"Found keys: {keys}")
    
    # Check reactions
    reactions = await r.lrange("room:dad45ce0:reactions", 0, -1)
    print(f"\nReactions ({len(reactions)}):")
    for reaction in reactions:
        print(f"  {reaction}")
    
    await r.aclose()

if __name__ == "__main__":
    asyncio.run(debug_redis())
