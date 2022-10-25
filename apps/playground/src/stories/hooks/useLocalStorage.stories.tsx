import React, { FC, PropsWithChildren } from "react";
import { ComponentMeta } from "@storybook/react";
import { useLocalStorage } from "@nancy/react-hooks";

const SimpleRowExample: FC<PropsWithChildren> = (props) => {
  const style = {
    display: "flex",
    padding: "20px",
    border: "2px solid gray",
    justifyContent: "space-around",
  };

  return <div style={style}>{props.children}</div>;
};

const INITIAL_VALUE_ONE = "initial value";
const INITIAL_VALUE_TWO = 0;
const INITIAL_VALUE_THREE = { name: "John", age: 23 };

export const Example: FC = () => {
  const [valueOne, setValueOne] = useLocalStorage("key-one", INITIAL_VALUE_ONE);
  const [valueTwo, setValueTwo] = useLocalStorage("key-two", INITIAL_VALUE_TWO);
  const [valueThree, setValueThree] = useLocalStorage(
    "key-three",
    INITIAL_VALUE_THREE
  );

  return (
    <div>
      <SimpleRowExample>
        <div>
          <code>valueOne:</code>
          <pre>{valueOne}</pre>
        </div>
        <div>
          <code>valueTwo:</code>
          <pre>{valueTwo}</pre>
        </div>
        <div>
          <code>valueThree:</code>
          <pre>Name: {valueThree.name}</pre>
          <pre>Age: {valueThree.age}</pre>
        </div>
      </SimpleRowExample>
      <SimpleRowExample>
        <button onClick={() => setValueOne && setValueOne("new value")}>
          change value one
        </button>
        <button onClick={() => setValueTwo && setValueTwo((prev) => prev + 1)}>
          change value two
        </button>
        <button
          onClick={() =>
            setValueThree &&
            setValueThree((prev) => ({
              ...prev,
              name: "Older John",
              age: prev.age + 1,
            }))
          }
        >
          change valueThree
        </button>
      </SimpleRowExample>
      <SimpleRowExample>
        <button onClick={() => setValueOne && setValueOne(INITIAL_VALUE_ONE)}>
          reset value one
        </button>
        <button onClick={() => setValueTwo && setValueTwo(INITIAL_VALUE_TWO)}>
          reset value two
        </button>
        <button
          onClick={() => setValueThree && setValueThree(INITIAL_VALUE_THREE)}
        >
          reset value three
        </button>
      </SimpleRowExample>
    </div>
  );
};

export default {
  title: "Hooks/useLocalStorage",
  component: Example,
} as ComponentMeta<typeof Example>;
