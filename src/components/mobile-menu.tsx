"use client";

import { useState } from "react";
import styles from "./mobile-menu.module.css";

const links = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Contact", "/contact"],
] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "CLOSE" : "MENU"}
      </button>
      {open ? (
        <div id="mobile-menu-panel" className={styles.panel} role="navigation" aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
