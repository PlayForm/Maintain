/**
 * @module GitHub
 *
 */
/**
 * It takes a list of files, and for each file, it checks if the file is a workflow file, and if it is,
 * it checks if the file is a node workflow file, and if it is, it checks if the file is a node
 * workflow file for a package that has dependencies, and if it is, it adds the dependencies to the
 * workflow file
 *
 * @param Files - containers
 *
 */
export default async () =>
	await (async (Files: Files) => {
		for (const { Path, Name, File } of Files) {
			for (const [_Directory] of await (
				await import("../Function/Directory.js")
			).default(
				await (await import("../Function/Package.js")).default(),
			)) {
				const GitHub = `${_Directory}/.github`;
				const Base = await File();

				if (Base.size > 0) {
					try {
						await (await import("fs/promises")).mkdir(
							`${GitHub}${Path}`,
							{
								recursive: true,
							},
						);
					} catch {
						console.log(`Could not create: ${GitHub}${Path}`);
					}

					try {
						await (await import("fs/promises")).writeFile(
							`${GitHub}${Path}${Name}`,
							`${[...Base].join("")}`,
						);
					} catch {
						console.log(
							`Could not create workflow for: ${GitHub}/workflows/GitHub.yml`,
						);
					}
				}
			}
		}
	})((await import("../Variable/GitHub.js")).default);

import type Files from "../Type/Files.js";
