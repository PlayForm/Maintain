/**
 * @module Search
 *
 */
/**
 * The function `Directory` takes a set of file globs, walks through the directories
 * until it finds a Git repository, and returns a map where the keys are the directories
 * and the values are sets of globs associated with each directory.
 *
 * @param Search is a Set of strings representing file globs. A file glob is a
 * pattern used to match file paths. For example, "*.js" would match all JavaScript
 * files in a directory. The Search parameter is a set of these file globs that will be
 * used to search for files in
 * paths and the values are sets of glob patterns associated with each directory.
 *
 */
export default async (Search: Set<string>) => {
	const Results = new Map();

	for (const _Search of Search) {
		const Directory = await (
			await import("./WalkUntilGit.js")
		).default(_Search);

		Results.set(
			Directory,
			Results.has(Directory)
				? Results.get(Directory).add(_Search)
				: new Set<string>([_Search].sort())
		);
	}

	return Results;
};
