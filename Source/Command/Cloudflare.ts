/**
 * @module Cloudflare
 *
 */
/**
 * The function `Cloudflare` iterates through a list of files, checks if a specific file exists, and
 * performs certain actions based on the conditions.
 *
 * @param Files - The `files` parameter is an array of objects. Each object represents a file
 * and has the following properties:
 *
 */
export default async () =>
	await (async (Files: Files) => {
		for (const { Path, Name, File } of Files) {
			for (const [_Directory, FilesPackage] of await (
				await import("@Function/Directory.js")
			).default(
				await (
					await import("@Function/Package.js")
				).default("Cloudflare")
			)) {
				const GitHub = `${_Directory}/.github`;
				const Base = await File();

				if (Path === "/workflows/" && Name === "Cloudflare.yml") {
					for (const Package of FilesPackage) {
						const Directory = (await import("path"))
							.dirname(Package)
							.replace(_Directory, "");

						const Environment = (
							await (
								await import("@Function/Type.js")
							).default()
						).get(Package.split("/").pop());

						if (
							typeof Environment !== "undefined" &&
							Environment === "Cloudflare"
						) {
							Base.add(`
            - uses: cloudflare/wrangler-action@v3.4.1
              with:
                  apiToken: \${{ secrets.CF_API_TOKEN }}
                  accountId: \${{ secrets.CF_ACCOUNT_ID }}
                  workingDirectory: .${Directory}
`);
						}
					}
				}

				let Branch = "main";

				try {
					await (
						await import("fs/promises")
					).access(
						_Directory,
						(await import("fs/promises")).constants.F_OK
					);

					const Current = process.cwd();

					process.chdir(_Directory);

					Branch = (await import("child_process"))
						.execSync("git rev-parse --abbrev-ref HEAD")
						.toString()
						.trim();

					process.chdir(Current);
				} catch (_Error) {
					console.log(`Could not access: ${_Directory}`);
				}

				if (Base.size > 1) {
					try {
						await (
							await import("fs/promises")
						).mkdir(`${GitHub}${Path}`, {
							recursive: true,
						});
					} catch {
						console.log(`Could not create: ${GitHub}${Path}`);
					}

					try {
						await (
							await import("fs/promises")
						).writeFile(
							`${GitHub}${Path}${Name}`,
							`${[...Base].join("")}`.replaceAll(
								"$Branch$",
								Branch
							)
						);
					} catch {
						console.log(
							`Could not create workflow for: ${GitHub}/workflows/Cloudflare.yml`
						);
					}
				}
			}
		}
	})((await import("@Variable/Cloudflare.js")).default);

import type Files from "@Type/File.js";
