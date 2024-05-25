/**
 * @module Git
 *
 */
export default async () =>
	new Set<string>(
		[
			...(await (
				await import("fast-glob")
			).default(["**/.git"], {
				absolute: true,
				cwd: Environment.parse(process.env).Base,
			})),
		].sort(),
	);

export const { default: Environment } = await import(
	"@Variable/Environment.js"
);
