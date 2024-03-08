/**
 * @module Type
 *
 */
export default interface Type {
	(Filter?: Package): Promise<Map<string, Package>>;
}

import type Package from "../Type/Package.js";
