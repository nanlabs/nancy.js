export type ZendeskSrc = "https://static.zdassets.com/ekr/snippet.js";

export interface ZendeskScriptProps {
  src?: ZendeskSrc;
  zendeskKey: string;
  scriptId: string;
  appendTo?: "head" | "body";
  handleOnLoad?: null | (() => void);
}

/**
 * generateZendeskScript generates a script tag for the Zendesk API.
 * @param {ZendeskScriptProps} props - The props for the script tag.
 */
export const generateZendeskScript = ({
  src = "https://static.zdassets.com/ekr/snippet.js",
  zendeskKey,
  scriptId,
  handleOnLoad = null,
}: ZendeskScriptProps) => {
  const js = document.createElement("script");
  js.id = scriptId;
  js.src = `${src}?key=${zendeskKey}`;
  js.async = true;
  js.onload = handleOnLoad;

  return js;
};

/**
 * injectZendeskScript injects a script tag for the Zendesk API.
 * @param {ZendeskScriptProps} props - The props for the script tag.
 */
export const injectZendeskScript = ({
  src = "https://static.zdassets.com/ekr/snippet.js",
  scriptId,
  handleOnLoad = null,
  appendTo = "body",
  ...rest
}: ZendeskScriptProps) => {
  // Check if script is already injected
  if (document.getElementById(scriptId)) {
    handleOnLoad && handleOnLoad();
    return;
  }

  const js = generateZendeskScript({
    scriptId,
    handleOnLoad,
    ...rest,
  });
  const elementToInjectScript =
    appendTo === "body"
      ? document.body
      : document.getElementsByTagName("head")[0];

  elementToInjectScript.appendChild(js);
};

/**
 * removeZendeskScript removes the Zendesk script tag from the DOM.
 * @param {string} scriptId - The id of the script tag.
 */
export const removeZendeskScript = (scriptId: string) => {
  const script = document.querySelector(`#${scriptId}`);
  if (script) {
    script.remove();
  }
};
