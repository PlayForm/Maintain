var e = async () =>
	new Set(
		[
			...(await (
				await import("fast-glob")
			).default(["**/.git"], {
				absolute: !0,
				cwd: t.parse(process.env).Base,
			})),
		].sort()
	);
const { default: t } = await import("../Variable/Environment.js");
export { t as Environment, e as default };
