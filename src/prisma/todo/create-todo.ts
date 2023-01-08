import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const createTodo = async (description: string, userId: string) => {
 await prisma.todo.create({
    data: {
      description,
      userId,
    }
  })
}

export default createTodo