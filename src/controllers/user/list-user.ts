import { Request, Response } from "express";
import listUser from "../../prisma/user/list-user";

const listUserController = async (req: Request, res: Response): Promise<Response> => {
  const { name } = req.params

  const user = await listUser(name)

  return res.status(200).json(user)
}

export default listUserController