from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from models.role import Role
from models.user import Users

def update_role(new_role_id: int, id: int, current_user_id: int, db: Session):
    if new_role_id == 0:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Only one superadmin can exists")    

    user = db.query(Users).filter(Users.id == id).first()
    current_user = db.query(Users).filter(Users.id == current_user_id).first()

    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with ID:{id} not found")
    if not current_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Current user not be found")
    
    if current_user.role_id !=0:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="You cannot update roles.")
    
    new_role = db.query(Role).filter(Role.id == new_role_id).first()
    if not new_role:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Role not be found")

    user.role_id = new_role_id
    db.commit()
    db.refresh(user)
    return {"message":"user has been updated", "user":user}


def create_initial_roles(db: Session):
    roles = db.query(Role).first()
    if roles:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="The table isn't empty.")
    
    try:
        superadmin = Role(
            id = 0,
            name = "superadmin",
            description = "High ranking admin. Only one per session"
        )
        admin = Role(
            id = 1,
            name = "admin",
            description = "Higher ranked than users with admin previleges"
        )
        user = Role(
            id = 2,
            name = "user",
            description = "Normal users"
        )
        db.add_all([superadmin, admin, user])
        db.commit()
        return [superadmin, admin, user]
        
    except Exception as e:
        db.rollback()
        print("Role initialization error:", e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Failed to initialize roles")




