# [Maintain] 🔧

Maintain GitHub repositories and automate common tasks related to project
upkeep, CI/CD workflows, and dependency management.

## Installation 🚀

Using NPM

```sh
npm install -g @playform/maintain
```

Using Yarn

```sh
yarn global add @playform/maintain
```

Using PNPM

```sh
pnpm install -g @playform/maintain
```

or direct usage:

Using NPM

```sh
npx @playform/maintain < Command > [Arguments...]
```

Using Yarn

```sh
yarn @playform/maintain < Command > [Arguments...]
```

Using PNPM

```sh
pnpx @playform/maintain < Command > [Arguments...]
```

## CLI Usage:

The CLI is invoked using the `Maintain` command, followed by a specific
subcommand.

```sh
Maintain < Command > [Arguments...]
```

### Commands:

**`Clean [Repositories...]`**

Deletes GitHub Actions workflow runs, their logs, and actions caches for
specified repositories. If no repositories are listed, it attempts to clean all
repositories accessible to the configured user.

- **Arguments:**
    - `[Repositories...]`: (Optional) A list of repository names to clean.
- **Example:**
    ```sh
    Maintain Clean MyRepo AnotherRepo
    Maintain Clean # Cleans all accessible repositories
    ```

**`Dependabot`**

Scans project directories (identified by various package manifest files like
`package.json`, `Cargo.toml`, etc.) and generates/updates
`.github/dependabot.yml` configuration files. It also creates a supporting
`.github/workflows/Dependabot.yml` GitHub Actions workflow. This helps in
keeping project dependencies up-to-date automatically.

- **Example:**
    ```sh
    Maintain Dependabot
    ```

**`Dispatch [Repositories...]`**

Triggers `workflow_dispatch` events for all workflows found in the specified
repositories. If no repositories are listed, it attempts to dispatch events for
all repositories accessible to the configured user. The dispatch is triggered on
a ref named "Current".

- **Arguments:**
    - `[Repositories...]`: (Optional) A list of repository names to dispatch
      workflow events for.
- **Example:**
    ```sh
    Maintain Dispatch MyRepo AnotherRepo
    Maintain Dispatch # Dispatches for all accessible repositories
    ```

**`Edit [Repositories...]`**

Configures a wide range of settings for your GitHub organizations and
repositories. This includes enabling vulnerability alerts, automated security
fixes, adjusting merge strategies (e.g., allow squash merge, auto-merge, delete
branch on merge), fork settings, requiring web commit signoffs, and setting
default permissions for GitHub Actions at both repository and organization
levels. Applies to specified repositories or all accessible ones.

- **Arguments:**
    - `[Repositories...]`: (Optional) A list of repository names to edit.
- **Example:**
    ```sh
    Maintain Edit MyRepo AnotherRepo
    Maintain Edit # Edits settings for all accessible repositories and organizations
    ```

**`Node`**

Generates or updates a `.github/workflows/Node.yml` GitHub Actions workflow for
projects using Node.js (identified by `package.json` files). The workflow
configures Node.js, installs dependencies using `pnpm` (with caching for
`pnpm-lock.yaml`), and includes steps for common npm scripts like `build`,
`test`, and `prepublishOnly`. Build artifacts from `./Target` (if a build script
is present) are uploaded.

- **Example:**
    ```sh
    Maintain Node
    ```

**`Cloudflare`**

Generates or updates a `.github/workflows/Cloudflare.yml` GitHub Actions
workflow for projects intended for Cloudflare deployment (identified by
`wrangler.toml` files). It sets up the `cloudflare/wrangler-action` for
deployments.

- **Example:**
    ```sh
    Maintain Cloudflare
    ```

**`NPM`**

Generates or updates a `.github/workflows/NPM.yml` GitHub Actions workflow for
Node.js projects that publish packages to NPM. If `build`, `prepublishOnly`, or
`Build` scripts are found in `package.json`, it adds steps to publish the
package using `npm publish --legacy-peer-deps --ignore-scripts`.

- **Example:**
    ```sh
    Maintain NPM
    ```

**`Rust`**

Generates or updates a `.github/workflows/Rust.yml` GitHub Actions workflow for
Rust projects (identified by `Cargo.toml` files). The workflow includes steps
for caching Cargo dependencies and building the project in release mode
(`cargo build --release --all-features`).

- **Example:**
    ```sh
    Maintain Rust
    ```

**`GitHub`**

Generates or updates a generic `.github/workflows/GitHub.yml` GitHub Actions
workflow. This workflow can be used for general CI purposes across your
repositories.

- **Example:**
    ```sh
    Maintain GitHub
    ```

**`Workflow`**

A meta-command that executes all individual workflow generation commands:
`Dependabot`, `Node`, `Cloudflare`, `NPM`, `Rust`, and `GitHub`. This is useful
for setting up all standard workflows in a project.

- **Example:**
    ```sh
    Maintain Workflow
    ```

**`Star`**

Scans all `package.json` files found within the `Base` directory (see `.env`
configuration), extracts all NPM dependencies (both `dependencies` and
`devDependencies`), and attempts to star their corresponding GitHub
repositories.

- **Example:**
    ```sh
    Maintain Star
    ```

**`Complexity [files...]`** Scans specified files or project directories and
logs package file information. (Note: Advanced complexity analysis features may
be under development, current primary function is discovery and logging of
project structure related to package files).

- **Arguments:**
    - `[files...]`: (Optional) A list of files or globs to scan.
- **Example:**
    ```sh
    Maintain Complexity "src/**/*.ts"
    Maintain Complexity # Scans based on located package files
    ```

## .env Configuration

Create a `.env` file in the root directory where you run `Maintain` or ensure
these environment variables are set:

```sh
# Your GitHub username.
# Used by: Clean, Dispatch, Edit.
User="YourGitHubUsername"

# The base directory for operations like scanning for package.json files.
# Defaults to the current working directory.
# Used by: Star, and all workflow generation commands (Dependabot, Node, Cloudflare, NPM, Rust, GitHub, Complexity).
Base="/path/to/your/projects_root_or_monorepo_root"

# Your GitHub Personal Access Token (PAT) with appropriate permissions.
# (e.g., repo, workflow, admin:org for organization edits).
# Used by: Clean, Dispatch, Edit, Star.
Token="YourGitHubPAT"
```

## Links

- **Project Repository:** [Maintain]
- **NPM Package:** [@playform/maintain]

[Maintain]: https://GitHub.Com/PlayForm/Maintain.git
[@playform/maintain]: https://www.npmjs.com/package/@playform/maintain
