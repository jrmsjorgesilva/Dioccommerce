import DiocommercePosts from "../../models/DiocommercePosts";
import { Request, Response } from "express";
import ForbiddenError from "../../middlewares/errors/ForbiddenError";

const deletePost = async (req: Request, res: Response) => {
  try {
    const idToDelete = req.params.uuid;
    const response = await DiocommercePosts.deleteOne({ _id: idToDelete });
    return res.status(200).json(response);
  } catch (error: any) {
    return ForbiddenError;
  }
};

export default deletePost;
