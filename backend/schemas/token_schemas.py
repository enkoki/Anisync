from pydantic import BaseModel, EmailStr, ConfigDict
from typing import Optional
from datetime import datetime

class Token(BaseModel):
    access_token: str
    token_type:str

class TokenResponse(BaseModel):
    username: str
    uuid: str
    role_id: int