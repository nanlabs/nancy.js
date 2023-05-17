<!--lint disable double-link awesome-heading awesome-git-repo-age awesome-toc-->

<div align="center">
<h1>Functional Programming tools</h1>

[Documentation][docs] |
[Contributing][contributing]

</div>
<div align="center">

[![Continious Integration][cibadge]][ciurl]
[![npm][npmversion]][npmurl]
[![npm][npmdownloads]][npmurl]
[![License: MIT][licensebadge]][licenseurl]

</div>

This library provides a set of tools to help you write functional code in TypeScript.
It includes tools for type guards, error handling, and more!

## Installation

```bash
npm install @nanlabs/fp
```

## Usage

The following example shows how some of the multiple tools provided by this library can be used.

You can find more examples in the [documentation][docs].

### Type Guards

The following example shows how to use Rule Sets to create type guards.
We can use `isType` to check if a value matches a Rule Set.

```ts
import { isString, isNumber, isType } from "@nanlabs/fp";

const userRuleSet = {
  username: isString,
  email: isString,
  age: isNumber,
};

const isUser = (value: unknown): value is User => isType(value, userRuleSet);

const user: unknown = { username: "John", email: "jonh@gmail.com", age: 30 };

if (isUser(user)) {
  // user is User
}
```

### Either and Error Handling

The following example shows how to use `Either` to handle errors.
We can use `isLeft` and `isRight` to check if an `Either` is `Left` or `Right`.

```ts
import { Either, left, right } from "@nanlabs/fp";

const div = (x: number): Either<Error, number> => {
  if (x === 0) {
    return left(new Error("Division by zero"));
  }

  return right(1 / x);
};

const divResult = div(0);

if (divResult.isLeft()) {
  // divResult is Left
  console.log(divResult.value.message);
}

if (divResult.isRight()) {
  // divResult is Right
  const result = divResult.value;
  console.log(result);
}
```

[docs]: https://nanlabs.github.io/nancy.js/
[contributing]: https://github.com/nanlabs/nancy.js/blob/main/CONTRIBUTING.md
[cibadge]: https://github.com/nanlabs/nancy.js/actions/workflows/ci.yml/badge.svg
[npmversion]: https://img.shields.io/npm/v/@nanlabs/fp.svg?maxAge=2592000?style=plastic
[npmdownloads]: https://img.shields.io/npm/dm/@nanlabs/fp.svg?maxAge=2592000?style=plastic
[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[ciurl]: https://github.com/nanlabs/nancy.js/actions/workflows/ci.yml
[npmurl]: https://www.npmjs.com/package/@nanlabs/fp
[licenseurl]: https://github.com/nanlabs/nancy.js/blob/main/LICENSE
