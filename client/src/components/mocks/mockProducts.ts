import ProductsType from "../../@types/ProductsType";

const mockProducts: ProductsType[] = [
  {
    _id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(),
    id_product: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(),
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
    id_product: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(),
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
    id_product: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(),
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

export default mockProducts;
