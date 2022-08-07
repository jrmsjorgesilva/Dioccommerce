import DiocommerceProduct from "../../models/DiocommerceProduct";
import { Request, Response } from "express";

const createProduct = async (req: Request, res: Response) => {
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

    await DiocommerceProduct.create(newData);
    return res.status(201).json({ msg: 'funcionou'});
  } catch (error: any) {
    return res.status(404).json({ msg: 'error'});
  }
};

export default createProduct;
