var Clean_default = async (Repositories = []) => {
  const Get = await Request(`GET /users/${User}/repos`);
  if (Get) {
    for (const Repository of Get.data) {
      All.Repositories.push({
        Owner: User,
        Name: Repository.name
      });
    }
  }
  const Organizations = await Request(`GET /users/${User}/orgs`);
  if (Organizations) {
    for (const Organization of Organizations.data) {
      All.Organizations.push({
        Name: Organization.login
      });
      const Repositories2 = await Request(
        `GET /orgs/${Organization.login}/repos`
      );
      if (Repositories2) {
        for (const repo of Repositories2.data) {
          All.Repositories.push({
            Owner: Organization.login,
            Name: repo.name
          });
        }
      }
    }
  }
  let Pass = null;
  for (const Repository of All.Repositories) {
    for (const _Repository of Repositories) {
      if (Repository.Name === _Repository) {
        Pass = true;
      } else {
        Pass = false;
      }
    }
    if (Pass === null || Pass) {
      const Runs = await Request(
        `GET /repos/${Repository.Owner}/${Repository.Name}/actions/runs`,
        {
          owner: Repository.Owner,
          repo: Repository.Name
        }
      );
      if (Runs?.data?.workflow_runs) {
        for (const run of Runs.data.workflow_runs) {
          await Request(
            `DELETE /repos/${Repository.Owner}/${Repository.Name}/actions/runs/${run.id}`,
            {
              owner: Repository.Owner,
              repo: Repository.Name,
              run_id: run.id
            }
          );
          await Request(
            `DELETE /repos/${Repository.Owner}/${Repository.Name}/actions/runs/${run.id}/logs`,
            {
              owner: Repository.Owner,
              repo: Repository.Name,
              run_id: run.id
            }
          );
        }
      }
      const Caches = await Request(
        `GET /repos/${Repository.Owner}/${Repository.Name}/actions/caches`,
        {
          owner: Repository.Owner,
          repo: Repository.Name
        }
      );
      if (Caches?.data?.actions_caches) {
        for (const Cache of Caches.data.actions_caches) {
          await Request(
            `DELETE /repos/${Repository.Owner}/${Repository.Name}/actions/caches/${Cache.id}`,
            {
              owner: Repository.Owner,
              repo: Repository.Name,
              cache_id: Cache.id
            }
          );
        }
      }
    }
  }
};
const { default: Request } = await import("../Function/Request.js");
const User = (await import("../Variable/Environment.js")).default.parse(
  process.env
).User;
const All = {
  Organizations: [],
  Repositories: []
};
export {
  All,
  Request,
  User,
  Clean_default as default
};
