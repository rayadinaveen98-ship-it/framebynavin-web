"use client";

import { useEffect, useState } from "react";
import type { YoutubeMediaItem } from "@/lib/youtube";
import styles from "./youtube-work-grid.module.css";

type FeedResponse = { items?: YoutubeMediaItem[] };

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function YoutubeWorkGrid() {
  const [items, setItems] = useState<YoutubeMediaItem[]>([]);
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

  if (!loading && items.length === 0) return null;

  return (
    <section className={`${styles.section} shell`} aria-label="Latest FrameByNavin YouTube uploads">
      <div className={styles.heading}>
        <div>
          <p className="eyebrow">LIVE / YOUTUBE</p>
          <h2>Latest published work.</h2>
        </div>
        <a href="https://www.youtube.com/@framebynavin" target="_blank" rel="noreferrer">
          OPEN CHANNEL ↗
        </a>
      </div>

      <div className={styles.grid}>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div className={styles.skeleton} key={index} aria-hidden="true" />
            ))
          : items.map((item, index) => (
              <a
                className={styles.card}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                key={item.id}
              >
                <div
                  className={styles.thumb}
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                  aria-hidden="true"
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>WATCH ↗</span>
                </div>
                <div className={styles.copy}>
                  <small>YOUTUBE · {formatDate(item.publishedAt)}</small>
                  <h3>{item.title}</h3>
                </div>
              </a>
            ))}
      </div>
    </section>
  );
}
