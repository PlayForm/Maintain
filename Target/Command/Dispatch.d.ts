export default _default;
/**
 * @module Dispatch
 *
 */
declare function _default(Repository?: string[] | Set<string>): Promise<void>;
export declare const _Request: (Where: string, With?: {}, Type?: string) => Promise<import("@octokit/types").OctokitResponse<any, number> | any>;
