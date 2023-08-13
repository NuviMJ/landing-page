import { useState, useEffect } from "react";

export function useTypeWriter(
  sentences = [""],
  interval = 100,
  deleteInterval = 50
) {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedSentence, setDisplayedSentence] = useState("");

  useEffect(() => {
    // typeWriter function to type out a sentence
    function typeWriter() {
      // Get the current sentence to type
      const sentence = sentences[currentSentenceIndex];

      // Check if we're currently deleting the sentence
      if (isDeleting) {
        // Remove one character at a time
        setDisplayedSentence(sentence.substring(0, currentCharacterIndex - 1));
        setCurrentCharacterIndex(currentCharacterIndex - 1);

        // If we've deleted the entire sentence, switch to typing mode
        if (currentCharacterIndex <= 0) {
          setIsDeleting(false);
          setCurrentSentenceIndex(
            (currentSentenceIndex + 1) % sentences.length
          );
        }
      } else {
        // Add one character at a time
        setDisplayedSentence(sentence.substring(0, currentCharacterIndex + 1));
        setCurrentCharacterIndex(currentCharacterIndex + 1);

        // If we've typed the entire sentence, switch to deleting mode
        if (currentCharacterIndex >= sentence.length) {
          setIsDeleting(true);
        }
      }
    }

    // Use setInterval to call the typeWriter function at the specified interval
    const intervalId = setInterval(
      typeWriter,
      isDeleting ? deleteInterval : interval
    );

    // Clear the interval on unmount
    return () => clearInterval(intervalId);
  }, [
    currentCharacterIndex,
    currentSentenceIndex,
    deleteInterval,
    interval,
    isDeleting,
    sentences,
  ]);

  return displayedSentence;
}
