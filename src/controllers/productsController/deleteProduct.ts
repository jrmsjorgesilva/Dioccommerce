import { Request, Response } from "express";
import DiocommerceProduct from "../../models/DiocommerceProduct";

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.uuid;

    const deletedProduct = await DiocommerceProduct.deleteOne({
      _id: idToDelete,
    });
    return res.status(400).json(deletedProduct);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export default deleteProduct;
