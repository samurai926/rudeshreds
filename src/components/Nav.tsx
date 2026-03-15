"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-[#b4ff00]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            href="/"
            className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold tracking-[0.2em] text-[#b4ff00] hover:text-white transition-colors animate-flicker"
          >
            RUDESHREDS
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-body)] text-xs tracking-[0.25em] uppercase text-[#666] hover:text-[#b4ff00] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#b4ff00] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#e0e0e0] hover:text-[#b4ff00] transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — slides in */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-[#050505] z-40 transition-all duration-300 ${
          open
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="px-6 py-10 flex flex-col gap-6">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-heading)] text-5xl font-bold tracking-[0.15em] text-[#666] hover:text-[#b4ff00] transition-colors"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}

          <div className="mt-auto pt-10 border-t border-[#222]">
            <a
              href="mailto:rudeshreds@gmail.com"
              className="text-xs tracking-[0.2em] text-[#b4ff00]"
            >
              RUDESHREDS@GMAIL.COM
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
