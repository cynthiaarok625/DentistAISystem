from fastapi import FastAPI

app = FastAPI()

@app.get("/")

def home():
    return {"message": "Dental AI System Running"}