# Meet Backend

## Prerequisites
- Python 3.10+
- Docker (for Redis)

## Setup
1. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   .\venv\Scripts\activate
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the App

### 1. Start Redis
If you haven't already:
```bash
docker compose up -d
```

### 2. Start the Backend Server
Run this in a terminal:
```bash
uvicorn app.main:app --reload
```
The server will start at `http://localhost:8000`.

### 3. Verify Functionality
Open a new terminal and run the test script:
```bash
python test_flow.py
```

## API Documentation
Once the server is running, you can view the interactive API docs at:
- Swagger UI: [http://localhost:8000/docs](http://localhost:8000/docs)
- ReDoc: [http://localhost:8000/redoc](http://localhost:8000/redoc)
