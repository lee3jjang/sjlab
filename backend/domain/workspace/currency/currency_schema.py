import datetime

from pydantic import BaseModel


class Currency(BaseModel):
    id: int
    description: str
    ticker: str
    created_at: datetime.datetime


class CurrencyUpdate(BaseModel):
    description: str
    ticker: str
