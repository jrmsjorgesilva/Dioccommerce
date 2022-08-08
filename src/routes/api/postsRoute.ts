import { Router, Request, Response } from "express";
import createPost from "../../controllers/postsController/createPost";
import deletePost from "../../controllers/postsController/deletePost";
import getPostById from "../../controllers/postsController/getPostById";
import getPosts from "../../controllers/postsController/getPosts";
import updatePost from "../../controllers/postsController/updatePost";

const postsRouter = Router();

// POST
postsRouter.post("/", createPost);

// GET
postsRouter.get("/", getPosts);

// GET BY UUID
postsRouter.get("/:uuid", getPostById);

// PATCH
postsRouter.patch("/:uuid", updatePost);

// DELETE
postsRouter.delete("/:uuid", deletePost);

export default postsRouter;
