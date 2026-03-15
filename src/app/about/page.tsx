import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — RudeShreds",
  description:
    "Northeast snowboarder based in NYC. Riding Stratton VT, Poconos, and NJ.",
};

export default function About() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <h1 className="font-[family-name:var(--font-heading)] text-6xl sm:text-8xl tracking-wider">
          ABOUT <span className="text-[#b4ff00]">RUDE</span>
        </h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Photo placeholder */}
          <div className="md:col-span-1">
            <div className="aspect-[3/4] bg-[#141414] border border-[#2a2a2a] flex items-center justify-center">
              <p className="text-[#555] text-xs tracking-widest uppercase text-center px-4">
                Photo here
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed text-[#ccc]">
              Northeast snowboarder out of <strong className="text-[#b4ff00]">Manhattan, NYC</strong>.
              Started riding at age 4 and never looked back. Now shredding every
              weekend across the Northeast — from home mountain{" "}
              <strong className="text-[#ededed]">Stratton, VT</strong> to the
              Poconos and NJ resorts.
            </p>

            <p className="text-lg leading-relaxed text-[#ccc]">
              All-around rider who loves park features — jumps, rails, boxes — as
              much as carving groomers, running glades, and lining up for
              boardercross. Always progressing, always pushing.
            </p>

            <p className="text-lg leading-relaxed text-[#ccc]">
              A city kid who shreds. Manhattan during the week, mountains on the
              weekend. That&apos;s the life.
            </p>

            {/* Quick facts */}
            <div className="pt-6 border-t border-[#2a2a2a]">
              <h2 className="font-[family-name:var(--font-heading)] text-2xl tracking-wider text-[#888] mb-4">
                QUICK FACTS
              </h2>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                {[
                  ["Home Mountain", "Stratton, VT"],
                  ["Based In", "Manhattan, NYC"],
                  ["Also Rides", "Poconos, Big Snow NJ, Mountain Creek"],
                  ["Style", "All Mountain / Park"],
                  ["Favorite Riders", "Zeb Powell, Mark McMorris, Danny Kass, Jake Canter"],
                  ["Setup", "Coming soon"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[#555] tracking-wider uppercase">
                      {label}
                    </dt>
                    <dd className="mt-1 text-[#ededed]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
