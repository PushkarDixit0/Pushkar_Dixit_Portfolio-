import { useEffect, useState } from 'react';

export function useTyping(words, speed = 90, pause = 1100) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const doneTyping = !deleting && text === word;
    const doneDeleting = deleting && text === '';
    const delay = doneTyping ? pause : deleting ? speed / 2 : speed;

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
        return;
      }
      if (doneDeleting) {
        setDeleting(false);
        setIndex((value) => value + 1);
        return;
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, index, pause, speed, text, words]);

  return text;
}
