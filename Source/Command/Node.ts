/**
 * @module Node
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
			for (const [_Directory, FilesPackage] of await (
				await import("@Function/Directory.js")
			).default(
				await (await import("@Function/Package.js")).default("NPM")
			)) {
				const GitHub = `${_Directory}/.github`;
				const Base = await File();

				if (Path === "/workflows/" && Name === "Node.yml") {
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
							await (await import("@Function/Type.js")).default()
						).get(Package.split("/").pop());

						try {
							if (
								typeof Environment !== "undefined" &&
								Environment === "NPM"
							) {
								const JSONPackage = JSON.parse(FilePackage);

								for (const bundle of [
									"bundledDependencies",
									"bundleDependencies",
									"dependencies",
									"devDependencies",
									"extensionDependencies",
									"optionalDependencies",
									"peerDependencies",
									"peerDependenciesMeta",
								].sort()) {
									if (
										typeof JSONPackage[bundle] !==
										"undefined"
									) {
										Base.add(`
            - uses: actions/setup-node@v4.0.2
              with:
                  node-version: \${{ matrix.node-version }}
                  cache: "pnpm"
                  cache-dependency-path: .${Directory}/pnpm-lock.yaml

            - run: pnpm install
              working-directory: .${Directory}
`);
									}
								}

								for (const Key in JSONPackage) {
									if (
										Object.prototype.hasOwnProperty.call(
											JSONPackage,
											Key
										)
									) {
										const Value = JSONPackage[Key];

										if (Key === "scripts") {
											for (const Script in Value) {
												if (
													Object.prototype.hasOwnProperty.call(
														Value,
														Script
													)
												) {
													// TODO: Rework this to have scripts in an array and checked in a foreach
													if (Script === "build") {
														Base.add(`
            - run: pnpm run build
              working-directory: .

            - uses: actions/upload-artifact@v4.3.3
              with:
                  name: .${Directory.replaceAll("/", "-")}-Node-\${{ matrix.node-version }}-Target
                  path: .${Directory}/Target
`);
													}

													if (
														Script ===
														"prepublishOnly"
													) {
														Base.add(`
            - run: pnpm run prepublishOnly
              working-directory: .

            - uses: actions/upload-artifact@v4.3.3
              with:
                  name: .${Directory.replaceAll("/", "-")}-Node-\${{ matrix.node-version }}-Target
                  path: .${Directory}/Target
`);
													}

													if (Script === "Build") {
														Base.add(`
            - run: pnpm run Build
              working-directory: .

            - uses: actions/upload-artifact@v4.3.3
              with:
                  name: .${Directory.replaceAll("/", "-")}-Node-\${{ matrix.node-version }}-Target
                  path: .${Directory}/Target
`);
													}

													if (Script === "test") {
														Base.add(`
            - run: pnpm run test
              working-directory: .${Directory}
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
							`Could not create workflow for: ${GitHub}/workflows/Node.yml`
						);
					}
				}
			}
		}
	})((await import("@Variable/Node.js")).default);

import type Files from "../Type/File.js";
