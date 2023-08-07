import { Router } from 'express';
import userRouter from "./userRouter.js";
import animalRouter from "./animalRouter.js";

const routes = new Router();

routes.use("/user", userRouter);
routes.use("/animals", animalRouter);

export default routes;
