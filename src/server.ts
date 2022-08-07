import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import mongooseConnect from "./database/databaseConfig";
import dotenv from "dotenv";
dotenv.config();
// routes
import usersRoute from "./routes/api/usersRoute";
import productsRoute from "./routes/api/productsRoute";
import notFoundRoute from "./routes/404/notFoundRoute";

const PORT = process.env.PORT || 8000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());

server.use("/$", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});
server.use("/users", usersRoute);
server.use("/products", productsRoute);
server.use("/*", notFoundRoute);

mongooseConnect(server);

server.listen(PORT, () =>
  console.log(`server running on ${process.env.SERVER}:${PORT}`)
);
