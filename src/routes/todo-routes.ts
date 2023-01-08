import { Router } from "express";
import createTodoController from "../controllers/todo/create-todo";
import deleteTodoController from "../controllers/todo/delete.todo";
import doneTodoController from "../controllers/todo/done-todo";
import listTodosController from "../controllers/todo/list-todos";

const todoRoutes = Router()

todoRoutes.post("/create/:userId", (req, res) => {
  createTodoController(req, res)
})

todoRoutes.get("/list-all-todos/:userId", async (req, res) => {
  listTodosController(req, res)
})

todoRoutes.patch("/done/:userId/:id", async (req, res) => {
  doneTodoController(req, res)
})

todoRoutes.delete("/delete/:id", (req, res) => {
  deleteTodoController(req, res)
})

export default todoRoutes