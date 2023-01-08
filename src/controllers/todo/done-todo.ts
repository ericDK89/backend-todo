import { Request, Response } from "express";
import doneTodo from "../../prisma/todo/done-todo";

const doneTodoController = async (req: Request, res: Response): Promise<Response> => {
  const { userId, id } = req.params

  await doneTodo(userId, id)

  return res.status(201).send()
}

export default doneTodoController