import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://pavanvjoshi.github.io";
const description =
  "AI Backend Engineer building production-grade LLM systems with LangGraph, LangChain, and FastAPI. Multi-tenant SaaS architecture, RAG pipelines, and scalable AI infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pavan Joshi - AI Backend Engineer",
  description,
  keywords: [
    "Pavan Joshi",
    "AI Backend Engineer",
    "Generative AI Developer",
    "LangGraph",
    "LangChain",
    "FastAPI",
    "LLM",
    "RAG",
    "Multi-tenant SaaS",
  ],
  authors: [{ name: "Pavan Joshi" }],
  creator: "Pavan Joshi",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Pavan Joshi - AI Backend Engineer",
    description,
    siteName: "pavanjoshi.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Joshi - AI Backend Engineer",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF9F6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="grid-bg min-h-[100dvh] font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
