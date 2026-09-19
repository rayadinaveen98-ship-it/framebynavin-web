import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { YoutubeWorkGrid } from "@/components/youtube-work-grid";
import { projects, selectedWork } from "@/content/site";
import styles from "./work-v2.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected FrameByNavin cinema analysis, short-form work and developing creative projects.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.index}>02 / WORK</div>
        <div className={styles.heroBody}>
          <p className="eyebrow">PUBLISHED WORK / LIVE ARCHIVE</p>
          <h1>FRAMES THAT<br/><em>STAY WITH YOU.</em></h1>
          <p className={styles.lead}>
            Cinema is the active center of FrameByNavin today. The archive below updates from the public YouTube channel, while selected performance proof is kept as a dated snapshot.
          </p>
        </div>
      </section>

      <YoutubeWorkGrid />

      <section className={styles.section}>
        <div className={styles.heading}>
          <div><p className="eyebrow">SELECTED / VERIFIED</p><h2>Proof, not promises.</h2></div>
          <span>PUBLIC PERFORMANCE / SEP 2026</span>
        </div>
        <div className={styles.proofGrid}>
          {selectedWork.map((work) => (
            <article className={styles.proof} key={work.index}>
              <div className={styles.proofTop}><span>{work.index}</span><span>{work.type}</span></div>
              <div>
                <strong>{work.metric}</strong>
                <h3>{work.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.heading}>
          <div><p className="eyebrow">PROJECT SYSTEM</p><h2>What is public.<br/>What is still becoming.</h2></div>
          <span>REAL STATUS ONLY</span>
        </div>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <Link className={styles.projectRow} href="/contact" key={project.title}>
              <span>{project.index}</span>
              <span className={styles.status}>{project.status}</span>
              <div><h3>{project.title}</h3><p>{project.description}</p></div>
              <span className={styles.arrow}>↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <p className="eyebrow">NEXT / COLLABORATE</p>
          <h2>Have a project that fits?</h2>
          <p>Send the context, deliverables, timeline and budget range. The goal is to understand quickly whether the collaboration makes sense for both sides.</p>
        </div>
        <Link className="button button-primary" href="/contact">START THE BRIEF ↗</Link>
      </section>

      <footer className={styles.footer}><span>FRAMEBYNAVIN / WORK</span><span>CINEMA · STORIES · APPS · GAMES</span></footer>
    </main>
  );
}
