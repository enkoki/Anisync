from pydantic import BaseModel, EmailStr, ConfigDict
from datetime import datetime

class Token(BaseModel):
    access_token: str
    token_type:str

class TokenResponse(BaseModel):
    username: Optional[str]