import { Request, Response } from "express";
import createUser from "../../prisma/user/create-user";

const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const { name } = req.body

  createUser(name)

  return res.status(201).send()
}

export default createUserController