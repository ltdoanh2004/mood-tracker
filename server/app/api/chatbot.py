from fastapi import APIRouter, HTTPException
from app.models.chatbot_model import ChatRequest, ChatResponse
from app.services.chatbot_service import get_openai_response
from uuid import uuid4
from app.services.session_service import get_session_context, save_session_context

from app.logger import logger

router = APIRouter()

@router.post("/openai", response_model=ChatResponse)
async def openai_embedding(request: ChatRequest, session_id: str = None):
    if not session_id:
        session_id = str(uuid4())
        logger.info(f"Generated new session_id: {session_id}")
    
    session_context = await get_session_context(session_id)

    default_parameters = {
        'temperature': 0.7,
        'max_length': 1000
    }
    parameters = request.parameters if request.parameters else default_parameters

    logger.info(f"Received OpenAI request with input: {request.inputs}, session_context: {session_context}")

    try:
        response_data = await get_openai_response(request.inputs, parameters, session_context)
    except Exception as e:
        logger.error(f"Error while calling OpenAI API: {e}")
        raise HTTPException(status_code=500, detail="Failed to process the OpenAI request.")

    await save_session_context(session_id, response_data.get("content", ""))
    logger.info(f"Session ID: {session_id} - Saved new context to Redis")
    
    return ChatResponse(
        session_id=session_id,
        response=response_data.get("content", ""),
        context=session_context,
        reply=response_data.get("content", "")
    )