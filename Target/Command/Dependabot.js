var Dependabot_default = async () => await (async (Files) => {
  for (const { Path, Name, File } of Files) {
    for (const [_Directory, FilesPackage] of await (await import("../Function/Directory.js")).default(
      await (await import("../Function/Package.js")).default()
    )) {
      const GitHub = `${_Directory}/.github`;
      const Base = await File();
      if (Path === "/") {
        for (const Package of FilesPackage) {
          const Directory = (await import("path")).dirname(Package).replace(_Directory, "");
          const Environment = (await (await import("../Function/Type.js")).default()).get(Package.split("/").pop());
          if (Environment !== "Cloudflare") {
            Base.add(`
    - package-ecosystem: "${typeof Environment !== "undefined" ? String(Environment).toLowerCase() : (() => {
              switch (Package.split(".").pop()) {
                case "csproj":
                  return "nuget";
                default:
                  return "npm";
              }
            })()}"
      directory: "${Directory ? Directory : "/"}"
      schedule:
          interval: "daily"
      versioning-strategy: ${typeof Environment !== "undefined" ? (() => {
              switch (Environment) {
                case "Cargo":
                  return "lockfile-only";
                default:
                  return "increase";
              }
            })() : "increase"}
`);
          }
        }
      }
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
            `Could not create workflow for: ${GitHub}/dependabot.yml`
          );
        }
      }
    }
  }
})((await import("../Variable/Dependabot.js")).default);
export {
  Dependabot_default as default
};
