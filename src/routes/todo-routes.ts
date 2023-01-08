import { Router } from "express";
import createTodo from "../prisma/todo/create-todo";
import deleteTodo from "../prisma/todo/delete-todo";
import doneTodo from "../prisma/todo/done-todo";
import listTodos from "../prisma/todo/list-todos";

const todoRoutes = Router()

todoRoutes.post("/create/:userId", (req, res) => {
  const { userId } = req.params
  const { description } = req.body

  createTodo(description, userId)

  return res.status(201).send()
})

todoRoutes.get("/list-all-todos/:userId", async (req, res) => {
  const { userId } = req.params

  const todos = await listTodos(userId)

  return res.status(200).json({ todos })
})

todoRoutes.patch("/done/:userId/:id", async (req, res) => {
  const { userId, id } = req.params

  await doneTodo(userId, id)

  return res.status(201).send()
})

todoRoutes.delete("/delete/:id", (req, res) => {
  const { id } = req.params

  deleteTodo(id)

  return res.status(200).send()
})

export default todoRoutes