import { Router } from "express";
// controllers
import createProduct from "../../controllers/productsController/createProduct";
import getProductById from "../../controllers/productsController/getProductById";
import getProducts from "../../controllers/productsController/getProducts";
import updateProduct from "../../controllers/productsController/updateProduct";
import deleteProduct from "../../controllers/productsController/deleteProduct";

const productsRouter = Router();

// POST
productsRouter.post("/", createProduct);

// GET
productsRouter.get("/", getProducts);

// GET UUID
productsRouter.get("/:uuid", getProductById);

// PUT / PATCH
productsRouter.patch("/:uuid", updateProduct);

// DELETE
productsRouter.delete("/:uuid", deleteProduct);

export default productsRouter;
