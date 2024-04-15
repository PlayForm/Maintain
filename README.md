# 🔧 [Maintain.]

Maintain GitHub.

## Installation

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
npx @playform/maintain
```

Using Yarn

```sh
yarn @playform/maintain
```

Using PNPM

```sh
pnpx @playform/maintain
```

## CLI Usage:

Delete all GitHub Actions runs and their logs for all of your repositories:

```sh
Maintain Clean
```

Create a `dependabot.yml` file for each of the `.github` directories in each of
the packages for the monorepo:

```sh
Maintain Dependabot
```

Dispatch all workflows for all repositories for a given user:

```sh
Maintain Dispatch
```

or specific repositories by name:

```sh
Maintain Dispatch Repository1 Repository2
```

`Enable` / `Disable` all the features that GitHub offers for all the
repositories that you have access to:

```sh
Maintain Edit
```

Create a `Node.yml` file in the `.github/workflows` directory for each
repository that has a `package.json` file.

```sh
Maintain Node
```

Create a `NPM.yml` file in the `.github/workflows` directory for each repository
that has a `package.json` file.

```sh
Maintain NPM
```

Create a `Rust.yml` file in the `.github/workflows` directory for each
repository that has a `Cargo.toml` file.

```sh
Maintain Rust
```

Run all workflow tasks.

```sh
Maintain Workflow
```

Finds all the `package.json` files in the project, and then star all the
dependencies in that `package.json`.

```sh
Maintain Star
```

**.env**

```sh
User="User"
Base="Base"
Token="Token"
```

[Maintain]: https://github.com/Maintain
[@playform/maintain]: https://npmjs.org/@playform/maintain
