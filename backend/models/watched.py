from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from db import Base

class WatchedAnime(Base):
    __tablename__ = "watched_anime"

    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"))
    anime_id = Column(Integer, ForeignKey("anime.id", ondelete="CASCADE"))

    user = relationship("Users", back_populates="watched_anime")
    anime = relationship("Anime", back_populates="watched_by")
