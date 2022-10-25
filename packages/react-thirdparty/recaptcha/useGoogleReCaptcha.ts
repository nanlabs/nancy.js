import { useCallback, useEffect } from "react";
import { useGoogleReCaptchaContext } from "./useGoogleReCaptchaContext";

export interface GoogleReCaptchaConfig {
  onVerify: (token: string) => void | Promise<void>;
  action?: string;
  runOnMountOnly?: boolean;
}

/**
 * useGoogleReCaptcha hook to use Google ReCaptcha v3
 * @param {GoogleReCaptchaConfig} props - Google ReCaptcha v3 config
 */
export const useGoogleReCaptcha = ({
  action,
  onVerify,
  runOnMountOnly,
}: GoogleReCaptchaConfig) => {
  const googleReCaptchaContextValue = useGoogleReCaptchaContext();

  const handleExecuteRecaptcha = useCallback(async () => {
    const { executeReCaptcha } = googleReCaptchaContextValue;

    if (!executeReCaptcha) {
      console.warn("Execute recaptcha function not defined");
      return;
    }

    const token = await executeReCaptcha({ action: action || "" });

    if (!onVerify) {
      console.warn("Please define an onVerify function");
      return;
    }

    onVerify(token);
  }, [onVerify, action, googleReCaptchaContextValue]);

  useEffect(() => {
    if (!runOnMountOnly) {
      handleExecuteRecaptcha();
    }
  }, [action, onVerify, googleReCaptchaContextValue, runOnMountOnly]);

  useEffect(() => {
    if (runOnMountOnly) {
      handleExecuteRecaptcha();
    }
  }, [runOnMountOnly]);
};
