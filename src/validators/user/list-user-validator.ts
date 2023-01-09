import { User } from "@prisma/client"
import { Response } from "express"

const listUserValidator = (user: User[], res: Response) => {
  if(!user) {
    return res.status(400).send("There is no user to show")
  }

  return res.status(200).json(user)
}

export default listUserValidator