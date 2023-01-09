import { Request, Response } from "express";
import listUser from "../../prisma/user/list-user";
import listUserValidator from "../../validators/user/list-user-validator";

const listUserController = async (req: Request, res: Response) => {
  const { name } = req.params

  const user = await listUser(name.toLocaleLowerCase())

  listUserValidator(user, res)
}

export default listUserController
