<!--lint disable double-link awesome-heading awesome-git-repo-age awesome-toc-->

<div align="center">
<p>
    <img
        style="width: 200px"
        width="200"
        src="https://avatars.githubusercontent.com/u/4426989?s=200&v=4"
    >
</p>
<h1>NaNcy.js</h1>

[Changelog](#) |
[Contributing](./CONTRIBUTING.md)

</div>
<div align="center">

[![Continious Integration][cibadge]][ciurl]
[![License: MIT][licensebadge]][licenseurl]

</div>

This repository contains different JavaScript and TypeScript apps and tools that are used in different projects here at [NaN Labs](https://www.nanlabs.com/).
We also provide reusable JavaScript and TypeScript packages.

## Contents

- [Applications](#applications)
- [Examples](#examples)

  - [DevOps](#devops)
    - [Node Package Managers](#node-package-managers)
  - [Frontend](#frontend)
    - [React State Management](#react-state-management)

- [Contributing](#contributing)
- [Contributors](#contributors)

## Applications

| Name                                                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                               | Keywords                                                                                                                                            |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [React Boilerplate](https://github.com/nanlabs/react-boilerplate)                      | A simple but powerful boilerplate to start a React project powered by Vite. Boilerplate generated using [create-awesome-node-app](https://www.npmjs.com/package/create-awesome-node-app) contains full CI/CD setup with GitHub Actions and Docker. It also contains a full local development setup with hot reload and production ready setup with minification and optimization. It also contains a full test setup with Jest and React Testing Library. | _React_                                                                                                                                             |
| [Storybook Playground](https://github.com/nanlabs/nancy.js/tree/main/apps/playground/) | This app was created with the goal to have examples of ours React components, hooks and libraries that are created in different packages in the repository Nancy.js.                                                                                                                                                                                                                                                                                      | _React_, _Storybook_, _Nancy.js_                                                                                                                    |
| [TypeScript Monorepo Boilerplate](https://github.com/nanlabs/ts-monorepo-boilerplate)  | A simple but powerful boilerplate to start a TypeScript monorepo project powered Turborepo.                                                                                                                                                                                                                                                                                                                                                               | _TypeScript_, _Turborepo_, _Monorepo_, _Boilerplate_, _React_, _NPM Workspaces_, _Changesets_, _ESLint_, _Prettier_, _Jest_, _Nest.js_, _Storybook_ |

## Examples

### DevOps

#### Node Package Managers

| Name                                                                                                   | Description                                                            | Keywords                      |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | ----------------------------- |
| [Node Package Managers](https://github.com/nanlabs/nancy.js/tree/main/examples/node-package-managers/) | Comparison of the most popular Node Package Managers: npm, yarn, pnpm. | _Node_, _npm_, _yarn_, _pnpm_ |

### Frontend

#### React State Management

| Name                                                                                                                               | Description                                                                                   | Keywords                    |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------- |
| [AgileTs](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/atomic-agilets/)                        | This example shows how to use AgileTs to manage state.                                        | _React_, _AgileTs_          |
| [Akita](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/reactive-akita/)                          | This example shows how to use Akita to manage state.                                          | _React_, _Akita_            |
| [Context](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/hooks-context/)                         | This example shows how to use React Context to share data between components.                 | _React_                     |
| [Effector](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/reactive-effector/)                    | This example shows how to use Effector to manage state.                                       | _React_, _Effector_         |
| [Global State](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/hooks-global-state/)               | This example shows how to use a global state using React Hooks.                               | _React_                     |
| [Hookstate](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/hooks-hookstate/)                     | This example shows how to use Hookstate to manage state.                                      | _React_                     |
| [Jotai](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/atomic-jotai/)                            | This example shows how to use Jotai to manage state.                                          | _React_, _Jotai_            |
| [MobX](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/bidirectional-mobx/)                       | This example shows how to use MobX to manage state.                                           | _React_, _MobX_             |
| [MobX State Tree](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/bidirectional-mobx-state-tree/) | This example shows how to use MobX State Tree to manage state.                                | _React_, _MobX State Tree_  |
| [Prop Drilling](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/hooks-prop-drilling/)             | This example shows how to pass data from a parent component to a child component using props. | _React_                     |
| [React Easy State](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/bidirectional-easy-state/)     | This example shows how to use React Easy State to manage state.                               | _React_, _React Easy State_ |
| [React Query](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/api-react-query/)                   | This example shows how to use React Query to fetch data from an API.                          | _React_, _React Query_      |
| [Recoil](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/atomic-recoil/)                          | This example shows how to use Recoil to manage state.                                         | _React_, _Recoil_           |
| [Redux Toolkit](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/unidirectional-redux-toolkit/)    | This example shows how to use Redux Toolkit to manage state.                                  | _React_, _Redux Toolkit_    |
| [Rematch](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/unidirectional-rematch/)                | This example shows how to use Rematch to manage state.                                        | _React_, _Rematch_          |
| [Rxjs](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/reactive-rxjs/)                            | This example shows how to use Rxjs to manage state.                                           | _React_, _Rxjs_             |
| [Storeon](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/reactive-storeon/)                      | This example shows how to use Storeon to manage state.                                        | _React_, _Storeon_          |
| [Teaful](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/hooks-teaful/)                           | This example shows how to use Teaful to manage state.                                         | _React_                     |
| [Unistore](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/unidirectional-unistore/)              | This example shows how to use Unistore to manage state.                                       | _React_, _Unistore_         |
| [Valtio](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/bidirectional-valtio/)                   | This example shows how to use Valtio to manage state.                                         | _React_, _Valtio_           |
| [XState](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/fsm-xstate/)                             | This example shows how to use XState to manage state.                                         | _React_, _XState_           |
| [Zustand](https://github.com/nanlabs/nancy.js/tree/main/examples/state-management/examples/unidirectional-zustand/)                | This example shows how to use Zustand to manage state.                                        | _React_, _Zustand_          |

## Contributing

- Contributions make the open source community such an amazing place to learn, inspire, and create.
- Any contributions you make are **truly appreciated**.
- Check out our [contribution guidelines](./CONTRIBUTING.md) for more information.

## Contributors

<a href="https://github.com/nanlabs/nancy.js/contributors">
  <img src="https://contrib.rocks/image?repo=nanlabs/nancy.js"/>
</a>

Made with [contributors-img](https://contrib.rocks).

[cibadge]: https://github.com/nanlabs/nancy.js/actions/workflows/ci.yml/badge.svg
[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[ciurl]: https://github.com/nanlabs/nancy.js/actions/workflows/ci.yml
[licenseurl]: https://github.com/nanlabs/nancy.js/blob/main/LICENSE
