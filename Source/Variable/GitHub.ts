import type Type from "../Type/File.js";

/**
 * @module Rust
 *
 */
export default new Set([
	{
		Path: "/workflows/",
		Name: "GitHub.yml",
		File: async () =>
			new Set([
				(
					await (
						await import("fs/promises")
					).readFile(
						(await import("path")).resolve(
							`${(await import("path")).dirname(
								(await import("url")).fileURLToPath(
									import.meta.url,
								),
							)}/../../Workflow/GitHub.yml`,
						),
						"utf-8",
					)
				).toString(),
			]),
	},
]) satisfies Type;
