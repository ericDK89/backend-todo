import { Request, Response } from "express"
import createTodoValidator from "../../validators/todo/create-todo-validator"

const createTodoController = (req: Request, res: Response) => {
  const { userId } = req.params
  const { description } = req.body

  createTodoValidator(description, userId, res)
}

export default createTodoController