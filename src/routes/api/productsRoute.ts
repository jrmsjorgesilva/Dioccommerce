import { Router, Response, Request } from "express";

const productsRouter = Router();

// GET
productsRouter.get("/", async (req: Request, res: Response) => {
  res.send("Comprar é vida");
});

export default productsRouter;
