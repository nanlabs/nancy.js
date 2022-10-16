import { createContext } from "react";

export interface GoogleReCaptchaConsumerProps {
  executeReCaptcha?: (action?: string) => Promise<string>;
}

const GoogleReCaptchaContext = createContext<GoogleReCaptchaConsumerProps>({
  // dummy default context
});

const { Consumer: GoogleReCaptchaConsumer } = GoogleReCaptchaContext;

export { GoogleReCaptchaConsumer, GoogleReCaptchaContext };
