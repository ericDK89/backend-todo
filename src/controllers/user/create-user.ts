import { Request, Response } from "express";
import createUserValidator from "../../validators/user/create-user-validator";

const createUserController = (req: Request, res: Response) => {
  const { name } = req.body

  createUserValidator(name, res)
}

export default createUserController
