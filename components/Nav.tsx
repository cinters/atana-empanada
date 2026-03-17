"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// "Order Now" links to /order which embeds the Square site inline

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/find-us", label: "Find Us" },
  { href: "/about", label: "About" },
  { href: "/catering", label: "Catering" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="A Tana Empanada" width={44} height={44} className="rounded-full" />
          <span className="font-black text-navy text-lg leading-tight hidden sm:block">
            A Tana<br />
            <span className="text-gold text-sm font-extrabold tracking-wide">EMPANADA</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-navy font-bold text-sm tracking-wide transition-colors hover:text-gold ${
                pathname === l.href
                  ? "border-b-2 border-gold pb-0.5"
                  : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/order"
            className="bg-gold hover:bg-gold-dark text-white font-extrabold text-sm px-5 py-2 rounded-full transition-colors shadow-sm"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-navy"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-cream px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-navy font-bold text-base py-1 transition-colors hover:text-gold ${
                pathname === l.href ? "text-gold border-b-2 border-gold" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/order"
            onClick={() => setOpen(false)}
            className="bg-gold hover:bg-gold-dark text-white font-extrabold py-3 rounded-full text-center transition-colors mt-2"
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
}
