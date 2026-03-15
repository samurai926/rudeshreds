"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

type MediaType = "all" | "video" | "photo";

interface Video {
  type: "video";
  id: string;
  title: string;
  category: string;
}

interface Photo {
  type: "photo";
  src: string;
  alt: string;
  category: string;
}

type MediaItem = Video | Photo;

// Add your content here
const media: MediaItem[] = [
  // Examples:
  // { type: "video", id: "dQw4w9WgXcQ", title: "Stratton Park Session — Jan 2026", category: "Park" },
  // { type: "photo", src: "/gallery/stratton-rail.jpg", alt: "Rail slide at Stratton", category: "Park" },
];

const filters: { label: string; value: MediaType }[] = [
  { label: "ALL", value: "all" },
  { label: "VIDEO", value: "video" },
  { label: "PHOTO", value: "photo" },
];

export default function Media() {
  const [filter, setFilter] = useState<MediaType>("all");

  const filtered =
    filter === "all" ? media : media.filter((m) => m.type === filter);

  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <h1 className="font-[family-name:var(--font-heading)] text-[5rem] sm:text-[8rem] md:text-[12rem] font-bold tracking-tight leading-[0.85]">
          MEDIA
        </h1>
        <p className="mt-4 font-[family-name:var(--font-body)] text-xs tracking-[0.2em] text-[#555]">
          HIGHLIGHT REELS // RAW SESSIONS // PROGRESSION
        </p>

        {/* Filter tabs */}
        <div className="mt-10 flex items-center gap-1 border-b border-[#222]">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-6 py-3 font-[family-name:var(--font-body)] text-[10px] tracking-[0.3em] transition-colors relative ${
                filter === f.value
                  ? "text-[#b4ff00]"
                  : "text-[#555] hover:text-[#888]"
              }`}
            >
              {f.label}
              {filter === f.value && (
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#b4ff00]" />
              )}
            </button>
          ))}
        </div>

        {/* Content grid */}
        {filtered.length === 0 ? (
          <div className="mt-20 text-center">
            <div className="inline-block border border-dashed border-[#222] p-16 sm:p-20">
              <div className="w-20 h-20 border-2 border-[#222] flex items-center justify-center mx-auto mb-6">
                <Play size={28} className="text-[#333]" />
              </div>
              <p className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold tracking-wider text-[#222]">
                CONTENT DROPPING SOON
              </p>
              <p className="mt-3 font-[family-name:var(--font-body)] text-[10px] tracking-[0.3em] text-[#333]">
                ADD MEDIA ITEMS TO SRC/APP/MEDIA/PAGE.TSX
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                {item.type === "video" ? (
                  <div className="group">
                    <div className="relative aspect-video bg-[#0a0a0a] border border-[#222] overflow-hidden glow-hover scanlines">
                      <iframe
                        src={`https://www.youtube.com/embed/${item.id}`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full z-10"
                      />
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <span className="font-[family-name:var(--font-body)] text-[9px] tracking-[0.3em] text-[#b4ff00] font-bold">
                        {item.category}
                      </span>
                      <span className="w-4 h-px bg-[#333]" />
                      <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wider">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div className="glow-hover border border-[#222] overflow-hidden group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="p-3 bg-[#0a0a0a] border-t border-[#222]">
                      <span className="font-[family-name:var(--font-body)] text-[9px] tracking-[0.3em] text-[#b4ff00]">
                        {item.category}
                      </span>
                      <p className="font-[family-name:var(--font-body)] text-xs text-[#999] mt-1">
                        {item.alt}
                      </p>
                    </div>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
