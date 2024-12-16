
import json
from app.db import redis_client  
from app.logger import logger

async def get_session_context(session_id: str) -> str:
    context = await redis_client.get(f"session:{session_id}")
    logger.info(f"Retrieved context for session {session_id}: {context}") 
    return context or ""

async def save_session_context(session_id: str, context: str):
    await redis_client.set(f"session:{session_id}", context)
    logger.info(f"Saved context for session {session_id}: {context}") 
