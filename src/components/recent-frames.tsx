"use client";

import { useEffect, useState } from "react";
import type { YoutubeMediaItem } from "@/lib/youtube";
import styles from "./recent-frames.module.css";

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

export function RecentFrames() {
  const [items, setItems] = useState<YoutubeMediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/youtube/latest", { cache: "no-store" })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((payload: FeedResponse) => {
        if (!cancelled) setItems(Array.isArray(payload.items) ? payload.items.slice(0, 4) : []);
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
    <div className={styles.rail} aria-label="Recent FrameByNavin uploads">
      <div className={styles.intro}>
        <span>RECENT FRAMES</span>
        <strong>Fresh from the channel.</strong>
      </div>
      <div className={styles.track}>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div className={styles.skeleton} key={index} aria-hidden="true" />
            ))
          : items.map((item, index) => (
              <a className={styles.card} href={item.url} target="_blank" rel="noreferrer" key={item.id}>
                <div className={styles.image} style={{ backgroundImage: `url(${item.thumbnail})` }}>
                  <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.watch}>WATCH ↗</span>
                </div>
                <div className={styles.copy}>
                  <small>YOUTUBE · {formatDate(item.publishedAt)}</small>
                  <h3>{item.title}</h3>
                </div>
              </a>
            ))}
      </div>
    </div>
  );
}
