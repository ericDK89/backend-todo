import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const createUser = async (name: string) => {
  await prisma.user.create({
    data: {
      name
    }
  })
}

export default createUser