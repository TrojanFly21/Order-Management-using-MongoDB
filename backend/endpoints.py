# routers/users.py
from fastapi import FastAPI, HTTPException

from fastapi import APIRouter
from models import OrderCreate,UpdateStatus
from order_operation import new_order,show_order,show_order_details,update_status,remove_order_details

router = APIRouter()


@router.post("/Create-orders")
async def create_orders(ordercreate:OrderCreate):
        create_data = await new_order(ordercreate)
        return ordercreate


@router.get("/orders")
async def get_orders():
    show_data = await show_order()
    return show_data

@router.get("/order-details/{order_id}")
async def orders_detail(order_id:str):
    show_details = await show_order_details(order_id)
    if show_details == None:
        data_details = {"message":"order_id does not exist"}
        raise HTTPException(status_code=404, detail=data_details)
    return show_details


@router.patch("/order-status/{order_id}")
async def upadte_status(updatestatus:UpdateStatus,order_id:str):
    upadte_data_status = await update_status(updatestatus,order_id)
    print(upadte_data_status,"---stays")
    if upadte_data_status == None:
        data_details = {"message":"order_id does not exist"}
        raise HTTPException(status_code=404, detail=data_details)
    return upadte_data_status

@router.delete("/remove-order/{order_id}")
async def orders_detail(order_id:str):
    show_details = await remove_order_details(order_id)
    if show_details == None:
        data_details = {"message":"order_id does not exist"}
        raise HTTPException(status_code=404, detail=data_details)
    return show_details
