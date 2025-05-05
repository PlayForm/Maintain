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
    - Updated URL to `HTTPS://PlayForm.Cloud`.
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
- Updated homepage to `HTTPS://github.com/Playform/Maintain#readme`
- Added `Document` script

### Add

- Added `@playform/document` as a dependency

## 0.0.2

### Change

- Updated version to 0.0.2

## 0.0.1

### Add

- Initial Release
