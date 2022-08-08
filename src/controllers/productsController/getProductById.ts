import { Request, Response } from "express";
import DiocommerceProduct from "../../models/DiocommerceProduct";

const getProductsById = async (req: Request, res: Response) => {
  try {
    const idToGet = req.params.uuid;
    const response = await DiocommerceProduct.findOne({ _id: idToGet });
    return res.status(200).json(response);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export default getProductsById;
