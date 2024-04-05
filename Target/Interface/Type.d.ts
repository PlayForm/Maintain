/**
 * @module Type
 *
 */
export default interface Interface {
    (Filter?: Package): Promise<Map<string, Package>>;
}
import type Package from "@Type/Package.js";
