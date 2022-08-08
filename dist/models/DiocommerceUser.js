"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DiocommerceUserSchema = new mongoose_1.default.Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    age: Number,
    isPayer: Boolean,
});
const DiocommerceUser = mongoose_1.default.model("DiocommerceUser", DiocommerceUserSchema);
exports.default = DiocommerceUser;
