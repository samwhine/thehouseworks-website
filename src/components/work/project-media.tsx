"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProjectMedia({
  thumbnail,
  previewVideo,
  alt,
  priority,
  className,
}: {
  thumbnail: string;
  previewVideo?: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);

  // Only ever play the preview clip while it's actually on screen — never
  // let several project videos run at once (spec §43).
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (hovering && inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [hovering, inView]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={cn(
        "relative aspect-[4/3] overflow-hidden bg-ink-2 sm:aspect-video",
        className,
      )}
    >
      <Image
        src={thumbnail}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 60vw, 100vw"
        className={cn(
          "object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.03]",
          previewVideo && hovering && inView && "opacity-0",
        )}
      />
      {previewVideo && (
        <video
          ref={videoRef}
          src={previewVideo}
          muted
          loop
          playsInline
          preload="none"
          poster={thumbnail}
          className={cn(
            "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500",
            hovering && inView && "opacity-100",
          )}
        />
      )}
    </div>
  );
}
