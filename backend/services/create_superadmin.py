from fastapi import status, HTTPException
from sqlalchemy.orm import Session
from models.user import Users
from models.role import Role
from services.auth import hash
from config import PW
from datetime import datetime


def create_super_admin(db: Session):
    user = db.query(Users).filter(Users.email == "anisynced@gmail.com").first()

    if user:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="A superadmin already exists")
    
    if not db.query(Role).filter(Role.id == 0).first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Superadmin role hasn't been created")    
    
    hashed_password = hash(PW)

    super_admin = Users(
        username = "Anisync",
        email = "anisynced@gmail.com",
        password = hashed_password,
        role_id = 0,
        created_at=datetime.now()
    )

    db.add(super_admin)
    db.commit()
    db.refresh(super_admin)
    return {"message": "Superadmin created successfully", "admin": super_admin}