/**
 * @module Dependabot
 *
 */
declare const _default: Set<{
    Path: string;
    Name: string;
    File: () => Promise<Set<string>>;
}>;
export default _default;
export declare const readFile: typeof import("node:fs/promises").readFile;
export declare const dirname: typeof import("node:path").dirname, resolve: typeof import("node:path").resolve;
export declare const fileURLToPath: typeof import("node:url").fileURLToPath;
