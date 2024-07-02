<h1 align="center">React Zendesk Integration</h1>
<div align="center">

Integrating Zendesk into your React application

</div>

## Usage

### Provide API Key

To use these integrations, you need to create an API key for your domain. You can get one from [here](https://www.zendesk.com/).

### Components

### Zendesk

To use the Zendesk integration, you need to include the `Zendesk` component in your application or use the `useZendesk` hook.

#### Zendesk Component

`Zendesk` is a React component that can be used in your app to load the Zendesk script. It provides props to customize the script loading process.

```jsx
import Zendesk from "@nanlabs/react-thirdparty";

const App = () => (
  <Zendesk
    zendeskKey="[Your zendesk key]"
    handleOnLoad={() => console.log("Zendesk script loaded!")}
  />
);

export default App;
```

#### React Hook: useZendesk

If you prefer a React Hook approach, you can choose to use the custom hook `useZendesk`.

It's very simple to use the hook:

```tsx
import { useZendesk } from "@nanlabs/react-thirdparty";

const YourZendeskComponent = () => {
  const handleLoad = () => {
    console.log("Zendesk script loaded!");
  };

  useZendesk({
    zendeskKey: "[Your zendesk key]",
    scriptId: "zendesk-script",
    handleOnLoad: handleLoad,
  });

  return <div>Your component content</div>;
};

export default YourZendeskComponent;
```

By following these steps, you can integrate Zendesk into your project using either a React hook or a component, providing flexibility depending on your needs.
