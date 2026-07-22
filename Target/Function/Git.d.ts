export default _default;
/**
 * @module Git
 *
 */
declare function _default(): Promise<Set<string>>;
export declare const Environment: import("zod").ZodObject<{
    User: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    Base: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
    Token: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
}, import("zod/v4/core").$strip>;
