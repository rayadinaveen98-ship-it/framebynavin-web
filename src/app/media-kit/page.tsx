import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { metrics, selectedWork, services } from "@/content/site";
import styles from "../editorial-subpage.module.css";

export const metadata: Metadata = {
  title: "Media Kit",
  description: "FrameByNavin audience proof, selected work and collaboration formats for partners.",
  alternates: { canonical: "/media-kit" },
};

const categories = ["Cinema analysis", "Scene breakdowns", "Short-form film content", "Visual storytelling"] as const;

export default function MediaKitPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={`${styles.shell} ${styles.hero}`}>
        <div className={styles.heroMeta}>05 / MEDIA KIT</div>
        <div className={styles.heroBody}>
          <p className="eyebrow">FRAMEBYNAVIN / PARTNER VIEW</p>
          <h1>THE AUDIENCE.<br/><em>THE PROOF.</em></h1>
          <p className={styles.lead}>A concise view of the creator brand for filmmakers, entertainment teams and aligned partners. Current public performance is shown without pretending one viral post represents every upload.</p>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <div className={styles.heading}>
          <div><p className="eyebrow">CURRENT SNAPSHOT</p><h2>Audience signals.</h2></div>
          <span>MANUAL SNAPSHOT / SEP 2026</span>
        </div>
        <div className={styles.metricGrid}>
          {metrics.map((metric) => (
            <article className={styles.metric} key={metric.label}>
              <strong>{metric.value}</strong>
              <div><span>{metric.label}</span><small>AS OF {metric.asOf.toUpperCase()}</small></div>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <div className={styles.heading}>
          <div><p className="eyebrow">SELECTED PERFORMANCE</p><h2>Work people watched.</h2></div>
          <span>PUBLIC / SELECTED</span>
        </div>
        <div className={styles.proofGrid}>
          {selectedWork.map((work) => (
            <article className={styles.proof} key={work.index}>
              <div className={styles.proofTop}><span>{work.index}</span><span>{work.type}</span></div>
              <div><strong>{work.metric}</strong><h3>{work.title}</h3></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.lightBand}>
        <div className={`${styles.shell} ${styles.lightInner}`}>
          <div>
            <p className="eyebrow">CONTENT FIT</p>
            <h2>What the audience comes for.</h2>
            <p>FrameByNavin is cinema-first. The strongest partnership fit is entertainment and creator-adjacent work that can live naturally beside film analysis and visual storytelling.</p>
          </div>
          <div>
            <div className={styles.chipGrid}>{categories.map((category) => <span className={styles.chip} key={category}>{category}</span>)}</div>
            <div className={styles.note} style={{marginTop: 24, borderColor:"rgba(0,0,0,.18)", background:"rgba(255,255,255,.24)", color:"#4f504c"}}><strong style={{color:"#111"}}>Metric context</strong>These are selected current proof points used by the website. They are dated deliberately and should be refreshed when public channel performance materially changes.</div>
          </div>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <div className={styles.heading}>
          <div><p className="eyebrow">COLLABORATION</p><h2>Available formats.</h2></div>
          <span>BRIEF REQUIRED</span>
        </div>
        <div className={styles.rows}>
          {services.map(([index, title, description]) => (
            <Link className={styles.row} href="/contact" key={index}>
              <span>{index}</span>
              <span className={styles.rowStatus}>COMMERCIAL</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <span className={styles.rowArrow}>↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section} ${styles.split}`}>
        <div className={styles.copy}>
          <p className="eyebrow">EDITORIAL POLICY</p>
          <h2>Promotion and opinion are separate.</h2>
        </div>
        <div className={styles.note}><strong>Non-negotiable</strong>Paid collaboration can define promotional deliverables and campaign messaging. It does not guarantee a favorable independent review, editorial conclusion or disguised endorsement.</div>
      </section>

      <section className={`${styles.shell} ${styles.cta}`}>
        <div>
          <p className="eyebrow">PARTNERSHIP INQUIRY</p>
          <h2>Have a campaign in mind?</h2>
          <p>Send the campaign objective, release or product, platform, deliverables, timeline and budget range. A downloadable PDF can be added later when audience demographics are ready to publish.</p>
        </div>
        <Link className="button button-primary" href="/contact">SEND THE BRIEF ↗</Link>
      </section>

      <footer className={`${styles.shell} ${styles.footer}`}><span>FRAMEBYNAVIN / MEDIA KIT</span><span>SELECTED METRICS / SEP 2026</span></footer>
    </main>
  );
}
