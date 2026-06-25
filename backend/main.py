from fastapi import FastAPI
from .database import engine
from .models import User, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")

def home():
    return {"message": "Dental AI System Running"}