import { Request, Response } from "express";
import descriptionTodo from "../../prisma/todo/description-todo";

const descriptionTodoController = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  const { description } = req.body

  descriptionTodo(description, id)

  return res.status(201).send()
}

export default descriptionTodoController