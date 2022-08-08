"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DiocommercePostsSchema = new mongoose_1.default.Schema({
    userId: String,
    postId: String,
    title: String,
    body: String,
    author: String,
});
const DiocommercePosts = mongoose_1.default.model("DiocommercePosts", DiocommercePostsSchema);
exports.default = DiocommercePosts;
