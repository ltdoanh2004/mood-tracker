# Pydantic
from typing import Optional
from pydantic import BaseModel

class ChatRequest(BaseModel):
    inputs: str
    parameters: Optional[dict] = None 

class ChatResponse(BaseModel):
    session_id: str
    response: str
    context: Optional[str] = None  
    reply: Optional[str] = None    
