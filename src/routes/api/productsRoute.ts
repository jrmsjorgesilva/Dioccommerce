import { Router, Response, Request } from "express";
import DiocommerceProduct from "../../models/DiocommerceProduct";
import createProduct from '../../controllers/productsController/createProduct';

const productsRouter = Router();

// POST
productsRouter.post("/", createProduct);

// GET
productsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const response = await DiocommerceProduct.find();
    return res.status(200).json(response);
  } catch (error: any) {
    return error;
  }
});

// GET UUID
productsRouter.get("/:uuid", async (req: Request, res: Response) => {
  try {
    const idToGet = req.params.uuid;
    const response = await DiocommerceProduct.findOne({ _id: idToGet });
    return res.status(200).json(response);
  } catch (error: any) {
    return error;
  }
});

// PUT / PATCH
productsRouter.patch("/:uuid", async (req: Request, res: Response) => {
  try {
    // todo
    return
  } catch (error: any) {
    return error;
  }
});

// DELETE
productsRouter.delete("/:uuid", async (req: Request, res: Response) => {
  try {
    // todo
    return
  } catch (error: any) {
    return error;
  }
});

export default productsRouter;
