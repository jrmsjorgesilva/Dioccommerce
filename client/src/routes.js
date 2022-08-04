import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home";
import Contatos from "./Pages/contato";
import ProductPage from "./Pages/ProductPage.tsx";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contato" element={<Contatos />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
};

export default MainRoutes;
