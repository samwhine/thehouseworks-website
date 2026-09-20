"use client";

import { useEffect, useState } from "react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVideoReady(true), 120);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#002b43] text-white">
      <video
        className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-1000 ${videoReady ? "opacity-100" : "opacity-0"}`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onCanPlay={() => setVideoReady(true)}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 pb-[90px] pt-[90px] text-center sm:px-8">
        <h1 className="animate-fade-rise max-w-7xl font-display text-5xl font-normal leading-[0.95] tracking-[-0.04em] sm:text-7xl md:text-8xl">
          Where <em className="not-italic text-white/60">dreams</em> rise through the <em className="not-italic text-white/60">silence.</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
          We&apos;re designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>

        <a
          href="#journey"
          className="liquid-glass animate-fade-rise-delay-2 mt-12 inline-flex rounded-full px-14 py-5 text-base text-white transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
        >
          <span className="relative z-10">Begin Journey</span>
        </a>
      </div>

      <span id="journey" className="absolute bottom-0" aria-hidden="true" />
    </section>
  );
}

export { VIDEO_SRC };
