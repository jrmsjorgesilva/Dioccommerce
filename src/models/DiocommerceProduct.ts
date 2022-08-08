import mongoose from "mongoose";

interface DiocommerceProductType {
  id_product: string;
  category: string;
  fk_idcategorys: string;
  name_product: string;
  price: number;
  image: string;
  id_categorys: string;
  name_categorys: string;
  selected: boolean;
}

const DiocommerceProductSchema = new mongoose.Schema<DiocommerceProductType>({
  id_product: String,
  category: String,
  fk_idcategorys: String,
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
