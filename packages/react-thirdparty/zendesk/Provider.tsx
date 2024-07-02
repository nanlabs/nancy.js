import React, { useEffect, ReactNode, useCallback, useState } from "react";
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
  const [zendeskClient, setZendeskClient] = useState<typeof window.zE | null>(
    null
  );

  const executeZendesk = useCallback(
    (action: string, params?: any) => {
      if (!zendeskClient) {
        console.warn("Zendesk client is not available");
        return;
      }
      zendeskClient(action, params);
    },
    [zendeskClient]
  );

  const onLoad = () => {
    if (typeof window === "undefined" || !(window as any).zE) {
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
      setZendeskClient(null);
    };
  }, [zendeskKey, scriptId, appendTo, handleOnLoad]);

  const zendeskContextValue = { executeZendesk };

  return (
    <ZendeskContext.Provider value={zendeskContextValue}>
      {children}
    </ZendeskContext.Provider>
  );
};
