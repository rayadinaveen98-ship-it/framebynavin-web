"use client";

import { useState } from "react";

const links = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Contact", "/contact"],
] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="mobile-menu-trigger"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "CLOSE" : "MENU"}
      </button>
      {open ? (
        <nav id="mobile-menu-panel" className="mobile-menu-panel" aria-label="Mobile navigation">
          {links.map(([label, href], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
