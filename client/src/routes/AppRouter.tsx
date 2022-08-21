import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../components/cart/Cart";
import Checkout from "../components/cart/Checkout";
import NavBar from "../components/NavBar";
import About from "../components/pages/About";
import Blog from "../components/pages/Blog";
import Home from "../components/pages/Home";
import NotFoundPage from "../components/pages/NotFoundPage";
import ProductDetail from "../components/pages/ProductDetail";
import Products from "../components/pages/Products";
import Sidebar from "../components/Sidebar";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div className="app__grid">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
