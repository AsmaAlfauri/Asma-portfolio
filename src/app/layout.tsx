import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // سنفترض أننا سنضع النيفبار هنا
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asma Alfauri | Full-Stack Software Engineer",
  description:
    "Portfolio of Asma Alfauri, a Full-Stack Software Engineer specializing in MERN/PERN stacks and scalable web architectures.",
  keywords: [
    "Software Engineer",
    "Full-Stack",
    "React",
    "Next.js",
    "MERN Stack",
    "Node.js",
    "Asma Alfauri",
  ],
  openGraph: {
    title: "Asma Alfauri | Portfolio",
    description: "Building scalable systems with engineering precision.",
    url: "https://asma-alfauri.vercel.app",
    siteName: "Asma Alfauri Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100 selection:bg-blue-500/30`}
      >
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
