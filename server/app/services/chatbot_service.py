import requests
from app.models.chatbot_model import ChatResponse
import os
from dotenv import load_dotenv
from app.logger import logger
import openai

# Load variables from .env
load_dotenv()
print("OPEN-API-KEY:",os.getenv("OPENAI_API_KEY"))
openai.api_key = os.getenv("OPENAI_API_KEY")

async def get_openai_response(inputs: str, parameters: dict, context: str) -> dict:
    # Chuẩn bị messages cho mô hình ChatGPT
    messages = []
    if context:
        messages.append({"role": "system", "content": context})
    messages.append({"role": "user", "content": inputs})

    try:
        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",  
            messages=messages,
            temperature=parameters.get("temperature", 0.7),
            max_tokens=parameters.get("max_length", 200),
        )
        logger.info(f"OpenAI response: {response}")
        
        content = response.choices[0].message.content
        
        return {
            "content": content,  
            "context": context, 
        }
    except Exception as e:
        logger.error(f"Error while calling OpenAI API: {e}")
        raise e