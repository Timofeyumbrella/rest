import { useMemo } from "react";

function useDescriptionShortener(text: string, allowedLength: number) {
  return useMemo(() => {
    const words: string[] = text.split(" ");

    if (words.length < allowedLength) return text;

    return words.slice(0, allowedLength).join(" ") + "...";
  }, [text]);
}

export default useDescriptionShortener;
