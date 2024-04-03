/**
 * @module Dependabot
 *
 */
export default new Set([
	{
		Path: "/",
		Name: "dependabot.yml",
		File: async () =>
			new Set([
				(
					await readFile(
						resolve(
							`${dirname(
								fileURLToPath(import.meta.url),
							)}/../../Workflow/dependabot.yml`,
						),
						"utf-8",
					)
				).toString(),
			]),
	},
	{
		Path: "/workflows/",
		Name: "Dependabot.yml",
		File: async () =>
			new Set([
				(
					await readFile(
						resolve(
							`${dirname(
								fileURLToPath(import.meta.url),
							)}/../../Workflow/InnerDependabot.yml`,
						),
						"utf-8",
					)
				).toString(),
			]),
	},
]) satisfies Type;

import type Type from "../Type/File.js";

export const { readFile } = await import("fs/promises");

export const { dirname, resolve } = await import("path");

export const { fileURLToPath } = await import("url");
