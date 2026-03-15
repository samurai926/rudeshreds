import { Instagram, Youtube } from "lucide-react";

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="X"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="TikTok"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.16 8.16 0 0 0 4.77 1.52V6.79a4.85 4.85 0 0 1-1.01-.1z" />
    </svg>
  );
}

const socials = [
  {
    href: "https://instagram.com/rudeshreds",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://youtube.com/@rudeshreds",
    icon: Youtube,
    label: "YouTube",
  },
  { href: "https://x.com/rudeshreds", icon: XIcon, label: "X" },
  {
    href: "https://tiktok.com/@rudeshreds",
    icon: TikTokIcon,
    label: "TikTok",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-[family-name:var(--font-heading)] text-2xl tracking-wider text-[#b4ff00]">
            RUDESHREDS
          </p>

          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888] hover:text-[#b4ff00] transition-colors"
                aria-label={s.label}
              >
                <s.icon size={22} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#555]">
          <p>Northeast Snowboarder. Stratton | NYC.</p>
          <p>&copy; {new Date().getFullYear()} RudeShreds</p>
        </div>
      </div>
    </footer>
  );
}
