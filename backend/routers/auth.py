from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from db import get_db
from schemas.user_schemas import UserCreate, UserLogin, UserOut
from services.auth import register_user, login_user

public_router = APIRouter(prefix = "/auth", tags=["Users"])
router = APIRouter(tags=["Users"])

@public_router.post("/register", response_model=UserOut)
def create_user(user: UserCreate, db: Sesion = Depends(get_db)):
    return register_user(user, db)

@public_router.post("/login")
def login_for_token(user: UserLogin, db: Session = Depends(get_db)):
    return login_user(user, db)