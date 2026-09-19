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
          <span>04 CREATOR-SELECTED REELS</span>
          <a href="https://www.instagram.com/framebynavin/" target="_blank" rel="noreferrer">OPEN INSTAGRAM ↗</a>
        </div>
      </div>

      <div className={styles.rail}>
        {featuredReels.map((reel, index) => {
          const isPortrait = index % 2 === 1;
          return (
            <a
              className={`${styles.card} ${isPortrait ? styles.portrait : styles.landscape}`}
              key={reel.shortcode}
              href={reel.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open FrameByNavin featured Reel ${reel.index} on Instagram`}
            >
              <div className={styles.frame}>
                <Image
                  src={`/brand/reels/reel-${reel.index}.webp`}
                  alt={`Frame from featured FrameByNavin Instagram Reel ${reel.index}`}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1120px) 45vw, 25vw"
                  className={styles.poster}
                />
                <div className={styles.tint} aria-hidden="true" />
                <div className={styles.chrome} aria-hidden="true">
                  <span>{reel.index}</span>
                  <span>REEL / INSTAGRAM</span>
                </div>
                <span className={styles.play} aria-hidden="true">▶</span>
                <div className={styles.watch}>
                  <span>FEATURED REEL {reel.index}</span>
                  <strong>WATCH ON INSTAGRAM ↗</strong>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <p className={styles.note}>
        Creator-selected frames from the real linked Reels. No iframe chrome, no hover profile cards, and no performance claim unless separately verified.
      </p>
    </section>
  );
}
