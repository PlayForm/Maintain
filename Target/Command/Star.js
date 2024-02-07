var Star_default = async () => {
  const Dependency = /* @__PURE__ */ new Set();
  for (const Package of await (await import("fast-glob")).default(
    ["**/package.json", "!**/node_modules"],
    {
      absolute: true,
      cwd: (await import("../Variable/Environment.js")).default.parse(
        process.env
      ).Base
    }
  )) {
    const _JSON = JSON.parse(
      (await (await import("fs/promises")).readFile(Package, "utf-8")).toString()
    );
    for (const Key in _JSON) {
      if (Object.prototype.hasOwnProperty.call(_JSON, Key)) {
        if (Key === "dependencies" || Key === "devDependencies") {
          for (const Package2 in _JSON[Key]) {
            if (Object.prototype.hasOwnProperty.call(
              _JSON[Key],
              Package2
            )) {
              Dependency.add(Package2);
            }
          }
        }
      }
    }
  }
  for (const _Dependency of Dependency) {
    (await import("../Function/Star.js")).default(
      (await (await fetch(`https://registry.npmjs.org/${_Dependency}`)).json()).repository.url
    );
  }
};
export {
  Star_default as default
};
