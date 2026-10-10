"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SiGoogle, SiInstagram } from "react-icons/si";
import { HalalBadge } from "./HalalBadge";
import { DiamondRule, Wordmark } from "./ornaments";

export const venueAddress = "190 Station St Unit 1, Ajax, ON L1S 2G3";
export const googleMapsVenueUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`;
export const instagramUrl = "https://instagram.com/hayatilounge";
export const phoneDisplay = "647-835-9672";
export const phoneHref = "tel:+16478359672";

const navLinks = [
  { href: "/#signatures", label: "Signatures" },
  { href: "/#story", label: "Our Story" },
  { href: "/#visit", label: "Visit" },
];

export function SiteNav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-[var(--bg)]/92 backdrop-blur-xl border-b border-[var(--line-soft)]" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-3.5">
        <Link href="/" aria-label="Hayati Lounge home">
          <Wordmark size="sm" />
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden md:block px-4 py-2 font-caps text-[0.68rem] tracking-[0.25em] uppercase text-[var(--cream)]/70 hover:text-[var(--gold-light)] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/menu"
            className="ml-2 font-caps text-[0.68rem] tracking-[0.28em] uppercase text-[var(--gold-light)] border border-[var(--gold)]/45 px-5 py-2.5 hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]/80 transition-all duration-300"
          >
            Menu
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="marble border-t border-[var(--line-soft)] px-5 sm:px-8 pt-16 pb-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <Wordmark />
        <DiamondRule className="mt-4" width="w-16" />
        <p className="mt-5 font-caps uppercase tracking-[0.3em] text-[0.65rem] sm:text-xs text-[var(--gold)]">
          Good Drinks &nbsp;·&nbsp; Better Company
        </p>
        <p className="mt-6 font-serif text-lg text-[var(--cream)]/75">{venueAddress}</p>
        <a
          href={phoneHref}
          className="mt-2 font-caps text-sm tracking-[0.2em] text-[var(--gold-light)] hover:text-[var(--cream)] transition-colors"
        >
          {phoneDisplay}
        </a>

        <div className="mt-6 flex items-center gap-6">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-caps text-[0.7rem] tracking-[0.2em] uppercase text-[var(--cream)]/70 hover:text-[var(--gold-light)] transition-colors"
          >
            <SiInstagram /> Instagram
          </a>
          <span className="w-px h-4 bg-[var(--line)]" />
          <a
            href={googleMapsVenueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-caps text-[0.7rem] tracking-[0.2em] uppercase text-[var(--cream)]/70 hover:text-[var(--gold-light)] transition-colors"
          >
            <SiGoogle /> Directions
          </a>
        </div>

        <HalalBadge size="sm" className="mt-8" />

        <p className="mt-8 font-serif text-sm text-[var(--cream-muted)]">
          &copy; {new Date().getFullYear()} Hayati Lounge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
