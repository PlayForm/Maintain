/**
 * @module Rust
 *
 */
/**
 * It takes a list of files, and for each file, it checks if the file is a workflow file, and if it is,
 * it checks if the file is a node workflow file, and if it is, it checks if the file is a node
 * workflow file for a package that has dependencies, and if it is, it adds the dependencies to the
 * workflow file
 *
 * @param Files - containers
 *
 */
declare const _default: () => Promise<void>;
export default _default;
