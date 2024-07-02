import { useEffect } from "react";
import { useZendeskContext } from "./Context";
import { injectZendeskScript, removeZendeskScript } from "@nanlabs/thirdparty";

/**
 * Custom hook to inject and manage Zendesk script.
 */
export const useZendesk = (): void => {
  const { zendeskKey, scriptId, appendTo, handleOnLoad } = useZendeskContext();

  useEffect(() => {
    injectZendeskScript({ zendeskKey, scriptId, appendTo, handleOnLoad });

    return () => {
      removeZendeskScript(scriptId);
    };
  }, [zendeskKey, scriptId, appendTo, handleOnLoad]);
};
