var Git_default = async () => new Set(
  [
    ...await (await import("fast-glob")).default(["**/.git"], {
      absolute: true,
      cwd: Environment.parse(process.env).Base
    })
  ].sort()
);
const { default: Environment } = await import("../Variable/Environment.js");
export {
  Environment,
  Git_default as default
};
