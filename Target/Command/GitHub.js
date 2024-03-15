var c = async () =>
	await (async (i) => {
		for (const { Path: a, Name: e, File: r } of i)
			for (const [l] of await (
				await import("../Function/Directory.js")
			).default(
				await (await import("../Function/Package.js")).default()
			)) {
				const t = `${l}/.github`,
					o = await r();
				if (o.size > 0) {
					try {
						await (
							await import("fs/promises")
						).mkdir(`${t}${a}`, { recursive: !0 });
					} catch {
						console.log(`Could not create: ${t}${a}`);
					}
					try {
						await (
							await import("fs/promises")
						).writeFile(`${t}${a}${e}`, `${[...o].join("")}`);
					} catch {
						console.log(
							`Could not create workflow for: ${t}/workflows/GitHub.yml`
						);
					}
				}
			}
	})((await import("../Variable/GitHub.js")).default);
export { c as default };
