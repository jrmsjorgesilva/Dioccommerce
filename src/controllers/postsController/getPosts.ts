import DiocommercePosts from "../../models/DiocommercePosts";
import { Request, Response } from "express";
import ForbiddenError from "../../middlewares/errors/ForbiddenError";

const getPosts = async (req: Request, res: Response) => {
  try {
    const response = await DiocommercePosts.find();
    return res.status(200).json(response);
  } catch (error: any) {
    return ForbiddenError;
  }
};

export default getPosts;
