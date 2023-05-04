import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import "./App.css";
import CartList from "./components/CartList";
import UpdateProduct from "./components/UpdateProduct";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [category, setCategory] = useState("all"); // Added category state

  const addProduct = (newproduct) => {
    setProduct([...product, newproduct]);
  };

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  useEffect(() => {
    fetch("http://localhost:8000/electronics")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const handleShow = (value) => {
    setShowCart(value);
  };

  const handleCategoryChange = (event) => {
    // Added category change handler
    setCategory(event.target.value);
  };

  const filteredProducts =
    category === "all"
      ? product
      : product.filter((p) => p.category === category); // Filter products by category

  return (
    <div>
      <Header
        count={cart.length}
        handleShow={handleShow}
        onCategoryChange={handleCategoryChange}
      />{" "}
      {/* Added onCategoryChange prop */}
      <Category />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                product={filteredProducts}
                addToCart={addToCart}
                addProduct={addProduct}
              />
            }
          />
        </Routes>
      </Main>
      <UpdateProduct />
      {showCart ? (
        <CartList cart={cart} />
      ) : (
        <ProductList
          product={filteredProducts}
          addToCart={addToCart}
          addProduct={addProduct}
        /> // Pass filtered products to ProductList
      )}
    </div>
  );
}

export default App;
