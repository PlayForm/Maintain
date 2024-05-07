/**
 * @module Rust
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
				await (await import("@Function/Package.js")).default("Cargo")
			)) {
				const GitHub = `${_Directory}/.github`;
				const Base = await File();

				if (Path === "/workflows/" && Name === "Rust.yml") {
					for (const Package of FilesPackage) {
						const Directory = (await import("path"))
							.dirname(Package)
							.replace(_Directory, "");

						const Environment = (
							await (await import("@Function/Type.js")).default()
						).get(Package.split("/").pop());

						if (
							typeof Environment !== "undefined" &&
							Environment === "Cargo"
						) {
							Base.add(`
            - uses: actions/cache@v4.0.2
              with:
                  path: |
                      ~/.cargo/bin/
                      ~/.cargo/registry/index/
                      ~/.cargo/registry/cache/
                      ~/.cargo/git/db/
                      target/
                      Target/
                  key: \${{ runner.os }}-cargo-\${{ hashFiles('.${Directory}/Cargo.toml') }}
            - uses: actions-rs/cargo@v1.0.3
              with:
                command: build
                args: --release --all-features --manifest-path .${Directory}/${(
					await import("path")
				).basename(Package)}
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
							`Could not create workflow for: ${GitHub}/workflows/Rust.yml`
						);
					}
				}
			}
		}
	})((await import("@Variable/Rust.js")).default);

import type Files from "../Type/File.js";
