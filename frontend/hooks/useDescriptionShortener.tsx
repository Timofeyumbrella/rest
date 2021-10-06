import { useMemo } from "react";

function useDescriptionShortener(description) {
  return useMemo(() => {
    const descriptionWordsAllowed = 10;
    const descriptionWords = description.split(" ");

    if (descriptionWords.length < descriptionWordsAllowed) return description;

    return (
      descriptionWords
        .filter((_, idx) => idx < descriptionWordsAllowed)
        .join(" ") + " ..."
    );
  }, [description]);
}

export default useDescriptionShortener;
