import DiocommercePosts from "../../models/DiocommercePosts";
import { Request, Response } from "express";
import ForbiddenError from "../../middlewares/errors/ForbiddenError";

const createPost = async (req: Request, res: Response) => {
  try {
    const { userId, postId, title, body, author, postLength } = req.body;

    const postToBeCreated = {
      userId,
      postId,
      title,
      body,
      author,
      postLength,
    };

    const response = await DiocommercePosts.create(postToBeCreated);
    return res.status(200).json(response);
  } catch (error: any) {
    return ForbiddenError;
  }
};

export default createPost;
