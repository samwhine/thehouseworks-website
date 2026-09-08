"use client";

import { useEffect, useRef, useState } from "react";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/hooks";

export function CustomCursor() {
  const isFine = useFinePointer();
  const reduceMotion = usePrefersReducedMotion();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const enabled = isFine && !reduceMotion;

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("cursor-enabled");

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let raf = 0;

    const handleMove = (event: PointerEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
      ringX = event.clientX;
      ringY = event.clientY;

      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, [data-cursor-active]")));
    };

    const animateRing = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      raf = requestAnimationFrame(animateRing);
    };

    window.addEventListener("pointermove", handleMove);
    raf = requestAnimationFrame(animateRing);

    return () => {
      document.documentElement.classList.remove("cursor-enabled");
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      <div
        ref={ringRef}
        className="fixed left-0 top-0 -ml-4 -mt-4 size-8 rounded-full border border-brass/70 transition-[width,height,margin,opacity] duration-200 ease-out"
        style={
          active
            ? { width: 56, height: 56, marginLeft: -28, marginTop: -28, opacity: 1 }
            : undefined
        }
      />
      <div
        ref={dotRef}
        className="fixed left-0 top-0 -ml-[3px] -mt-[3px] size-[6px] rounded-full bg-brass-bright"
      />
    </div>
  );
}
