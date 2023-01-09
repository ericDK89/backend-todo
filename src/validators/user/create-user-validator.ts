import { Response } from "express"
import createUser from "../../prisma/user/create-user"

const createUserValidator = (name: string, res: Response) => {
  if(!name || name.trim().length <= 0) {
    return res.status(400).send("Name can't be empty")
  }

  createUser(name.toLocaleLowerCase())  

  return res.status(201).send()
}

export default createUserValidator

