import zod from "zod";

const SignUpInput = zod.object({
    username : zod.string(),
    password : zod.string()
});

export type FinalUserSchema = zod.infer<typeof SignUpInput>;

