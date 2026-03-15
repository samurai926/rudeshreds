"use client";

import { useState } from "react";
import { Send, ArrowRight } from "lucide-react";

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
    // For now, just show success state
    setSubmitted(true);
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="font-[family-name:var(--font-heading)] text-6xl sm:text-8xl tracking-wider">
          GET IN <span className="text-[#b4ff00]">TOUCH</span>
        </h1>
        <p className="mt-4 text-[#888] max-w-lg">
          Sponsors, teams, coaches, media — reach out. We&apos;d love to hear from you.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="border border-[#b4ff00] p-10 text-center">
                <p className="font-[family-name:var(--font-heading)] text-3xl tracking-wider text-[#b4ff00]">
                  MESSAGE SENT
                </p>
                <p className="mt-2 text-[#888]">
                  We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-widest uppercase text-[#888] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-[#141414] border border-[#2a2a2a] px-4 py-3 text-[#ededed] placeholder-[#555] focus:border-[#b4ff00] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-widest uppercase text-[#888] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-[#141414] border border-[#2a2a2a] px-4 py-3 text-[#ededed] placeholder-[#555] focus:border-[#b4ff00] focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block text-xs tracking-widest uppercase text-[#888] mb-2"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    className="w-full bg-[#141414] border border-[#2a2a2a] px-4 py-3 text-[#ededed] focus:border-[#b4ff00] focus:outline-none transition-colors"
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
                    className="block text-xs tracking-widest uppercase text-[#888] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-[#141414] border border-[#2a2a2a] px-4 py-3 text-[#ededed] placeholder-[#555] focus:border-[#b4ff00] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us what you're thinking..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#b4ff00] text-black font-bold px-8 py-4 text-sm tracking-wider uppercase hover:bg-white transition-colors"
                >
                  <Send size={16} />
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-8">
            <div className="border border-[#2a2a2a] p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl tracking-wider text-[#b4ff00] mb-3">
                SPONSORSHIP
              </h3>
              <p className="text-sm text-[#888] leading-relaxed">
                Interested in working together? We&apos;re open to gear sponsors,
                brand partnerships, and ambassador programs.
              </p>
            </div>

            <div className="border border-[#2a2a2a] p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl tracking-wider text-[#b4ff00] mb-3">
                TEAMS & COACHING
              </h3>
              <p className="text-sm text-[#888] leading-relaxed">
                Coaches and development programs — let&apos;s connect about team
                opportunities in the Northeast.
              </p>
            </div>

            <div className="border border-[#2a2a2a] p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl tracking-wider text-[#888] mb-3">
                DIRECT EMAIL
              </h3>
              <a
                href="mailto:rudeshreds@gmail.com"
                className="text-[#b4ff00] hover:text-white transition-colors flex items-center gap-2"
              >
                rudeshreds@gmail.com
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
