"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectMedia({
  thumbnail,
  previewVideo,
  title,
  category,
  alt,
  priority,
  className,
}: {
  thumbnail: string;
  previewVideo?: string;
  title?: string;
  category?: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);

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
    if (hovering && inView) video.play().catch(() => {});
    else video.pause();
  }, [hovering, inView]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={cn(
        "group/media relative aspect-[4/3] overflow-hidden bg-ink-2 sm:aspect-video",
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
          "object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]",
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
        <div>
          <p className="text-eyebrow text-[0.62rem] text-brass">Behance portfolio</p>
          {title && <p className="mt-2 max-w-[24ch] font-display text-xl leading-none text-paper sm:text-2xl">{title}</p>}
          {category && <p className="mt-2 text-xs text-paper/65">{category}</p>}
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-paper/30 bg-ink/30 text-paper backdrop-blur-sm transition-colors duration-300 group-hover/media:border-brass group-hover/media:bg-brass group-hover/media:text-ink">
          <ArrowUpRight className="size-4" aria-hidden />
        </span>
      </div>
    </div>
  );
}
