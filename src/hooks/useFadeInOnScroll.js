import { useEffect } from "react";

export default function useFadeInOnScroll(ref, options = { threshold: 0.2 }) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => {
              entry.target.classList.add("show");
            });
            obs.unobserve(entry.target); // stop watching after fade-in
          }
        });
      },
      options
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
}
