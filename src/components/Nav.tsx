"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/riding", label: "Riding" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-[#b4ff00] hover:text-white transition-colors"
          >
            RUDESHREDS
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-heading)] text-lg tracking-wider text-[#888] hover:text-[#b4ff00] transition-colors"
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#ededed] hover:text-[#b4ff00] transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#2a2a2a]">
          <div className="px-4 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-heading)] text-2xl tracking-wider text-[#888] hover:text-[#b4ff00] transition-colors"
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
