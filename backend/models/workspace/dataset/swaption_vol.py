import datetime

from sqlalchemy import Column, Integer, Text, DateTime, ForeignKey, Date, Float
from sqlalchemy.orm import relationship

from database import Base


class SwaptionVol(Base):
    __tablename__ = "swaption_vol"

    id = Column(Integer, primary_key=True)
    dataset_id = Column(Integer, ForeignKey("interest_rate.id"))
    dataset = relationship("Dataset", backref="interest_rates")
    currency_id = Column(Integer, ForeignKey("currency.id"))
    currency = relationship("Currency", backref="currencies")
    base_date = Column(Date, nullable=False)
    tenor = Column(Float(asdecimal=True), nullable=False)
    maturity = Column(Float(asdecimal=True), nullable=False)
    value = Column(Float(asdecimal=True), nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.now, nullable=False)
