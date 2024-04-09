/**
 * @module Type
 *
 */
export default (async (...[Filter = false]: Parameters<Interface>) => {
	const Result = new Map<string, Package>();

	Result.set("*.csproj", "Nuget");
	Result.set("Cargo.toml", "Cargo");
	Result.set("composer.json", "Composer");
	Result.set("Gemfile", "Bundler");
	Result.set("package.json", "NPM");
	Result.set("packages.config", "Nuget");
	Result.set("requirements.txt", "PIP");
	Result.set("wrangler.toml", "Cloudflare");

	if (Filter) {
		Result.forEach((value, key) => {
			if (value !== Filter) {
				Result.delete(key);
			}
		});
	}

	return Result;
}) satisfies Interface as Interface;

import type Interface from "@Interface/Type.js";
import type Package from "@Type/Package.js";
