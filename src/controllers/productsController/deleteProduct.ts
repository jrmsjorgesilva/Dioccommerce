import { Request, Response } from "express";
import DiocommerceProduct from "../../models/DiocommerceProduct";

const deleteProduct = async (req: Request, res: Response) => {
  try {
    // todo
    return;
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export default deleteProduct;
