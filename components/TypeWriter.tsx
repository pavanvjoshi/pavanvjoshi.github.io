"use client";

import { useEffect, useState } from "react";

type TypeWriterProps = {
  words: readonly string[];
  className?: string;
};

/**
 * Cycles through `words`, typing and deleting each one with a blinking caret.
 */
export function TypeWriter({ words, className }: TypeWriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    // Pause at the end of a fully-typed word before deleting.
    if (!deleting && text === current) {
      const hold = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(hold);
    }

    // Move to the next word once fully deleted.
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      },
      deleting ? 45 : 85
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-blink bg-accent align-middle" style={{ height: "1em" }} />
    </span>
  );
}
