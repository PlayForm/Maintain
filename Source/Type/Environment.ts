/**
 * @module Environment
 *
 */
export type Type = Zod.infer<typeof Variable>;

import type Zod from "zod";

export type { Type as default };

const { default: Variable } = await import("../Variable/Environment.js");
