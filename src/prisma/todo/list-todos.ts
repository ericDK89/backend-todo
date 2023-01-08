import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const listTodos = async (userId?: string) => {
  const result = await prisma.todo.findMany({
    where: {
      userId: userId
    }
  })

  const todoInfo = result.map(item => {
    const data = {
      description: item.description,
      done: item.done
    }

    return data
  })

  return todoInfo
}

export default listTodos