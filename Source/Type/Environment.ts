import type Zod from "zod";

/**
 * @module Environment
 *
 */
export type Type = Zod.infer<typeof Variable>;

export type { Type as default };

const { default: Variable } = await import("@Variable/Environment.js");
