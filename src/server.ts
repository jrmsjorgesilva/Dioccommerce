import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8000;
const server = express();

server.use(express.json());
server.use(cors());

server.use("/$", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});
server.get("/users", async (req: Request, res: Response) => {
  res.send("olha deu serto");
});

server.listen(PORT, () => `server running on ${PORT}:${process.env.SERVER}`);
