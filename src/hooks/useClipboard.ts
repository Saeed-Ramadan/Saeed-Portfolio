import { useState, useCallback } from "react";

interface UseClipboardReturn {
  copiedText: string | null;
  copy: (text: string) => Promise<boolean>;
  isCopied: (text: string) => boolean;
}

// RATIONALE: Extracts asynchronous clipboard interaction and temporary feedback state from UI components into a reusable custom hook.
export const useClipboard = (resetDuration: number = 2000): UseClipboardReturn => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      if (!navigator?.clipboard) {
        return false;
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopiedText(text);
        window.setTimeout(() => {
          setCopiedText((current) => (current === text ? null : current));
        }, resetDuration);
        return true;
      } catch {
        return false;
      }
    },
    [resetDuration]
  );

  const isCopied = useCallback(
    (text: string) => copiedText === text,
    [copiedText]
  );

  return { copiedText, copy, isCopied };
};
