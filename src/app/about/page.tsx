import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/content/site";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "About Navin, FrameByNavin and the creator philosophy behind the work.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={`${styles.shell} ${styles.hero}`}>
        <div className={styles.index}>04 / ABOUT</div>
        <div className={styles.heroBody}>
          <p className="eyebrow">NAVIN / INDEPENDENT CREATOR</p>
          <h1>CURIOSITY FIRST.<br/><em>CRAFT ALWAYS.</em></h1>
          <p className={styles.lead}>FrameByNavin began with a simple instinct: when a scene works, look closer. The website expands that instinct beyond watching—into making stories, products and interactive worlds.</p>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section} ${styles.split}`}>
        <div className={styles.copy}><p className="eyebrow">WHY FRAMEBYNAVIN</p><h2>Look one frame deeper.</h2></div>
        <div className={styles.copy}><p>Cinema is more than plot. A camera move, cut, pause, light source, performance choice or piece of sound design can completely change what a moment means. FrameByNavin exists to notice those choices and explain them without draining the emotion out of the scene.</p><p>The goal is not to sound technical for the sake of it. The goal is to understand why something made us feel what it did.</p></div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <div className={styles.sectionHead}><div><p className="eyebrow">BEYOND THE FRAME</p><h2>The creator system.</h2></div><p>NOW + NEXT</p></div>
        <div className={styles.grid4}>
          {projects.map((project) => <article className={styles.card} key={project.title}><div className={styles.cardTop}><span>{project.index} / {project.title}</span><span>{project.status}</span></div><div><h3>{project.name}</h3><p>{project.description}</p></div><span className="eyebrow">{project.status}</span></article>)}
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section} ${styles.split}`}>
        <div className={styles.copy}><p className="eyebrow">THE LINE</p><h2>Opinion is not inventory.</h2></div>
        <div><div className={styles.note}><strong>Editorial independence</strong>Paid promotion can buy agreed promotional deliverables. It cannot buy a positive independent review or change the conclusion of an editorial analysis.</div><div className={styles.note} style={{marginTop: 12}}><strong>Long-term trust</strong>The audience relationship matters more than maximizing the number of sponsorship slots. Commercial work should support the creator system, not hollow it out.</div></div>
      </section>

      <section className={`${styles.shell} ${styles.cta}`}>
        <p className="eyebrow">WORK / COLLABORATE</p><h2>See the work. Then decide.</h2><p>The portfolio and project system show what FrameByNavin is becoming. For commercial or creative collaboration, the project brief is the cleanest place to start.</p><div style={{display:"flex",gap:12,flexWrap:"wrap"}}><Link className="button button-primary" href="/work">VIEW WORK ↗</Link><Link className="button" href="/contact">START A PROJECT</Link></div>
      </section>
      <footer className={`${styles.shell} ${styles.footer}`}><span>FRAMEBYNAVIN / ABOUT</span><span>INDIA / 2026</span></footer>
    </main>
  );
}
