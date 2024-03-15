/**
 * @module Dispatch
 *
 */
declare const _default: (
	repositories?: string[] | Set<string>
) => Promise<void>;
export default _default;
export declare const Request: (
	Where: string,
	With?: {},
	Type?: string
) => Promise<any>;
