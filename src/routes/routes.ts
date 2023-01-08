import { Router } from "express";
import todoRoutes from "./todo-routes";
import userRouter from "./user-routes";

const routes = Router()

routes.use("/user", userRouter)
routes.use("/todo", todoRoutes)

export default routes