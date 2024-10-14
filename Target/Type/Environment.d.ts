import type Zod from "zod";
/**
 * @module Environment
 *
 */
export type Type = Zod.infer<typeof Variable>;
export type { Type as default };
declare const Variable: Zod.ZodObject<{
    User: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
    Base: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
    Token: Zod.ZodDefault<Zod.ZodOptional<Zod.ZodString>>;
}, "strip", Zod.ZodTypeAny, {
    User: string;
    Base: string;
    Token: string;
}, {
    User?: string | undefined;
    Base?: string | undefined;
    Token?: string | undefined;
}>;
