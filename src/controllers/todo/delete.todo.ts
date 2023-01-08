import { Request, Response } from "express";
import deleteTodo from "../../prisma/todo/delete-todo";

const deleteTodoController = (req: Request, res: Response): Response => {
  const { id } = req.params

  deleteTodo(id)

  return res.status(200).send()
}

export default deleteTodoController