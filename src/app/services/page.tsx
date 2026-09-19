import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/content/site";
import { standingNavinDataUri } from "@/content/navin-standing";
import styles from "../editorial-subpage.module.css";
import portraitStyles from "./services-portrait.module.css";

export const metadata: Metadata = {
  title: "Services",
  description: "FrameByNavin brand collaborations, film promotions, short-form content and creative partnerships.",
  alternates: { canonical: "/services" },
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
        <div className={styles.heroMeta}>03 / SERVICES</div>
        <div className={`${styles.heroBody} ${portraitStyles.layout}`}>
          <div className={portraitStyles.copy}>
            <p className="eyebrow">WORK WITH ME / COMMERCIAL</p>
            <h1>PARTNERSHIPS<br/><em>WITH A POINT.</em></h1>
            <p className={styles.lead}>Commercial work should still feel like FrameByNavin. The format, message and creative approach are shaped around the audience rather than pasted on top of it.</p>
          </div>
          <div className={portraitStyles.figure} aria-label="Illustrated portrait of Navin">
            <span className={portraitStyles.figureLabel} aria-hidden="true">COLLABORATE</span>
            <Image
              src={standingNavinDataUri}
              alt="Illustrated portrait of Navin standing with folded arms"
              width={240}
              height={360}
              priority
              unoptimized
            />
            <span className={portraitStyles.badge}>Selected projects</span>
          </div>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.section}`}>
        <div className={styles.heading}>
          <div><p className="eyebrow">COLLABORATION FORMATS</p><h2>Ways to work together.</h2></div>
          <span>SCOPED PER PROJECT</span>
        </div>
        <div className={styles.rows}>
          {services.map(([index, title, description]) => (
            <Link className={styles.row} href="/contact" key={index}>
              <span>{index}</span>
              <span className={styles.rowStatus}>AVAILABLE</span>
              <div><h3>{title}</h3><p>{description}</p></div>
              <span className={styles.rowArrow}>↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.lightBand}>
        <div className={`${styles.shell} ${styles.lightInner}`}>
          <div>
            <p className="eyebrow">WORKING PRINCIPLES</p>
            <h2>Commercial.<br/>Not generic.</h2>
            <p>The aim is to protect the voice that created the audience in the first place. That means no guaranteed positive editorial opinions, no disguised advertising and no collaboration that obviously fights the channel identity.</p>
          </div>
          <div className={styles.lightList}>
            {principles.map(([index, title, description]) => (
              <article className={styles.lightItem} key={index}>
                <span>{index}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.shell} ${styles.cta}`}>
        <div>
          <p className="eyebrow">PROJECT INTAKE</p>
          <h2>Send the actual brief.</h2>
          <p>Include the brand or title, campaign objective, platform, expected deliverables, timeline and budget range. Fixed public rates are intentionally not shown because scope matters.</p>
        </div>
        <Link className="button button-primary" href="/contact">START A PROJECT ↗</Link>
      </section>

      <footer className={`${styles.shell} ${styles.footer}`}><span>FRAMEBYNAVIN / SERVICES</span><span>SELECTED COLLABORATIONS ONLY</span></footer>
    </main>
  );
}
