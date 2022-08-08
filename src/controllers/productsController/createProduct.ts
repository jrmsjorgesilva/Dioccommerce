import DiocommerceProduct from "../../models/DiocommerceProduct";
import { Request, Response } from "express";

const createProduct = async (req: Request, res: Response): Promise<any> => {
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

    const productToBeCreated: any = {
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
    const response = await DiocommerceProduct.create(productToBeCreated);
    return res.status(201).json(response);
  } catch (error: any) {
    return res.status(404).json({ msg: error.message});
  }
};

export default createProduct;
