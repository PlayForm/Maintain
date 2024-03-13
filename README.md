# 🔧 [Maintain]

Maintains GitHub repositories.

## Installation

Using NPM

```sh
npm install -g @yesmaintain/cli
```

Using Yarn

```sh
yarn global add @yesmaintain/cli
```

Using PNPM

```sh
pnpm install -g @yesmaintain/cli
```

or direct usage:

Using NPM

```sh
npx @yesmaintain/cli
```

Using Yarn

```sh
yarn @yesmaintain/cli
```

Using PNPM

```sh
pnpx @yesmaintain/cli
```

## CLI Usage:

Deletes all GitHub Actions runs and their logs for all of your repositories:

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

`Enable` / `Disable` all the features that GitHub offers for all the repositories
that you have access to:

```sh
Maintain Edit
```

Create a `Node.yml` file in the `.github/workflows` directory for each
repository that has a `package.json` file.

```sh
Maintain Node
```

Create a `NPM.yml` file in the `.github/workflows` directory for each
repository that has a `package.json` file.

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

```env
User="Username"
Base="Folder"
Token="AAAA"
```

[Maintain]: https://github.com/Maintain
[@yesmaintain/cli]: https://npmjs.org/@yesmaintain/cli
