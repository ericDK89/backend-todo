import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const listUser = async (name: string) => {
 const result = await prisma.user.findMany({
  where: {
    name
  }
 })

 return result
}

export default listUser