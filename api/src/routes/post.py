from fastapi import APIRouter, Depends, HTTPException
from src.model import PostSchema
from src.auth.auth_bearer import JWTBearer

router = APIRouter(
    prefix="/posts",
    tags=["posts"],
    dependencies=[Depends(JWTBearer())],
    responses={404: {"description": "Not found"}},
)

posts = [
    {
        "id": 1,
        "title": "Pancake",
        "content": "Lorem Ipsum ..."
    }
]

@router.get("/")
async def get_posts() -> dict:
    return { "data": posts }

@router.get("/{id}")
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
        
@router.post("/")
async def add_post(post: PostSchema) -> dict:
    post.id = len(posts) + 1
    posts.append(post.dict())
    return {
        "data": "post added."
    }