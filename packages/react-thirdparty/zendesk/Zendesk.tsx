import React from "react";
import { ZendeskScriptProps } from "@nanlabs/thirdparty";
import { useZendesk } from "./useZendesk";

export type ZendeskProps = ZendeskScriptProps;

const Zendesk: React.FC<ZendeskProps> = (config: ZendeskProps) => {
  useZendesk(config);
  return null;
};

export default Zendesk;
