(await import("dotenv")).config();

export const { string } = await import("zod");

/**
 * @module Environment
 *
 */
export default (await import("zod")).object({
	User: string().optional().default(""),
	Base: string()
		.optional()
		.default((await import("process")).cwd()),
	Token: string().optional().default(""),
});
