import { Request, Response } from "express";
import DiocommerceProduct from "../../models/DiocommerceProduct";

const updateProduct = async (req: Request, res: Response) => {
  try {
    const idToUpdate = req.params.uuid;

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

    const productToUpdate = {
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

    const updatedProduct = await DiocommerceProduct.updateOne(
      { _id: idToUpdate },
      productToUpdate
    );

    return res.status(200).json(updatedProduct);
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export default updateProduct;
