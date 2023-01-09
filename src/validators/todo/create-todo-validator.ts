import { Response } from "express"
import createTodo from "../../prisma/todo/create-todo"

const createTodoValidator = (description: string, userId: string, res: Response): Response => {
  if(!description || description.trim().length <= 0) {
    return res.status(400).send("Todo could not be created")
  }

  createTodo(description, userId)

  return res.status(201).send()
}

export default createTodoValidator