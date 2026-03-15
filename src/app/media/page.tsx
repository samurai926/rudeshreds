import type { Metadata } from "next";
import { Play } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Media — RUDESHREDS",
  description:
    "Watch RudeShreds highlight reels, raw runs, and progression edits.",
};

interface Video {
  type: "video";
  id: string;
  title: string;
}

interface Photo {
  type: "photo";
  src: string;
  alt: string;
}

type MediaItem = Video | Photo;

// Add content here — videos and photos mixed in any order
const media: MediaItem[] = [
  {
    type: "video",
    id: "KwR20RiOoSM",
    title: "RudeShreds — First Edit",
  },
  {
    type: "photo",
    src: "/gallery/20260125_115151.jpg",
    alt: "Pow day — board and trees",
  },
  {
    type: "photo",
    src: "/gallery/20260223_103211.jpg",
    alt: "Deep snow portrait",
  },
];

export default function Media() {
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

        {/* Content */}
        {media.length === 0 ? (
          <div className="mt-20 text-center">
            <div className="inline-block border border-dashed border-[#222] p-16 sm:p-20">
              <div className="w-20 h-20 border-2 border-[#222] flex items-center justify-center mx-auto mb-6">
                <Play size={28} className="text-[#333]" />
              </div>
              <p className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold tracking-wider text-[#222]">
                CONTENT DROPPING SOON
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {media.map((item, i) => (
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
                    <h3 className="mt-3 font-[family-name:var(--font-heading)] text-xl font-bold tracking-wider">
                      {item.title}
                    </h3>
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
                      <p className="font-[family-name:var(--font-body)] text-xs text-[#999]">
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
