from fastapi import Depends, FastAPI, Body, HTTPException
from sqlalchemy.exc import SQLAlchemyError
from fastapi.middleware.cors import CORSMiddleware
from src.auth.auth_handler import sign_jwt
from src.model import UserSchema, UserLoginSchema
from src.routes import post
from db import SessionLocal, User, Session
from .hash import pwd_context

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(post.router)

def Create_user(db: Session, user: User):
    try:
        # Hash the password and create the user
        hashed_password = pwd_context.hash(user.password)
        db_user = User(userid=user.userid, username=user.username, password=hashed_password, address=user.address, role=user.role)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user  # Return the created user
    except SQLAlchemyError as e:
        db.rollback()  # Rollback transaction if there is an error
        print(f"Database Error: {e}")
        raise HTTPException(status_code=500, detail="Database error, please try again later.")

def get_user_userid(db: Session, userid: int):
    return db.query(User).filter(User.userid == userid).first()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def check_user(db: Session, data: UserLoginSchema):
    # Query user from DB by userid
    db_user = db.query(User).filter(User.userid == data.userid).first()
    if db_user and pwd_context.verify(data.password, db_user.password):  # Verify the password
        return db_user
    return None

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your blog!"}

@app.post("/user/register", tags=["user"])
async def register_user(user: UserSchema, db: Session = Depends(get_db)):
    # Check if the user already exists in the database
    user_db = get_user_userid(db=db, userid=user.userid)
    if user_db:
        raise HTTPException(status_code=400, detail="User already exists")

    # Hash the password and create the user
    db_user = Create_user(db=db, user=user)

    # Return JWT token
    return sign_jwt(db_user.userid, db_user.username, db_user.role)


@app.post("/user/login", tags=["user"])
async def user_login(user: UserLoginSchema = Body(...), db: Session = Depends(get_db)):
    db_user = check_user(db, user)
    if db_user:
        return sign_jwt(db_user.userid, db_user.username, db_user.role)
    raise HTTPException(status_code=400, detail="Wrong login details!")
