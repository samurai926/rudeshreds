import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RudeShreds — Northeast Snowboarder",
  description:
    "RudeShreds. Northeast snowboarder out of NYC. Park, carving, trees, boardercross. Stratton VT.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebasNeue.variable} ${inter.variable} antialiased bg-[#0a0a0a] text-[#ededed]`}
      >
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
