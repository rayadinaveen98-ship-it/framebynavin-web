import type { Metadata } from "next";
import Link from "next/link";
import { LiveYoutube } from "@/components/live-youtube";
import { RecentFrames } from "@/components/recent-frames";
import { SiteHeader } from "@/components/site-header";
import { metrics, projects, selectedWork, services, socials } from "@/content/site";
import styles from "./home-v3.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

const tickerItems = [
  "CINEMA",
  "SCENE BREAKDOWNS",
  "VISUAL STORYTELLING",
  "STORIES",
  "APPS",
  "GAMES",
  "CRAFT",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section id="top" className={`${styles.hero} shell`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <div className={styles.kicker}>
              <p className="eyebrow">CINEMA / VISUAL STORYTELLING</p>
              <span>INDIA</span>
            </div>
            <h1 className={styles.heroTitle}><span>SEE THE</span><em>FRAME.</em></h1>
            <p className={styles.manifesto}>BUILD THE WORLD.</p>
            <p className={styles.lede}>
              FrameByNavin starts with cinema — scene breakdowns, cinematic moments and the choices behind memorable images — then grows outward into original stories, products and games.
            </p>
            <div className={styles.actions}>
              <Link className="button button-primary" href="/work">VIEW WORK <Arrow /></Link>
              <Link className="button" href="/contact">START A PROJECT</Link>
            </div>
            <div className={styles.metricBar}>
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                  <small>{metric.asOf}</small>
                </div>
              ))}
            </div>
          </div>

          <LiveYoutube />
        </div>
      </section>

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[...tickerItems, ...tickerItems].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
        </div>
      </div>

      <section className={`${styles.recent} shell`}>
        <RecentFrames />
      </section>

      <section className={styles.editorial}>
        <div className={`${styles.editorialInner} shell`}>
          <div className={styles.editorialIndex}>01 / PHILOSOPHY</div>
          <div>
            <h2>Cinema first.<br/><em>Curiosity everywhere.</em></h2>
            <div className={styles.editorialCopy}>
              <p>
                The work is not about collecting clips. It is about noticing why an image, cut, performance or sound choice stays with us — and turning that curiosity into useful, watchable storytelling.
              </p>
              <div className={styles.editorialQuote}>FRAME BY FRAME / IDEA BY IDEA / PROJECT BY PROJECT</div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className={`${styles.section} shell`}>
        <div className={styles.sectionHead}>
          <div><p className="eyebrow">02 / CREATIVE LANES</p><h2>One creator.<br/>More than one medium.</h2></div>
          <span>REAL STATUS / SEP 2026</span>
        </div>

        <div className={styles.projectList}>
          {projects.map((project) => (
            <Link className={styles.projectRow} href="/work" key={project.title}>
              <span>{project.index}</span>
              <span className={styles.projectStatus}>{project.status}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className={styles.projectAction}>{project.action}</span>
              <span className={styles.projectArrow}>↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={`${styles.section} shell`}>
        <div className={styles.sectionHead}>
          <div><p className="eyebrow">03 / VERIFIED PROOF</p><h2>Work that already moved.</h2></div>
          <span>MANUAL SNAPSHOT / SEP 2026</span>
        </div>
        <div className={styles.proofGrid}>
          {selectedWork.map((work) => (
            <article className={styles.proofCard} key={work.index}>
              <div className={styles.proofTop}><span>{work.index}</span><span>{work.type}</span></div>
              <div className={styles.proofBottom}>
                <p className={styles.proofMetric}>{work.metric}</p>
                <p className={styles.proofTitle}>{work.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className={`${styles.section} ${styles.services} shell`}>
        <div className={styles.serviceLead}>
          <div>
            <p className="eyebrow">04 / WORK WITH ME</p>
            <h2>Commercial work.<br/>Still FrameByNavin.</h2>
          </div>
          <div>
            <p>Selected collaborations should fit the audience, the project and the voice. Independent editorial analysis stays independent.</p>
            <div className={styles.actions}>
              <Link className="button" href="/contact">START A BRIEF <Arrow /></Link>
              <Link className="button" href="/services">SERVICES</Link>
            </div>
          </div>
        </div>
        <div className={styles.serviceList}>
          {services.map(([index, title, description]) => (
            <article className={styles.serviceItem} key={index}>
              <span>{index}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <span>↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.bottomGrid} shell`}>
        <article className={styles.bottomCard}>
          <div><p className="eyebrow">05 / MEDIA KIT</p><h2>The audience.<br/>The work.<br/>The numbers.</h2></div>
          <div><p>Current public proof, collaboration formats and the context a brand or film team needs before reaching out.</p><Link className="button" href="/media-kit">OPEN MEDIA KIT <Arrow /></Link></div>
        </article>
        <article className={styles.bottomCard}>
          <div><p className="eyebrow">06 / ABOUT</p><h2>Curiosity first.<br/>Craft always.</h2></div>
          <div><p>FrameByNavin is an independent creator system centered on cinema today, with room for original stories, useful products and story-driven games.</p><Link className="button" href="/about">ABOUT NAVIN <Arrow /></Link></div>
        </article>
      </section>

      <section id="contact" className={`${styles.cta} shell`}>
        <div>
          <p className="eyebrow">07 / START A PROJECT</p>
          <h2>Have something worth building?</h2>
          <p>Brand, film, product or an unusual creative idea — send the brief.</p>
        </div>
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
