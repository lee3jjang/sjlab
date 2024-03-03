import datetime

from sqlalchemy import Column, Integer, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from database import Base


class Dataset(Base):
    __tablename__ = "dataset"

    id = Column(Integer, primary_key=True)
    description = Column(Text, nullable=False)
    workspace_id = Column(Integer, ForeignKey("workspace.id"))
    workspace = relationship("Workspace", backref="datasets")
    created_at = Column(DateTime, default=datetime.datetime.now, nullable=False)
