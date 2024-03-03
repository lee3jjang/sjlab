import datetime

from sqlalchemy import Column, Integer, Text, DateTime

from database import Base


class Workspace(Base):
    __tablename__ = "workspace"

    id = Column(Integer, primary_key=True)
    description = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.now, nullable=False)
