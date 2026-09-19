import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { metrics, selectedWork, services } from "@/content/site";
import styles from "../subpage.module.css";

export const metadata: Metadata = {
  title: "Media Kit",
  description: "FrameByNavin audience proof, selected work and collaboration formats for partners.",
};

const categories = ["Cinema analysis", "Scene breakdowns", "Short-form film content", "Visual storytelling"] as const;

export default function MediaKitPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={`${styles.shell} ${styles.hero}`}>
        <div className={styles.index}>05 / MEDIA KIT</div>
        <div className={styles.heroBody}>
          <p className="eyebrow">FRAMEBYNAVIN / PARTNER VIEW</p>
          <h1>THE AUDIENCE.<br/><em>THE PROOF.</em></h1>
          <p className={styles.lead}>A concise view of the creator brand for filmmakers, entertainment teams and aligned partners. Current public performance is shown without pretending one viral post represents every upload.</p>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <div className={styles.sectionHead}><div><p className="eyebrow">CURRENT SNAPSHOT</p><h2>Audience signals.</h2></div><p>UPDATED MANUALLY / V1</p></div>
        <div className={styles.statGrid}>{metrics.map((metric) => <div className={styles.stat} key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
        <div className={styles.note} style={{marginTop: 12}}><strong>Metric context</strong>These are selected current proof points used by the website. Production values come from one central content configuration so updates do not require redesigning components.</div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <div className={styles.sectionHead}><div><p className="eyebrow">SELECTED PERFORMANCE</p><h2>Work people watched.</h2></div><p>PUBLIC / SELECTED</p></div>
        <div className={styles.list}>{selectedWork.map((work) => <article className={styles.row} key={work.index}><span>{work.index}</span><div><small>{work.type}</small><h3>{work.title}</h3></div><strong>{work.metric}</strong></article>)}</div>
      </section>

      <section className={`${styles.shell} ${styles.section} ${styles.split}`}>
        <div className={styles.copy}><p className="eyebrow">CONTENT FIT</p><h2>What the audience comes for.</h2><p>FrameByNavin is cinema-first. The strongest partnership fit is entertainment and creator-adjacent work that can live naturally beside film analysis and visual storytelling.</p></div>
        <div className={styles.grid3}>{categories.map((category, index) => <article className={styles.card} key={category}><div className={styles.cardTop}><span>0{index + 1}</span><span>CONTENT</span></div><h3>{category}</h3><span className="eyebrow">FRAMEBYNAVIN</span></article>)}</div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <div className={styles.sectionHead}><div><p className="eyebrow">COLLABORATION</p><h2>Available formats.</h2></div><p>BRIEF REQUIRED</p></div>
        <div className={styles.grid4}>{services.map(([index, title, description]) => <article className={styles.card} key={index}><div className={styles.cardTop}><span>{index}</span><span>COMMERCIAL</span></div><div><h3>{title}</h3><p>{description}</p></div><Link href="/contact">START BRIEF ↗</Link></article>)}</div>
      </section>

      <section className={`${styles.shell} ${styles.section} ${styles.split}`}>
        <div className={styles.copy}><p className="eyebrow">EDITORIAL POLICY</p><h2>Promotion and opinion are separate.</h2></div>
        <div className={styles.note}><strong>Non-negotiable</strong>Paid collaboration can define promotional deliverables and campaign messaging. It does not guarantee a favorable independent review, editorial conclusion or disguised endorsement.</div>
      </section>

      <section className={`${styles.shell} ${styles.cta}`}>
        <p className="eyebrow">PARTNERSHIP INQUIRY</p><h2>Have a campaign in mind?</h2><p>Send the campaign objective, release or product, platform, deliverables, timeline and budget range. A downloadable PDF media kit can be added once audience demographics and final brand contact details are ready.</p><Link className="button button-primary" href="/contact">SEND THE BRIEF ↗</Link>
      </section>
      <footer className={`${styles.shell} ${styles.footer}`}><span>FRAMEBYNAVIN / MEDIA KIT</span><span>SELECTED METRICS / VERIFIED BEFORE LAUNCH</span></footer>
    </main>
  );
}
