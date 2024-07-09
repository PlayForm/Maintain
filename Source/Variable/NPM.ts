/**
 * @module NPM
 *
 */
export default new Set([
	{
		Path: "/workflows/",
		Name: "NPM.yml",
		File: async () =>
			new Set([
				(
					await (
						await import("fs/promises")
					).readFile(
						(
							await import("path")
						).resolve(
							`${(
								await import("path")
							).dirname(
								(
									await import("url")
								).fileURLToPath(import.meta.url),
							)}/../../Workflow/NPM.yml`,
						),
						"utf-8",
					)
				).toString(),
			]),
	},
]) satisfies Type;

import type Type from "../Type/File.js";
