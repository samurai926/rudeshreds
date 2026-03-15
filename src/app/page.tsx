import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient — replace with hero image/video later */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#b4ff00] via-[#b4ff00]/20 to-transparent transform rotate-12 origin-top-right" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-[family-name:var(--font-heading)] text-lg sm:text-xl tracking-[0.3em] text-[#888] mb-4">
            NORTHEAST SNOWBOARDER
          </p>

          <h1 className="font-[family-name:var(--font-heading)] text-7xl sm:text-9xl md:text-[12rem] leading-[0.85] tracking-wider text-[#ededed]">
            RUDE
            <span className="block text-[#b4ff00]">SHREDS</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#888] max-w-md mx-auto">
            Stratton VT &mdash; Manhattan NYC
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/riding"
              className="group flex items-center gap-2 bg-[#b4ff00] text-black font-bold px-8 py-4 text-sm tracking-wider uppercase hover:bg-white transition-colors"
            >
              <Play size={16} className="fill-current" />
              WATCH HIGHLIGHTS
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 border border-[#2a2a2a] px-8 py-4 text-sm tracking-wider uppercase text-[#888] hover:border-[#b4ff00] hover:text-[#b4ff00] transition-colors"
            >
              GET IN TOUCH
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555]">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#555] to-transparent" />
        </div>
      </section>

      {/* Quick Stats Strip */}
      <section className="border-y border-[#2a2a2a] bg-[#111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2a2a2a]">
            {[
              { stat: "STRATTON", label: "Home Mountain" },
              { stat: "NYC", label: "Based In" },
              { stat: "ALL-MTN", label: "Style" },
              { stat: "PARK", label: "Specialty" },
            ].map((item) => (
              <div key={item.label} className="py-8 px-4 text-center">
                <p className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl text-[#b4ff00] tracking-wider">
                  {item.stat}
                </p>
                <p className="text-xs text-[#888] tracking-widest uppercase mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-6xl tracking-wider mb-10">
            LATEST <span className="text-[#b4ff00]">EDIT</span>
          </h2>

          {/* YouTube embed placeholder — replace VIDEO_ID with actual ID */}
          <div className="relative aspect-video bg-[#141414] border border-[#2a2a2a] overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-[#555] text-sm tracking-widest uppercase">
                YouTube embed goes here &mdash; replace VIDEO_ID in code
              </p>
            </div>
            {/*
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Latest RudeShreds edit"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
            */}
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-20 sm:py-28 bg-[#111] border-y border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-6xl tracking-wider mb-12">
            WHAT I <span className="text-[#b4ff00]">RIDE</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Park",
                desc: "Jumps, rails, boxes. Learning new tricks every session.",
              },
              {
                title: "Carving",
                desc: "Digging deep turns on groomers. Speed and style.",
              },
              {
                title: "Trees",
                desc: "Northeast glades. Tight lines through Stratton woods.",
              },
              {
                title: "Boardercross",
                desc: "Head-to-head racing. Bumps, banks, and full send.",
              },
              {
                title: "All Mountain",
                desc: "Top to bottom. Every trail, every condition.",
              },
              {
                title: "Progression",
                desc: "Always pushing. New tricks, bigger features, steeper lines.",
              },
            ].map((d) => (
              <div
                key={d.title}
                className="border border-[#2a2a2a] p-6 hover:border-[#b4ff00] transition-colors group"
              >
                <h3 className="font-[family-name:var(--font-heading)] text-2xl tracking-wider text-[#ededed] group-hover:text-[#b4ff00] transition-colors">
                  {d.title.toUpperCase()}
                </h3>
                <p className="mt-2 text-sm text-[#888] leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-5xl sm:text-7xl tracking-wider">
            WANT TO <span className="text-[#b4ff00]">CONNECT?</span>
          </h2>
          <p className="mt-4 text-[#888] max-w-lg mx-auto">
            Sponsors, teams, coaches, media — let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-[#b4ff00] text-black font-bold px-10 py-4 text-sm tracking-wider uppercase hover:bg-white transition-colors"
          >
            GET IN TOUCH
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
