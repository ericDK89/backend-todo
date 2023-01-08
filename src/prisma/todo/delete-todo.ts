import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const deleteTodo = async (id: string) => {
  await prisma.todo.delete({
    where: {
      id
    }
  })
}

export default deleteTodo