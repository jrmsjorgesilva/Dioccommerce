import React from "react";
import ProductsType from "../../@types/ProductsType";
import { FaTrash, FaEdit } from "react-icons/fa";

const Products = () => {
  const productsList: ProductsType[] = [
    {
      _id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(),
      id_product: Math.floor(
        Math.random() * Number.MAX_SAFE_INTEGER
      ).toString(),
      category: "Data Science",
      fk_idcategorys: Math.floor(
        Math.random() * Number.MAX_SAFE_INTEGER
      ).toString(),
      name_product: "Aprenda Python Fácil",
      price: 900,
      image: "./images/produtos/dataScience.jpg",
      id_categorys: Math.floor(
        Math.random() * Number.MAX_SAFE_INTEGER
      ).toString(),
      name_categorys: "Python for Data Science",
      selected: false,
    },

    {
      _id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(),
      id_product: Math.floor(
        Math.random() * Number.MAX_SAFE_INTEGER
      ).toString(),
      category: "Web Development",
      fk_idcategorys: Math.floor(
        Math.random() * Number.MAX_SAFE_INTEGER
      ).toString(),
      name_product: "Sênior em 3 dias",
      price: 400,
      image: "./images/produtos/webDevelopment.jpg",
      id_categorys: Math.floor(
        Math.random() * Number.MAX_SAFE_INTEGER
      ).toString(),
      name_categorys: "Angular",
      selected: false,
    },
    {
      _id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(),
      id_product: Math.floor(
        Math.random() * Number.MAX_SAFE_INTEGER
      ).toString(),
      category: "Machine Learning",
      fk_idcategorys: Math.floor(
        Math.random() * Number.MAX_SAFE_INTEGER
      ).toString(),
      name_product: "Curso Inteligencia Artificiosa em 1 mês",
      price: 300,
      image: "./images/produtos/machineLearning.jpg",
      id_categorys: Math.floor(
        Math.random() * Number.MAX_SAFE_INTEGER
      ).toString(),
      name_categorys: "Artificial Inteligence",
      selected: false,
    },
  ];

  return (
    <section className="products">
      <div className="products__container">
        <ul className="products__card">
          {productsList.map((prod) => (
            <li className="products__card--body" key={prod._id}>
              <FaTrash className="products__card--delete" role="button" />
              <FaEdit className="products__card--edit" role="button" />
              <img src={prod.image} alt={prod.name_product} />
              <p>{prod.name_product}</p>
              <p>{prod.price}</p>
              <p>{prod.name_categorys}</p>
              <p>{prod.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
