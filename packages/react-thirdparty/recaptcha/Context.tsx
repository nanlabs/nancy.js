import { createContext } from "react";
import { ReCaptchaExecuteOptions } from "./Provider";

export interface GoogleReCaptchaConsumerProps {
  executeReCaptcha?: (action?: ReCaptchaExecuteOptions) => Promise<string>;
}

const GoogleReCaptchaContext = createContext<GoogleReCaptchaConsumerProps>({
  // dummy default context
});

const { Consumer: GoogleReCaptchaConsumer } = GoogleReCaptchaContext;

export { GoogleReCaptchaConsumer, GoogleReCaptchaContext };
