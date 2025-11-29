from fastapi import FastAPI
from app.controllers import http_controller, ws_controller
from app.core.redis import redis_client

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Meet Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React/Next.js default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(http_controller.router, prefix="/api")
app.include_router(ws_controller.router)

@app.on_event("startup")
async def startup_event():
    await redis_client.connect()

@app.on_event("shutdown")
async def shutdown_event():
    await redis_client.close()

@app.get("/")
async def root():
    return {"message": "Meet Backend is running"}
