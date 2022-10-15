import React from "react";
import {
  GoogleReCaptchaContext,
  GoogleReCaptchaConsumerProps,
} from "./GoogleReCaptchaContext";

export const useGoogleReCaptchaContext = () =>
  React.useContext<GoogleReCaptchaConsumerProps>(GoogleReCaptchaContext);
