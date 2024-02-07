var Dispatch_default = async (repositories = []) => {
  const User = (await import("../Variable/Environment.js")).default.parse(
    process.env
  ).User;
  const Organizations = [];
  const Repositories = [];
  for (const repo of (await Request(`GET /users/${User}/repos`))?.data) {
    Repositories.push({
      owner: User,
      name: repo.name
    });
  }
  for (const org of (await Request(`GET /users/${User}/orgs`))?.data) {
    Organizations.push({
      name: org.login
    });
    for (const repo of (await Request(`GET /orgs/${org.login}/repos`))?.data) {
      Repositories.push({
        owner: org.login,
        name: repo.name
      });
    }
  }
  let pass = void 0;
  for (const { name, owner } of Repositories) {
    for (const repository of repositories) {
      if (name === repository) {
        pass = true;
      } else {
        pass = false;
      }
    }
    if (typeof pass === "undefined" || pass) {
      for (const Workflow of (await Request(`GET /repos/${owner}/${name}/actions/workflows`, {
        owner,
        repo: name
      }))?.data?.workflows) {
        await Request(
          `POST /repos/${owner}/${name}/actions/workflows/${Workflow.id}/dispatches`,
          {
            ref: "main"
          }
        );
      }
    }
  }
};
const { default: Request } = await import("../Function/Request.js");
export {
  Request,
  Dispatch_default as default
};
