# Order-Management-using-MongoDB
A RESTful Order Management API built using FastAPI and MongoDB, designed to handle complete CRUD operations for customer orders.  This project demonstrates backend development concepts such as API design, database integration, request validation, environment configuration, and production-ready project structuring.


Create new orders

Retrieve single order by ID

Retrieve all orders

Update order status

Delete orders

Unique order ID validation

Environment-based configuration

Clean modular project structure

🛠 Tech Stack

Python 3.x

FastAPI

MongoDB

PyMongo

Uvicorn


order-service/
│
├── backend/
│   ├── main.py                 # FastAPI app entry point
│   ├── database.py             # MongoDB connection
│   ├── models.py               # Pydantic models
│   ├── crud.py                 # Database operations (logic)
│   └── routes.py               # API endpoints
│   └── order_operation.py.py   #performs mongodb internal operations
├── backend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│       ├── App.js
│       ├── index.js
│       └── ...
│       ├── package.json
│                
├── .gitignore
├── requirements.txt
├── README.md


 cd frontend
  npm start
