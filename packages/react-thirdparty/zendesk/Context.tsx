import { createContext, useContext } from "react";

export interface ZendeskContextProps {
  executeZendesk?: ZendeskWidget;
}

export const ZendeskContext = createContext<ZendeskContextProps>({});

/**
 * Custom hook to use the Zendesk context.
 * @throws If used outside of a ZendeskProvider.
 * @returns The Zendesk context value.
 */
export const useZendeskContext = () => useContext(ZendeskContext);
