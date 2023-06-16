import { useState, useEffect } from "react";

export function doBackgroundGen(lightMode) {
  let dir = 1;
  if (Math.floor(Math.random() * 2)) {
    dir = -1;
  }

  const rot = Math.floor(Math.random() * 360 * dir),
        pie1 = Math.max(Math.floor(Math.random() * 45), 25),
        pie2 = Math.max(Math.floor((Math.random() * 45) + pie1), pie1 + 25),
        pie3 = 100 - pie1 - pie2;

  let colour1, colour2, colour3
  if (lightMode) {
    colour1 = "#D8DEE6"
    colour2 = "#D1CCD8"
    colour3 = "#C8D7EB"
  } else {
    colour1 = "#111112"
    colour2 = "#1A1B22"
    colour3 = "#2B333C"
  }

  return {backgroundImage: `
    linear-gradient(${rot * dir}deg, ${colour1} 0% ${pie1}%, transparent ${pie1}% 100%),
    linear-gradient(${rot + (40 * dir)}deg, ${colour2} 0% ${pie2}%, transparent ${pie2}% 100%),
    linear-gradient(${rot + (80 * dir)}deg, ${colour3} 0% ${pie3}%, transparent ${pie3}% 100%)`}
};

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};
