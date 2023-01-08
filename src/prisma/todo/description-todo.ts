import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const descriptionTodo = async (description: string, id: string) => {
  await prisma.todo.update({
    data: {
      description
    },
    where: {
      id
    }
  })
}

export default descriptionTodo