import express from "express";
import zod from "zod";

const port = 3000;

const app = express();
app.use(express.json());

const schema = zod.object({
    name: zod.string().min(1, { message: "Name cannot be empty" }),
    email: zod.string().email({ message: "Invalid email format" }),
    age: zod.number().min(18, { message: "You must be at least 18 years of age" }),
});

type FinalUserSchema = zod.infer<typeof schema>

function validate(user: any) {

    const res = schema.safeParse(user);
    return res;
}

app.post("/info", (req, res) => {
    const obj = validate(req.body);

    if (!obj.success) {
        res.status(400).json({
            msg: "You are not authorized",
        });
    } else {
        const updateBody : FinalUserSchema = obj.data;
        res.json({
            msg: "User validation done",
            data: updateBody
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
