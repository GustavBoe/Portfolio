import { Clipboard, Check } from "lucide-react";
import { useCopy } from "@/hooks/useCopy";

export function CopyButton({ text }) {
  const { copy, copied } = useCopy(text);

  return (
    <button
      onClick={copy}
      className="flex flex-col items-center h-20 gap-2 text-xs"
      aria-label="Copy link">
      {copied ?
        <>
          <Check size={64} />
          Copied!
        </>
      : <>
          <Clipboard size={64} className="hover:cursor-copy" />
          Copy Link
        </>
      }
    </button>
  );
}
