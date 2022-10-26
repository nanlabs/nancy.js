import React, { FC, PropsWithChildren, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { useAllDepsChangeEffect } from "@nanlabs/react-hooks";
import { randomString } from "../../utils";

const SimpleRowExample: FC<PropsWithChildren> = (props) => {
  const style = {
    display: "flex",
    padding: "20px",
    border: "2px solid gray",
    justifyContent: "space-around",
  };

  return <div style={style}>{props.children}</div>;
};

export const Example: FC = () => {
  const [valueOne, setValueOne] = useState(true);
  const [valueTwo, setValueTwo] = useState(2);
  const [valueThree, setValueThree] = useState("three");

  const [allChange, setAllChange] = useState<unknown[]>([]);

  useAllDepsChangeEffect(() => {
    setAllChange((prev) => [...prev, [valueOne, valueTwo, valueThree]]);
  }, [valueOne, valueTwo, valueThree]);

  return (
    <div>
      <SimpleRowExample>
        <div>
          <code>valueOne:</code>
          <pre>{String(valueOne)}</pre>
        </div>
        <div>
          <code>valueOne:</code>
          <pre>{valueTwo}</pre>
        </div>
        <div>
          <code>valueOne:</code>
          <pre>{valueThree}</pre>
        </div>
      </SimpleRowExample>
      <SimpleRowExample>
        <button onClick={() => setValueOne(!valueOne)}>change valueOne</button>
        <button onClick={() => setValueTwo((prev) => prev + 1)}>
          change valueTwo
        </button>
        <button onClick={() => setValueThree(randomString())}>
          change valueThree
        </button>
      </SimpleRowExample>
      <div>All values changes {allChange.length} times</div>
    </div>
  );
};

export default {
  title: "Hooks/useAllDepsChangeEffect",
  component: Example,
} as ComponentMeta<typeof Example>;
