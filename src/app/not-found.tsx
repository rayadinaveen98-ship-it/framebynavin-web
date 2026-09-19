import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import styles from "./subpage.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={`${styles.shell} ${styles.hero}`}>
        <div className={styles.index}>404 / LOST FRAME</div>
        <div className={styles.heroBody}>
          <p className="eyebrow">ROUTE NOT FOUND / CREATOR SYSTEM</p>
          <h1>THIS FRAME<br/><em>DOESN&apos;T EXIST.</em></h1>
          <p className={styles.lead}>The page may have moved, the link may be old, or this route was never part of the system.</p>
          <Link className="button button-primary" href="/">RETURN HOME ↗</Link>
        </div>
      </section>
    </main>
  );
}
