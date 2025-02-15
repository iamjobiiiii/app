from fastapi import Depends, FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from src.auth.auth_bearer import JWTBearer
from src.auth.auth_handler import sign_jwt
from src.model import PostSchema, UserSchema, UserLoginSchema

posts = [
    {
        "id": 1,
        "title": "Pancake",
        "content": "Lorem Ipsum ..."
    }
]

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

# Auth API

@app.get("/posts", dependencies=[Depends(JWTBearer())], tags=["posts"])
async def get_posts() -> dict:
    return { "data": posts }

@app.get("/posts/{id}", dependencies=[Depends(JWTBearer())], tags=["posts"])
async def get_single_post(id: int) -> dict:
    if id > len(posts):
        return {
            "error": "No such post with the supplied ID."
        }
    for post in posts:
        if post["id"] == id:
            return {
                "data": post
            }
        
@app.post("/posts", dependencies=[Depends(JWTBearer())], tags=["posts"])
async def add_post(post: PostSchema) -> dict:
    post.id = len(posts) + 1
    posts.append(post.dict())
    return {
        "data": "post added."
    }