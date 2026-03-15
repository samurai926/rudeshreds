import Link from "next/link";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen flex items-center sm:items-end overflow-hidden pt-24 pb-16 sm:pt-0 sm:pb-28">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#050505]" />

        {/* Diagonal accent slashes */}
        <div className="absolute top-0 right-[15%] w-[2px] h-[60%] bg-gradient-to-b from-[#b4ff00] via-[#b4ff00]/10 to-transparent transform rotate-[15deg] origin-top" />
        <div className="absolute top-[10%] right-[12%] w-[1px] h-[40%] bg-gradient-to-b from-[#ff3333]/40 via-[#ff3333]/5 to-transparent transform rotate-[15deg] origin-top" />
        <div className="absolute bottom-0 left-[8%] w-[1px] h-[30%] bg-gradient-to-t from-[#b4ff00]/30 to-transparent transform -rotate-[10deg] origin-bottom" />

        {/* Giant background text — visual texture */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-heading)] text-[20rem] sm:text-[30rem] md:text-[40rem] font-bold leading-none text-[#0a0a0a] select-none pointer-events-none tracking-tighter">
          RS
        </div>

        {/* Main content — left aligned, not centered */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
          <p className="font-[family-name:var(--font-body)] text-[10px] sm:text-xs tracking-[0.4em] text-[#666] mb-6 animate-slide-up">
            NORTHEAST SNOWBOARDER // NYC
          </p>

          <h1 className="font-[family-name:var(--font-heading)] text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold leading-[0.8] tracking-tight">
            <span className="block text-[#e0e0e0] animate-slam">RUDE</span>
            <span className="block text-[#b4ff00] animate-slam-delay">
              SHREDS
            </span>
          </h1>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start gap-4 animate-slide-up">
            <Link
              href="/media"
              className="group flex items-center gap-3 bg-[#b4ff00] text-black font-[family-name:var(--font-body)] font-bold px-8 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(180,255,0,0.3)]"
            >
              <Play size={14} className="fill-current" />
              WATCH EDITS
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-3 border border-[#333] px-8 py-4 font-[family-name:var(--font-body)] text-[10px] tracking-[0.3em] uppercase text-[#666] hover:border-[#b4ff00] hover:text-[#b4ff00] transition-all duration-300"
            >
              SPONSOR INQUIRY
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#333] animate-slide-up">
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ═══════════════════ STATS STRIP ═══════════════════ */}
      <section className="relative bg-[#b4ff00] text-black overflow-hidden skew-cut">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { stat: "STRATTON", label: "HOME MTN" },
              { stat: "NYC", label: "BASED" },
              { stat: "ALL-MTN", label: "STYLE" },
              { stat: "PARK", label: "SPECIALTY" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`py-6 sm:py-8 px-4 text-center ${
                  i < 3 ? "border-r border-black/10" : ""
                }`}
              >
                <p className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold tracking-wider">
                  {item.stat}
                </p>
                <p className="font-[family-name:var(--font-body)] text-[9px] tracking-[0.3em] mt-1 text-black/50">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ LATEST EDIT — FULL BLEED ═══════════════════ */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none">
                LATEST
                <span className="text-[#b4ff00]"> EDIT</span>
              </h2>
              <Link
                href="/media"
                className="hidden sm:flex items-center gap-2 font-[family-name:var(--font-body)] text-[10px] tracking-[0.3em] text-[#666] hover:text-[#b4ff00] transition-colors"
              >
                ALL MEDIA
                <ArrowRight size={12} />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {/* 16:9 video container — full width */}
            <div className="relative aspect-video bg-[#0a0a0a] border border-[#222] overflow-hidden scanlines">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-[#333] flex items-center justify-center mx-auto mb-4">
                    <Play size={24} className="text-[#333] fill-current" />
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-[10px] tracking-[0.3em] text-[#333]">
                    YOUTUBE EMBED // REPLACE VIDEO_ID
                  </p>
                </div>
              </div>
              {/*
              <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Latest RudeShreds edit"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full z-10"
              />
              */}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════ DISCIPLINES — HORIZONTAL SCROLL ON MOBILE ═══════════════════ */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        {/* Skewed background */}
        <div className="absolute inset-0 bg-[#0a0a0a] -skew-y-2 origin-top-left scale-105" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-10">
              WHAT I<span className="text-[#b4ff00]"> RIDE</span>
            </h2>
          </ScrollReveal>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 scroll-strip -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              {
                title: "PARK",
                desc: "Jumps, rails, boxes. New tricks every session.",
                num: "01",
              },
              {
                title: "CARVING",
                desc: "Deep turns on groomers. Speed and style.",
                num: "02",
              },
              {
                title: "TREES",
                desc: "Northeast glades. Tight lines through Stratton woods.",
                num: "03",
              },
              {
                title: "BOARDERCROSS",
                desc: "Head-to-head. Bumps, banks, full send.",
                num: "04",
              },
              {
                title: "ALL MOUNTAIN",
                desc: "Top to bottom. Every trail, every condition.",
                num: "05",
              },
              {
                title: "PROGRESSION",
                desc: "Always pushing. Bigger features, steeper lines.",
                num: "06",
              },
            ].map((d) => (
              <div
                key={d.title}
                className="min-w-[260px] sm:min-w-0 border border-[#222] p-5 sm:p-6 glow-hover group relative overflow-hidden"
              >
                {/* Big background number */}
                <span className="absolute -top-2 -right-1 font-[family-name:var(--font-heading)] text-[5rem] font-bold leading-none text-[#111] group-hover:text-[#b4ff00]/10 transition-colors duration-500 select-none">
                  {d.num}
                </span>

                <div className="relative z-10">
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-wider text-[#e0e0e0] group-hover:text-[#b4ff00] transition-colors">
                    {d.title}
                  </h3>
                  <p className="mt-2 font-[family-name:var(--font-body)] text-xs text-[#555] leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA BANNER ═══════════════════ */}
      <section className="py-24 sm:py-36 relative overflow-hidden">
        {/* Crossed accent lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#222] to-transparent" />
        </div>

        <ScrollReveal>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-[0.85]">
              WANT TO
              <span className="block text-[#b4ff00]">CONNECT?</span>
            </h2>
            <p className="mt-6 font-[family-name:var(--font-body)] text-xs tracking-[0.2em] text-[#555] max-w-md mx-auto">
              SPONSORS // TEAMS // COACHES // MEDIA
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 mt-10 bg-[#b4ff00] text-black font-[family-name:var(--font-body)] font-bold px-10 py-5 text-[10px] tracking-[0.3em] uppercase hover:bg-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(180,255,0,0.3)]"
            >
              GET IN TOUCH
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
