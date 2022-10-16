import React, { FC, useCallback, useEffect, useState } from "react";
import { GoogleReCaptchaContext } from "./Context";
import { injectGoogleReCaptchaScript, removeScript } from "@nancy/thirdparty";

const SCRIPT_ID = "google-recaptcha-v3";

enum GoogleRecaptchaError {
  SCRIPT_NOT_AVAILABLE = "Recaptcha script is not available",
}

export interface ReCaptchaExecuteOptions {
  action: string
}

interface ReCaptchaInstance {
  ready: (cb: () => unknown) => unknown
  execute: (key: string, options: ReCaptchaExecuteOptions) => Promise<string>
  render: (id: string, options: ReCaptchaRenderOptions) => unknown
}

interface ReCaptchaRenderOptions {
  sitekey: string
  size: 'invisible'
}

export interface GoogleReCaptchaProviderProps {
  reCaptchaKey?: string;
  language?: string;
  useRecaptchaNet?: boolean;
  children: JSX.Element;
  scriptProps?: {
    nonce?: string;
    defer?: boolean;
    async?: boolean;
    appendTo?: "head" | "body";
  };
}

export const GoogleReCaptchaProvider: FC<GoogleReCaptchaProviderProps> = ({
  children,
  language,
  useRecaptchaNet,
  reCaptchaKey,
  scriptProps,
}) => {
  const [grecaptcha, setGrecaptcha] = useState<ReCaptchaInstance | null>(null);

  const googleRecaptchaSrc = () => {
    const hostName = useRecaptchaNet ? "recaptcha.net" : "google.com";

    return `https://www.${hostName}/recaptcha/api.js`;
  };
  
  const executeReCaptcha = useCallback(
    async (action?: ReCaptchaExecuteOptions): Promise<string> => {
      if (!grecaptcha || !reCaptchaKey || !action) {
        return "";
      }

      return grecaptcha.execute(reCaptchaKey, action);
    },
    [reCaptchaKey, grecaptcha]
  );

  const handleOnLoad = () => {
    if (typeof window === "undefined" || !(window as any).grecaptcha) {
      console.warn(GoogleRecaptchaError.SCRIPT_NOT_AVAILABLE);
      return;
    }

    (window as any).grecaptcha.ready(() => {
      setGrecaptcha((window as any).grecaptcha);
    });
  };

  useEffect(() => {
    if (!reCaptchaKey) {
      console.warn("<GoogleReCaptchaProvider /> recaptcha key not provided");
      return;
    }

    injectGoogleReCaptchaScript({
      reCaptchaKey,
      language,
      src: googleRecaptchaSrc(),
      scriptId: SCRIPT_ID,
      handleOnLoad,
      ...scriptProps,
    });

    return () => {
      // remove badge and script
      removeScript(SCRIPT_ID);
    };
  }, [reCaptchaKey]);

  const googleReCaptchaContextValue = { executeReCaptcha };

  return (
    <GoogleReCaptchaContext.Provider value={googleReCaptchaContextValue}>
      {children}
    </GoogleReCaptchaContext.Provider>
  );
};
