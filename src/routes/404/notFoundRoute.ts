import { Router, Response, Request } from "express";

const notFoundRouter = Router();

notFoundRouter.get("/", async (req: Request, res: Response) => {
  res.send("Página não encontrada");
});

export default notFoundRouter;
