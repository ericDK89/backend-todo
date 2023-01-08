import { Router } from "express";
import createUserController from "../controllers/user/create-user";
import listUserController from "../controllers/user/list-user";

const userRouter = Router()

userRouter.post("/create", (req, res) => {
  createUserController(req, res)
})

userRouter.get("/list/:name", async (req, res) => {
  listUserController(req, res)
})

export default userRouter