import React, { useState, useEffect } from "react";
import ProductsType from "../../@types/ProductsType";
import { FaTrash, FaEdit, FaPlus, FaSearch } from "react-icons/fa";
// components
import Swal from "sweetalert2";
import axios from "axios";

const FETCH_URL = `http://localhost:8000/products`;

const Products = () => {
  const [productsList, setProductsList] = useState<ProductsType[]>(() => [
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
  ]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(FETCH_URL);
        setProductsList(response.data);
      } catch (error: any) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = () => {
    Swal.fire({
      title: "Titulo do novo produto",
      input: "text",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
      confirmButtonText: "Continuar",
      showLoaderOnConfirm: true,
      preConfirm: (newNameProduct) => {
        Swal.fire({
          title: "Categoria do novo produto",
          input: "text",
          cancelButtonText: "Cancelar",
          showCancelButton: true,
          confirmButtonText: "Continuar",
          showLoaderOnConfirm: true,
          preConfirm: (newNameCategory) => {
            Swal.fire({
              title: "Categoria do novo produto",
              input: "text",
              cancelButtonText: "Cancelar",
              showCancelButton: true,
              confirmButtonText: "Continuar",
              showLoaderOnConfirm: true,
              preConfirm: (newCategory) => {
                Swal.fire({
                  title: "Preço do novo produto",
                  input: "number",
                  cancelButtonText: "Cancelar",
                  showCancelButton: true,
                  confirmButtonText: "Continuar",
                  showLoaderOnConfirm: true,
                  preConfirm: async (newPrice) => {
                    const newProductList = {
                      id_product: Math.floor(
                        Math.random() * Number.MAX_SAFE_INTEGER
                      ).toString(),
                      category: newCategory,
                      fk_idcategorys: Math.floor(
                        Math.random() * Number.MAX_SAFE_INTEGER
                      ).toString(),
                      name_product: newNameProduct,
                      price: newPrice,
                      image: "./images/produtos/placeholder.jpg",
                      id_categorys: Math.floor(
                        Math.random() * Number.MAX_SAFE_INTEGER
                      ).toString(),
                      name_categorys: newNameCategory,
                      selected: false,
                    };
                    await axios.post(FETCH_URL, newProductList);
                    setProductsList((oldProductList) => [
                      ...productsList,
                      newProductList,
                    ]);
                  },
                });
              },
            });
          },
        });
      },
    });
  };

  const deleteProduct = async (id?: string) => {
    console.log("deleted the id: ", id);
    const filteredProductsList = productsList.filter((prod) => prod._id !== id);
    try {
      await axios.delete(`${FETCH_URL}/${id}`);
      setProductsList(filteredProductsList);
    } catch (error: any) {
      return console.log(error);
    }
  };

  const updateProduct = async (id?: string): Promise<void> => {
    console.log("updated the id: ", id);
    Swal.fire({
      title: "Titulo do novo produto",
      input: "text",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
      confirmButtonText: "Continuar",
      showLoaderOnConfirm: true,
      preConfirm: (newNameProduct) => {
        Swal.fire({
          title: "Categoria do novo produto",
          input: "text",
          cancelButtonText: "Cancelar",
          showCancelButton: true,
          confirmButtonText: "Continuar",
          showLoaderOnConfirm: true,
          preConfirm: (newNameCategory) => {
            Swal.fire({
              title: "Categoria do novo produto",
              input: "text",
              cancelButtonText: "Cancelar",
              showCancelButton: true,
              confirmButtonText: "Continuar",
              showLoaderOnConfirm: true,
              preConfirm: (newCategory) => {
                Swal.fire({
                  title: "Preço do novo produto",
                  input: "number",
                  cancelButtonText: "Cancelar",
                  showCancelButton: true,
                  confirmButtonText: "Continuar",
                  showLoaderOnConfirm: true,
                  preConfirm: async (newPrice) => {
                    const newProductList = {
                      id_product: Math.floor(
                        Math.random() * Number.MAX_SAFE_INTEGER
                      ).toString(),
                      category: newCategory,
                      fk_idcategorys: Math.floor(
                        Math.random() * Number.MAX_SAFE_INTEGER
                      ).toString(),
                      name_product: newNameProduct,
                      price: newPrice,
                      image: "./images/produtos/placeholder.jpg",
                      id_categorys: Math.floor(
                        Math.random() * Number.MAX_SAFE_INTEGER
                      ).toString(),
                      name_categorys: newNameCategory,
                      selected: false,
                    };
                    const filteredProductsList = productsList.filter(
                      (prod) => prod._id !== id
                    );
                    try {
                      await axios.patch(`${FETCH_URL}/${id}`);
                      setProductsList((oldProductList) => [
                        ...filteredProductsList,
                        newProductList,
                      ]);
                    } catch (error) {
                      return console.error(error);
                    }
                  },
                });
              },
            });
          },
        });
      },
    });
  };

  return (
    <section className="products">
      <div className="products__container">
        <input
          type="text"
          className="input__search"
          placeholder="Filtrar a pesquisa"
          onChange={() => {}}
        />
        <FaSearch className="input__search--icon" />
        <ul className="card">
          {productsList?.map((prod) => (
            <li className="card__body" key={prod._id}>
              <FaTrash
                className="card__btn--delete"
                role="button"
                onClick={() => deleteProduct(prod._id)}
              />
              <FaEdit
                className="card__btn--edit"
                role="button"
                onClick={() => updateProduct(prod._id)}
              />
              <img src={prod.image} alt={prod.name_product} />
              <p className="card__text--title">{prod.name_product}</p>
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>
                  <p className="card__text--subtitle">{prod.name_categorys}</p>
                  <p className="card__text--paragraph">{prod.category}</p>
                </span>
                <p className="card__text--price">R$ {prod.price}</p>
              </span>
            </li>
          ))}
        </ul>
        <div className="btn__group">
          <button className="btn--add" onClick={() => addProduct()}>
            <FaPlus />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
