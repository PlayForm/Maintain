/**
 * @module WalkUntilGit
 *
 */
export const _Function = (async (...[Search, From]: Parameters<Interface>) => {
	const Path = (await import("path")).dirname(Search);
	const Original = From ?? Path;

	if (Path === Search) {
		return Original;
	}

	try {
		await (await import("fs/promises")).access(
			`${Path}/.git`,
			(await import("fs/promises")).constants.R_OK,
		);

		return Path;
	} catch (_Error) {
		return await _Function(Path, Original);
	}
}) satisfies Interface as Interface;

export default _Function;

import type Interface from "../Interface/WalkUntilGit.js";
