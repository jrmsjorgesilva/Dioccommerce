"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_1 = require("react-router");
const ProductPage = () => {
    const { id } = (0, react_router_1.useParams)();
    // const products = useSelector((state) => state.products);
    // const product = products.filter((prod: any) => prod.id_product !== id);
    return (<div>
      <h1>ProductPage id: {id} </h1>
      {/* {product ? <Card product={product}>fsdfsdf</Card> : ''} */}
    </div>);
};
exports.default = ProductPage;
