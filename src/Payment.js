import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import UpdateProduct from "./components/UpdateProduct";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  useEffect(() => {
    fetch("http://localhost:8000/electronics")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow} />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                products={products}
                addToCart={addToCart}
                addProduct={addProduct}
              />
            }
          />
          {/* <Route path="/payment" element={<Payment />} /> */}
        </Routes>
      </Main>
      <UpdateProduct />
      {showCart ? (
        <CartList cart={cart} />
      ) : (
        <ProductList
          products={products}
          addToCart={addToCart}
          addProduct={addProduct}
        />
      )}
      {/* <div>
        <Payment />
      </div> */}
    </div>
  );
}

export default App;
