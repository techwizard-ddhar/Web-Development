import { Hono } from 'hono'

const app = new Hono()

// Middleware function to check authorization
async function authMiddleware(c: any, next: any) {
    const id = c.req.header("Authorization");
    if (id) {
        const initTime = new Date().getTime();
        await next();
        const dur = (new Date().getTime() - initTime) / 1000;
        console.log(`it took ${dur} seconds`);
    } else {
        return c.json({
            msg: "You are not authorized"
        }); // Return 401 Unauthorized status code
    }
}

// Apply the authMiddleware to the specific route
app.post('/', authMiddleware, async (c) => {
    const body = await c.req.json();
    console.log(body);

    console.log(c.req.query("params"));

    return c.json({
        msg: "Hello cloudflare !!"
    });
});

export default app;
