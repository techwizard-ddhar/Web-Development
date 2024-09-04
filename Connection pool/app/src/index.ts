import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export interface Env{
	DATABASE_URL : string
}

export default {
    async fetch(
        request: Request,
        env: Env,
        ctx: ExecutionContext
    ): Promise<Response> {
        // Initialize Prisma client with Accelerate extension
        const prisma = new PrismaClient({
            datasourceUrl: env.DATABASE_URL,
        }).$extends(withAccelerate());

        // Log the request method and URL
        const response = await prisma.log.create({
            data: {
                level: 'Info',
                message: "Hello Prisma",
                meta: {}, // Assuming meta exists in your schema
            },
        });

        // Log the Accelerate info
        console.log(JSON.stringify(response));

        // Return a response
        // return new Response(`Request method: ${request.method}!`);
		return Response.json(response);
    },
} satisfies ExportedHandler<Env>;
