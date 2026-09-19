import type { Metadata } from "next";
import Link from "next/link";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Send FrameByNavin a structured collaboration or creative project brief.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className="brand" href="/" aria-label="FrameByNavin home">
          FRAMEBYNAVIN<span>●</span>
        </Link>
        <Link className={styles.back} href="/">← BACK HOME</Link>
      </header>

      <section className={`${styles.shell} ${styles.hero}`}>
        <div>
          <p className="eyebrow">08 / START A PROJECT</p>
          <h1>START<br/>THE <em>BRIEF.</em></h1>
          <p className={styles.intro}>
            Tell me what you are making, what you need and where the collaboration should live. A clear brief makes it easier to understand whether the project fits FrameByNavin and the audience.
          </p>
          <div className={styles.meta}>
            <p>Best fit <span>Cinema, entertainment, creator tools, storytelling and aligned brands.</span></p>
            <p>Editorial line <span>Paid promotion and independent editorial opinion stay separate.</span></p>
            <p>Pricing <span>Scoped per project rather than fixed publicly on the website.</span></p>
          </div>
        </div>

        <form className={styles.form} aria-label="Collaboration brief">
          <div className={styles.formTop}><span>PROJECT INTAKE / V1</span><span>FRAMEBYNAVIN</span></div>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" autoComplete="name" />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" />
            </div>
            <div className={styles.full}>
              <label htmlFor="company">Company / Brand / Film / Product</label>
              <input id="company" name="company" />
            </div>
            <div className={styles.field}>
              <label htmlFor="type">Collaboration type</label>
              <select id="type" name="type" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Instagram collaboration</option>
                <option>YouTube integration</option>
                <option>Film or entertainment promotion</option>
                <option>Brand partnership</option>
                <option>Creative project</option>
                <option>Other</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="budget">Budget range</label>
              <select id="budget" name="budget" defaultValue="">
                <option value="" disabled>Select range</option>
                <option>Under ₹10K</option>
                <option>₹10K–25K</option>
                <option>₹25K–50K</option>
                <option>₹50K+</option>
                <option>Let&apos;s discuss</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="timeline">Desired timeline</label>
              <input id="timeline" name="timeline" placeholder="e.g. October 2026" />
            </div>
            <div className={styles.field}>
              <label htmlFor="deliverables">Expected deliverables</label>
              <input id="deliverables" name="deliverables" placeholder="Reel, story, integration…" />
            </div>
            <div className={styles.full}>
              <label htmlFor="message">Tell me about the project</label>
              <textarea id="message" name="message" />
            </div>
            <div className={styles.submitRow}>
              <p>Submission is intentionally disabled in this development build until the real business inbox and delivery provider are connected.</p>
              <button className={styles.submit} type="button" disabled>EMAIL SETUP PENDING</button>
            </div>
          </div>
        </form>
      </section>

      <footer className={`${styles.shell} ${styles.footer}`}>
        <span>FRAMEBYNAVIN / PROJECT INTAKE</span><span>COMMERCIAL ≠ EDITORIAL OPINION</span>
      </footer>
    </main>
  );
}
