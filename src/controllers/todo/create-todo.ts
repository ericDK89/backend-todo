import { Request, Response } from "express"
import createTodo from "../../prisma/todo/create-todo"

const createTodoController = (req: Request, res: Response): Response => {
  const { userId } = req.params
  const { description } = req.body

  createTodo(description, userId)

  return res.status(201).send()
}

export default createTodoController