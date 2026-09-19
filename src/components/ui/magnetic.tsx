"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { useFinePointer, useReducedMotion } from "@/hooks/use-media-query";

export function Magnetic({
  children,
  strength = 16,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const finePointer = useFinePointer();
  const reducedMotion = useReducedMotion();
  const enabled = finePointer && !reducedMotion;

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    setOffset({ x: (relX / rect.width) * strength, y: (relY / rect.height) * strength });
  }

  function handleMouseLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: enabled ? `translate(${offset.x}px, ${offset.y}px)` : undefined,
      }}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
