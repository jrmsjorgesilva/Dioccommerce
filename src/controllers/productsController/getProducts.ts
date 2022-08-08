import { Request, Response } from "express";
import DiocommerceProduct from "../../models/DiocommerceProduct";

const getProducts = async (req: Request, res: Response) => {
  try {
    const response = await DiocommerceProduct.find();
    return res.status(200).json(response);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export default getProducts;
