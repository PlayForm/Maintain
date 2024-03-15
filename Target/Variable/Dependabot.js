var r = new Set([
	{
		Path: "/",
		Name: "dependabot.yml",
		File: async () =>
			new Set([
				(
					await t(
						a(
							`${e(o(import.meta.url))}/../../Target/Workflow/dependabot.yml`
						),
						"utf-8"
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
					await t(
						a(
							`${e(o(import.meta.url))}/../../Target/Workflow/InnerDependabot.yml`
						),
						"utf-8"
					)
				).toString(),
			]),
	},
]);
const { readFile: t } = await import("fs/promises"),
	{ dirname: e, resolve: a } = await import("path"),
	{ fileURLToPath: o } = await import("url");
export {
	r as default,
	e as dirname,
	o as fileURLToPath,
	t as readFile,
	a as resolve,
};
