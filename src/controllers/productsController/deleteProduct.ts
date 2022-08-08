import { Request, Response } from "express";
import DiocommerceProduct from "../../models/DiocommerceProduct";

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const idToBeDeleted = req.params.uuid;

    const response = await DiocommerceProduct.deleteOne({
      _id: idToBeDeleted,
    });
    return res.status(400).json(response);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export default deleteProduct;
