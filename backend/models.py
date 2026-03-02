from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from pydantic import validator

class OrderCreate(BaseModel):
    customer_name: str = Field(..., example="Karan")
    product: str = Field(..., example="Laptop")
    price: float = Field(..., example=50000)
    quantity: int = Field(..., example=1)
    status: Optional[str] = "Created"
    created_at: datetime

    @validator("status")
    def validate_status(cls, value):
        allowed = ["created", "shipped", "delivered"]
        if value not in allowed:
            raise ValueError("Invalid status value")
        return value


class UpdateStatus(BaseModel):
    status: str
    updated_at: datetime
    @validator("status")
    def validate_status(cls, value):
        allowed = ["created", "shipped", "delivered"]
        if value not in allowed:
            raise ValueError("Invalid status value")
        return value

   