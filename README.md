Order Management System using MongoDB

A RESTful Order Management API built using FastAPI and MongoDB, designed to handle complete CRUD operations for customer orders.
This project demonstrates backend development concepts such as:

REST API design
Database integration
Request validation
Clean modular project structure
Production-ready coding practices

🚀 **Features**
-------------------------------------------
✅ Create new orders
✅ Retrieve all orders
✅ Retrieve single order by ID
✅ Update order status
✅ Delete orders
✅ Unique Order ID validation

🛠 **Tech Stack**
**Backend**
------------------------
Python 3.x
FastAPI
MongoDB
PyMongo
Uvicorn

**Frontend**
--------------------------
React.js
HTML
CSS


order-service/
│
├── backend/
│   ├── main.py               # FastAPI app entry point
│   ├── database.py           # MongoDB connection setup
│   ├── models.py             # Pydantic models (request validation)
│   ├── crud.py               # Database logic (CRUD operations)
│   ├── routes.py             # API endpoints
│   └── order_operation.py    # MongoDB internal operations
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│
├── .gitignore
├── requirements.txt
└── README.md



**
Installation & Setup**
---------------------------------
1️⃣ Clone the Repository
git clone <your-repository-url>

cd order-service
2️⃣ Backend Setup

Create Virtual Environment
python -m venv venv

Activate it:

**Windows**
venv\Scripts\activate
**Mac/Linux**
source venv/bin/activate

**Install Dependencies**
---------------------------
pip install -r requirements.txt
**Run Backend Server**
cd backend
uvicorn main:app --reload

Backend will run at:
http://127.0.0.1:8000
Swagger Docs:
http://127.0.0.1:8000/docs

**Frontend Setup**
cd frontend
npm install
npm start

Frontend will run at:
http://localhost:3000
