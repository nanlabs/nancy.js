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
[Contributing](./CONTRIBUTING.md)

</div>
<div align="center">

[![Linter][linterbadge]][linterurl]
[![Shell Check][shellcheckbadge]][shellcheckurl]
[![License: MIT][licensebadge]][licenseurl]

</div>

This repository contains different React components, hooks, apps and libraries that are used in different projects
here at [NaN Labs](https://www.nanlabs.com/).

- [Applications](#applications)
    - [Playground](#playground)
- [Examples](#examples)
  - [State Management examples](#state-management-examples)
    - [Basic Example](#basic-example)
    - [React Hooks](#react-hooks)
    - [Finite State Machine](#finite-state-machine)
    - [Remote Data Fetching](#remote-data-fetching)
    - [Reactive State Management](#reactive-state-management)
    - [Atomic State Management](#atomic-state-management)
    - [Unidirectional State Management](#unidirectional-state-management)
    - [Bidirectional State Management](#bidirectional-state-management)
- [Contributing](#contributing)
- [Contributors](#contributors)

## Applications

Collection of apps and examples that were created as a composition of different examples that
can be found separately in the [examples](./examples/) directory.
Read more about the examples in the [examples](#examples) section.

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
  
#### Playground
This [playground](./apps/playground/) app is created with the goals to have examples of ours React components, hooks and libraries that are created in different packages in this repository. To create the examples, in this app we are using storybook stories. Check it out this simple example of [storybook](./apps/playground/src/stories/Header.stories.tsx).
## Examples

Collection of examples that solve specific problems using small pieces of code.

### State Management examples

The following examples show how to solve the same problem using different approaches from
normal React hooks to State management libraries. Check the full list with more details in the [state management examples](./examples/state-management/) directory.

#### Basic Example

- [Prop Drilling](./examples/state-management/examples/hooks-prop-drilling/)

#### React Hooks

- [Context](./examples/state-management/examples/hooks-context/)
- [Global State](./examples/state-management/examples/hooks-global-state/)
- [Hookstate](./examples/state-management/examples/hooks-hookstate/)
- [Teaful](./examples/state-management/examples/hooks-teaful/)

#### Finite State Machine

- [XState](./examples/state-management/examples/fsm-xstate/)

#### Remote Data Fetching

- [React Query](./examples/state-management/examples/api-react-query/)

#### Reactive State Management

- [Effector](./examples/state-management/examples/reactive-effector/)
- [Akita](./examples/state-management/examples/reactive-akita/)
- [Rxjs](./examples/state-management/examples/reactive-rxjs/)
- [Storeon](./examples/state-management/examples/reactive-storeon/)

#### Atomic State Management

- [Jotai](./examples/state-management/examples/atomic-jotai/)
- [Recoil](./examples/state-management/examples/atomic-recoil/)
- [AgileTs](./examples/state-management/examples/atomic-agilets/)

#### Unidirectional State Management

- [Zustand](./examples/state-management/examples/unidirectional-zustand/)
- [Redux Toolkit](./examples/state-management/examples/unidirectional-redux-toolkit/)
- [Rematch](./examples/state-management/examples/unidirectional-rematch/)
- [Unistore](./examples/state-management/examples/unidirectional-unistore/)

#### Bidirectional State Management

- [MobX](./examples/state-management/examples/bidirectional-mobx/)
- [Valtio](./examples/state-management/examples/bidirectional-valtio/)
- [MobX State Tree](./examples/state-management/examples/bidirectional-mobx-state-tree/)
- [React Easy State](./examples/state-management/examples/bidirectional-easy-state/)

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
