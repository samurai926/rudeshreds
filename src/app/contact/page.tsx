"use client";

import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const inquiryTypes = [
  "Sponsorship",
  "Team / Coaching",
  "Media / Feature",
  "General",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire up to Supabase or Formspree
    setSubmitted(true);
  }

  return (
    <div className="pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <h1 className="font-[family-name:var(--font-heading)] text-[5rem] sm:text-[8rem] md:text-[12rem] font-bold tracking-tight leading-[0.85]">
          GET IN
          <span className="text-[#b4ff00]"> TOUCH</span>
        </h1>
        <p className="mt-4 font-[family-name:var(--font-body)] text-xs tracking-[0.2em] text-[#555]">
          SPONSORS // TEAMS // COACHES // MEDIA
        </p>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Contact Form */}
          <ScrollReveal className="md:col-span-7">
            {submitted ? (
              <div className="border border-[#b4ff00] p-12 sm:p-16 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#b4ff00]" />
                <p className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl font-bold tracking-wider text-[#b4ff00]">
                  SENT
                </p>
                <p className="mt-3 font-[family-name:var(--font-body)] text-xs tracking-[0.2em] text-[#666]">
                  WE&apos;LL GET BACK TO YOU SOON
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-[family-name:var(--font-body)] text-[9px] tracking-[0.3em] text-[#555] mb-2"
                    >
                      NAME
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#e0e0e0] placeholder-[#333] focus:border-[#b4ff00] focus:outline-none focus:shadow-[0_0_10px_rgba(180,255,0,0.1)] transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-[family-name:var(--font-body)] text-[9px] tracking-[0.3em] text-[#555] mb-2"
                    >
                      EMAIL
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#e0e0e0] placeholder-[#333] focus:border-[#b4ff00] focus:outline-none focus:shadow-[0_0_10px_rgba(180,255,0,0.1)] transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block font-[family-name:var(--font-body)] text-[9px] tracking-[0.3em] text-[#555] mb-2"
                  >
                    INQUIRY TYPE
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    defaultValue=""
                    className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#e0e0e0] focus:border-[#b4ff00] focus:outline-none focus:shadow-[0_0_10px_rgba(180,255,0,0.1)] transition-all"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-[family-name:var(--font-body)] text-[9px] tracking-[0.3em] text-[#555] mb-2"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-[#0a0a0a] border border-[#222] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[#e0e0e0] placeholder-[#333] focus:border-[#b4ff00] focus:outline-none focus:shadow-[0_0_10px_rgba(180,255,0,0.1)] transition-all resize-none"
                    placeholder="Tell us what you're thinking..."
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-[#b4ff00] text-black font-[family-name:var(--font-body)] font-bold px-8 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(180,255,0,0.3)]"
                >
                  <Send size={14} />
                  SEND MESSAGE
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Sidebar */}
          <ScrollReveal className="md:col-span-5" delay={0.15}>
            <div className="space-y-6">
              <div className="border border-[#222] p-6 glow-hover relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#b4ff00]" />
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-wider text-[#e0e0e0] mb-2">
                  SPONSORSHIP
                </h3>
                <p className="font-[family-name:var(--font-body)] text-xs text-[#555] leading-relaxed">
                  Open to gear sponsors, brand partnerships, and ambassador
                  programs. Let&apos;s work together.
                </p>
              </div>

              <div className="border border-[#222] p-6 glow-hover relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#ff3333]" />
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-wider text-[#e0e0e0] mb-2">
                  TEAMS & COACHING
                </h3>
                <p className="font-[family-name:var(--font-body)] text-xs text-[#555] leading-relaxed">
                  Coaches and development programs — let&apos;s connect about
                  team opportunities in the Northeast.
                </p>
              </div>

              <div className="border border-[#222] p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#444]" />
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-wider text-[#666] mb-2">
                  DIRECT
                </h3>
                <a
                  href="mailto:rudeshreds@gmail.com"
                  className="font-[family-name:var(--font-body)] text-xs text-[#b4ff00] hover:text-white transition-colors flex items-center gap-2"
                >
                  rudeshreds@gmail.com
                  <ArrowRight size={12} />
                </a>
              </div>

              {/* Mountains list */}
              <div className="pt-6 border-t border-[#161616]">
                <p className="font-[family-name:var(--font-body)] text-[9px] tracking-[0.3em] text-[#333] mb-3">
                  WHERE WE RIDE
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Stratton VT",
                    "Poconos PA",
                    "Big Snow NJ",
                    "Mountain Creek NJ",
                  ].map((mtn) => (
                    <span
                      key={mtn}
                      className="font-[family-name:var(--font-body)] text-[9px] tracking-[0.2em] border border-[#222] px-3 py-1.5 text-[#555]"
                    >
                      {mtn.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
