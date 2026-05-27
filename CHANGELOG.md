## 0.2.2

### Change

- Bumped version from 0.2.1 to 0.2.2 in `package.json`

## 0.2.1

### Add

- Registered `Auto.yml` in `Source/Variable/GitHub.ts` so `Maintain Workflow`
  now syncs it to all discovered repos

### Change

- Updated dependencies:
    - Bump `@types/node` from 25.7.0 to 25.9.1
    - Add `esbuild` 0.28.0 as a dev dependency
- Updated GitHub Actions versions across workflow files:
    - Bump `ad-m/github-push-action` from v1.1.0 to v1.3.0 in `Auto.yml`
    - Bump `github/codeql-action/init` from v4.35.4 to v4.36.0 in `codeql.yml`
    - Bump `github/codeql-action/analyze` from v4.35.4 to v4.36.0 in
      `codeql.yml`
    - Bump `pnpm/action-setup` from v6.0.7 to v6.0.8 in `codeql.yml` and
      `Node.yml`
    - Bump `cloudflare/wrangler-action` from v3.15.0 to v4.0.0 in `Version.yml`
- Fixed Dependabot auto-approve workflow (`InnerDependabot.yml`) to use
  `secrets.GITHUB_TOKEN` instead of `secrets.DEPENDABOT_TOKEN`, and tightened
  the job condition to also check `github.event.pull_request.user.login`
- Improved `Update.sh`:
    - Scoped `find` to skip `node_modules`, `vendor`, `dist`, `target`, `.git`,
      `.next`, and `.venv` instead of scanning all files from the project root
    - Prefixed all shell commands with `\` to bypass aliases

## 0.2.0

### Change

- Bumped version from 0.1.9 to 0.2.0 in `package.json`
- Updated dependencies:
    - Bump `dotenv` from 17.4.1 to 17.4.2
    - Bump `@types/node` from 25.5.2 to 25.6.2
- Updated GitHub Actions versions across workflow files:
    - Bump `cloudflare/wrangler-action` from v3.14.1 to v3.15.0 in `Version.yml`
    - Bump `actions/upload-artifact` from v7.0.0 to v7.0.1 in `Version.yml`
    - Bump `actions/cache` from v5.0.4 to v5.0.5 in `Version.yml`
    - Bump `actions/setup-node` from v6.3.0 to v6.4.0 in `Version.yml`,
      `NPM.yml`, `codeql.yml`, and `Node.yml`
    - Bump `pnpm/action-setup` from v5.0.0 to v6.0.7 in `Node.yml` and
      `codeql.yml`
    - Bump `github/codeql-action/init` from v4.35.1 to v4.35.4 in `codeql.yml`
    - Bump `github/codeql-action/analyze` from v4.35.1 to v4.35.4 in
      `codeql.yml`
    - Bump `ad-m/github-push-action` from v1.0.0 to v1.1.0 in `Auto.yml`
    - Bump `pozil/auto-assign-issue` from v2.2.0 to v3.0.0 in `GitHub.yml`
    - Bump `dependabot/fetch-metadata` from v3.0.0 to v3.1.0 in
      `InnerDependabot.yml`

## 0.1.9

### Add

- Added TypeScript declaration file for ESBuild configuration
  (`Source/Configuration/ESBuild/Maintain.d.ts`)
- Added `Workflow/Version.yml` as a static version registry for GitHub Actions,
  read automatically by `Source/Fetch.sh`

### Change

- Updated homepage URL in `package.json` from `#readme` anchor to
  `?tab=readme-ov-file`
- Updated dependencies:
    - Bump `commander` from 14.0.2 to 14.0.3
    - Bump `dotenv` from 17.2.3 to 17.4.1
    - Bump `zod` from 4.3.5 to 4.3.6
    - Bump `@playform/build` from 0.2.6 to 0.3.1
    - Bump `@types/node` from 25.0.3 to 25.5.2
- Fixed import path in `Source/Class/Maintain.ts` from path alias
  `@Variable/Command.js` to relative `../Variable/Command.js`
- Refactored `Source/Fetch.sh` to extract action versions from local workflow
  YAML files via `grep`/`sed` instead of fetching from the GitHub API
- Added `rootDir: "./Source"` to `tsconfig.json`
- Updated GitHub Actions versions:
    - Bump `actions/checkout` from v6.0.1 to v6.0.2 across all workflow files
    - Bump `actions/setup-node` from v6.1.0 to v6.3.0 in `codeql.yml` and
      `NPM.yml`
    - Bump `github/codeql-action/init` from v4.31.9 to v4.35.1 in `codeql.yml`
    - Bump `github/codeql-action/analyze` from v4.31.9 to v4.35.1 in
      `codeql.yml`
    - Bump `pnpm/action-setup` from v4.2.0 to v5.0.0 in `Node.yml` and
      `codeql.yml`
    - Bump `dependabot/fetch-metadata` from v2.5.0 to v3.0.0 in
      `InnerDependabot.yml`

## 0.1.8

### Add

- Added dynamic GitHub Actions version management using environment variables
- Added ESBuild configuration files (`Maintain.js` and `Maintain.ts`) for build
  process
- Added shell scripts for fetching latest action versions (`Fetch.sh`, `Run.sh`,
  `prepublishOnly.sh`)
- Added `Update.sh` script for automatically updating GitHub Actions versions in
  workflow files
- Added support for dynamically injecting action versions via `process.env`
  variables

### Remove

- Removed `.gitignore` file
- Removed `Action.sh` utility script

### Change

- Updated URLs in `package.json` to use lowercase `https://` scheme
- Updated dependencies:
    - Bump `@octokit/core` from 6.1.5 to 7.0.6
    - Bump `commander` from 13.1.0 to 14.0.2
    - Bump `dotenv` from 16.5.0 to 17.2.3
    - Bump `zod` from 3.24.4 to 4.3.5
    - Bump `@octokit/types` from 14.0.0 to 16.0.0
    - Bump `@playform/build` from 0.2.4 to 0.2.6
    - Bump `@types/etag` from 1.8.3 to 1.8.4
    - Bump `@types/node` from 22.15.15 to 25.0.3
- Updated build scripts in `package.json`:
    - Changed `Run` script from `Build 'Source/**/*.ts' --Watch` to
      `sh Source/Run.sh`
    - Changed `prepublishOnly` script from `Build 'Source/**/*.ts'` to
      `sh Source/prepublishOnly.sh`
- Updated GitHub Actions versions:
    - Bump `actions/checkout` from v4.2.2 to v6.0.1 across all workflow files
    - Bump `actions/setup-node` from v4.4.0 to v6.1.0 in `Node.ts`, `NPM.yml`,
      and `codeql.yml`
    - Bump `actions/upload-artifact` from v4.6.2 to v6.0.0 in `Node.ts`
    - Bump `actions/cache` from v4.2.3 to dynamic version in `Rust.ts`
    - Bump `actions-rs/cargo` from v1.0.3 to dynamic version in `Rust.ts`
    - Bump `cloudflare/wrangler-action` from v3.14.1 to dynamic version in
      `Cloudflare.ts`
    - Bump `github/codeql-action/init` from v3.28.17 to v4.31.9 in `codeql.yml`
    - Bump `github/codeql-action/analyze` from v3.28.17 to v4.31.9 in
      `codeql.yml`
    - Bump `pnpm/action-setup` from v4.1.0 to v4.2.0 in `Node.yml` and
      `codeql.yml`
    - Bump `dependabot/fetch-metadata` from v2.3.0 to v2.4.0 in
      `InnerDependabot.yml`
    - Bump `ad-m/github-push-action` from `master` to v1.0.0 in `Auto.yml`
- Replaced hardcoded action versions with dynamic environment variable
  references in workflow generation
- Changed variable declarations from `let` to `const` in `Dispatch.ts` for
  improved immutability
- Enhanced error handling and validation in version fetching scripts

## 0.1.7

### Change

- Bumped version from 0.1.6 to 0.1.7 in `package.json`
- Updated contact email from `Source/Open@PlayForm.LTD` to
  `Source/Open@PlayForm.Cloud`
- Updated organization URL from `HTTPS://PlayForm.LTD` to
  `HTTPS://PlayForm.Cloud`
- Updated dependencies:
    - Bump `@octokit/core` from 6.1.4 to 6.1.5
    - Bump `dotenv` from 16.4.7 to 16.5.0
    - Bump `zod` from 3.24.2 to 3.24.4
    - Bump `@octokit/types` from 13.10.0 to 14.0.0
    - Bump `@playform/build` from 0.2.2 to 0.2.4
    - Bump `@types/node` from 22.14.0 to 22.15.15
- Updated GitHub Actions:
    - Bump `actions/setup-node` from v4.3.0 to v4.4.0 in `Node.ts`, `NPM.yml`,
      and `codeql.yml`
    - Bump `github/codeql-action/init` from v3.28.13 to v3.28.17 in `codeql.yml`
    - Bump `github/codeql-action/analyze` from v3.28.13 to v3.28.17 in
      `codeql.yml`
- Updated git config user email in `Auto.yml` from `auto@playform.cloud` to
  `Commit@PlayForm.Cloud`

## 0.1.6

### Add

- Added new Auto workflow for automated scheduled commits
- Added Dependabot ignore rule for `tailwindcss@^4.0.0` in NPM environment

### Change

- Updated dependencies:
    - Bump `@octokit/core` from 6.1.3 to 6.1.4
    - Bump `commander` from 13.0.0 to 13.1.0
    - Bump `deepmerge-ts` from 7.1.3 to 7.1.5
    - Bump `zod` from 3.24.1 to 3.24.2
    - Bump `@octokit/types` from 13.6.2 to 13.10.0
    - Bump `@playform/build` from 0.2.1 to 0.2.2
    - Bump `@types/node` from 22.10.5 to 22.14.0
- Updated GitHub Actions:
    - Bump `cloudflare/wrangler-action` from v3.13.0 to v3.14.1 in
      `Cloudflare.ts`
    - Bump `actions/setup-node` from v4.1.0 to v4.3.0 in `Node.ts` and `NPM.yml`
    - Bump `actions/upload-artifact` from v4.5.0 to v4.6.2 in `Node.ts`
    - Bump `actions/cache` from v4.2.0 to v4.2.3 in `Rust.ts`
    - Bump `github/codeql-action` from v3.27.6 to v3.28.13 in `codeql.yml`
    - Bump `pozil/auto-assign-issue` from v2.0.1 to v2.2.0 in `GitHub.yml`
    - Bump `dependabot/fetch-metadata` from v2.2.0 to v2.3.0 in
      `InnerDependabot.yml`
    - Bump `pnpm/action-setup` from v4.0.0 to v4.1.0 in `codeql.yml` and
      `Node.yml`
- Refactored imports to use Node.js core module protocol (`node:path`,
  `node:fs/promises`)
- Improved repository pagination handling in `Dispatch` command
- Renamed command parameters from `[repositories...]` to `[Repositories...]`
- Changed default branch reference from `main` to `Current` in workflow
  dispatches
- Updated shebang in `Action.sh` to use `/usr/bin/env bash` for better
  portability

## 0.1.5

### Change

- Update dependencies:
    - Bump `@octokit/core` from 6.1.2 to 6.1.3
    - Bump `commander` from 12.1.0 to 13.0.0
    - Bump `zod` from 3.23.8 to 3.24.1
    - Bump `@playform/build` from 0.1.9 to 0.2.0
    - Bump `@types/node` from 22.10.1 to 22.10.5
- Update GitHub actions:
    - Bump `actions/upload-artifact` from v4.4.3 to v4.5.0 in `Node.ts`
    - Bump `actions/cache` from v4.1.2 to v4.2.0 in `Rust.ts`

## 0.1.4

### Change

- Updated package dependencies:
    - Updated `dotenv` to version 16.4.7
    - Updated `@octokit/types` to version 13.6.2
    - Updated `@types/node` to version 22.10.1
- Updated GitHub Actions:
    - Updated `cloudflare/wrangler-action` to v3.13.0 in `Cloudflare.ts`
    - Updated `github/codeql-action` to v3.27.6 in `codeql.yml`
    - Updated `pozil/auto-assign-issue` to v2.0.1 in `GitHub.yml`
- Reordered environment variables in multiple workflow files:
    - Added `DO_NOT_TRACK: 1` at the top in `Cloudflare.yml`, `codeql.yml`,
      `GitHub.yml`, `Node.yml`, `NPM.yml`, and `Rust.yml`

## 0.1.3

### Change

- Updated `cloudflare/wrangler-action` to v3.12.1 in `Cloudflare.ts`.
- Updated `actions/setup-node` to v4.1.0 in `Node.ts` and `NPM.yml`.
- Updated `actions/cache` to v4.1.2 in `Rust.ts`.
- Updated `actions/checkout` to v4.2.2 in multiple workflow files
  (`Cloudflare.yml`, `codeql.yml`, `Node.yml`, `NPM.yml`, `Rust.yml`).
- Updated `github/codeql-action` to v3.27.4 in `codeql.yml`.

## 0.1.2

### Add

- Added `Action.sh` script for managing GitHub Actions.
- Added import statements for `Files` type in various command files.

### Change

- Updated `.npmignore` to replace `Documentation/` with `docs/` and `Summary.md`
  with `Action.sh`.
- Updated `package.json`:
    - Bumped version from 0.1.1 to 0.1.2.
    - Updated email to `Source/Open@PlayForm.Cloud`.
    - Updated URL to `https://PlayForm.Cloud`.
    - Updated `deepmerge-ts` to version 7.1.3.
    - Updated `@octokit/types` to version 13.6.1.
    - Updated `@playform/build` to version 0.1.8.
    - Updated `@types/node` to version 22.9.0.
- Updated various GitHub Actions and workflows:
    - Updated `cloudflare/wrangler-action` to v3.9.0 in `Cloudflare.ts`.
    - Updated `actions/setup-node` to v4.0.4 in `Node.ts` and `NPM.yml`.
    - Updated `actions/upload-artifact` to v4.4.3 in `Node.ts`.
    - Updated `actions/cache` to v4.1.1 in `Rust.ts`.
    - Updated `actions/checkout` to v4.2.1 in multiple workflow files.
    - Updated `github/codeql-action` to v3.26.13 in `codeql.yml`.
- Improved code formatting and consistency across various TypeScript files.

## 0.1.1

### Change

- Updated `@playform/build` to version 0.1.3
- Updated `@types/node` to version 22.5.0
- Updated `zod` to version 3.23.8
- Updated `actions/upload-artifact` to v4.3.6 in Node.ts

## 0.1.0

### Change

- Updated `deepmerge-ts` to version 7.1.0
- Updated `@playform/build` to version 0.1.2
- Updated `@types/node` to version 20.14.12
- Updated `zod` to the latest version
- Updated `Run` script to use `Build 'Source/**/*.ts' --Watch`
- Added `provenance: true` to `package.json`

## 0.0.8

### Change

- Updated version to 0.0.8
- Updated `deepmerge-ts` to version 7.0.3
- Updated `@playform/build` to version 0.1.0
- Updated `@types/node` to version 20.14.10
- Updated project description to "Maintain 🔧"

### Fix

- Fixed evolving type errors by adding
  `// biome-ignore lint/nursery/noEvolvingTypes:` annotations

## 0.0.7

### Change

- Updated version to 0.0.8
- Updated `deepmerge-ts` to version 7.0.3
- Updated `@playform/build` to version 0.1.0
- Updated `@types/node` to version 20.14.10
- Updated project description to "Maintain 🔧"

### Fix

- Fixed evolving type errors by adding
  `// biome-ignore lint/nursery/noEvolvingTypes:` annotations

## 0.0.6

### Change

- Updated version to 0.0.6
- Updated `@playform/build` to version 0.0.10

## 0.0.5

### Change

- Updated version to 0.0.5
- Added `@playform/build` as a peer dependency
- Added `peerDependenciesMeta` to mark `@playform/build` as optional

## 0.0.4

### Change

- Updated version to 0.0.4
- Updated project description to "Maintain 🔧"
- Updated homepage URL to use HTTPS
- Updated author information
- Updated dependencies:
    - `@octokit/core` to version 6.1.2
    - `commander` to version 12.1.0
    - `deepmerge-ts` to version 7.0.1
    - `zod` to version 3.23.8
    - `@octokit/types` to version 13.5.0
    - `@playform/build` to version 0.0.9
    - `@playform/document` to version 0.0.7
    - `@types/node` to version 20.12.12
- Improved code formatting and consistency
- Updated workflows to use newer versions of actions

### Removed

- Removed `.env` from `.gitignore`

## 0.0.3

### Change

- Updated version to 0.0.3
- Updated homepage to `https://github.com/Playform/Maintain#readme`
- Added `Document` script

### Add

- Added `@playform/document` as a dependency

## 0.0.2

### Change

- Updated version to 0.0.2

## 0.0.1

### Add

- Initial Release
