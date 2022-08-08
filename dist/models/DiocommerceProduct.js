"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DiocommerceProductSchema = new mongoose_1.default.Schema({
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
const DiocommerceProduct = mongoose_1.default.model("DiocommerceProduct", DiocommerceProductSchema);
exports.default = DiocommerceProduct;
