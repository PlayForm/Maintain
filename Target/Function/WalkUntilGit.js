const i = async (...[a, e]) => {
	const t = (await import("path")).dirname(a),
		r = e ?? t;
	if (t === a) return r;
	try {
		return (
			await (
				await import("fs/promises")
			).access(`${t}/.git`, (await import("fs/promises")).constants.R_OK),
			t
		);
	} catch {
		return await i(t, r);
	}
};
var o = i;
export { i as _Function, o as default };
