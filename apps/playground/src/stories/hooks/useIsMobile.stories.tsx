import React, { FC } from "react";
import { ComponentMeta } from "@storybook/react";
import { useIsMobile } from "@nanlabs/react-hooks";

export const Example: FC = () => {
  const isMobile = useIsMobile();
  return <div>{isMobile ? <p>Is mobile</p> : <p>Is desktop</p>}</div>;
};

export default {
  title: "React Hooks/useIsMobile",
  component: Example,
} as ComponentMeta<typeof Example>;
