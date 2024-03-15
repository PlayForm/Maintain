var l = async (i = []) => {
	const o = (await import("../Variable/Environment.js")).default.parse(
			process.env
		).User,
		n = [],
		r = [];
	for (const e of (await a(`GET /users/${o}/repos`))?.data)
		r.push({ owner: o, name: e.name });
	for (const e of (await a(`GET /users/${o}/orgs`))?.data) {
		n.push({ name: e.login });
		for (const t of (await a(`GET /orgs/${e.login}/repos`))?.data)
			r.push({ owner: e.login, name: t.name });
	}
	for (const e of n)
		await a(`PUT /orgs/${e.name}/actions/permissions`, {
			org: e.name,
			enabled_repositories: "all",
			allowed_actions: "all",
		}),
			await a(`PUT /orgs/${e.name}/actions/permissions/workflow`, {
				org: e.name,
				default_workflow_permissions: "write",
				can_approve_pull_request_reviews: !0,
			});
	let s = null;
	for (const e of r) {
		for (const t of i) e.name === t ? (s = !0) : (s = !1);
		(s === null || s) &&
			(await a(`PUT /repos/${e.owner}/${e.name}/vulnerability-alerts`),
			await a(`PUT /repos/${e.owner}/${e.name}/automated-security-fixes`),
			await a(`PATCH /repos/${e.owner}/${e.name}`, {
				has_issues: !0,
				has_projects: !1,
				has_wiki: !1,
				allow_squash_merge: !0,
				allow_merge_commit: !0,
				allow_rebase_merge: !1,
				allow_auto_merge: !0,
				delete_branch_on_merge: !0,
				allow_update_branch: !0,
				use_squash_pr_title_as_default: !0,
				allow_forking: !0,
				web_commit_signoff_required: !0,
			}),
			await a(`PUT /repos/${e.owner}/${e.name}/actions/permissions`, {
				enabled: !0,
				allowed_actions: "all",
			}),
			await a(
				`PUT /repos/${e.owner}/${e.name}/actions/permissions/workflow`,
				{
					default_workflow_permissions: "write",
					can_approve_pull_request_reviews: !0,
				}
			),
			await a(`PUT /user/starred/${e.owner}/${e.name}`),
			await a(
				`PUT /repos/${e.owner}/${e.name}/actions/permissions/access`,
				{ access_level: "organization" }
			));
	}
};
const { default: a } = await import("../Function/Request.js");
export { a as Request, l as default };
