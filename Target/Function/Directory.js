var Directory_default = async (Search) => {
  const Results = /* @__PURE__ */ new Map();
  for (const _Search of Search) {
    const Directory = await (await import("./WalkUntilGit.js")).default(
      _Search
    );
    Results.set(
      Directory,
      Results.has(Directory) ? Results.get(Directory).add(_Search) : new Set([_Search].sort())
    );
  }
  return Results;
};
export {
  Directory_default as default
};
