import Image from "next/image";
import { featuredReels } from "@/content/site";
import styles from "./featured-reels.module.css";

export function FeaturedReels() {
  return (
    <section className={styles.section} aria-labelledby="featured-reels-title">
      <div className={styles.heading}>
        <div>
          <p className="eyebrow">INSTAGRAM / FEATURED</p>
          <h2 id="featured-reels-title">Short form.<br/><em>Same eye.</em></h2>
        </div>
        <div className={styles.context}>
          <span>04 REAL REELS</span>
          <a href="https://www.instagram.com/framebynavin/" target="_blank" rel="noreferrer">OPEN INSTAGRAM ↗</a>
        </div>
      </div>

      <div className={styles.rail}>
        {featuredReels.map((reel) => (
          <a
            className={styles.card}
            href={reel.href}
            target="_blank"
            rel="noreferrer"
            key={reel.shortcode}
            aria-label={`Open featured Instagram Reel ${reel.index}`}
          >
            <div className={styles.frame}>
              <span className={styles.cornerA} aria-hidden="true" />
              <span className={styles.cornerB} aria-hidden="true" />
              <span className={styles.record} aria-hidden="true" />
              <span className={styles.number}>{reel.index}</span>
              <div className={styles.logoWrap}>
                <Image
                  src="/brand/framebynavin-logo.webp"
                  alt=""
                  width={371}
                  height={300}
                  className={styles.logo}
                />
              </div>
              <div className={styles.cardCopy}>
                <span>FEATURED REEL</span>
                <small>{reel.shortcode}</small>
              </div>
              <span className={styles.watch}>WATCH ↗</span>
            </div>
          </a>
        ))}
      </div>

      <p className={styles.note}>
        These are creator-selected public Reel links. Performance details are shown only when verified.
      </p>
    </section>
  );
}
