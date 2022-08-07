import { Router, Response, Request } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("olha eu aqui de novo");
});

export default router;
