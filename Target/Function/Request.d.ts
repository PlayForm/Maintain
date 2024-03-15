/**
 * @module Request
 *
 */
declare const _default: (
	Where: string,
	With?: {},
	Type?: string
) => Promise<OctokitResponse<any, number> | any>;
export default _default;
import type { OctokitResponse } from "@octokit/types";
