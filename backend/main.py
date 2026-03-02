# main.py

from fastapi import FastAPI
import endpoints

app = FastAPI(title="Order-Management-using-MongoDB")

from fastapi.middleware.cors import CORSMiddleware



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(endpoints.router,  tags=["Orders"])
