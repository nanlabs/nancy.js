import React, { FC } from "react";
import {
  GoogleReCaptchaConfig,
  useGoogleReCaptcha,
} from "./useGoogleReCaptcha";

export const GoogleReCaptcha: FC<GoogleReCaptchaConfig> = (config) => {
  useGoogleReCaptcha(config);
  return <div id="google-recaptcha-container" />;
};
