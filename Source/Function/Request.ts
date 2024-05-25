/**
 * @module Request
 *
 */
export default async (
	Where: string,
	With = {},
	Type = "octokit",
	// biome-ignore lint/suspicious/noExplicitAny:
): Promise<OctokitResponse<any, number> | any> => {
	try {
		console.log(`Successfully ${Where}`);

		switch (Type) {
			case "octokit": {
				return await new (await import("@octokit/core")).Octokit({
					auth: (
						await import("@Variable/Environment.js")
					).default.parse(process.env).Token,
				}).request(
					Where,
					(await import("deepmerge-ts")).deepmerge(With, {
						headers: {
							"If-None-Match": (await import("etag")).default(
								Where,
							),
						},
					}),
				);
			}
		}
	} catch (_Error) {
		return {};
	}
};

import type { OctokitResponse } from "@octokit/types";
