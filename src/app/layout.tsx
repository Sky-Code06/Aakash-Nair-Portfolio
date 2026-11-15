import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aakash Nair | Embedded Systems, IoT & AI/ML Engineer",
  description:
    "Electronics & Communication Engineering at VIT. Specializing in Embedded Systems, IoT Architectures, TinyML, and Edge Intelligence.",
  keywords: [
    "Aakash Nair",
    "VIT Vellore",
    "Embedded Systems",
    "IoT",
    "AI/ML",
    "TinyML",
    "Edge Intelligence",
    "ESP32",
    "Digital Signal Processing",
    "Control Systems",
    "Electronics and Communication Engineering",
    "VFS Global"
  ],
  authors: [{ name: "Aakash Nair" }],
  openGraph: {
    title: "Aakash Nair | Embedded Systems, IoT & AI/ML Engineer",
    description:
      "Engineering autonomous edge intelligence, IoT sensor architectures, and embedded machine learning.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#05070e] text-slate-100 antialiased font-sans flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
