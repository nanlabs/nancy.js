<!--lint disable double-link awesome-heading awesome-git-repo-age awesome-toc-->

<div align="center">
<h1>React Components</h1>

[Documentation][docs] |
[Contributing][contributing]

</div>
<div align="center">

[![Continious Integration][cibadge]][ciurl]
[![npm][npmversion]][npmurl]
[![npm][npmdownloads]][npmurl]
[![License: MIT][licensebadge]][licenseurl]

</div>

This library provides a set of React components that can be used in any React application.

## Installation

```bash
npm install @nanlabs/react-ui
```

## Usage

The following example shows how one of the multiple hooks provided by this library can be used.

In the example bellow we use the `Image` component to render an image with a list of fallbacks and retrying on error.

You can find more examples in the [documentation][docs].

```tsx
import React from "react";
import { Image } from "@nanlabs/react-ui";

const Component = () => (
  <Image
    src="https://picsum.photos/400"
    fallback={["https://picsum.photos/300", "https://picsum.photos/200"]}
    maxRetry={3}
    retryDelay={1000}
    initialTimeout={1000}
    decoding="async"
    loading="lazy"
    className="async-image"
    onLoad={() => console.log("Image loaded!")}
    style={{
      width: "300px",
      objectFit: "cover",
    }}
  />
);
```

[docs]: https://nanlabs.github.io/nancy.js/
[contributing]: https://github.com/nanlabs/nancy.js/blob/main/CONTRIBUTING.md
[cibadge]: https://github.com/nanlabs/nancy.js/actions/workflows/ci.yml/badge.svg
[npmversion]: https://img.shields.io/npm/v/@nanlabs/react-ui.svg?maxAge=2592000?style=plastic
[npmdownloads]: https://img.shields.io/npm/dm/@nanlabs/react-ui.svg?maxAge=2592000?style=plastic
[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[ciurl]: https://github.com/nanlabs/nancy.js/actions/workflows/ci.yml
[npmurl]: https://www.npmjs.com/package/@nanlabs/react-ui
[licenseurl]: https://github.com/nanlabs/nancy.js/blob/main/LICENSE
