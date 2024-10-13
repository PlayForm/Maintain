import type { CommandOptions } from "commander";

/**
 * @module Command
 *
 */
export declare const Variable: Set<{
	Name: string;
	Opts?: CommandOptions;
	Type?: "Workflow";
	Description?: string;
	Arguments?: Set<{
		Name: string;
		Description?: string;
		Value?: any;
	}>;
	Action: (...args: any[]) => Promise<void>;
}>;
export default Variable;
