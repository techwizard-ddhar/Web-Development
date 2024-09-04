import zod from "zod";
declare const SignUpInput: zod.ZodObject<{
    username: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export type FinalUserSchema = zod.infer<typeof SignUpInput>;
export {};
