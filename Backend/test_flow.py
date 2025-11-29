import asyncio
import aiohttp
import websockets
import json
import sys

BASE_URL = "http://localhost:8000"
WS_URL = "ws://localhost:8000"

async def test_flow():
    async with aiohttp.ClientSession() as session:
        # 1. Create Room
        print("Creating room...")
        async with session.post(f"{BASE_URL}/api/room") as resp:
            if resp.status != 200:
                print(f"Failed to create room: {await resp.text()}")
                return
            data = await resp.json()
            room_id = data["room_id"]
            presenter_token = data["presenter_token"]
            print(f"Room created: {room_id}")

        # 2. Join Room
        print("Joining room...")
        async with session.post(f"{BASE_URL}/api/room/{room_id}/join") as resp:
            if resp.status != 200:
                print(f"Failed to join room: {await resp.text()}")
                return
            data = await resp.json()
            client_id = data["session_token"]
            print(f"Joined as: {client_id}")

        # 3. Connect WebSocket
        print("Connecting WebSocket...")
        async with websockets.connect(f"{WS_URL}/ws/{room_id}/{client_id}") as ws:
            # 4. Send Message
            print("Sending message...")
            await ws.send(json.dumps({
                "type": "message",
                "content": "Hello world! Is this working? I am happy!"
            }))
            
            # 5. Send Reaction
            print("Sending reaction...")
            await ws.send(json.dumps({
                "type": "reaction",
                "content": "like"
            }))

            # Wait for responses
            print("Waiting for responses...")
            for _ in range(3): # Expecting message, reaction, and maybe agent update
                try:
                    msg = await asyncio.wait_for(ws.recv(), timeout=2.0)
                    print(f"Received: {msg}")
                except asyncio.TimeoutError:
                    print("Timeout waiting for message")
                    break

        # 6. End Room
        print("Ending room...")
        async with session.post(f"{BASE_URL}/api/room/{room_id}/end?token={presenter_token}") as resp:
            if resp.status != 200:
                print(f"Failed to end room: {await resp.text()}")
                return
            data = await resp.json()
            print(f"Room ended. Summary: {data['summary']}")

async def wait_for_server():
    print("Waiting for server to start...")
    for _ in range(10):
        try:
            async with aiohttp.ClientSession() as session:
                async with session.get(f"{BASE_URL}/") as resp:
                    if resp.status == 200:
                        print("Server is ready!")
                        return True
        except Exception:
            await asyncio.sleep(1)
            print(".", end="", flush=True)
    print("\nServer failed to start.")
    return False

if __name__ == "__main__":
    # Windows specific event loop policy to avoid RuntimeError
    if sys.platform == 'win32':
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
        
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    
    if loop.run_until_complete(wait_for_server()):
        loop.run_until_complete(test_flow())
    loop.close()
