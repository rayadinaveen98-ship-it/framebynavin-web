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
        {featuredReels.map((reel) => (
          <article className={styles.card} key={reel.shortcode}>
            <div className={styles.frame}>
              <iframe
                src={`https://www.instagram.com/reel/${reel.shortcode}/embed/`}
                title={`FrameByNavin featured Instagram Reel ${reel.index}`}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div className={styles.chrome} aria-hidden="true">
                <span>{reel.index}</span>
                <span>REEL / INSTAGRAM</span>
              </div>
            </div>
            <div className={styles.meta}>
              <span>FEATURED REEL {reel.index}</span>
              <a href={reel.href} target="_blank" rel="noreferrer">OPEN REEL ↗</a>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.note}>
        Real public Instagram embeds. No view counts or performance claims are added here unless separately verified.
      </p>
    </section>
  );
}
