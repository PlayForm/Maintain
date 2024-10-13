/**
 * @module Edit
 *
 */
declare const _default: (_Repository?: string[] | Set<string>) => Promise<void>;
export default _default;
export declare const Request: (
	Where: string,
	With?: {},
	Type?: string,
) => Promise<import("@octokit/types").OctokitResponse<any, number> | any>;
