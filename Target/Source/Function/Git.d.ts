/**
 * @module Git
 *
 */
declare const _default: () => Promise<Set<string>>;
export default _default;
export declare const Environment: import("zod").ZodObject<{
    User: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    Base: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    Token: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
}, import("zod/v4/core").$strip>;
