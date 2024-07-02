import React, { FC, useEffect } from "react";
import { useZendesk } from "./useZendesk";

/**
 * Zendesk component to load the Zendesk script.
 * @returns The Zendesk container element.
 */
const Zendesk: React.FC = () => {
  const { executeZendesk } = useZendesk();

  useEffect(() => {
    if (!executeZendesk) {
      console.warn("Zendesk client is not available");
      return;
    }

    // Example usage of executeZendesk when the component mounts
    executeZendesk("messenger", "open");

    return () => {
      // Example cleanup if needed
      executeZendesk("messenger", "close");
    };
  }, [executeZendesk]);

  return <div id="zendesk-container"></div>;
};

export default Zendesk;
