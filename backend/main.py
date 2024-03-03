from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
from starlette.middleware.cors import CORSMiddleware
from domain.workspace.currency import currency_router

from database import get_db

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(currency_router.router)


@app.get("/")
def index(db: Session = Depends(get_db)):
    return {"Hello": "World"}
