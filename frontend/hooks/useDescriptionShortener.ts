import { useMemo } from "react";

function useDescriptionShortener(text, allowedLength) {
  return useMemo(() => {
    const words = text.split(" ");

    if (words.length < allowedLength) return text;

    return words.slice(0, allowedLength).join(" ") + "...";
  }, [text]);
}

export default useDescriptionShortener;
