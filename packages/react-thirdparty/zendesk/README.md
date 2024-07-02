<h1 align="center">React Zendesk Integration</h1>
<div align="center">

Integrating Zendesk into your React application

</div>

## Usage

### Provide API Key

To use these integrations, you need to create an API key for your domain. You can get one from [here](https://www.zendesk.com/).

### Components

### Zendesk

To use the Zendesk integration, you need to include the `ZendeskProvider` in your application and use the `Zendesk` component or the `useZendesk` hook.

#### ZendeskProvider

`ZendeskProvider` is a React component that wraps your application and loads the Zendesk script. It provides context to other components and hooks that need to interact with Zendesk.

```jsx
import { ZendeskProvider } from "@nanlabs/react-thirdparty";

const App = () => (
  <ZendeskProvider
    zendeskKey="[Your zendesk key]"
    scriptId="zendesk-script"
    handleOnLoad={() => console.log("Zendesk script loaded!")}
  >
    <YourApp />
  </ZendeskProvider>
);

export default App;
```

#### Zendesk Component

`Zendesk` is a React component that can be used in your app to load the Zendesk script. It utilizes the context provided by `ZendeskProvider`.

```jsx
import React from "react";
import Zendesk from "@nanlabs/react-thirdparty";

const YourComponent = () => (
  <div>
    <Zendesk />
  </div>
);

export default YourComponent;
```

### React Hook: useZendesk

If you prefer a React Hook approach, you can choose to use the custom hook `useZendesk`.

It's very simple to use the hook:

```tsx
import React from "react";
import { useZendesk } from "@nanlabs/react-thirdparty";

const YourZendeskComponent = () => {
  useZendesk();

  return <div>Your component content</div>;
};

export default YourZendeskComponent;
```

By following these steps, you can integrate Zendesk into your project using either a React hook or a component, providing flexibility depending on your needs.
