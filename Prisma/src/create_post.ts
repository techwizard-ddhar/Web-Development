import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.post.create({
        data:{
            title: "How to train your dargon",
            content: "below or above age 18",
            published: true,
            author:{
                connect:{
                    id: 1
                }
            }
        },
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
    
  })