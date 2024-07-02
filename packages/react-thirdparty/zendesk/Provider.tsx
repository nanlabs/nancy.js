import React, { useEffect, ReactNode } from "react";
import {
  injectZendeskScript,
  removeZendeskScript,
  ZendeskScriptProps,
} from "@nanlabs/thirdparty";
import { ZendeskContext } from "./Context";

/**
 * ZendeskProvider component to wrap around your application and provide Zendesk context.
 * @param props - The props for the provider.
 * @returns The provider component.
 */
export const ZendeskProvider: React.FC<
  ZendeskScriptProps & { children: ReactNode }
> = ({
  zendeskKey,
  scriptId,
  appendTo = "body",
  handleOnLoad,
  children,
}: ZendeskScriptProps & { children: ReactNode }): JSX.Element => {
  useEffect(() => {
    injectZendeskScript({ zendeskKey, scriptId, appendTo, handleOnLoad });

    return () => {
      removeZendeskScript(scriptId);
    };
  }, [zendeskKey, scriptId, appendTo, handleOnLoad]);

  return (
    <ZendeskContext.Provider
      value={{ zendeskKey, scriptId, appendTo, handleOnLoad }}
    >
      {children}
    </ZendeskContext.Provider>
  );
};
