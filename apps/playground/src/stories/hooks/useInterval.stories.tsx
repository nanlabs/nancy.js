import React, { useState } from 'react';
import { useInterval } from '@nanlabs/react-hooks';

export const Example = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <div>{count}</div>;
};

export default {
  title: 'React Hooks/useInterval',
  component: useInterval,
  argTypes: {
    callback: { control: 'function' },
    delay: { control: 'number' },
  },
};
