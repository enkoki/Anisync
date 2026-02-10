from fastapi import FastAPI
from db import engine, SessionLocal, Base, get_db
from sqlalchemy.orm import Session
from routers import api_router
from config import DATABASE_URL
import models 

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(api_router)
