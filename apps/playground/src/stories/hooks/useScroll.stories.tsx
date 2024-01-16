import React, {
  forwardRef,
  PropsWithChildren,
  ReactNode,
  Ref,
  useRef,
} from "react";
import { ComponentMeta } from "@storybook/react";
import { useScroll } from "@nanlabs/react-hooks";

interface BoxProps {
  background?: string;
  children?: ReactNode;
}

const Box = forwardRef((props: BoxProps, ref: Ref<HTMLDivElement>) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: props.background,
    minWidth: "200px",
    minHeight: "250px",
  };

  return (
    <div ref={ref} style={style}>
      {props.children}
    </div>
  );
});

Box.displayName = "Box";

export const Example: React.FC<PropsWithChildren> = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scroll } = useScroll({
    elementRef: ref,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <button onClick={() => scroll("left", 200)}>Left</button>
      <div
        style={{
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          width: "200px",
        }}
        ref={ref}
      >
        <Box background="red">Item 1</Box>
        <Box background="blue">Item 2</Box>
        <Box background="green">Item 3</Box>
      </div>
      <button onClick={() => scroll("right", 200)}>Right</button>
    </div>
  );
};

export default {
  title: "React Hooks/useScroll",
  component: Example,
} as ComponentMeta<typeof Example>;
