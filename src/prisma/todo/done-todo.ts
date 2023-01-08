import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
  
const doneTodo = async (userId: string, id: string) => {
  const todo = await prisma.todo.findMany({
    where: {
      userId,
      id
    }
  })

  const isDone = todo.map(item => {
    return item.done
  })

  await prisma.todo.update({
    data: {
      done: !isDone[0]
    },
    where: {
      id
    }
  })
}

export default doneTodo