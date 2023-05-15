<!--lint disable double-link awesome-heading awesome-git-repo-age awesome-toc-->

<div align="center">
<h1>Third Party integrations</h1>

[Documentation][docs] |
[Contributing][contributing]

</div>
<div align="center">

[![Continious Integration][cibadge]][ciurl]
[![npm][npmversion]][npmurl]
[![npm][npmdownloads]][npmurl]
[![License: MIT][licensebadge]][licenseurl]

</div>

This library provides a set of tools that can be used in any web application.
It provides integrations with third party libraries like Google ReCaptcha and more!

You can check our [React library](https://www.npmjs.com/package/@nanlabs/react-thirdparty) if you want to use the integrations in a React application.

## Installation

```bash
npm install @nanlabs/thirdparty
```

## Usage

The following example shows how one of the multiple integrations provided by this library can be used.

In the example bellow we use `GoogleReCaptchaProvider` and `useGoogleReCaptcha` to integrate reCAPTCHA v3 in our application.

You can find more examples in the [documentation][docs].

```tsx
import React, { useState } from 'react'
import { injectGoogleReCaptchaScript } from '@nanlabs/thirdparty'

injectGoogleReCaptchaScript({
  reCaptchaKey: 'YOUR_RECAPTCHA_KEY',
  scriptId: 'recaptcha-script',
})

window.onload = () => {
  const reCaptcha = window.grecaptcha
  reCaptcha.ready(() => {
    reCaptcha
      .execute('YOUR_RECAPTCHA_KEY', { action: 'login_page' })
      .then((token) => {
        // Do something with the token
      })
  })
}
```

[docs]: https://nanlabs.github.io/nancy.js/
[contributing]: https://github.com/nanlabs/nancy.js/blob/main/CONTRIBUTING.md
[cibadge]: https://github.com/nanlabs/nancy.js/actions/workflows/ci.yml/badge.svg
[npmversion]: https://img.shields.io/npm/v/@nanlabs/thirdparty.svg?maxAge=2592000?style=plastic
[npmdownloads]: https://img.shields.io/npm/dm/@nanlabs/thirdparty.svg?maxAge=2592000?style=plastic
[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[ciurl]: https://github.com/nanlabs/nancy.js/actions/workflows/ci.yml
[npmurl]: https://www.npmjs.com/package/@nanlabs/thirdparty
[licenseurl]: https://github.com/nanlabs/nancy.js/blob/main/LICENSE
