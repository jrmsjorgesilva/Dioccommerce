import { Router, Response, Request } from "express";
import DiocommerceProduct from "../../models/DiocommerceProduct";

const productsRouter = Router();

// POST
productsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const {
      id_product,
      category,
      fk_idcategorys,
      name_product,
      price,
      image,
      id_categorys,
      name_categorys,
      selected,
    } = req.body;

    const newData: any = {
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

    console.log('1', Object.values(DiocommerceProduct));

    const response = await DiocommerceProduct.create(newData);
    console.log('2', newData);

    return res.status(201).json(response);

  } catch (error: any) {
    return error;
  }
});

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
  } catch (error: any) {
    return error;
  }
});

// DELETE
productsRouter.delete("/:uuid", async (req: Request, res: Response) => {
  try {
    // todo
  } catch (error: any) {
    return error;
  }
});

export default productsRouter;
