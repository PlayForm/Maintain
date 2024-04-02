/**
 * @module Dispatch
 *
 */
export default async (repositories: string[] | Set<string> = []) => {
	const User = (await import("../Variable/Environment.js")).default.parse(
		process.env,
	).User;

	const Organizations: {
		name: string;
	}[] = [];

	const Repositories: {
		owner: string;
		name: string;
	}[] = [];

	for (const repo of (await Request(`GET /users/${User}/repos`))?.data) {
		Repositories.push({
			owner: User,
			name: repo.name,
		});
	}

	for (const org of (await Request(`GET /users/${User}/orgs`))?.data) {
		Organizations.push({
			name: org.login,
		});

		for (const repo of (await Request(`GET /orgs/${org.login}/repos`))
			?.data) {
			Repositories.push({
				owner: org.login,
				name: repo.name,
			});
		}
	}

	// start: repos
	let pass: boolean | undefined = undefined;

	for (const { name, owner } of Repositories) {
		/* Checking if the repository is in the list of repositories. */
		for (const repository of repositories) {
			if (name === repository) {
				pass = true;
			} else {
				pass = false;
			}
		}

		if (typeof pass === "undefined" || pass) {
			// start: actions/workflows
			for (const Workflow of (
				await Request(`GET /repos/${owner}/${name}/actions/workflows`, {
					owner: owner,
					repo: name,
				})
			)?.data?.workflows) {
				await Request(
					`POST /repos/${owner}/${name}/actions/workflows/${Workflow.id}/dispatches`,
					{
						ref: "main",
					},
				);
			}
			// end: actions/workflows
		}
	}
	// end: repos
};

export const { default: Request } = await import("../Function/Request.js");
