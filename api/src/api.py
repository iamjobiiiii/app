from fastapi import Depends, FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from src.auth.auth_handler import sign_jwt
from src.model import UserSchema, UserLoginSchema
from src.routes import post

users = []

origins = [
    "http://localhost",
    "http://localhost:4200",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(post.router)

def check_user(data: UserLoginSchema):
    for user in users:
        if user.email == data.email and user.password == data.password:
            return True
    return False

def get_user(data: UserLoginSchema):
    for user in users:
        if user.email == data.email and user.password == data.password:
            return user
    return {}

# Open API

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your blog!"}

@app.post("/user/signup", tags=["user"])
async def create_user(user: UserSchema = Body(...)):
    users.append(user) # replace with db call, making sure to hash the password first
    return sign_jwt(user.email, user.fullname)

@app.post("/user/signin", tags=["user"])
async def user_login(user: UserLoginSchema = Body(...)):
    if check_user(user):
        u = get_user(user)
        return sign_jwt(u.email, u.fullname)
    return {
        "error": "Wrong login details!"
    }
