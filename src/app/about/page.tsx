import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About — RUDESHREDS",
  description:
    "Northeast snowboarder based in NYC. Riding Stratton VT, Poconos, and NJ.",
};

interface GearItem {
  category: string;
  name: string;
  image?: string;
}

// Update with actual gear
const gear: GearItem[] = [
  { category: "BOARD", name: "Arbor Vortice 110" },
  { category: "BOOTS", name: "Burton Grom Boa" },
  { category: "HELMET", name: "Giro" },
  { category: "GOGGLES", name: "Dragon" },
  { category: "JACKET", name: "Patagonia Powdertown" },
  { category: "PANTS", name: "Patagonia Powdertown" },
  { category: "MITTENS", name: "Hestra" },
];

export default function About() {
  return (
    <div className="pt-24 sm:pt-32 pb-20">
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="font-[family-name:var(--font-heading)] text-[5rem] sm:text-[8rem] md:text-[12rem] font-bold tracking-tight leading-[0.85]">
          ABOUT
          <span className="text-[#b4ff00]"> RUDE</span>
        </h1>
      </div>

      {/* ═══════════════════ BIO SECTION ═══════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Photo — tall, overlapping feel */}
          <ScrollReveal className="md:col-span-4">
            <div className="aspect-[3/4] bg-[#0a0a0a] border border-[#222] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#b4ff00] z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/gallery/20260223_103211.jpg"
                alt="RudeShreds portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Bio text */}
          <ScrollReveal className="md:col-span-8" delay={0.1}>
            <div className="space-y-6">
              <p className="font-[family-name:var(--font-body)] text-sm sm:text-base leading-[1.8] text-[#999]">
                Northeast snowboarder out of{" "}
                <strong className="text-[#b4ff00] font-normal">
                  Manhattan, NYC
                </strong>
                . Started riding at 4 and never looked back. Now shredding every
                weekend across the Northeast — from home mountain{" "}
                <strong className="text-[#e0e0e0] font-normal">
                  Stratton, VT
                </strong>{" "}
                to the Poconos and NJ.
              </p>

              <p className="font-[family-name:var(--font-body)] text-sm sm:text-base leading-[1.8] text-[#999]">
                All-around rider. Park features — jumps, rails, boxes. Carving
                groomers. Running glades. Boardercross. Whatever the mountain
                throws, Rude rides it.
              </p>

              <p className="font-[family-name:var(--font-body)] text-sm sm:text-base leading-[1.8] text-[#999]">
                City kid who shreds. Manhattan during the week, mountains on the
                weekend. That&apos;s the life.
              </p>

              {/* Quick facts — asymmetric layout */}
              <div className="pt-8 mt-8 border-t border-[#222]">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {[
                    ["HOME MTN", "Stratton, VT"],
                    ["BASED", "Manhattan, NYC"],
                    ["ALSO RIDES", "Poconos, Big Snow, Mtn Creek"],
                    ["STYLE", "All Mountain / Park"],
                    [
                      "RIDERS I WATCH",
                      "Zeb Powell, McMorris, Danny Kass, Canter",
                    ],
                    [
                      "CURRENT BOARD",
                      "Arbor Vortice 110",
                    ],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-[family-name:var(--font-body)] text-[9px] tracking-[0.3em] text-[#444]">
                        {label}
                      </dt>
                      <dd className="mt-1 font-[family-name:var(--font-body)] text-xs text-[#ccc]">
                        {value}
                      </dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ═══════════════════ GEAR SECTION ═══════════════════ */}
      <div className="mt-24 sm:mt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a] -skew-y-1 origin-top-left scale-105" />

        <div className="relative z-10 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-12">
                CURRENT
                <span className="text-[#b4ff00]"> SETUP</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {gear.map((item, i) => (
                <ScrollReveal key={item.category} delay={i * 0.05}>
                  <div className="glow-hover border border-[#222] group">
                    {/* Image area */}
                    <div className="aspect-square bg-[#0e0e0e] flex items-center justify-center overflow-hidden relative">
                      {item.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <span className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-[#111] group-hover:text-[#b4ff00]/10 transition-colors duration-500 select-none">
                          {item.category.charAt(0)}
                        </span>
                      )}
                    </div>

                    {/* Label */}
                    <div className="p-3 border-t border-[#222]">
                      <p className="font-[family-name:var(--font-body)] text-[9px] tracking-[0.3em] text-[#b4ff00]">
                        {item.category}
                      </p>
                      <p className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-wider text-[#e0e0e0] mt-0.5">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
