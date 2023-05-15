export interface GoogleReCaptchaScriptProps {
  src?: string;
  reCaptchaKey: string;
  scriptId: string;
  language?: string;
  nonce?: string;
  defer?: boolean;
  async?: boolean;
  appendTo?: "head" | "body";
  handleOnLoad?: null | (() => void);
}

/**
 * generateGoogleReCaptchaScript generates a script tag for the Google ReCaptcha API.
 * @param {GoogleReCaptchaScriptProps} props - The props for the script tag.
 */
export const generateGoogleReCaptchaScript = ({
  src = "https://www.google.com/recaptcha/api.js",
  reCaptchaKey,
  scriptId,
  language,
  nonce,
  defer,
  async,
  handleOnLoad = null,
}: GoogleReCaptchaScriptProps) => {
  const js = document.createElement("script");
  js.id = scriptId;
  js.src = `${src}?render=${reCaptchaKey}${language ? `&hl=${language}` : ""}`;

  if (nonce) {
    js.nonce = nonce;
  }

  js.defer = !!defer;
  js.async = !!async;
  js.onload = handleOnLoad;

  return js;
};

/**
 * injectGoogleReCaptchaScript injects a script tag for the Google ReCaptcha API.
 * @param {GoogleReCaptchaScriptProps} props - The props for the script tag.
 */
export const injectGoogleReCaptchaScript = ({
  src = "https://www.google.com/recaptcha/api.js",
  scriptId,
  handleOnLoad = null,
  appendTo,
  ...rest
}: GoogleReCaptchaScriptProps) => {
  /**
   * Scripts has already been injected script,
   * return to avoid duplicated scripts
   */
  if (document.getElementById(scriptId)) {
    handleOnLoad && handleOnLoad();
    return;
  }

  const js = generateGoogleReCaptchaScript({
    scriptId,
    handleOnLoad,
    appendTo,
    ...rest,
  });
  const elementToInjectScript =
    appendTo === "body"
      ? document.body
      : document.getElementsByTagName("head")[0];

  elementToInjectScript.appendChild(js);
};

/**
 * removeScript removes the Google ReCaptcha script tag from the DOM.
 * @param {string} scriptId - The id of the script tag.
 */
export const removeScript = (scriptId: string) => {
  // remove badge
  const nodeBadge = document.querySelector(".grecaptcha-badge");
  if (nodeBadge && nodeBadge.parentNode) {
    document.body.removeChild(nodeBadge.parentNode);
  }

  // remove script
  const script = document.querySelector(`#${scriptId}`);
  if (script) {
    script.remove();
  }
};
