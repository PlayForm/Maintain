import type Interface from "../Interface/Type.js";
import type Package from "../Type/Package.js";

/**
 * @module Type
 *
 */
export default (async (...[Filter = false]) => {
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
		Result.forEach((Value, Key) =>
			Value !== Filter ? Result.delete(Key) : null,
		);
	}

	return Result;
}) satisfies Interface as Interface;
