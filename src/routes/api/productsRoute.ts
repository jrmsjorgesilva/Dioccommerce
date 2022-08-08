import { Router, Response, Request } from "express";
// controllers 
import createProduct from '../../controllers/productsController/createProduct';
import getProductById from "../../controllers/productsController/getProductById";
import getProduct from "../../controllers/productsController/getProduct";
import updateProduct from "../../controllers/productsController/updateProduct";
import deleteProduct from "../../controllers/productsController/deleteProduct";

const productsRouter = Router();

// POST
productsRouter.post("/", createProduct);

// GET
productsRouter.get("/", getProduct);

// GET UUID
productsRouter.get("/:uuid", getProductById);

// PUT / PATCH
productsRouter.patch("/:uuid", updateProduct);

// DELETE
productsRouter.delete("/:uuid", deleteProduct);

export default productsRouter;
