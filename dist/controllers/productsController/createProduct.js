"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DiocommerceProduct_1 = __importDefault(require("../../models/DiocommerceProduct"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_product, category, fk_idcategorys, name_product, price, image, id_categorys, name_categorys, selected, } = req.body;
        const productToBeCreated = {
            id_product,
            category,
            fk_idcategorys,
            name_product,
            price,
            image,
            id_categorys,
            name_categorys,
            selected,
        };
        const response = yield DiocommerceProduct_1.default.create(productToBeCreated);
        return res.status(201).json(response);
    }
    catch (error) {
        return res.status(404).json({ msg: error.message });
    }
});
exports.default = createProduct;
