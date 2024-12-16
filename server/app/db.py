import redis.asyncio as redis
import os
from dotenv import load_dotenv

load_dotenv()

REDIS_HOST = os.getenv('REDIS_HOST', 'localhost')  
REDIS_PORT = os.getenv('REDIS_PORT', 6379)  
REDIS_DB = os.getenv('REDIS_DB', 0)  

redis_client = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, db=REDIS_DB, decode_responses=True)
