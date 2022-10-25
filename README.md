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
- [Packages](#packages)
- [Examples](#examples)
- [Contributing](#contributing)
- [Contributors](#contributors)

## Applications

Collection of apps and examples that were created as a composition of different examples that
can be found separately in the [examples](./examples/) directory.
Read more about the examples in the [examples](#examples) section.

- [Playground](./apps/playground/) - This app was created with the goal to have examples of ours React components, hooks and libraries that are created in different packages in this repository. To create the examples, in this app we are using storybook stories. Check it out this simple example of [Storybook](./apps/playground/src/stories/Header.stories.tsx).

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

## Packages

We provide a collection of different packages that can be used in different projects. Each package has its own README file with more details about the package. Check out the [packages](./packages/) directory.

## Examples

Collection of examples that solve specific problems using small pieces of code.

We have a collection of examples that solve specific problems using small pieces of code. Each example has its own README file with more details about the example. Check out the [examples](./examples/) directory for more details!

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
