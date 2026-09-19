import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { projects, selectedWork } from "@/content/site";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected FrameByNavin cinema analysis, short-form work and developing creative projects.",
};

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={`${styles.shell} ${styles.hero}`}>
        <div className={styles.index}>02 / WORK</div>
        <div className={styles.heroBody}>
          <p className="eyebrow">SELECTED WORK / CREATOR SYSTEM</p>
          <h1>WORK THAT<br/><em>HOLDS A FRAME.</em></h1>
          <p className={styles.lead}>Cinema is the active center of the work today. This archive also leaves a clear place for the stories, apps and games being built around the same obsession with craft.</p>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <div className={styles.sectionHead}><div><p className="eyebrow">SELECTED / 2026</p><h2>Proof, not promises.</h2></div><p>PUBLIC PERFORMANCE</p></div>
        <div className={styles.list}>
          {selectedWork.map((work) => (
            <article className={styles.row} key={work.index}>
              <span>{work.index}</span>
              <div><small>{work.type}</small><h3>{work.title}</h3></div>
              <strong>{work.metric}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <div className={styles.sectionHead}><div><p className="eyebrow">PROJECT SYSTEM</p><h2>Four lanes. One creator.</h2></div><p>ACTIVE + DEVELOPING</p></div>
        <div className={styles.grid4}>
          {projects.map((project) => (
            <article className={styles.card} key={project.title}>
              <div className={styles.cardTop}><span>{project.index} / {project.title}</span><span>{project.status}</span></div>
              <div><h3>{project.name}</h3><p>{project.description}</p></div>
              <Link href="/contact">DISCUSS A PROJECT ↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.shell} ${styles.cta}`}>
        <p className="eyebrow">NEXT / COLLABORATE</p><h2>Have a project that fits?</h2><p>Send the context, deliverables, timeline and budget range. The goal is to quickly understand whether the collaboration makes sense for both sides.</p><Link className="button button-primary" href="/contact">START THE BRIEF ↗</Link>
      </section>
      <footer className={`${styles.shell} ${styles.footer}`}><span>FRAMEBYNAVIN / WORK</span><span>CINEMA · STORIES · APPS · GAMES</span></footer>
    </main>
  );
}
