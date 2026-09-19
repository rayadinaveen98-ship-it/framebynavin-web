import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

const links = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="FrameByNavin home">
        FRAMEBYNAVIN<span>●</span>
      </Link>
      <div className="system-status">CINEMA · STORIES · PROJECTS</div>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <MobileMenu />
    </header>
  );
}
