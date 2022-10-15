import { FC, useEffect } from "react";
import {
  GoogleReCaptchaConfig,
  useGoogleReCaptcha,
} from "./useGoogleReCaptcha";

export const GoogleReCaptcha: FC<GoogleReCaptchaConfig> = (config) => {
  useGoogleReCaptcha(config);
  return null;
};
