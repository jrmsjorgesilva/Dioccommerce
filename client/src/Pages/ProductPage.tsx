import React from "react";
import { useParams, useNavigate } from "react-router";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const ProductPage: React.FC = () => {
  const { id } = useParams();

  // const products = useSelector((state) => state.products);
  // const product = products.filter((prod: any) => prod.id_product !== id);

  return (
    <div>
      <h1>ProductPage id: {id} </h1>
      {/* {product ? <Card product={product}>fsdfsdf</Card> : ''} */}
    </div>
  );
};

export default ProductPage;
