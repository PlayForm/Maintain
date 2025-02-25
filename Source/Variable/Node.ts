import type Type from "../Type/File.js";

/**
 * @module Node
 *
 */
export default new Set([
	{
		Path: "/workflows/",
		Name: "Node.yml",
		File: async () =>
			new Set([
				(
					await (
						await import("node:fs/promises")
					).readFile(
						(await import("node:path")).resolve(
							`${(await import("node:path")).dirname(
								(await import("url")).fileURLToPath(
									import.meta.url,
								),
							)}/../../Workflow/Node.yml`,
						),
						"utf-8",
					)
				).toString(),
			]),
	},
]) satisfies Type;
