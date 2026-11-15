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
  title: "Aakash Nair | Hardware-Software Co-Design & Full-Stack Developer",
  description:
    "Electronics & Communication Engineering Junior at VIT. Specializing in hardware-software co-design, edge wearables, and scalable web apps.",
  keywords: [
    "Aakash Nair",
    "VIT Vellore",
    "Hardware-Software Co-Design",
    "Electronics and Communication Engineering",
    "Full-Stack Developer",
    "ESP32",
    "Next.js",
    "Verilog",
    "MuleSoft",
    "IEEE MIMO Patch Antenna",
    "Philips",
    "VFS Global"
  ],
  authors: [{ name: "Aakash Nair" }],
  openGraph: {
    title: "Aakash Nair | ECE Junior & Full-Stack Developer",
    description:
      "Bridging embedded hardware prototyping with modern web and cloud architecture.",
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
