import React, { FC, PropsWithChildren, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { useUnmount } from '@nancy/react-hooks';

const SimpleRowExample: FC<PropsWithChildren> = (props) => {
  const style = {
    display: "flex",
    padding: "20px",
    border: "2px solid gray",
    justifyContent: "space-around",
  };

  return <div style={style}>{props.children}</div>;
};

const ExampleUnmount: FC = () => {
    useUnmount(() => {
        alert('The component is going to be unmounted');
    })

    return (
        <SimpleRowExample>
            <h1>This component will be unmounted if you click on <strong>Unmount</strong></h1>
        </SimpleRowExample>
    );
};


export const Example: FC = () => {
    const [exampleMounted, setExampleMounted] = useState(true);

  return (
    <div>
        {exampleMounted && <ExampleUnmount />}
      <SimpleRowExample>
        <button onClick={() => setExampleMounted((prevState) => !prevState)}>{
            exampleMounted ? "Unmount" : "Mount"
        }</button>
      </SimpleRowExample>
    </div>
  );
};

export default {
  title: "Hooks/useUnmount",
  component: Example,
} as ComponentMeta<typeof Example>;
