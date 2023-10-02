import { useState } from "react";

export interface CopyToClipboardState {
  value?: string | null;
  noUserInteraction: boolean;
  error?: Error | null;
}

const useCopyToClipboard = (): [
  CopyToClipboardState,
  (value: string, userInitiated?: boolean) => void
] => {
  const [clipBoardState, setClipBoardState] = useState<CopyToClipboardState>({
    value: null,
    noUserInteraction: false,
    error: null,
  });

  const copyToClipboard = async (text: string, userInitiated = false) => {
    try {
      await navigator.clipboard.writeText(text);
      setClipBoardState({
        value: text,
        noUserInteraction: userInitiated,
        error: null,
      });
    } catch (err: unknown) {
      setClipBoardState({
        value: null,
        noUserInteraction: userInitiated,
        error: err as Error,
      });
    }
  };

  return [clipBoardState, copyToClipboard];
};

export default useCopyToClipboard;
