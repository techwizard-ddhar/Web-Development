import express from 'express';

export const app = express();

app.use(express.json());

app.post('/sum', (req : any, res : any) => {
    const a = req.body.a;
    const b = req.body.b;

    const answer = a + b;

    res.json({
        answer
    });
});
