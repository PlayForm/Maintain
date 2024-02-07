var Edit_default = async (_Repository = []) => {
  const User = (await import("../Variable/Environment.js")).default.parse(
    process.env
  ).User;
  const Organizations = [];
  const Repositories = [];
  for (const Repository of (await Request(`GET /users/${User}/repos`))?.data) {
    Repositories.push({
      owner: User,
      name: Repository.name
    });
  }
  for (const RequestOrganization of (await Request(`GET /users/${User}/orgs`))?.data) {
    Organizations.push({
      name: RequestOrganization.login
    });
    for (const Repository of (await Request(`GET /orgs/${RequestOrganization.login}/repos`))?.data) {
      Repositories.push({
        owner: RequestOrganization.login,
        name: Repository.name
      });
    }
  }
  for (const Organization of Organizations) {
    await Request(`PUT /orgs/${Organization.name}/actions/permissions`, {
      org: Organization.name,
      enabled_repositories: "all",
      allowed_actions: "all"
    });
    await Request(
      `PUT /orgs/${Organization.name}/actions/permissions/workflow`,
      {
        org: Organization.name,
        default_workflow_permissions: "write",
        can_approve_pull_request_reviews: true
      }
    );
  }
  let pass = null;
  for (const repo of Repositories) {
    for (const repository of _Repository) {
      if (repo.name === repository) {
        pass = true;
      } else {
        pass = false;
      }
    }
    if (pass === null || pass) {
      await Request(
        `PUT /repos/${repo.owner}/${repo.name}/vulnerability-alerts`
      );
      await Request(
        `PUT /repos/${repo.owner}/${repo.name}/automated-security-fixes`
      );
      await Request(`PATCH /repos/${repo.owner}/${repo.name}`, {
        has_issues: true,
        has_projects: false,
        has_wiki: false,
        allow_squash_merge: true,
        allow_merge_commit: true,
        allow_rebase_merge: false,
        allow_auto_merge: true,
        delete_branch_on_merge: true,
        allow_update_branch: true,
        use_squash_pr_title_as_default: true,
        allow_forking: true,
        web_commit_signoff_required: true
      });
      await Request(
        `PUT /repos/${repo.owner}/${repo.name}/actions/permissions`,
        {
          enabled: true,
          allowed_actions: "all"
        }
      );
      await Request(
        `PUT /repos/${repo.owner}/${repo.name}/actions/permissions/workflow`,
        {
          default_workflow_permissions: "write",
          can_approve_pull_request_reviews: true
        }
      );
      await Request(`PUT /user/starred/${repo.owner}/${repo.name}`);
      await Request(
        `PUT /repos/${repo.owner}/${repo.name}/actions/permissions/access`,
        {
          access_level: "organization"
        }
      );
    }
  }
};
const { default: Request } = await import("../Function/Request.js");
export {
  Request,
  Edit_default as default
};
