var f = async (w = []) => {
	const c = await e(`GET /users/${i}/repos`);
	if (c)
		for (const o of c.data) t.Repositories.push({ Owner: i, Name: o.name });
	const p = await e(`GET /users/${i}/orgs`);
	if (p)
		for (const o of p.data) {
			t.Organizations.push({ Name: o.login });
			const a = await e(`GET /orgs/${o.login}/repos`);
			if (a)
				for (const n of a.data)
					t.Repositories.push({ Owner: o.login, Name: n.name });
		}
	let r = null;
	for (const o of t.Repositories) {
		for (const a of w) o.Name === a ? (r = !0) : (r = !1);
		if (r === null || r) {
			const a = await e(`GET /repos/${o.Owner}/${o.Name}/actions/runs`, {
				owner: o.Owner,
				repo: o.Name,
			});
			if (a?.data?.workflow_runs)
				for (const s of a.data.workflow_runs)
					await e(
						`DELETE /repos/${o.Owner}/${o.Name}/actions/runs/${s.id}`,
						{ owner: o.Owner, repo: o.Name, run_id: s.id }
					),
						await e(
							`DELETE /repos/${o.Owner}/${o.Name}/actions/runs/${s.id}/logs`,
							{ owner: o.Owner, repo: o.Name, run_id: s.id }
						);
			const n = await e(
				`GET /repos/${o.Owner}/${o.Name}/actions/caches`,
				{ owner: o.Owner, repo: o.Name }
			);
			if (n?.data?.actions_caches)
				for (const s of n.data.actions_caches)
					await e(
						`DELETE /repos/${o.Owner}/${o.Name}/actions/caches/${s.id}`,
						{ owner: o.Owner, repo: o.Name, cache_id: s.id }
					);
		}
	}
};
const { default: e } = await import("../Function/Request.js"),
	i = (await import("../Variable/Environment.js")).default.parse(
		process.env
	).User,
	t = { Organizations: [], Repositories: [] };
export { t as All, e as Request, i as User, f as default };
