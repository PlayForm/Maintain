export declare const string: (params?: ({
    errorMap?: import("zod").ZodErrorMap | undefined;
    invalid_type_error?: string | undefined;
    required_error?: string | undefined;
    description?: string | undefined;
} & {
    coerce?: true | undefined;
}) | undefined) => import("zod").ZodString;
/**
 * @module Environment
 *
 */
declare const _default: import("zod").ZodObject<{
    User: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    Base: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    Token: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
}, "strip", import("zod").ZodTypeAny, {
    User: string;
    Base: string;
    Token: string;
}, {
    User?: string | undefined;
    Base?: string | undefined;
    Token?: string | undefined;
}>;
export default _default;
