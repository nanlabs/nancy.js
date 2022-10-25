import { useContext } from "react";
import { GoogleReCaptchaContext } from "./Context";

export const useGoogleReCaptchaContext = () =>
  useContext(GoogleReCaptchaContext);
