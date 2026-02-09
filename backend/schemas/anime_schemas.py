from pydantic import BaseModel, ConfigDict

class AnimeCreate(BaseModel):
    title: str
    desc: str
    image_url: str


class AnimeOut(BaseModel):
    id: int
    title: str
    desc: str
    image_url: str

    model_config = ConfigDict(from_attributes=True)
