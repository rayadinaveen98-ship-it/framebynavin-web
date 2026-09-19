import type { Metadata } from "next";
import Link from "next/link";
import { LiveYoutube } from "@/components/live-youtube";
import { SiteHeader } from "@/components/site-header";
import { metrics, projects, selectedWork, services, socials } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section id="top" className="hero hero-v2 shell">
        <div className="hero-v2-grid">
          <div className="hero-v2-copy">
            <div className="hero-v2-kicker">
              <p className="eyebrow">CINEMA ANALYSIS / VISUAL STORYTELLING</p>
              <span>INDIA</span>
            </div>
            <h1><span>SEE THE</span><em>FRAME.</em></h1>
            <p className="hero-v2-manifesto">BUILD THE WORLD.</p>
            <p className="lede">
              Cinema analysis, scene breakdowns and visual storytelling — with room for original stories, apps and games as they become public.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/work">VIEW WORK <Arrow /></Link>
              <Link className="button" href="/contact">START A PROJECT</Link>
            </div>
          </div>

          <LiveYoutube />
        </div>

        <div className="metric-strip metric-strip-v2">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <small>AS OF {metric.asOf.toUpperCase()}</small>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="section shell">
        <div className="section-heading">
          <div><p className="eyebrow">02 / CREATIVE LANES</p><h2>What exists now.<br/>What comes next.</h2></div>
          <p>REAL STATUS / NO PLACEHOLDERS</p>
        </div>
        <div className="project-grid project-grid-v2">
          {projects.map((project) => (
            <article className="project-card project-card-v2" key={project.title}>
              <div className="card-top"><span>{project.index} / {project.title.toUpperCase()}</span><span>{project.status}</span></div>
              <div>
                <p className="project-name">{project.name}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <Link href="/work">{project.action} <Arrow /></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell selected-work selected-work-v2">
        <div className="section-heading">
          <div><p className="eyebrow">03 / VERIFIED PROOF</p><h2>Work that already moved.</h2></div>
          <p>MANUAL SNAPSHOT / SEP 2026</p>
        </div>
        <div className="work-list">
          {selectedWork.map((work) => (
            <article key={work.index} className="work-row work-row-v2">
              <span>{work.index}</span>
              <div><small>{work.type}</small><h3>{work.title}</h3></div>
              <div className="work-proof"><strong>{work.metric}</strong><small>AS OF {work.asOf.toUpperCase()}</small></div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section shell services-section">
        <div className="services-intro">
          <p className="eyebrow">04 / WORK WITH ME</p>
          <h2>Commercial work<br/>without losing the voice.</h2>
          <p>Selected partnerships that make sense for the audience, the project and the platform. Independent editorial analysis stays independent.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">START A BRIEF <Arrow /></Link>
            <Link className="button" href="/services">VIEW SERVICES</Link>
          </div>
        </div>
        <div className="service-list">
          {services.map(([index, title, description]) => (
            <article key={index}><span>{index}</span><div><h3>{title}</h3><p>{description}</p></div><span>↗</span></article>
          ))}
        </div>
      </section>

      <section className="section shell media-kit">
        <div><p className="eyebrow">05 / MEDIA KIT</p><h2>The numbers.<br/>The audience.<br/>The work.</h2></div>
        <div className="media-card">
          <span>FRAMEBYNAVIN / MEDIA KIT</span>
          <div className="media-metrics">
            {metrics.map((metric) => (
              <p key={metric.label}><b>{metric.value}</b>{metric.label}<small>As of {metric.asOf}</small></p>
            ))}
          </div>
          <Link href="/media-kit">OPEN MEDIA KIT <Arrow /></Link>
        </div>
      </section>

      <section id="about" className="section shell about-section">
        <div className="about-index">06 / ABOUT</div>
        <div>
          <p className="eyebrow">NAVIN / INDEPENDENT CREATOR</p>
          <h2>Curiosity first.<br/><em>Craft always.</em></h2>
          <p>FrameByNavin currently centers on cinema: the frames, choices and craft behind scenes that stay with us. The larger creator system also leaves room for original stories, useful products and story-driven games.</p>
          <p>Commercial collaborations live beside the work, never inside the opinion.</p>
          <Link className="button" href="/about">MORE ABOUT THE SYSTEM ↗</Link>
        </div>
      </section>

      <section id="contact" className="cta shell">
        <p className="eyebrow">07 / START A PROJECT</p>
        <h2>Have something<br/>worth building?</h2>
        <p>Brand, film, product or an unusual creative idea — send the brief.</p>
        <Link className="button button-primary" href="/contact">LET&apos;S WORK <Arrow /></Link>
      </section>

      <footer className="site-footer shell">
        <span>FRAMEBYNAVIN / CREATIVE SYSTEM</span>
        <div>
          <a href="#top">TOP ↑</a>
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label.toUpperCase()} ↗</a>
          ))}
        </div>
      </footer>
    </main>
  );
}
