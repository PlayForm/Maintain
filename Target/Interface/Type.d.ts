import type Package from "../Type/Package.js";
/**
 * @module Type
 *
 */
export default interface Interface {
    (Filter?: Package): Promise<Map<string, Package>>;
}
