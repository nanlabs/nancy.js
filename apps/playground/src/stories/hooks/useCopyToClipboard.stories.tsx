import React, { FC, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { useCopyToClipboard } from "@nanlabs/react-hooks";

const style = {
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  border: "2px solid gray",
  justifyContent: "center",
  alignItems: "center",
};

export const Example: FC = () => {
  const [text, setText] = useState("");
  const [state, copyToClipboard] = useCopyToClipboard();

  return (
    <div style={style}>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="button" onClick={() => copyToClipboard(text, true)}>
          copy text
        </button>
      </div>
      {state.error ? (
        <p>Unable to copy value: {state.error.message}</p>
      ) : (
        state.value && (
          <p
            style={{
              textAlign: "center",
            }}
          >
            Copied {state.value}
          </p>
        )
      )}
    </div>
  );
};

export default {
  title: "React Hooks/useCopyToClipboard",
  component: Example,
} as ComponentMeta<typeof Example>;
