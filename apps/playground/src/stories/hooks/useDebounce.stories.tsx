import React, { FC, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { useDebounce } from "@nanlabs/react-hooks";

const style = {
  display: "flex",
  padding: "20px",
  border: "2px solid gray",
  justifyContent: "space-around",
};

export const Example: FC = () => {
  const [value, setValue] = useState<number>(0);

  const debouncedValue = useDebounce(value, 2000);

  const onClick = () => {
    setValue(value + 1);
  };

  return (
    <div style={style}>
      <button onClick={() => onClick()}>Click me!</button>

      <p>{debouncedValue}</p>
    </div>
  );
};

export default {
  title: "React Hooks/useDebounce",
  component: Example,
} as ComponentMeta<typeof Example>;
