var GitHub_default = async () => await (async (Files) => {
  for (const { Path, Name, File } of Files) {
    for (const [_Directory] of await (await import("../Function/Directory.js")).default(
      await (await import("../Function/Package.js")).default()
    )) {
      const GitHub = `${_Directory}/.github`;
      const Base = await File();
      if (Base.size > 0) {
        try {
          await (await import("fs/promises")).mkdir(
            `${GitHub}${Path}`,
            {
              recursive: true
            }
          );
        } catch {
          console.log(`Could not create: ${GitHub}${Path}`);
        }
        try {
          await (await import("fs/promises")).writeFile(
            `${GitHub}${Path}${Name}`,
            `${[...Base].join("")}`
          );
        } catch {
          console.log(
            `Could not create workflow for: ${GitHub}/workflows/GitHub.yml`
          );
        }
      }
    }
  }
})((await import("../Variable/GitHub.js")).default);
export {
  GitHub_default as default
};
