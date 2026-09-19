<<<<<<< HEAD
<<<<<<< HEAD
"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  ["01", "Content planning", "A clear direction, campaign map, and production plan before anything gets made."],
  ["02", "Client & production management", "Stefanny keeps the brief, feedback, timeline, and moving parts under control."],
  ["03", "Editing & motion", "Samuel turns the plan into sharp edits, social cuts, motion graphics, and delivery-ready assets."],
];

const packages = [
  ["For one-off needs", "Project Sprint", "A focused production from brief to delivery when you already know what needs to be made."],
  ["For busy teams", "Content Partner", "A reliable external production desk for recurring content without another full-time hire."],
  ["For campaigns", "Full Production", "One clean point of contact for a bigger campaign, from first idea to final export."],
];

const placeholders = [
  ["01", "Campaign / Brand Content", "Reserved for an upcoming case study", "charcoal"],
  ["02", "Social Content System", "Reserved for Stefanny's planning work", "lime"],
  ["03", "Motion & 2D Animation", "Reserved for Samuel's edit work", "blue"],
];

function Kicker({ children, count }: { children: React.ReactNode; count: string }) {
  return <div className="kicker"><span>{children}</span><span>{count}</span></div>;
}

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ "--delay": `${delay}ms` } as React.CSSProperties}>{children}</div>;
}

function TiltLogo() {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  return <div className="hero-visual" onMouseMove={(event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - .5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - .5) * -10;
    setTransform(`perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale(1.015)`);
  }} onMouseLeave={() => setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)")}>
    <div className="visual-meta"><span>PRODUCTION PARTNER / 001</span><span>FOR TEAMS THAT MOVE</span></div>
    <div className="logo-panel" style={{ transform }}>
      <img src="/brand/thehouseworks-logo.webp" alt="The House Works logo" />
      <div className="panel-note">PLANNING<br />PRODUCTION<br />POST-PRODUCTION</div>
      <span className="acid-dot">↘</span>
      <span className="scan-line" aria-hidden="true" />
    </div>
  </div>;
}

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max ? window.scrollY / max : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <main>
    <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    <header className="header">
      <a className="brand" href="#top" aria-label="The House Works home"><span className="brand-mark"><i /><b /><em /></span><span><strong>THE HOUSE</strong><small>WORKS</small></span></a>
      <nav className={menuOpen ? "open" : ""}><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#process" onClick={() => setMenuOpen(false)}>Process</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></nav>
      <button className={`menu-box ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><span /><span /></button>
    </header>

    <section id="top" className="hero wrap">
      <div className="hero-copy"><p className="eyebrow reveal is-visible">Jakarta · Production House for Brands</p><h1><span className="hero-line">Less</span><span className="hero-line">chasing.</span><span className="hero-line accent-line">More <i>making.</i></span></h1><p className="lead reveal is-visible" style={{ "--delay": "220ms" } as React.CSSProperties}>The House Works is an external creative production team for companies that want good content without the production headache.</p><div className="hero-actions reveal is-visible" style={{ "--delay": "320ms" } as React.CSSProperties}><a className="button dark magnetic" href="#contact">Talk to the house <Arrow /></a><a className="underlink" href="#services">See what we handle <Arrow /></a></div></div>
      <TiltLogo />
      <div className="hero-foot"><span>STEFANNY / CLIENT &amp; PRODUCTION</span><span>↓</span><span>SAMUEL / EDIT &amp; MOTION</span></div>
    </section>

    <section className="black section wrap"><Kicker count="(001)">The short version</Kicker><Reveal className="split"><h2>Your team brings<br /><i>the brief.</i></h2><p>We bring the structure, taste, and hands-on production to get it out the door. One small team, two clear roles, one less thing for your company to worry about.</p></Reveal></section>

    <section id="services" className="section wrap"><Kicker count="(002)">What we handle</Kicker><Reveal className="section-head"><h2>From brief<br /><i>to publish.</i></h2><p>Think of us as your external content desk. You bring the business context; we take care of the creative production and the follow-through.</p></Reveal><div className="service-list">{services.map(([no, title, copy], index) => <Reveal key={no} delay={index * 60}><div className="service"><span>{no}</span><h3>{title}</h3><p>{copy}</p><b>+</b></div></Reveal>)}</div></section>

    <section id="process" className="black section wrap"><Kicker count="(003)">How it works</Kicker><Reveal className="section-head"><h2>One brief.<br /><i>Clear handoffs.</i></h2><p>No production maze, no wondering who is chasing what. Stefanny keeps the project moving with the client; Samuel keeps the output moving in the edit.</p></Reveal><div className="process-grid">{[["01 / ALIGN", "Tell us what needs to move.", "Audience, objective, formats, references, timeline, and what success looks like."], ["02 / MAKE", "We plan, produce, and refine.", "Stefanny coordinates the work and feedback. Samuel shapes the edit, motion, and visual language."], ["03 / DELIVER", "You get clean, ready-to-use assets.", "Final exports are organised for the channels they are meant for, with the process ready for the next round."]].map(([label, title, copy], index) => <Reveal key={label} delay={index * 80}><article className={index === 1 ? "acid" : ""}><small>{label}</small><h3>{title}</h3><p>{copy}</p></article></Reveal>)}</div><div className="roles"><span>STEFANNY SIMANJUNTAK <b>Client, planner, producer</b></span><span>SAMUEL EXTEHINES HEYDEMANS <b>Editor, motion, post-production</b></span></div></section>

    <section className="packages section wrap"><Kicker count="(004)">Ways to work together</Kicker><Reveal className="section-head"><h2>Pick the<br /><i>right level.</i></h2><p>Flexible production support for teams that need a clear, capable partner from first brief to final export.</p></Reveal><div className="package-grid">{packages.map(([label, title, copy], index) => <Reveal key={title} delay={index * 70}><article className={`package package-${index}`}><small>{label}</small><h3>{title}</h3><p>{copy}</p><ul><li>✓ Brief alignment</li><li>✓ Production plan</li><li>✓ Editing / motion</li><li>✓ Final delivery</li></ul><a className="magnetic" href="#contact">Discuss this setup <Arrow /></a></article></Reveal>)}</div></section>

    <section id="work" className="section wrap"><Kicker count="(005)">Portfolio / in progress</Kicker><Reveal className="section-head"><h2>Good work<br /><i>coming soon.</i></h2><p>We are currently renovating this section. These placeholders leave room for work from The House Works, Samuel, and Stefanny without publishing unfinished claims.</p></Reveal><div className="placeholder-list">{placeholders.map(([no, title, copy, tone], index) => <Reveal key={title} delay={index * 60}><article className="placeholder"><span>{no}</span><div className={`placeholder-art ${tone}`}><b>{no}</b><small>IMAGE SLOT</small></div><div><h3>{title}</h3><p>{copy}</p></div><em>Coming soon ＋</em></article></Reveal>)}</div></section>

    <section id="contact" className="contact"><div className="contact-art"><span>READY WHEN YOU ARE</span><strong>Let’s make<br /><i>it easier.</i></strong><div className="orbit one" /><div className="orbit two" /></div><div className="contact-copy"><Kicker count="(006)">Start a project</Kicker><h2>Have a campaign, content backlog, or a team that needs a production partner?</h2><a className="email magnetic" href="mailto:hello@thehouseworks.id">hello@thehouseworks.id <Arrow /></a><div className="social"><a href="mailto:hello@thehouseworks.id">Email</a><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.behance.net/samuel-e-heydemans" target="_blank" rel="noreferrer">Current Behance</a></div></div></section>

    <footer className="footer wrap"><a className="brand" href="#top"><span className="brand-mark"><i /><b /><em /></span><span><strong>THE HOUSE</strong><small>WORKS</small></span></a><span>© 2026 THE HOUSE WORKS · CREATIVE &amp; SOCIAL PRODUCTION</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The House Works",
  url: "https://thehouseworks.vercel.app",
  logo: "https://thehouseworks.vercel.app/brand/thehouseworks-logo.webp",
  description: "Creative production partner for brands and teams that move.",
  founder: [{ "@type": "Person", name: "Samuel Extehines Heydemans" }, { "@type": "Person", name: "Stefanny Simanjuntak" }],
  email: "hello@thehouseworks.id",
  areaServed: "Jakarta, Indonesia",
};
=======
=======
>>>>>>> parent of 44f0ac6 (update1.2)
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Hero } from "@/components/hero/Hero";
import { SelectedWork } from "@/components/work/SelectedWork";
import { Statement } from "@/components/hero/Statement";
import { Services } from "@/components/services/Services";
import { Process } from "@/components/process/Process";
import { About } from "@/components/about/About";
import { Faq } from "@/components/faq/Faq";
import { FinalCta } from "@/components/cta/FinalCta";

export const metadata: Metadata = pageMeta({
  title: "The House Works — Creative Production Partner",
  description:
    "The House Works is a creative production partner helping brands turn briefs into content through creative direction, design, video editing and social production.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Statement />
      <Services />
      <Process />
      <About />
      <Faq />
      <FinalCta />
    </>
  );
}
<<<<<<< HEAD
>>>>>>> parent of 44f0ac6 (update1.2)
=======
>>>>>>> parent of 44f0ac6 (update1.2)
