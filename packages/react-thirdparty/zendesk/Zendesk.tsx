import React, { FC, useEffect } from "react";
import { useZendesk } from "./useZendesk";

/**
 * Zendesk component to load the Zendesk script.
 * @returns The Zendesk container element.
 */
const Zendesk: React.FC = () => {
  const { executeZendesk } = useZendesk();

  useEffect(() => {
    // Example usage of executeZendesk when the component mounts
    executeZendesk("webWidget", "open");

    return () => {
      // Example cleanup if needed
      executeZendesk("webWidget", "close");
    };
  }, [executeZendesk]);

  return <div id="zendesk-container"></div>;
};

export default Zendesk;
