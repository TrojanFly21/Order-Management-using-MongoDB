from pymongo import AsyncMongoClient
# from pymongo import MongoClient

# Step 1: Connect to MongoDB
client = AsyncMongoClient("mongodb://localhost:27017/")

# Step 2: Create database
db = client["Inventory"]

# Step 3: Create collection
orders = db["orders"]

