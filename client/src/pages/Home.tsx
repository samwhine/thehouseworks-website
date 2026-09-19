import { ArrowDownRight, ArrowUpRight, Check, ExternalLink, Instagram, Mail, Menu, MoveUpRight, Plus, X } from "lucide-react";
import { useState } from "react";

const logoImage = "/brand/the-house-works-logo-source.png";

const portfolioPlaceholders = [
  { number: "01", title: "Campaign / Brand Content", type: "Reserved for upcoming case study", status: "Coming soon", tone: "charcoal", mark: "01" },
  { number: "02", title: "Social Content System", type: "Reserved for Fanny's planning work", status: "Coming soon", tone: "lime", mark: "02" },
  { number: "03", title: "Motion & 2D Animation", type: "Reserved for Samuel's edit work", status: "Coming soon", tone: "blue", mark: "03" },
];

const services = [
  { number: "01", title: "Content Planning", copy: "A clear content direction, campaign map, and production plan before anything gets made." },
  { number: "02", title: "Production Management", copy: "Fanny handles the client side, brief, timeline, and moving parts so your team does not have to." },
  { number: "03", title: "Editing & Motion", copy: "Samuel turns the plan into sharp edits, social cuts, motion graphics, and delivery-ready assets." },
];

const packages = [
  { label: "For one-off needs", title: "Project Sprint", copy: "A focused production from brief to delivery — useful when you already know what needs to be made.", includes: ["Brief alignment", "Production plan", "Editing / motion", "Final delivery"] },
  { label: "For busy teams", title: "Content Partner", copy: "A reliable external production desk for recurring content without adding another full-time hire.", includes: ["Monthly planning", "Client-side coordination", "Content batches", "Review & delivery"] },
  { label: "For campaigns", title: "Full Production", copy: "One clean point of contact for a bigger campaign, from the first idea to the final export.", includes: ["Creative direction", "Production management", "Multi-format edits", "Campaign handoff"] },
];

function scrollToId(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

function LogoLockup({ compact = false }: { compact?: boolean }) {
  return <a href="#top" className={`logo-lockup ${compact ? "logo-lockup--compact" : ""}`} aria-label="The House Works home"><span className="logo-symbol" aria-hidden="true"><span className="logo-roof" /><span className="logo-stem" /><span className="logo-door" /></span><span className="logo-words"><strong>THE HOUSE</strong><em>WORKS</em></span></a>;
}

function PlaceholderCover({ item }: { item: (typeof portfolioPlaceholders)[number] }) {
  return <div className={`project-cover project-cover--${item.tone}`}><div className="cover-grain" /><div className="cover-topline"><span>THW / WORK INDEX</span><span>{item.number}</span></div><div className="cover-center"><span className="cover-mark">{item.mark}</span><span className="cover-note">{item.status}</span></div><div className="cover-bottomline"><span>IMAGE SLOT</span><span>2026</span></div><span className="cover-shape cover-shape--one" /><span className="cover-shape cover-shape--two" /></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const go = (id: string) => { setMenuOpen(false); scrollToId(id); };

  return <div id="top" className="site-shell">
    <header className="site-header"><LogoLockup compact /><nav className="desktop-nav" aria-label="Primary navigation"><button onClick={() => go("services")}>Services</button><button onClick={() => go("process")}>Process</button><button onClick={() => go("contact")}>Contact</button></nav><button className="menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></header>
    {menuOpen && <div className="mobile-menu"><button onClick={() => go("services")}>What we do <ArrowUpRight size={18} /></button><button onClick={() => go("process")}>How it works <ArrowUpRight size={18} /></button><button onClick={() => go("contact")}>Start a conversation <ArrowUpRight size={18} /></button></div>}

    <main>
      <section className="hero-section">
        <div className="hero-copy"><p className="eyebrow reveal-in">Jakarta · Production House for Brands</p><h1 className="hero-title reveal-in">Less chasing.<br /><span>More making.</span></h1><p className="hero-intro reveal-in">The House Works is an external creative production team for companies that want good content without the production headache.</p><div className="hero-actions reveal-in"><button className="pill-button pill-button--dark" onClick={() => go("contact")}>Talk to the house <ArrowDownRight size={17} /></button><button className="text-link" onClick={() => go("services")}>See what we handle <ArrowDownRight size={15} /></button></div></div>
        <div className="hero-art-wrap reveal-in"><div className="hero-art-label"><span>PRODUCTION PARTNER / 001</span><span>FOR TEAMS THAT MOVE</span></div><div className="hero-art"><img src={logoImage} alt="The House Works original logo" /><div className="hero-art-overlay"><span>PLANNING<br />PRODUCTION<br />POST-PRODUCTION</span><ArrowDownRight size={22} /></div></div></div>
        <div className="hero-footer-line"><span>FANNY / CLIENT &amp; PRODUCTION</span><span className="scroll-mark">↓</span><span>SAMUEL / EDIT &amp; MOTION</span></div>
      </section>

      <section className="manifesto-section section-pad"><div className="section-kicker"><span>THE SHORT VERSION</span><span>(001)</span></div><div className="manifesto-grid"><h2>Your team brings<br /><i>the brief.</i></h2><div className="manifesto-copy"><p>We bring the structure, taste, and hands-on production to get it out the door. One small team, two clear roles, one less thing for your company to worry about.</p><button className="circle-arrow" onClick={() => go("process")} aria-label="See how the process works"><ArrowDownRight size={24} /></button></div></div></section>

      <section id="services" className="services-section section-pad"><div className="section-kicker"><span>WHAT WE HANDLE</span><span>(002)</span></div><div className="work-heading"><h2>From brief<br /><i>to publish.</i></h2><p>Think of us as your external content desk. You bring the business context; we take care of the creative production and the follow-through.</p></div><div className="services-list services-list--large">{services.map((service) => <div className="service-row" key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><Plus size={18} /></div>)}</div></section>

      <section id="process" className="process-section section-pad"><div className="section-kicker"><span>HOW IT WORKS</span><span>(003)</span></div><div className="process-heading"><h2>One brief.<br /><i>Clear handoffs.</i></h2><p>No production maze, no wondering who is chasing what. Fanny keeps the project moving with the client; Samuel keeps the output moving in the edit.</p></div><div className="process-grid"><div className="process-card"><span>01 / ALIGN</span><h3>Tell us what needs to move.</h3><p>We get clear on the audience, objective, formats, references, timeline, and what success looks like.</p></div><div className="process-card process-card--dark"><span>02 / MAKE</span><h3>We plan, produce, and refine.</h3><p>Fanny coordinates the work and feedback. Samuel shapes the edit, motion, and final visual language.</p></div><div className="process-card"><span>03 / DELIVER</span><h3>You get clean, ready-to-use assets.</h3><p>Final exports are organised for the channels they are meant for, with the process documented for the next round.</p></div></div><div className="role-strip"><div><span>FANNY</span><strong>Client, planner, producer</strong></div><div><span>SAMUEL</span><strong>Editor, motion, post-production</strong></div></div></section>

      <section id="packages" className="packages-section section-pad"><div className="section-kicker"><span>WAYS TO WORK TOGETHER</span><span>(004)</span></div><div className="work-heading"><h2>Pick the<br /><i>right level.</i></h2><p>Placeholder packages for now — the structure can be adjusted once you decide the exact offer, pricing, and deliverables.</p></div><div className="packages-grid">{packages.map((pack) => <article className="package-card" key={pack.title}><span className="package-label">{pack.label}</span><h3>{pack.title}</h3><p>{pack.copy}</p><ul>{pack.includes.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul><button onClick={() => go("contact")}>Discuss this setup <MoveUpRight size={16} /></button></article>)}</div></section>

      <section id="work" className="work-section section-pad"><div className="section-kicker"><span>PORTFOLIO / IN PROGRESS</span><span>(005)</span></div><div className="work-heading"><h2>Good work<br /><i>coming soon.</i></h2><p>We are currently renovating this section. The placeholders below make room for work from The House Works, Samuel, and Fanny without making claims before the projects are ready.</p></div><div className="projects-list">{portfolioPlaceholders.map((item) => <div className="project-row project-row--placeholder" key={item.title}><div className="project-index">{item.number}</div><div className="project-cover-holder"><PlaceholderCover item={item} /></div><div className="project-info"><h3>{item.title}</h3><p>{item.type}</p><span className="project-fields">Portfolio slot · Replace with approved cover, role, and case study link</span></div><div className="project-action"><span>Coming soon</span><Plus size={18} /></div></div>)}</div><div className="work-footnote"><span>↳ No placeholder project claims are published as finished work.</span><button onClick={() => go("contact")}>Ask about availability <ArrowUpRight size={14} /></button></div></section>

      <section id="contact" className="contact-section"><div className="contact-art"><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /><div className="contact-art-copy"><span>READY WHEN YOU ARE</span><strong>Let's make<br /><i>it easier.</i></strong></div></div><div className="contact-copy"><div className="section-kicker"><span>START A PROJECT</span><span>(006)</span></div><p>Have a campaign, content backlog, or a team that needs a production partner?</p><a className="contact-email" href="mailto:hello@thehouseworks.id">hello@thehouseworks.id <ArrowUpRight size={20} /></a><div className="contact-links"><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><Instagram size={14} /> Instagram</a><a href="mailto:hello@thehouseworks.id"><Mail size={14} /> Email</a><a href="https://www.behance.net/samuel-e-heydemans" target="_blank" rel="noreferrer">Current Behance <ExternalLink size={14} /></a></div></div></section>
    </main>
    <footer className="site-footer"><LogoLockup /><div><span>© 2026 THE HOUSE WORKS</span><span>CREATIVE &amp; SOCIAL PRODUCTION</span></div><a href="#top" onClick={(event) => { event.preventDefault(); go("top"); }}>Back to top ↑</a></footer>
  </div>;
}
