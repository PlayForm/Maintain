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
						await import("fs/promises")
					).readFile(
						(await import("path")).resolve(
							`${(await import("path")).dirname(
								(await import("url")).fileURLToPath(
									import.meta.url
								)
							)}/../../Workflow/Cloudflare.yml`
						),
						"utf-8"
					)
				).toString(),
			]),
	},
]) satisfies Type;

import type Type from "@Type/File.js";
