from fastapi import FastAPI
from db import engine, SessionLocal, Base, get_db
from sqlalchemy.orm import Session
from config import DATABASE_URL
import models 

Base.metadata.create_all(bind=engine)

app = FastAPI()

@app.get("/")
def root():
    return {"message" : "Hello World"}