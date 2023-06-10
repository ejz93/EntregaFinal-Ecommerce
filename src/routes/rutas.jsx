import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import Error from "../pages/Error";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ProductProvider from "../context/ProductProvider";
import CartProvider from "../context/CartProvider";
import CartView from "../components/Cart/CartView";

const Rutas = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <NavBar
            className={"navbar navbar-expand-lg navbar-light bg-warning"}
            navbarLogo={"Elemental"}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </CartProvider>
      </ProductProvider>
      <Footer />
    </BrowserRouter>
  );
};

export default Rutas;
