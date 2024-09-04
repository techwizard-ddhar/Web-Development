import express from 'express';
import zod from 'zod';
import { prismaClient } from './db';

export const app = express();

app.use(express.json());

const schema = zod.object({
    a: zod.number(),
    b: zod.number()
});

app.post('/sum', (req: express.Request, res: express.Response) => {
    const parsedInput = schema.safeParse(req.body);

    if (!parsedInput.success) {
        return res.status(411).json({
            msg: "Incorrect input"
        });
    }

    const answer = parsedInput.data.a + parsedInput.data.b;

    prismaClient.sum.create({
        data : {
            a : parsedInput.data.a,
            b : parsedInput.data.b,
            result : answer
        }
    });

    res.json({
        answer
    });
    
});
