"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const databaseConfig_1 = __importDefault(require("./database/databaseConfig"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// routes
const usersRoute_1 = __importDefault(require("./routes/api/usersRoute"));
const productsRoute_1 = __importDefault(require("./routes/api/productsRoute"));
const postsRoute_1 = __importDefault(require("./routes/api/postsRoute"));
const notFoundRoute_1 = __importDefault(require("./routes/404/notFoundRoute"));
const PORT = process.env.PORT || 8000;
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: false }));
server.use((0, cors_1.default)());
server.use("/$", (req, res) => {
    res.json({ message: "hello world with Typescript" });
});
server.use("/users", usersRoute_1.default);
server.use("/products", productsRoute_1.default);
server.use("/posts", postsRoute_1.default);
server.use("/*", notFoundRoute_1.default);
(0, databaseConfig_1.default)(server);
server.listen(PORT, () => console.log(`server running on ${process.env.SERVER}:${PORT}`));
