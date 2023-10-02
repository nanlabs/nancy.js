import { useState } from "react";

export interface CopyToClipboardState {
  value?: string;
  noUserInteraction: boolean;
  error?: Error;
}

const useCopyToClipboard = (): [
  CopyToClipboardState,
  (value: string, userInitiated?: boolean) => void
] => {
  const [clipBoardState, setClipBoardState] = useState<CopyToClipboardState>({
    noUserInteraction: false,
  });

  const copyToClipboard = async (text: string, userInitiated = false) => {
    try {
      await navigator.clipboard.writeText(text);
      setClipBoardState({
        value: text,
        noUserInteraction: userInitiated,
        error: undefined,
      });
    } catch (err: unknown) {
      setClipBoardState({
        value: undefined,
        noUserInteraction: userInitiated,
        error: err as Error,
      });
    }
  };

  return [clipBoardState, copyToClipboard];
};

export default useCopyToClipboard;
