from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from db import Base

class Anime(Base):
    __tablename__ = "anime"

    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String, nullable=False)
    desc = Column(String, nullable=False)
    image_url = Column(String, nullable=False)

    watched_by = relationship("WatchedAnime", back_populates="anime", cascade="all, delete")
