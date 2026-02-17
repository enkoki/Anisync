from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from db import get_db
from schemas.user_schemas import UserCreate, UserLogin, UserOut
from services.auth import register_user, login_user, get_current_user
from services.roles_logic import create_initial_roles
from services.create_superadmin import create_super_admin

public_router = APIRouter(prefix = "/auth", tags=["Users"])
router = APIRouter(tags=["Users"], dependencies=[Depends(get_current_user)])

@public_router.post("/register", response_model=UserOut)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    return register_user(user, db)

@public_router.post("/login")
def login_for_token(user_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    return login_user(user_data, db)

@public_router.get("/create-roles")
def initialize_roles(db: Session = Depends(get_db)):
    return create_initial_roles(db)

@public_router.get("/create-superadmin")
def initialize_superadmin(db: Session = Depends(get_db)):
    return create_super_admin(db)

@router.get("/users", response_model=UserOut)
def get_user(current_user: UserOut = Depends(get_current_user)):
    return current_user
