import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riding — RudeShreds",
  description: "Watch RudeShreds highlight reels, raw runs, and progression edits.",
};

// Add your YouTube video IDs here
const videos: { id: string; title: string; category: string }[] = [
  // Example:
  // { id: "dQw4w9WgXcQ", title: "Stratton Park Session — Jan 2026", category: "Park" },
  // { id: "abc123", title: "Tree Run After Storm", category: "Trees" },
];

export default function Riding() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="font-[family-name:var(--font-heading)] text-6xl sm:text-8xl tracking-wider">
          RIDING <span className="text-[#b4ff00]">EDITS</span>
        </h1>
        <p className="mt-4 text-[#888] max-w-lg">
          Highlight reels, raw sessions, and progression clips. All Northeast, all shred.
        </p>

        {videos.length === 0 ? (
          <div className="mt-16 border border-dashed border-[#2a2a2a] p-16 text-center">
            <p className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-[#555]">
              VIDEOS COMING SOON
            </p>
            <p className="mt-2 text-sm text-[#555]">
              Add YouTube video IDs to src/app/riding/page.tsx
            </p>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="group">
                <div className="relative aspect-video bg-[#141414] border border-[#2a2a2a] overflow-hidden group-hover:border-[#b4ff00] transition-colors">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="mt-3">
                  <span className="text-xs text-[#b4ff00] tracking-widest uppercase font-bold">
                    {video.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl tracking-wider mt-1">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
