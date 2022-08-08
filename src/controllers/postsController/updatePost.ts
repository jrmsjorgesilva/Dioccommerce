import DiocommercePosts from "../../models/DiocommercePosts";
import { Request, Response } from "express";
import ForbiddenError from "../../middlewares/errors/ForbiddenError";

const updatePost = async (req: Request, res: Response) => {
  try {
    const idToBeUpdated = req.params.uuid;
    const { userId, postId, title, body, author, postLength } = req.body;

    const postToBeUpdated = {
      userId,
      postId,
      title,
      body,
      author,
      postLength,
    };

    const response = await DiocommercePosts.updateOne(
      { _id: idToBeUpdated },
      postToBeUpdated
    );
    return res.status(201).json(response);
  } catch (error: any) {
    return ForbiddenError;
  }
};

export default updatePost;
