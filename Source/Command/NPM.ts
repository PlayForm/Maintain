/**
 * @module NPM
 *
 */
/**
 * This function writes workflows for npm packages based on their package.json files.
 *
 * @param Files - The `files` parameter is an array of objects containing information
 * about the files to be processed. Each object has the following properties:
 *
 */
export default async () =>
	await (async (Files: Files) => {
		for (const { Path, Name, File } of Files) {
			for (const [_Directory, FilesPackage] of await (
				await import("../Function/Directory.js")
			).default(
				await (await import("../Function/Package.js")).default("NPM")
			)) {
				const GitHub = `${_Directory}/.github`;
				const Base = await File();

				if (Path === "/workflows/" && Name === "NPM.yml") {
					for (const Package of FilesPackage) {
						const Directory = (await import("path"))
							.dirname(Package)
							.replace(_Directory, "");

						const FilePackage = (
							await (
								await import("fs/promises")
							).readFile(Package, "utf-8")
						).toString();

						const Environment = (
							await (
								await import("../Function/Type.js")
							).default()
						).get(Package.split("/").pop());

						try {
							if (
								typeof Environment !== "undefined" &&
								Environment === "NPM"
							) {
								const JSONPackage = JSON.parse(FilePackage);

								for (const key in JSONPackage) {
									if (
										Object.prototype.hasOwnProperty.call(
											JSONPackage,
											key
										)
									) {
										const values = JSONPackage[key];
										if (key === "scripts") {
											for (const scripts in values) {
												if (
													Object.prototype.hasOwnProperty.call(
														values,
														scripts
													)
												) {
													if (scripts === "build") {
														Base.add(`
            - name: Publish .${Directory}
              continue-on-error: true
              working-directory: .${Directory}
              run: |
                  npm install --legacy-peer-deps
                  npm publish --legacy-peer-deps --provenance
              env:
                  NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`);
													}

													if (
														scripts ===
														"prepublishOnly"
													) {
														Base.add(`
            - name: Publish .${Directory}
              continue-on-error: true
              working-directory: .${Directory}
              run: |
                  npm install --legacy-peer-deps
                  npm publish --legacy-peer-deps --provenance
              env:
                  NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`);
													}

													if (scripts === "Build") {
														Base.add(`
            - name: Publish .${Directory}
              continue-on-error: true
              working-directory: .${Directory}
              run: |
                  npm install --legacy-peer-deps
                  npm publish --legacy-peer-deps --provenance
              env:
                  NODE_AUTH_TOKEN: \${{ secrets.NPM_TOKEN }}
`);
													}
												}
											}
										}
									}
								}
							}
						} catch (_Error) {
							console.log(`Could not create: ${Package}`);
							console.log(_Error);
						}
					}
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
							`${[...Base].join("")}`
						);
					} catch {
						console.log(
							`Could not create workflow for: ${GitHub}/workflows/NPM.yml`
						);
					}
				}
			}
		}
	})((await import("@Variable/NPM.js")).default);

import type Files from "@Type/File.js";
