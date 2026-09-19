"use client";

import { useEffect, useMemo, useState } from "react";
import type { YoutubeMediaItem } from "@/lib/youtube";
import styles from "./live-youtube.module.css";

type FeedResponse = { items?: YoutubeMediaItem[] };

function formatDate(value: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function LiveYoutube() {
  const [items, setItems] = useState<YoutubeMediaItem[]>([]);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/youtube/latest", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((payload: FeedResponse) => {
        if (!cancelled) setItems(Array.isArray(payload.items) ? payload.items : []);
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (items.length < 2) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % items.length);
    }, 6500);

    return () => window.clearInterval(id);
  }, [items]);

  const activeItem = useMemo(() => items[active], [active, items]);

  if (!loading && items.length === 0) {
    return <div className="live-media-empty" hidden aria-hidden="true" />;
  }

  if (loading || !activeItem) {
    return (
      <div className={`${styles.shell} live-media`} aria-label="Loading latest FrameByNavin uploads">
        <div className={styles.loadingFrame}>
          <span>LOADING LATEST WORK</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.shell} live-media`}>
      <div className={styles.stage}>
        {items.map((item, index) => (
          <a
            key={item.id}
            className={`${styles.slide} ${index === active ? styles.active : ""}`}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            aria-hidden={index !== active}
            tabIndex={index === active ? 0 : -1}
            style={{ backgroundImage: `url(${item.thumbnail})` }}
            title={item.title}
          >
            <span className={styles.scrim} />
            <span className={styles.platform}>LATEST / YOUTUBE</span>
            <span className={styles.play} aria-hidden="true">▶</span>
          </a>
        ))}

        {items.length > 1 && (
          <div className={styles.controls} aria-label="Latest uploads carousel controls">
            <button
              type="button"
              onClick={() => setActive((index) => (index - 1 + items.length) % items.length)}
              aria-label="Previous upload"
            >
              ←
            </button>
            <span>{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
            <button
              type="button"
              onClick={() => setActive((index) => (index + 1) % items.length)}
              aria-label="Next upload"
            >
              →
            </button>
          </div>
        )}
      </div>

      <div className={styles.caption}>
        <div>
          <small>LATEST UPLOAD · {formatDate(activeItem.publishedAt)}</small>
          <h2>{activeItem.title}</h2>
        </div>
        <a href={activeItem.url} target="_blank" rel="noreferrer">WATCH ON YOUTUBE ↗</a>
      </div>
    </div>
  );
}
