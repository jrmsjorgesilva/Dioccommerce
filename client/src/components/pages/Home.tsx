import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductsType from "../../@types/ProductsType";
import mockProducts from "../../mocks/mockProducts";
import ProductCard from "./ProductCard";

const FETCH_URL = `http://localhost:8000/products`;

const Home = () => {
  const [productsList, setProductsList] = useState<ProductsType[]>(
    () => mockProducts
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(FETCH_URL);
        console.log(data);
        setProductsList([...data]);
      } catch (error: any) {
        console.error(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="home">
      <div className="container">
        <h1 className="text--title">Home</h1>
        <ProductCard
          productsList={productsList}
          setProductsList={setProductsList}
        />
      </div>
    </section>
  );
};

export default Home;
