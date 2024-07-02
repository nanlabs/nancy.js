import { createContext, useContext } from "react";

export interface ZendeskContextProps {
  executeZendesk: ZendeskWidget;
}

export const ZendeskContext = createContext<ZendeskContextProps | undefined>(
  undefined
);

/**
 * Custom hook to use the Zendesk context.
 * @throws If used outside of a ZendeskProvider.
 * @returns The Zendesk context value.
 */
export const useZendeskContext = (): ZendeskContextProps => {
  const context = useContext(ZendeskContext);
  if (!context) {
    throw new Error("useZendeskContext must be used within a ZendeskProvider");
  }
  return context;
};
