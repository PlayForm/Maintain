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
						await import("fs/promises")
					).readFile(
						(await import("path")).resolve(
							`${(await import("path")).dirname(
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
