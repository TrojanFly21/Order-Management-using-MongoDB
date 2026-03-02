import React, { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://127.0.0.1:8000";

function App() {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({
    customer_name: "",
    product: "",
    price: "",
    quantity: "",
    status: ""
  });

  const [searchId, setSearchId] = useState("");
  const [singleOrder, setSingleOrder] = useState(null);
  const [updateStatus, setUpdateStatus] = useState("");
  const [error, setError] = useState("");

  // Fetch all orders
  const fetchOrders = async () => {
    const res = await fetch(`${API_URL}/orders`);
    const data = await res.json();
    setOrders(data.order_data || []);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create order
  const createOrder = async () => {
    setError("");

    const res = await fetch(`${API_URL}/Create-orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        quantity: Number(form.quantity),
        created_at: new Date().toISOString()
      })
    });

    if (!res.ok) {
      setError("Failed to create order");
      return;
    }

    setForm({
      customer_name: "",
      product: "",
      price: "",
      quantity: "",
      status: ""
    });

    fetchOrders();
  };

  // Get single order
  const getOrderDetails = async () => {
    setError("");
    setSingleOrder(null);

    const res = await fetch(`${API_URL}/order-details/${searchId}`);

    if (!res.ok) {
      setError("Order not found");
      return;
    }

    const data = await res.json();
    setSingleOrder(data);
  };

  // Update status
  const updateOrderStatus = async () => {
    const res = await fetch(`${API_URL}/order-status/${searchId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: updateStatus,
        updated_at: new Date().toISOString()
      })
    });

    if (!res.ok) {
      setError("Update failed");
      return;
    }

    setUpdateStatus("");
    fetchOrders();
    getOrderDetails();
  };

  // Delete order
  const deleteOrder = async (id) => {
    const res = await fetch(`${API_URL}/remove-order/${id}`, {
      method: "DELETE"
    });

    if (!res.ok) {
      setError("Delete failed");
      return;
    }

    fetchOrders();
    if (searchId === id) {
      setSingleOrder(null);
    }
  };

  return (
    <div className="container">
      <h1>Order Management</h1>

      {/* Create Section */}
      <div className="card">
        <h2>Create Order</h2>
        <div className="form-row">
          <input
            name="customer_name"
            placeholder="Customer Name"
            value={form.customer_name}
            onChange={handleChange}
          />
          <input
            name="product"
            placeholder="Product"
            value={form.product}
            onChange={handleChange}
          />
          <input
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />
          <input
            name="quantity"
            placeholder="Quantity"
            value={form.quantity}
            onChange={handleChange}
          />
          <input
            name="status"
            placeholder="Status"
            value={form.status}
            onChange={handleChange}
          />
        </div>
        <button onClick={createOrder}>Create Order</button>
      </div>

      {/* Orders List */}
      <div className="card">
        <h2>All Orders</h2>
        <button onClick={fetchOrders}>Refresh</button>

        <ul className="order-list">
          {orders.map((order) => (
            <li key={order.order_id}>
              <div>
                <strong>{order.customer_name}</strong> - {order.product}
                <br />
                Status: {order.status}
                <br />
                ID: {order.order_id}
              </div>
              <button
                className="delete-btn"
                onClick={() => deleteOrder(order.order_id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Search Section */}
      <div className="card">
        <h2>Search Order</h2>
        <input
          placeholder="Enter Order ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={getOrderDetails}>Search</button>

        {error && <p className="error">{error}</p>}

        {singleOrder && (
          <div className="details">
            <p><strong>Customer:</strong> {singleOrder.customer_name}</p>
            <p><strong>Product:</strong> {singleOrder.product}</p>
            <p><strong>Status:</strong> {singleOrder.status}</p>

            <input
              placeholder="New Status"
              value={updateStatus}
              onChange={(e) => setUpdateStatus(e.target.value)}
            />
            <button onClick={updateOrderStatus}>Update Status</button>

            <button
              className="delete-btn"
              onClick={() => deleteOrder(singleOrder.order_id)}
            >
              Delete Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;