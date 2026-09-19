import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/content/site";
import styles from "../editorial-subpage.module.css";
import portraitStyles from "./about-portrait.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "About Navin, FrameByNavin and the creator philosophy behind the work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={`${styles.shell} ${styles.hero}`}>
        <div className={styles.heroMeta}>04 / ABOUT</div>
        <div className={`${styles.heroBody} ${portraitStyles.layout}`}>
          <div className={portraitStyles.copy}>
            <p className="eyebrow">NAVIN / INDEPENDENT CREATOR</p>
            <h1>CURIOSITY FIRST.<br/><em>CRAFT ALWAYS.</em></h1>
            <p className={styles.lead}>FrameByNavin began with a simple instinct: when a scene works, look closer. The larger creator system grows from the same instinct — notice, understand, then make.</p>
          </div>
          <div className={portraitStyles.portrait} aria-label="Illustrated portrait of Navin">
            <span aria-hidden="true">NAVIN</span>
            <Image
              src="/brand/navin-thinking.webp"
              alt="Illustrated portrait of Navin seated in a thoughtful pose"
              width={315}
              height={420}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.lightBand}>
        <div className={`${styles.shell} ${styles.lightInner}`}>
          <div>
            <p className="eyebrow">WHY FRAMEBYNAVIN</p>
            <h2>Look one frame deeper.</h2>
            <p>Cinema is more than plot. A camera move, cut, pause, light source, performance choice or piece of sound design can completely change what a moment means.</p>
          </div>
          <div className={styles.lightList}>
            <article className={styles.lightItem}><span>01</span><div><h3>Notice the choice.</h3><p>Find the visual, performance, editing or sound decision that gives the scene its character.</p></div></article>
            <article className={styles.lightItem}><span>02</span><div><h3>Keep the emotion intact.</h3><p>Technical analysis should explain why something works without draining the feeling out of it.</p></div></article>
            <article className={styles.lightItem}><span>03</span><div><h3>Build from curiosity.</h3><p>The same attention to craft can move into stories, useful products and interactive work over time.</p></div></article>
          </div>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <div className={styles.heading}>
          <div><p className="eyebrow">BEYOND THE FRAME</p><h2>The creator system.</h2></div>
          <span>NOW + NEXT</span>
        </div>
        <div className={styles.rows}>
          {projects.map((project) => (
            <Link className={styles.row} href="/work" key={project.title}>
              <span>{project.index}</span>
              <span className={styles.rowStatus}>{project.status}</span>
              <div><h3>{project.title}</h3><p>{project.description}</p></div>
              <span className={styles.rowArrow}>↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section} ${styles.split}`}>
        <div className={styles.copy}>
          <p className="eyebrow">THE LINE</p>
          <h2>Opinion is not inventory.</h2>
          <p>Commercial work can support the creator system, but it should never hollow out the trust that makes the work worth following.</p>
        </div>
        <div>
          <div className={styles.note}><strong>Editorial independence</strong>Paid promotion can buy agreed promotional deliverables. It cannot buy a positive independent review or change the conclusion of an editorial analysis.</div>
          <div className={styles.note} style={{marginTop: 12}}><strong>Long-term trust</strong>The audience relationship matters more than maximizing sponsorship slots. Commercial work should support the creator system, not replace it.</div>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.cta}`}>
        <div>
          <p className="eyebrow">WORK / COLLABORATE</p>
          <h2>See the work. Then decide.</h2>
          <p>The portfolio shows what FrameByNavin is now and where it is heading. For a commercial or creative collaboration, the project brief is the cleanest place to start.</p>
        </div>
        <div style={{display:"flex",gap:12,flexWrap:"wrap"}}><Link className="button button-primary" href="/work">VIEW WORK ↗</Link><Link className="button" href="/contact">START A PROJECT</Link></div>
      </section>

      <footer className={`${styles.shell} ${styles.footer}`}><span>FRAMEBYNAVIN / ABOUT</span><span>INDIA / 2026</span></footer>
    </main>
  );
}
