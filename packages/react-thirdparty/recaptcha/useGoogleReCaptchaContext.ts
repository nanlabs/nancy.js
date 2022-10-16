import React from "react";
import {
  GoogleReCaptchaContext,
  GoogleReCaptchaConsumerProps,
} from "./Context";

export const useGoogleReCaptchaContext = () =>
  React.useContext<GoogleReCaptchaConsumerProps>(GoogleReCaptchaContext);
