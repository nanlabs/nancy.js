import React, { FC } from "react";
import { useZendesk } from "./useZendesk";

/**
 * Zendesk component to load the Zendesk script.
 * @returns The Zendesk container element.
 */
const Zendesk: FC = () => {
  useZendesk();

  return <div id="zendesk-container" />;
};

export default Zendesk;
