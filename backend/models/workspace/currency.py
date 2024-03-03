import datetime

from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    DateTime,
    ForeignKey,
    # UniqueConstraint,
)
from sqlalchemy.orm import relationship

from database import Base


class Currency(Base):
    __tablename__ = "currency"
    # __table_args__ = (
    #     UniqueConstraint(
    #         "workspace_id",
    #         "ticker",
    #         name="uq_ticker",
    #     ),
    # )

    id = Column(Integer, primary_key=True)
    description = Column(Text, nullable=False)
    ticker = Column(String, nullable=False)
    workspace_id = Column(Integer, ForeignKey("workspace.id"))
    workspace = relationship("Workspace", backref="currencies")
    created_at = Column(DateTime, default=datetime.datetime.now, nullable=False)
