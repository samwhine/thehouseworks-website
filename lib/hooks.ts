"use client";

import { useEffect, useState } from "react";

function getMatch(query: string) {
  if (typeof window === "undefined") return false;
  return window.matchMedia(query).matches;
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    getMatch("(prefers-reduced-motion: reduce)"),
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return reduced;
}

export function useFinePointer() {
  const [fine, setFine] = useState(() => getMatch("(pointer: fine)"));

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    const listener = (event: MediaQueryListEvent) => setFine(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return fine;
}
