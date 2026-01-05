import type Type from "../Type/File.js";

/**
 * @module Cloudflare
 *
 */
export default new Set([
	{
		Path: "/workflows/",
		Name: "Cloudflare.yml",
		File: async () =>
			new Set([
				(
					await (
						await import("node:fs/promises")
					).readFile(
						(await import("node:path")).resolve(
							`${(await import("node:path")).dirname(
								(await import("node:url")).fileURLToPath(
									import.meta.url,
								),
							)}/../../Workflow/Cloudflare.yml`,
						),
						"utf-8",
					)
				).toString(),
			]),
	},
]) satisfies Type;
