var Dependabot_default = /* @__PURE__ */ new Set([
  {
    Path: "/",
    Name: "dependabot.yml",
    File: async () => /* @__PURE__ */ new Set([
      (await readFile(
        resolve(
          `${dirname(
            fileURLToPath(import.meta.url)
          )}/../../Target/Workflow/dependabot.yml`
        ),
        "utf-8"
      )).toString()
    ])
  },
  {
    Path: "/workflows/",
    Name: "Dependabot.yml",
    File: async () => /* @__PURE__ */ new Set([
      (await readFile(
        resolve(
          `${dirname(
            fileURLToPath(import.meta.url)
          )}/../../Target/Workflow/InnerDependabot.yml`
        ),
        "utf-8"
      )).toString()
    ])
  }
]);
const { readFile } = await import("fs/promises");
const { dirname, resolve } = await import("path");
const { fileURLToPath } = await import("url");
export {
  Dependabot_default as default,
  dirname,
  fileURLToPath,
  readFile,
  resolve
};
