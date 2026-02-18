from pydantic import BaseModel, EmailStr, ConfigDict
from datetime import datetime
from uuid import UUID

class UserCreate(BaseModel):
    email: EmailStr
    username: str
    password: str

class UserLogin(BaseModel):
    username: str
    password: str

class UserOut(BaseModel):
    uuid: UUID
    email: EmailStr
    username: str
    role_id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class UserResponse(BaseModel):
    id: int
    user: UserOut
    created_at: datetime
    updated_at: datetime
