import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/content/site";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "Services",
  description: "FrameByNavin brand collaborations, film promotions, short-form content and creative partnerships.",
};

const principles = [
  ["01", "Audience fit first", "A campaign should belong naturally beside the content instead of interrupting it."],
  ["02", "Clear disclosure", "Commercial work is identified clearly. Independent editorial analysis remains independent."],
  ["03", "Craft over filler", "Fewer aligned collaborations are better than turning the feed into an advertisement stream."],
] as const;

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={`${styles.shell} ${styles.hero}`}>
        <div className={styles.index}>03 / SERVICES</div>
        <div className={styles.heroBody}>
          <p className="eyebrow">WORK WITH ME / COMMERCIAL</p>
          <h1>PARTNERSHIPS<br/><em>WITH A POINT.</em></h1>
          <p className={styles.lead}>Commercial work should still feel like FrameByNavin. The format, message and creative approach are shaped around the audience rather than pasted on top of it.</p>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <div className={styles.sectionHead}><div><p className="eyebrow">COLLABORATION FORMATS</p><h2>Ways to work together.</h2></div><p>SCOPED PER PROJECT</p></div>
        <div className={styles.grid4}>
          {services.map(([index, title, description]) => (
            <article className={styles.card} key={index}>
              <div className={styles.cardTop}><span>{index}</span><span>AVAILABLE</span></div>
              <div><h3>{title}</h3><p>{description}</p></div>
              <Link href="/contact">BRIEF THIS ↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section} ${styles.split}`}>
        <div className={styles.copy}><p className="eyebrow">WORKING PRINCIPLES</p><h2>Commercial does not mean generic.</h2><p>The aim is to protect the voice that created the audience in the first place. That means no guaranteed positive editorial opinions, no disguised advertising and no collaboration that obviously fights the channel identity.</p></div>
        <div className={styles.list}>
          {principles.map(([index, title, description]) => <article className={styles.row} key={index}><span>{index}</span><div><small>PRINCIPLE</small><h3>{title}</h3><p className={styles.lead}>{description}</p></div><strong>LOCKED</strong></article>)}
        </div>
      </section>

      <section className={`${styles.shell} ${styles.cta}`}>
        <p className="eyebrow">PROJECT INTAKE</p><h2>Send the actual brief.</h2><p>Include the brand or title, campaign objective, platform, expected deliverables, timeline and budget range. Fixed public rates are intentionally not shown because scope matters.</p><Link className="button button-primary" href="/contact">START A PROJECT ↗</Link>
      </section>
      <footer className={`${styles.shell} ${styles.footer}`}><span>FRAMEBYNAVIN / SERVICES</span><span>SELECTED COLLABORATIONS ONLY</span></footer>
    </main>
  );
}
