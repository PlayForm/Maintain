var Request_default = async (Where, With = {}, Type = "octokit") => {
  try {
    console.log(`Successfully ${Where}`);
    switch (Type) {
      case "octokit": {
        return await new (await import("@octokit/core")).Octokit({
          auth: (await import("../Variable/Environment.js")).default.parse(process.env).Token
        }).request(
          Where,
          (await import("deepmerge-ts")).deepmerge(With, {
            headers: {
              "If-None-Match": (await import("etag")).default(
                Where
              )
            }
          })
        );
      }
    }
  } catch (_Error) {
    return {};
  }
};
export {
  Request_default as default
};
