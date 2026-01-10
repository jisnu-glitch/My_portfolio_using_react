import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useScrollReveal(selector, options = {}) {
  useEffect(() => {
    ScrollReveal().reveal(selector, {
      distance: "60px",
      duration: 1200,
      easing: "ease-out",
      interval: 120,
      origin: "bottom",
      reset: false,
      ...options,
    });
  }, [selector, options]);
}
