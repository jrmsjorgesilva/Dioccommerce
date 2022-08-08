"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// controllers
const createProduct_1 = __importDefault(require("../../controllers/productsController/createProduct"));
const getProductById_1 = __importDefault(require("../../controllers/productsController/getProductById"));
const getProducts_1 = __importDefault(require("../../controllers/productsController/getProducts"));
const updateProduct_1 = __importDefault(require("../../controllers/productsController/updateProduct"));
const deleteProduct_1 = __importDefault(require("../../controllers/productsController/deleteProduct"));
const productsRouter = (0, express_1.Router)();
// POST
productsRouter.post("/", createProduct_1.default);
// GET
productsRouter.get("/", getProducts_1.default);
// GET UUID
productsRouter.get("/:uuid", getProductById_1.default);
// PUT / PATCH
productsRouter.patch("/:uuid", updateProduct_1.default);
// DELETE
productsRouter.delete("/:uuid", deleteProduct_1.default);
exports.default = productsRouter;
