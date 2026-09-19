"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brief, setBrief] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`New project brief — ${name || "THW"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${brief}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-stone">
            Name
          </span>
          <input
            required
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="min-h-[52px] border-b border-paper/25 bg-transparent px-1 text-lg outline-none transition-colors focus:border-brass"
            placeholder="Your name"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-stone">
            Email
          </span>
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="min-h-[52px] border-b border-paper/25 bg-transparent px-1 text-lg outline-none transition-colors focus:border-brass"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-stone">
          What are you working on?
        </span>
        <textarea
          required
          rows={5}
          value={brief}
          onChange={(event) => setBrief(event.target.value)}
          className="resize-none border-b border-paper/25 bg-transparent px-1 py-2 text-lg outline-none transition-colors focus:border-brass"
          placeholder="What you need, and your timeline."
        />
      </label>

      <button
        type="submit"
        className="mt-2 flex min-h-[52px] w-full items-center justify-center bg-paper px-7 text-[13px] font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:bg-brass-bright sm:w-fit"
        data-cursor-active
      >
        Send Brief →
      </button>
    </form>
  );
}
