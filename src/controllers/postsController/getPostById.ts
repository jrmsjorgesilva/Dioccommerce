import DiocommercePosts from "../../models/DiocommercePosts";
import { Request, Response } from "express";
import ForbiddenError from "../../middlewares/errors/ForbiddenError";

const getPostById = async (req: Request, res: Response) => {
  try {
    const idToBeFound = req.params.uuid;
    const response = await DiocommercePosts.findOne({ _id: idToBeFound });
    return res.status(200).json(response);
  } catch (error: any) {
    return ForbiddenError;
  }
};

export default getPostById;
