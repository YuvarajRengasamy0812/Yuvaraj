import { useEffect, useState } from "react";

export function useTypewriter(words, options = {}) {
  const typeSpeed = options.typeSpeed ?? 55;
  const backSpeed = options.backSpeed ?? 28;
  const pause = options.pause ?? 900;
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex] ?? "";
    const doneTyping = !deleting && visibleChars === current.length;
    const doneDeleting = deleting && visibleChars === 0;

    const timer = window.setTimeout(
      () => {
        if (doneTyping) {
          setDeleting(true);
          return;
        }

        if (doneDeleting) {
          setDeleting(false);
          setWordIndex((index) => (index + 1) % words.length);
          return;
        }

        setVisibleChars((count) => count + (deleting ? -1 : 1));
      },
      doneTyping ? pause : deleting ? backSpeed : typeSpeed
    );

    return () => window.clearTimeout(timer);
  }, [backSpeed, deleting, pause, typeSpeed, visibleChars, wordIndex, words]);

  return (words[wordIndex] ?? "").slice(0, visibleChars);
}