import React, { useState, useEffect } from "react";
import ProductsType from "../../@types/ProductsType";
import { FaTrash, FaEdit, FaPlus, FaSearch } from "react-icons/fa";
// utils
import generateRandomId from "../../utils/generateRandomId";
// mocks
import mockProducts from "../../mocks/mockProducts";
// components
import ProductCard from "./ProductCard";
// libs 
import Swal from "sweetalert2";
import axios from "axios";

const FETCH_URL = `http://localhost:8000/products`;

const Products = () => {
  const [productsList, setProductsList] = useState<ProductsType[]>(
    () => mockProducts
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(FETCH_URL);
        setProductsList([...data]);
      } catch (error: any) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [productsList]);

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
                      id_product: generateRandomId(),
                      category: newCategory,
                      fk_idcategorys: generateRandomId(),
                      name_product: newNameProduct,
                      price: newPrice,
                      image: "./images/produtos/placeholder.jpg",
                      id_categorys: generateRandomId(),
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

  return (
    <section className="products">
      <div className="container">
        <input
          type="text"
          className="input__search"
          placeholder="Filtrar a pesquisa"
          onChange={() => {}}
        />
        <FaSearch className="input__search--icon" />
        <ProductCard
          productsList={productsList}
          setProductsList={setProductsList}
        />
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
