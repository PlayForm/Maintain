/// <reference types="node" />
/// <reference types="node" />
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
export declare const readFile: typeof import("fs/promises").readFile;
export declare const dirname: (path: string) => string, resolve: (...paths: string[]) => string;
export declare const fileURLToPath: typeof import("url").fileURLToPath;
