import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import About from "../components/pages/About";
import Blog from "../components/pages/Blog";
import Home from "../components/pages/Home";
import NotFoundPage from "../components/pages/NotFoundPage";
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
