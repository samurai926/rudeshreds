import type { Metadata } from "next";
import { Teko, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const teko = Teko({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RUDESHREDS — Northeast Snowboarder",
  description:
    "RUDESHREDS. Northeast snowboarder out of NYC. Park, carving, trees, boardercross. Stratton VT.",
  keywords: [
    "snowboard",
    "snowboarding",
    "northeast",
    "stratton",
    "NYC",
    "youth snowboarder",
    "park riding",
    "boardercross",
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${teko.variable} ${jetbrainsMono.variable} antialiased bg-[#050505] text-[#e0e0e0]`}
      >
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
