var n = async () => {
	const o = new Set();
	for (const a of await (
		await import("fast-glob")
	).default(["**/package.json", "!**/node_modules"], {
		absolute: !0,
		cwd: (await import("../Variable/Environment.js")).default.parse(
			process.env
		).Base,
	})) {
		const t = JSON.parse(
			(
				await (await import("fs/promises")).readFile(a, "utf-8")
			).toString()
		);
		for (const e in t)
			if (
				Object.prototype.hasOwnProperty.call(t, e) &&
				(e === "dependencies" || e === "devDependencies")
			)
				for (const r in t[e])
					Object.prototype.hasOwnProperty.call(t[e], r) && o.add(r);
	}
	for (const a of o)
		(await import("../Function/Star.js")).default(
			(await (await fetch(`https://registry.npmjs.org/${a}`)).json())
				.repository.url
		);
};
export { n as default };
