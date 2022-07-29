import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import ProductList from "./ProductList";
import NavBar from "./NavBar";
import Home from "./Home";
import OrdersList from "./OrdersList";
import OrderForm from "./OrderForm";

function App() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  //fectching products to be displayed
  useEffect(() => {
    fetch("https://server-app123.herokuapp.com/products")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  //fecthing order data
  useEffect(() => {
    fetch("https://server-app123.herokuapp.com/order")
      .then((res) => res.json())
      .then((orders) => setOrders(orders));
  });

  //a function meant to update orders state on adding new orders
  function handleAddOrder(newOrder) {
    setOrders([...orders, newOrder]);
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/products"
          element={<ProductList productContainer={products} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/orderform"
          element={<OrderForm onAddOrder={handleAddOrder} />}
        />
        <Route path="/orders" element={<OrdersList orderList={orders} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
