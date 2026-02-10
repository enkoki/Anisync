from passlib.context import CryptContext
from models import Users
hasher = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash(password: str):
    return hasher.hash(password)

def register_user(user, db):
    if db.query(Users).filter(Users.username == user.username).first():
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE, detail="Username already taken")
    
    if db.query(Users).filter(Users.email == user.email).first():
        raise HTTPException(status_code=status.HTTP_406_NOT_ACCEPTABLE, detail="Email already exists")

    user.password = hash(user.password)
    new_user = Users(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def login():
    pass

def create_access_token():
    pass

def verify_token():
    pass


def get_current_user():
    pass
    