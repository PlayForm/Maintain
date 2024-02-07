const _Function = async (...[Search, From]) => {
  const Path = (await import("path")).dirname(Search);
  const Original = From ?? Path;
  if (Path === Search) {
    return Original;
  }
  try {
    await (await import("fs/promises")).access(
      `${Path}/.git`,
      (await import("fs/promises")).constants.R_OK
    );
    return Path;
  } catch (_Error) {
    return await _Function(Path, Original);
  }
};
var WalkUntilGit_default = _Function;
export {
  _Function,
  WalkUntilGit_default as default
};
