"use client";

import { FormEvent, useState } from "react";
import styles from "./contact.module.css";

type ContactFormProps = {
  contactEmail: string;
};

type Status = "idle" | "opening" | "ready";

function value(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}

export function ContactForm({ contactEmail }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "opening") return;

    const data = new FormData(event.currentTarget);
    if (value(data, "website")) return;

    setStatus("opening");
    setMessage("Preparing your email draft…");

    const company = value(data, "company");
    const type = value(data, "type");
    const subject = `FrameByNavin project brief — ${company} / ${type}`;
    const body = [
      "FRAMEBYNAVIN — PROJECT BRIEF",
      "",
      `Name: ${value(data, "name")}`,
      `Email: ${value(data, "email")}`,
      `Company / Brand / Film / Product: ${company}`,
      `Collaboration type: ${type}`,
      `Budget range: ${value(data, "budget")}`,
      `Desired timeline: ${value(data, "timeline")}`,
      `Expected deliverables: ${value(data, "deliverables")}`,
      "",
      "Project details:",
      value(data, "message"),
      "",
      "Sent from the FrameByNavin website project-intake form.",
    ].join("\n");

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setStatus("ready");
    setMessage("Email draft opened. Review it in your mail app and press Send to complete the enquiry.");
  }

  return (
    <form className={styles.form} aria-label="Collaboration brief" onSubmit={handleSubmit}>
      <div className={styles.formTop}><span>PROJECT INTAKE / V1</span><span>EMAIL MODE</span></div>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" autoComplete="name" minLength={2} maxLength={80} required />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={160} required />
        </div>
        <div className={styles.full}>
          <label htmlFor="company">Company / Brand / Film / Product</label>
          <input id="company" name="company" maxLength={140} required />
        </div>
        <div className={styles.field}>
          <label htmlFor="type">Collaboration type</label>
          <select id="type" name="type" defaultValue="" required>
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
          <select id="budget" name="budget" defaultValue="" required>
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
          <input id="timeline" name="timeline" maxLength={100} placeholder="e.g. October 2026" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="deliverables">Expected deliverables</label>
          <input id="deliverables" name="deliverables" maxLength={300} placeholder="Reel, story, integration…" required />
        </div>
        <div className={styles.full}>
          <label htmlFor="message">Tell me about the project</label>
          <textarea id="message" name="message" minLength={20} maxLength={4000} required />
        </div>

        <div className={styles.honeypot} aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className={styles.submitRow}>
          <p aria-live="polite">
            {message || <>Your details stay in your browser until you open the email draft. Prefer direct email? <a className={styles.directEmail} href={`mailto:${contactEmail}`}>{contactEmail}</a></>}
          </p>
          <button className={styles.submit} type="submit" disabled={status === "opening"}>
            {status === "opening" ? "OPENING…" : status === "ready" ? "OPEN EMAIL AGAIN ↗" : "OPEN EMAIL DRAFT ↗"}
          </button>
        </div>
      </div>
    </form>
  );
}
