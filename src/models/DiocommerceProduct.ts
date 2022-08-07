import mongoose from "mongoose";

interface DiocommerceProductType {
  id_product: number;
  category: string;
  fk_idcategorys: number;
  name_product: string;
  price: number;
  image: string;
  id_categorys: number;
  name_categorys: string;
  selected: Boolean;
}

const DiocommerceProductSchema = new mongoose.Schema<DiocommerceProductType>({
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

const DiocommerceProduct = mongoose.model<DiocommerceProductType>(
  "DiocommerceProduct",
  DiocommerceProductSchema
);

export default DiocommerceProduct;
