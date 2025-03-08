from pydantic import BaseModel, Field
from typing import Optional

class PostSchema(BaseModel):
    id: int = Field(default=None)
    title: str = Field(...)
    content: str = Field(...)

    

class UserSchema(BaseModel):
    userid: int
    username: str
    password: str
    role: str
    address: Optional[str] = Field(...) # Make address optional
    

class UserLoginSchema(BaseModel):
    userid: int = Field(...)
    password: str = Field(...)
    