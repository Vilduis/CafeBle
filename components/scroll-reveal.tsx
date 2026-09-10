"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    AOS.init({
      duration: 650,
      easing: "ease-out-quad",
      once: true,
      offset: 80,
    });
    document.documentElement.classList.add("aos-ready");

    return () => {
      document.documentElement.classList.remove("aos-ready");
    };
  }, []);

  return null;
}
