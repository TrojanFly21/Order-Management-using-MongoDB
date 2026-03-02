create_order(order_data)

get_order(order_id)

update_status(order_id, status)

delete_order(order_id)

Here’s a **one-sheet cheat sheet** for common operations in MongoDB using PyMongo.

---

# 📄 PyMongo One-Sheet (CRUD + Common Ops)

```python
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["mydatabase"]
collection = db["users"]
```

---

## ✅ CREATE

### Insert One

```python
collection.insert_one({"name": "Karan", "age": 25})
```

### Insert Many

```python
collection.insert_many([
    {"name": "A", "age": 20},
    {"name": "B", "age": 22}
])
```

---

## ✅ READ

### Find One

```python
user = collection.find_one({"name": "Karan"})
```

### Find Many

```python
users = collection.find({"age": {"$gt": 20}})
for u in users:
    print(u)
```

### Find with Projection (Select fields)

```python
collection.find({}, {"name": 1, "_id": 0})
```

### Find by ID

```python
from bson import ObjectId
collection.find_one({"_id": ObjectId("65f123abc123abc123abc123")})
```

---

## ✅ UPDATE

### Update One

```python
collection.update_one(
    {"name": "Karan"},
    {"$set": {"age": 26}}
)
```

### Update Many

```python
collection.update_many(
    {"age": {"$lt": 18}},
    {"$set": {"status": "minor"}}
)
```

### Increment Field

```python
collection.update_one(
    {"name": "Karan"},
    {"$inc": {"age": 1}}
)
```

### Push to Array

```python
collection.update_one(
    {"name": "Karan"},
    {"$push": {"orders": {"item": "Keyboard", "price": 1000}}}
)
```

---

## ✅ DELETE

### Delete One

```python
collection.delete_one({"name": "Karan"})
```

### Delete Many

```python
collection.delete_many({"age": {"$lt": 18}})
```

---

## ✅ COUNT

```python
collection.count_documents({})
```

---

## ✅ SORT

```python
collection.find().sort("age", 1)   # 1 = Asc, -1 = Desc
```

---

## ✅ LIMIT & SKIP (Pagination)

```python
collection.find().skip(10).limit(5)
```

---

## ✅ DISTINCT

```python
collection.distinct("age")
```

---

## ✅ DROP

```python
collection.drop()   # Delete entire collection
```

---

# 🔥 Common Query Operators

| Operator | Meaning          |
| -------- | ---------------- |
| `$gt`    | Greater than     |
| `$lt`    | Less than        |
| `$gte`   | Greater or equal |
| `$lte`   | Less or equal    |
| `$ne`    | Not equal        |
| `$in`    | Value in list    |
| `$and`   | AND condition    |
| `$or`    | OR condition     |

Example:

```python
collection.find({
    "$and": [
        {"age": {"$gt": 20}},
        {"name": {"$ne": "A"}}
    ]
})
```

---

If you want, I can also give:

* Nested document operations sheet
* Aggregation pipeline sheet
* PyMongo + FastAPI example sheet

Tell me what level you're working on 👍
