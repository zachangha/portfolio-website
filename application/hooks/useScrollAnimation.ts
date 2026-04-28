import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isVisible };
}
