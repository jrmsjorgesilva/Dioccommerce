import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import ProductsType from "../../@types/ProductsType";
import Swal from "sweetalert2";
import axios from "axios";
import generateRandomId from "../../utils/generateRandomId";
import placeholderImg from "../../img/Angular-1.jpg";
import StarRating from "../StarRating";

const FETCH_URL = `http://localhost:8000/products`;

type ProductsTypeProps = {
  productsList: ProductsType[];
  setProductsList: any;
};

const ProductCard: React.FC<ProductsTypeProps> = ({
  productsList,
  setProductsList,
}) => {
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
                    const filteredProductsList = productsList.filter(
                      (prod) => prod._id !== id
                    );
                    try {
                      await axios.patch(`${FETCH_URL}/${id}`, newProductList);
                      setProductsList((oldProductList: ProductsType[]) => [
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
    <ul className="grid--two__columns">
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
          <img
            src={!prod.image || placeholderImg}
            width="100%"
            height="200"
            alt={prod.name_product}
          />
          <p className="text--title">{prod.name_product}</p>
          <span style={{ display: "flex", justifyContent: "space-between" }}>
            <span>
              <p className="text--subtitle">{prod.name_categorys}</p>
              <p className="text--paragraph">{prod.category}</p>
            </span>
            <p className="text--price">R$ {prod.price}</p>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default ProductCard;
