from database import orders
from bson import ObjectId


def serialize_order(order) -> dict:
    return {
        "order_id": str(order["_id"]),
        "customer_name": order["customer_name"],
        "product": order["product"],
        "price": order["price"],
        "quantity": order["quantity"],
        "status": order["status"],
        "created_at": order["created_at"]
    }



async def new_order(ords):
    collection_data = {
                "customer_name": ords.customer_name,
                "product": ords.product,
                "price": ords.price,
                "quantity": ords.quantity,
                "status": ords.status,
                "created_at": ords.created_at
                }
    await orders.insert_one(collection_data)


async def show_order():
    data = orders.find({})
    data_list = [ ]
    async for i in data:
        data_list.append(serialize_order(i))
    return {"order_data":data_list}


async def show_order_details(order_id):
     if ObjectId.is_valid(order_id):
        data_details = await  orders.find_one({"_id": ObjectId(order_id)})
     else:
        return None
        
     if data_details:
        data_details = serialize_order(data_details)
        return data_details
 
        


async def update_status(update_data,order_id):
    if ObjectId.is_valid(order_id):
        check_id = await  orders.find_one({"_id": ObjectId(order_id)})
        if check_id:
            update_data = await orders.update_one(
                    {"_id": ObjectId(order_id)},   
                    {
                        "$set": {
                            "status": update_data.status,         
                            "updated_at": update_data.updated_at  
                        }
                    }
                )
            data_details = serialize_order(check_id)
            print(data_details,"---")
            return data_details
    else:
        return None
        
    

async def remove_order_details(order_id):
     if ObjectId.is_valid(order_id):
        data_details = await  orders.find_one({"_id": ObjectId(order_id)})
        if data_details:
            await orders.delete_one({"_id": ObjectId(order_id)})
            return  {"message":"Order with order_id:{order_id} is succesfully deleted"}
     else:
        return None
        
    