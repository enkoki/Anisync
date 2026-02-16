from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from db import engine, Base
from routers import api_router
import models 

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "https://anisynced.netlify.app",  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(api_router)

@app.get("/")
def root():
    return {"status": "ok"}
