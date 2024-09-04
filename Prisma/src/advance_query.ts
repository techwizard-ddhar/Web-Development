import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const res = await prisma.user.findMany({
            where:{
                email:{
                    endsWith:'prisma.io'
                }
                // posts:{
                //     some:{
                //         published:true
                //     }
                // }
            },
            include:{
                posts:{
                    where:{
                        published:true
                    }
                }
            }
      });

      console.log(res);
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