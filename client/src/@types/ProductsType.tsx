type ProductsType = {
  _id?: string,
  id_product: string;
  category: string;
  fk_idcategorys: string;
  name_product: string;
  price: number;
  image: string;
  id_categorys: string;
  name_categorys: string;
  selected: boolean;
};

export default ProductsType;
