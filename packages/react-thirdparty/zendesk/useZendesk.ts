import { useEffect } from "react";
import {
  injectZendeskScript,
  removeZendeskScript,
  ZendeskScriptProps,
} from "@nanlabs/thirdparty";

/**
 * useZendesk is a custom hook to inject and manage Zendesk script.
 * @param {ZendeskScriptProps} props - The props for the hook.
 */
export const useZendesk = ({
  zendeskKey,
  scriptId,
  appendTo = "body",
  handleOnLoad,
}: ZendeskScriptProps) => {
  useEffect(() => {
    injectZendeskScript({ zendeskKey, scriptId, appendTo, handleOnLoad });

    return () => {
      removeZendeskScript(scriptId);
    };
  }, [zendeskKey, scriptId, appendTo, handleOnLoad]);
};
