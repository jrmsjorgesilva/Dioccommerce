import mongoose from "mongoose";

const DiocommerceProduct = mongoose.model("DiocommerceProduct", {
  id_product: Number,
  category: String,
  fk_idcategorys: Number,
  name_product: String,
  price: Number,
  image: String,
  id_categorys: Number,
  name_categorys: String,
  selected: Boolean,
});

export default DiocommerceProduct;
