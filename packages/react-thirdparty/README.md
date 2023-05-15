<!--lint disable double-link awesome-heading awesome-git-repo-age awesome-toc-->

<div align="center">
<h1>React Third Party integrations</h1>

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
It provides integrations with third party libraries like Google ReCaptcha and more!

This library uses [@nanlabs/thirdparty](https://www.npmjs.com/package/@nanlabs/thirdparty) under the hood.
You can check it out if you want to use the integrations in a non-React application.

## Installation

```bash
npm install @nanlabs/react-thirdparty
```

## Usage

The following example shows how one of the multiple integrations provided by this library can be used.

In the example bellow we use `GoogleReCaptchaProvider` and `useGoogleReCaptcha` to integrate reCAPTCHA v3 in our application.

You can find more examples in the [documentation][docs].

```tsx
import React, { useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha
} from "@nanlabs/react-thirdparty";

// Your component that wants to use reCAPTCHA
const YourReCaptchaComponent = () => {
  const [token, setToken] = useState();

  return (
    <GoogleReCaptcha
      action="login_page"
      onVerify={(token) => {
        setToken(token);
      }}
    />
  );
};

// Use the provider in your app to configure the reCAPTCHA library
const App = () => (
  <GoogleReCaptchaProvider reCaptchaKey="YOUR_RECAPTCHA_KEY">
    <YourReCaptchaComponent />
  </GoogleReCaptchaProvider>
);
```

[docs]: https://nanlabs.github.io/nancy.js/
[contributing]: https://github.com/nanlabs/nancy.js/blob/main/CONTRIBUTING.md
[cibadge]: https://github.com/nanlabs/nancy.js/actions/workflows/ci.yml/badge.svg
[npmversion]: https://img.shields.io/npm/v/@nanlabs/react-thirdparty.svg?maxAge=2592000?style=plastic
[npmdownloads]: https://img.shields.io/npm/dm/@nanlabs/react-thirdparty.svg?maxAge=2592000?style=plastic
[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[ciurl]: https://github.com/nanlabs/nancy.js/actions/workflows/ci.yml
[npmurl]: https://www.npmjs.com/package/@nanlabs/react-thirdparty
[licenseurl]: https://github.com/nanlabs/nancy.js/blob/main/LICENSE
