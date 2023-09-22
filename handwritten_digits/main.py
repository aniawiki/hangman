import os

from fastapi import FastAPI, Response
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="./static", html=True), name="static")


@app.get("/")
async def home():
    with open(os.path.join("static", "index.html")) as fh:
        data = fh.read()
    return Response(content=data, media_type="text/html")
