class Token(BaseModel):
    access_token: str
    token_type:str

class TokenResponse(BaseModel):
    username: Optional[str]