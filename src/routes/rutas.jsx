import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Error from "../pages/Error";
import CartView from "../components/Cart/CartView";
import ItemDetailView from "../pages/ItemDetailView";
import NavBar from "../components/Navbar/NavBar";
import LoaderProvider from "../context/LoaderProvider";
import ProductProvider from "../context/ProductProvider";
import CartProvider from "../context/CartProvider";

const Rutas = () => {
  return (
    <Router>
      <LoaderProvider>
        <ProductProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/category/:categoryId" element={<Home />} />
              <Route path="/item/:id" element={<ItemDetailView />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </CartProvider>
        </ProductProvider>
      </LoaderProvider>
    </Router>
  );
};

export default Rutas;
