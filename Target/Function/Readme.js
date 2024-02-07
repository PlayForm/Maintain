var Readme_default = async () => new Set(
  [
    ...await (await import("fast-glob")).default(["**/README.md"], {
      absolute: true,
      cwd: (await import("../Variable/Environment.js")).default.parse(process.env).Base
    })
  ].sort()
);
export {
  Readme_default as default
};
