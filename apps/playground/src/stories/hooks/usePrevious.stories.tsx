import { usePrevious } from "@nanlabs/react-hooks";
import { ComponentMeta } from "@storybook/react";
import React, { FC } from "react";

export const Example: FC = () => {
  const [count, setCount] = React.useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>
        Now: {count}, before: {prevCount}
      </p>
    </div>
  );
};

export default {
  title: "React Hooks/usePrevious",
  component: Example,
} as ComponentMeta<typeof Example>;
