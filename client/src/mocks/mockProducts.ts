import ProductsType from "../@types/ProductsType";
import generateRandomId from "../utils/generateRandomId";

const mockProducts: ProductsType[] = [
  {
    _id: generateRandomId(),
    id_product: generateRandomId(),
    category: "Data Science",
    fk_idcategorys: generateRandomId(),
    name_product: "Aprenda Python Fácil",
    price: 900,
    image: "./images/produtos/dataScience.jpg",
    id_categorys: generateRandomId(),
    name_categorys: "Python for Data Science",
    selected: false,
  },

  {
    _id: generateRandomId(),
    id_product: generateRandomId(),
    category: "Web Development",
    fk_idcategorys: generateRandomId(),
    name_product: "Sênior em 3 dias",
    price: 400,
    image: "./images/produtos/webDevelopment.jpg",
    id_categorys: generateRandomId(),
    name_categorys: "Angular",
    selected: false,
  },
  {
    _id: generateRandomId(),
    id_product: generateRandomId(),
    category: "Machine Learning",
    fk_idcategorys: generateRandomId(),
    name_product: "Curso Inteligencia Artificiosa em 1 mês",
    price: 300,
    image: "./images/produtos/machineLearning.jpg",
    id_categorys: generateRandomId(),
    name_categorys: "Artificial Inteligence",
    selected: false,
  },
];

export default mockProducts;
