"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createPost_1 = __importDefault(require("../../controllers/postsController/createPost"));
const deletePost_1 = __importDefault(require("../../controllers/postsController/deletePost"));
const getPostById_1 = __importDefault(require("../../controllers/postsController/getPostById"));
const getPosts_1 = __importDefault(require("../../controllers/postsController/getPosts"));
const updatePost_1 = __importDefault(require("../../controllers/postsController/updatePost"));
const postsRouter = (0, express_1.Router)();
// POST
postsRouter.post("/", createPost_1.default);
// GET
postsRouter.get("/", getPosts_1.default);
// GET BY UUID
postsRouter.get("/:uuid", getPostById_1.default);
// PATCH
postsRouter.patch("/:uuid", updatePost_1.default);
// DELETE
postsRouter.delete("/:uuid", deletePost_1.default);
exports.default = postsRouter;
