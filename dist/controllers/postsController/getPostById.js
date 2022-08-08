"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DiocommercePosts_1 = __importDefault(require("../../models/DiocommercePosts"));
const ForbiddenError_1 = __importDefault(require("../../middlewares/errors/ForbiddenError"));
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idToBeFound = req.params.uuid;
        const response = yield DiocommercePosts_1.default.findOne({ _id: idToBeFound });
        return res.status(200).json(response);
    }
    catch (error) {
        return ForbiddenError_1.default;
    }
});
exports.default = getPostById;
