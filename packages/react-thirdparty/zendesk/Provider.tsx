import React, { useEffect, ReactNode, useState } from "react";
import { ZendeskContext } from "./Context";
import {
  injectZendeskScript,
  removeZendeskScript,
  ZendeskScriptProps,
} from "@nanlabs/thirdparty";

/**
 * ZendeskProvider component to wrap around your application and provide Zendesk context.
 * @param props - The props for the provider.
 * @returns The provider component.
 */
export const ZendeskProvider: React.FC<
  ZendeskScriptProps & { children: ReactNode }
> = ({ zendeskKey, scriptId, appendTo = "body", handleOnLoad, children }) => {
  const [zendeskClient, setZendeskClient] = useState<
    ZendeskMessagingWidget | undefined
  >(undefined);

  const onLoad = () => {
    if (!window?.zE) {
      console.warn("Zendesk script is not available");
      return;
    }
    setZendeskClient(window.zE);
    if (handleOnLoad) {
      handleOnLoad();
    }
  };

  useEffect(() => {
    injectZendeskScript({
      zendeskKey,
      scriptId,
      appendTo,
      handleOnLoad: onLoad,
    });

    return () => {
      removeZendeskScript(scriptId);
      setZendeskClient(undefined);
    };
  }, [zendeskKey, scriptId, appendTo, handleOnLoad]);

  const zendeskContextValue = { executeZendesk: zendeskClient };

  return (
    <ZendeskContext.Provider value={zendeskContextValue}>
      {children}
    </ZendeskContext.Provider>
  );
};
