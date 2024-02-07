var Node_default = /* @__PURE__ */ new Set([
  {
    Path: "/workflows/",
    Name: "Node.yml",
    File: async () => /* @__PURE__ */ new Set([
      (await (await import("fs/promises")).readFile(
        (await import("path")).resolve(
          `${(await import("path")).dirname(
            (await import("url")).fileURLToPath(import.meta.url)
          )}/../../Target/Workflow/Node.yml`
        ),
        "utf-8"
      )).toString()
    ])
  }
]);
export {
  Node_default as default
};
