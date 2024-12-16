from fastapi import FastAPI, Request
from app.api.chatbot import router as chatbot_router
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from app.logger import logger

app = FastAPI()

templates = Jinja2Templates(directory="app/templates")
app.mount("/static", StaticFiles(directory="app/static"), name="static")

# Register for root
app.include_router(chatbot_router, prefix="/chatbot", tags=["chatbot"])

@app.get("/chatbot/openai", response_class=HTMLResponse)
async def chat_page(request: Request):
    return templates.TemplateResponse("chatbot.html", {"request": request})

# Basic root
@app.get("/home")
def read_root():
    logger.info("Root endpoint was accessed")
    return {"message": "Welcome to the FastAPI Chatbot Backend, Mood Tracking App!"}
