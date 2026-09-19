"use client";

import { FormEvent, useState } from "react";
import styles from "./contact.module.css";

type ContactFormProps = {
  enabled: boolean;
};

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ enabled }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!enabled || status === "sending") return;

    setStatus("sending");
    setMessage("Sending project brief…");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "The brief could not be sent.");
      }

      form.reset();
      setStatus("success");
      setMessage("Brief received. Thank you — the details are safely in the project intake system.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The brief could not be sent. Please try again.");
    }
  }

  return (
    <form className={styles.form} aria-label="Collaboration brief" onSubmit={handleSubmit}>
      <div className={styles.formTop}><span>PROJECT INTAKE / V1</span><span>{enabled ? "ONLINE" : "STAGING"}</span></div>
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
            {message || (enabled
              ? "Your brief is delivered through the private project-intake endpoint."
              : "The form is built and validated; submission activates automatically when the secure delivery webhook is configured.")}
          </p>
          <button className={styles.submit} type="submit" disabled={!enabled || status === "sending"}>
            {!enabled ? "DELIVERY SETUP PENDING" : status === "sending" ? "SENDING…" : status === "success" ? "BRIEF SENT ✓" : "SEND BRIEF ↗"}
          </button>
        </div>
      </div>
    </form>
  );
}
