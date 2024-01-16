import React, {
  forwardRef,
  PropsWithChildren,
  ReactNode,
  Ref,
  useRef,
} from "react";
import { ComponentMeta } from "@storybook/react";
import { useOverflow } from "@nanlabs/react-hooks";

interface BoxProps {
  background?: string;
  children?: ReactNode;
}

const Box = forwardRef((props: BoxProps, ref: Ref<HTMLDivElement>) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll",
    background: "#108ee9",
    textDirection: "center",
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
  const { overflowActive } = useOverflow({
    elementRef: ref,
  });

  return (
    <Box ref={ref}>
      <div
        style={{
          minHeight: "800px",
          minWidth: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {overflowActive ? "Element in Overflow" : "No overflow"}
      </div>
    </Box>
  );
};

export default {
  title: "React Hooks/useOverflow",
  component: Example,
} as ComponentMeta<typeof Example>;
