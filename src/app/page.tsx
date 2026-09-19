import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { metrics, projects, selectedWork, services } from "@/content/site";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section id="top" className="hero shell">
        <div className="hero-grid">
          <aside className="hero-rail" aria-hidden="true">
            <span>01 / HOME</span><strong>FRAME BY FRAME</strong><span>IST / INDIA</span>
          </aside>
          <div className="hero-copy">
            <p className="eyebrow">CINEMA ANALYSIS / VISUAL STORYTELLING</p>
            <h1>SEE THE<br/><em>FRAME.</em><br/>BUILD THE WORLD.</h1>
            <p className="lede">Film analysis is the current center — but the system is built to grow into stories, apps, games and future creative projects.</p>
            <div className="hero-actions"><Link className="button button-primary" href="/work">VIEW WORK <Arrow /></Link><Link className="button" href="/contact">START A PROJECT</Link></div>
          </div>
          <div className="monitor-panel" aria-label="Featured media preview placeholder">
            <div className="monitor-screen"><span>REC ●</span><div className="focus-box"/><p>FEATURED FRAME<br/>MEDIA SLOT</p></div>
            <div className="monitor-meta">
              <div><b>24</b><span>FPS</span></div><div><b>1.85</b><span>ASPECT</span></div><div><b>4K</b><span>DELIVERY</span></div><div><b>∞</b><span>CURIOSITY</span></div>
            </div>
          </div>
        </div>
        <div className="metric-strip">{metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
      </section>

      <section id="work" className="section shell">
        <div className="section-heading"><div><p className="eyebrow">02 / PROJECT SYSTEM</p><h2>Projects</h2></div><p>CINEMA / STORIES / APPS / GAMES</p></div>
        <div className="project-grid">
          {projects.map((project) => <article className="project-card" key={project.title}>
            <div className="card-top"><span>{project.index} / {project.title.toUpperCase()}</span><span>{project.status}</span></div>
            <div><p className="project-name">{project.name}</p><h3>{project.title}</h3><p>{project.description}</p></div>
            <Link href="/work">{project.action} <Arrow /></Link>
          </article>)}
        </div>
      </section>

      <section className="section shell selected-work">
        <div className="section-heading"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Proof, not promises.</h2></div><p>SELECTED / 2026</p></div>
        <div className="work-list">{selectedWork.map((work) => <article key={work.index} className="work-row"><span>{work.index}</span><div><small>{work.type}</small><h3>{work.title}</h3></div><strong>{work.metric}</strong><span className="work-arrow">↗</span></article>)}</div>
      </section>

      <section id="services" className="section shell services-section">
        <div className="services-intro"><p className="eyebrow">04 / WORK WITH ME</p><h2>Commercial work<br/>without losing the voice.</h2><p>Selected partnerships that make sense for the audience, the project and the platform. Independent editorial analysis stays independent.</p><div className="hero-actions"><Link className="button button-primary" href="/contact">START A BRIEF <Arrow /></Link><Link className="button" href="/services">VIEW SERVICES</Link></div></div>
        <div className="service-list">{services.map(([index, title, description]) => <article key={index}><span>{index}</span><div><h3>{title}</h3><p>{description}</p></div><span>↗</span></article>)}</div>
      </section>

      <section className="section shell media-kit">
        <div><p className="eyebrow">05 / MEDIA KIT</p><h2>The numbers.<br/>The audience.<br/>The work.</h2></div>
        <div className="media-card"><span>FRAMEBYNAVIN / MEDIA KIT</span><div className="media-metrics">{metrics.map((m) => <p key={m.label}><b>{m.value}</b>{m.label}</p>)}</div><Link href="/media-kit">OPEN MEDIA KIT <Arrow /></Link></div>
      </section>

      <section id="about" className="section shell about-section">
        <div className="about-index">06 / ABOUT</div>
        <div><p className="eyebrow">NAVIN / INDEPENDENT CREATOR</p><h2>Curiosity first.<br/><em>Craft always.</em></h2><p>FrameByNavin currently centers on cinema: the frames, choices and craft behind scenes that stay with us. The larger creator system also leaves room for original stories, useful products and story-driven games.</p><p>Commercial collaborations live beside the work, never inside the opinion.</p><Link className="button" href="/about">MORE ABOUT THE SYSTEM ↗</Link></div>
      </section>

      <section id="contact" className="cta shell">
        <p className="eyebrow">07 / START A PROJECT</p><h2>Have something<br/>worth building?</h2><p>Brand, film, product or an unusual creative idea — send the brief.</p><Link className="button button-primary" href="/contact">LET&apos;S WORK <Arrow /></Link>
      </section>

      <footer className="site-footer shell"><span>FRAMEBYNAVIN / CREATIVE SYSTEM</span><div><a href="#top">TOP ↑</a><span>INSTAGRAM · YOUTUBE · X</span></div></footer>
    </main>
  );
}
