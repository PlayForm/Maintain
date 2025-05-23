/**
 * @module Dispatch
 *
 */
export default async (Repository: string[] | Set<string> = []) => {
	const User = (await import("@Variable/Environment.js")).default.parse(
		process.env,
	).User;

	const Organizations: {
		name: string;
	}[] = [];

	const Repositories: {
		owner: string;
		name: string;
	}[] = [];

	let Current = 1;
	const _Page = 20;

	for (let Page = 0; Page < 50000; Page += _Page) {
		const Request = (
			await _Request(
				`GET /users/${User}/repos?page=${Current}&per_page=${Page}`,
			)
		)?.data;

		for (const Repository of Request) {
			Repositories.push({
				owner: User,
				name: Repository.name,
			});
		}

		Current++;

		if (Request.length < _Page) {
			break;
		}
	}

	for (const Organization of (await _Request(`GET /users/${User}/orgs`))
		?.data) {
		Organizations.push({
			name: Organization.login,
		});

		let Current = 1;
		const _Page = 20;

		for (let Page = 0; Page < 50000; Page += _Page) {
			const Request = (
				await _Request(
					`GET /orgs/${Organization.login}/repos?page=${Current}&per_page=${Page}`,
				)
			)?.data;

			for (const Repository of Request) {
				Repositories.push({
					owner: Organization.login,
					name: Repository.name,
				});
			}

			Current++;

			if (Request.length < _Page) {
				break;
			}
		}
	}

	// start: repos
	// biome-ignore lint/nursery/noEvolvingTypes:
	let Pass = null;

	for (const { name, owner } of Repositories) {
		/* Checking if the repository is in the list of repositories. */
		for (const repository of Repository) {
			if (name === repository) {
				Pass = true;
			} else {
				Pass = false;
			}
		}

		if (Pass === null || Pass) {
			// start: actions/workflows
			for (const Workflow of (
				await _Request(
					`GET /repos/${owner}/${name}/actions/workflows`,
					{
						owner: owner,
						repo: name,
					},
				)
			)?.data?.workflows) {
				await _Request(
					`POST /repos/${owner}/${name}/actions/workflows/${Workflow.id}/dispatches`,
					{
						ref: "Current",
					},
				);
			}
			// end: actions/workflows
		}
	}
	// end: repos
};

export const { default: _Request } = await import("@Function/Request.js");
