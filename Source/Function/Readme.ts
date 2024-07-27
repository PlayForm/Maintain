/**
 * @module Readme
 *
 */
export default async () =>
	new Set<string>(
		[
			...(await (
				await import("fast-glob")
			).default(["**/README.md"], {
				absolute: true,
				cwd: (await import("@Variable/Environment.js")).default.parse(
					process.env,
				).Base,
			})),
		].sort(),
	);
