import React, {
  CSSProperties,
  FC,
  forwardRef,
  PropsWithChildren,
  Ref,
  useRef,
} from "react";
import { useIntersectionObserver } from "@nanlabs/react-hooks";
import { ComponentMeta } from "@storybook/react";

const FixedRowExample: FC<PropsWithChildren> = (props) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    width: "500px",
    padding: "20px",
    margin: "10px",
    border: "2px solid gray",
  } as CSSProperties;

  return <div style={style}>{props.children}</div>;
};

const Box = forwardRef((props: PropsWithChildren, ref: Ref<HTMLDivElement>) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#108ee9",
    width: "500px",
    height: "250px",
    border: "2px solid gray",
  };

  return (
    <div ref={ref} style={style}>
      {props.children}
    </div>
  );
});

Box.displayName = "Box";

export const Example = () => {
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const intersection = useIntersectionObserver(intersectionRef, {
    threshold: 1,
    root: null,
    rootMargin: "0px",
  });

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  } as CSSProperties;

  return (
    <div style={style}>
      <FixedRowExample>
        {intersection && intersection.isIntersecting ? (
          <p>Component in viewport</p>
        ) : (
          <p>Scroll to find the component</p>
        )}
      </FixedRowExample>
      <div style={{ height: "100vh", width: "100%" }} />
      <Box ref={intersectionRef} />
    </div>
  );
};

export default {
  title: "React Hooks/useIntersectionObserver",
  component: Example,
} as ComponentMeta<typeof Example>;
