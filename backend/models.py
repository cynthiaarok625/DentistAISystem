
from sqlalchemy import Column, DateTime, Integer, String
from .database import Base
from datetime import datetime,UTC

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)

    email = Column(String, unique=True, nullable=False)

    phone_number = Column(String, unique=True)

    password_hash = Column(String, nullable=False)

    created_on = Column(DateTime, default=datetime.now(UTC))