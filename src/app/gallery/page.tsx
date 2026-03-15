import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — RudeShreds",
  description: "Photos from the mountain. RudeShreds in action.",
};

// Add your photos here — put images in /public/gallery/ folder
const photos: { src: string; alt: string; season: string }[] = [
  // Example:
  // { src: "/gallery/stratton-rail-2026.jpg", alt: "Rail slide at Stratton", season: "2025-26" },
  // { src: "/gallery/pow-day.jpg", alt: "Powder day carve", season: "2025-26" },
];

export default function Gallery() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="font-[family-name:var(--font-heading)] text-6xl sm:text-8xl tracking-wider">
          GALLERY
        </h1>
        <p className="mt-4 text-[#888] max-w-lg">
          Moments from the mountain. Grabs, grinds, and good times.
        </p>

        {photos.length === 0 ? (
          <div className="mt-16 border border-dashed border-[#2a2a2a] p-16 text-center">
            <p className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-[#555]">
              PHOTOS COMING SOON
            </p>
            <p className="mt-2 text-sm text-[#555]">
              Add images to public/gallery/ and update src/app/gallery/page.tsx
            </p>
          </div>
        ) : (
          <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="break-inside-avoid border border-[#2a2a2a] overflow-hidden hover:border-[#b4ff00] transition-colors group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full"
                  loading="lazy"
                />
                <div className="p-3 bg-[#111]">
                  <p className="text-sm text-[#ccc]">{photo.alt}</p>
                  <p className="text-xs text-[#555] mt-1">{photo.season}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
