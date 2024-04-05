/**
 * @module Star
 *
 */
export default async (URL = "") => {
	if (typeof URL !== "string") {
		return;
	}

	const _URL = URL?.replace("git://", "https://")
		?.replace("https://github.com/", "")
		?.replace("git+", "")
		?.replace(".git", "");

	// start: starred
	try {
		await new (await import("@octokit/core")).Octokit({
			auth: (await import("@Variable/Environment.js")).default.parse(
				process.env
			).Token,
		}).request(`PUT /user/starred/${_URL}`);

		console.log(`Starred repository: ${_URL}`);
	} catch (_Error) {
		console.log(`Could not star repository: ${_URL}`);
	}
	// end: starred
};
