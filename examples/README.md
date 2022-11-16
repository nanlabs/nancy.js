<div align="center">
<p>
    <img
        style="width: 200px"
        width="200"
        src="https://avatars.githubusercontent.com/u/4426989?s=200&v=4"
    >
</p>
<h1>React Reference</h1>

[Changelog](#) |
[Contributing](../CONTRIBUTING.md)

</div>
<div align="center">

[![Linter][linterbadge]][linterurl]
[![Shell Check][shellcheckbadge]][shellcheckurl]
[![License: MIT][licensebadge]][licenseurl]

</div>

This repository contains different React components, hooks, apps and libraries that are used in different projects
here at [NaN Labs](https://www.nanlabs.com/).

- [Boilerplates](#boilerplates)
- [State Management examples](#state-management-examples)
  - [Basic Example](#basic-example)
  - [React Hooks](#react-hooks)
  - [Finite State Machine](#finite-state-machine)
  - [Remote Data Fetching](#remote-data-fetching)
  - [Reactive State Management](#reactive-state-management)
  - [Atomic State Management](#atomic-state-management)
  - [Unidirectional State Management](#unidirectional-state-management)
  - [Bidirectional State Management](#bidirectional-state-management)
- [Node Package Managers](#node-package-managers)
- [Contributing](#contributing)
- [Contributors](#contributors)

## Boilerplates

Collection of boilerplates for different use cases.

- [Playground](../apps/playground/) - This app was created with the goal to have examples of ours React components, hooks and libraries that are created in different packages in this repository. To create the examples, in this app we are using storybook stories. Check it out this simple example of [Storybook](../apps/playground/src/stories/Header.stories.tsx).

- [React Webpack Boilerplate](https://github.com/nanlabs/react-webpack-boilerplate/tree/main/.github/workflows). This example contains the following features:
  - Boilerplate generated using [create-react-webpack-project](https://www.npmjs.com/package/create-react-webpack-project)
  - Contains GitHub Actions with the following workflows:
    - Main Validation (ESLint + Prettier + E2E Tests)
    - Manual Execution with Params (Automated Tests execution)
    - Periodic Test execution and History update
    - Pull Requests validation with DangerJS
  - Full local development setup
  - Production ready setup
  - Webpack + ESBuild Loader
  - CSS or LESS or SaSS (global and modules)
  - ESLint + Prettier
  - Jest + React Testing Library
  - and more!

## State Management examples

The following examples show how to solve the same problem using different approaches from
normal React hooks to State management libraries. Check the full list with more details in the [state management examples](./state-management/) directory.

## Node Package Managers

The following examples are intended to show different alternatives that exist for package management in Node.
You can see the following examples here [node package managers](./node-package-managers/).

### Basic Example

- [Prop Drilling](./state-management/examples/hooks-prop-drilling/)

### React Hooks

- [Context](./state-management/examples/hooks-context/)
- [Global State](./state-management/examples/hooks-global-state/)
- [Hookstate](./state-management/examples/hooks-hookstate/)
- [Teaful](./state-management/examples/hooks-teaful/)

### Finite State Machine

- [XState](./state-management/examples/fsm-xstate/)

### Remote Data Fetching

- [React Query](./state-management/examples/api-react-query/)

### Reactive State Management

- [Effector](./state-management/examples/reactive-effector/)
- [Akita](./state-management/examples/reactive-akita/)
- [Rxjs](./state-management/examples/reactive-rxjs/)
- [Storeon](./state-management/examples/reactive-storeon/)

### Atomic State Management

- [Jotai](./state-management/examples/atomic-jotai/)
- [Recoil](./state-management/examples/atomic-recoil/)
- [AgileTs](./state-management/examples/atomic-agilets/)

### Unidirectional State Management

- [Zustand](./state-management/examples/unidirectional-zustand/)
- [Redux Toolkit](./state-management/examples/unidirectional-redux-toolkit/)
- [Rematch](./state-management/examples/unidirectional-rematch/)
- [Unistore](./state-management/examples/unidirectional-unistore/)

### Bidirectional State Management

- [MobX](./state-management/examples/bidirectional-mobx/)
- [Valtio](./state-management/examples/bidirectional-valtio/)
- [MobX State Tree](./state-management/examples/bidirectional-mobx-state-tree/)
- [React Easy State](./state-management/examples/bidirectional-easy-state/)

## Contributing

Contributions are welcome!

## Contributors

<a href="https://github.com/nanlabs/nancy.js/contributors">
  <img src="https://contrib.rocks/image?repo=nanlabs/nancy.js"/>
</a>

Made with [contributors-img](https://contrib.rocks).

[linterbadge]: https://github.com/nanlabs/nancy.js/actions/workflows/lint.yml/badge.svg
[shellcheckbadge]: https://github.com/nanlabs/nancy.js/actions/workflows/shellcheck.yml/badge.svg
[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[linterurl]: https://github.com/nanlabs/nancy.js/actions/workflows/lint.yml
[shellcheckurl]: https://github.com/nanlabs/nancy.js/actions/workflows/shellcheck.yml
[licenseurl]: https://github.com/nanlabs/nancy.js/blob/main/LICENSE
