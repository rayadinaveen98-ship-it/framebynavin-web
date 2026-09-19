import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./contact-form";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Send FrameByNavin a structured collaboration or creative project brief.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const contactEnabled = Boolean(process.env.CONTACT_WEBHOOK_URL);

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

        <ContactForm enabled={contactEnabled} />
      </section>

      <footer className={`${styles.shell} ${styles.footer}`}>
        <span>FRAMEBYNAVIN / PROJECT INTAKE</span><span>COMMERCIAL ≠ EDITORIAL OPINION</span>
      </footer>
    </main>
  );
}
