var Complexity_default = async () => {
  for (const [_Directory, FilesPackage] of await (await import("../Function/Directory.js")).default(await (await import("../Function/Package.js")).default())) {
    console.log("------ Complexity ------");
    console.log(_Directory);
    console.log(FilesPackage);
  }
};
export {
  Complexity_default as default
};
