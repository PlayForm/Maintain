var Type_default = async (...[Filter = false]) => {
  const Result = /* @__PURE__ */ new Map();
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
};
export {
  Type_default as default
};
