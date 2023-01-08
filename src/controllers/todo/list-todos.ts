import { Request, Response } from "express";
import listTodos from "../../prisma/todo/list-todos";

const listTodosController = async (req: Request, res: Response): Promise<Response> => {
  const { userId } = req.params

  const todos = await listTodos(userId)

  return res.status(200).json({ todos })
}

export default listTodosController