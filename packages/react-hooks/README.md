<!--lint disable double-link awesome-heading awesome-git-repo-age awesome-toc-->

<div align="center">
<h1>React Hooks</h1>

[Documentation][docs] |
[Contributing][contributing]

</div>
<div align="center">

[![Continious Integration][cibadge]][ciurl]
[![npm][npmversion]][npmurl]
[![npm][npmdownloads]][npmurl]
[![License: MIT][licensebadge]][licenseurl]

</div>

This package contains multiple hooks that can be used in your React application!

## Installation

```bash
npm install @nanlabs/react-hooks
```

## Usage

The following example shows how one of the multiple hooks provided by this library can be used.

In the example bellow we use `useDebounce` to debounce the value of an input.

You can find more examples in the [documentation][docs].

```ts
import React, { useState } from "react";
import { useDebounce } from "@nanlabs/react-hooks";

const Component = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
};
```

[docs]: https://nanlabs.github.io/nancy.js/
[contributing]: https://github.com/nanlabs/nancy.js/blob/main/CONTRIBUTING.md
[cibadge]: https://github.com/nanlabs/nancy.js/actions/workflows/ci.yml/badge.svg
[npmversion]: https://img.shields.io/npm/v/@nanlabs/react-hooks.svg?maxAge=2592000?style=plastic
[npmdownloads]: https://img.shields.io/npm/dm/@nanlabs/react-hooks.svg?maxAge=2592000?style=plastic
[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[ciurl]: https://github.com/nanlabs/nancy.js/actions/workflows/ci.yml
[npmurl]: https://www.npmjs.com/package/@nanlabs/react-hooks
[licenseurl]: https://github.com/nanlabs/nancy.js/blob/main/LICENSE
