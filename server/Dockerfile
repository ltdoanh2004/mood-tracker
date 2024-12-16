# Dockerfile

# Start from an official Python image
FROM python:3.10-slim

# ARG ENVIRONMENT=production

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file and install the dependencies
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire application source code into the container
COPY . .

# Install uvicorn (or gunicorn if you prefer)
RUN pip install uvicorn gunicorn

# Provide the command to run FastAPI using Uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]

# CMD ["sh", "-c", "if [ $ENVIRONMENT = 'development' ]; then exec uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload; else exec gunicorn -w 4 -k uvicorn.workers.UvicornWorker app.main:app --host 0.0.0.0 --port 8000; fi"]

# Expose port 8000 to access the application
EXPOSE 8000
