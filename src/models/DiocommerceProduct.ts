import mongoose from "mongoose";

type DiocommerceProductType = {
  id_product: number;
  category: string;
  fk_idcategorys: number;
  name_product: string;
  price: number;
  image: string;
  id_categorys: number;
  name_categorys: string;
  selected: Boolean;
};

const DiocommerceProduct = mongoose.model<any>("DiocommerceProduct", {
  id_product: String,
  category: String,
  fk_idcategorys: Number,
  name_product: String,
  price: Number,
  image: String,
  id_categorys: String,
  name_categorys: String,
  selected: Boolean,
});

export default DiocommerceProduct;
