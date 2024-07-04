import { useZendeskContext } from "./Context";

/**
 * Custom hook to access Zendesk client through context.
 * @returns The Zendesk context value.
 */
export const useZendesk = () => useZendeskContext();
