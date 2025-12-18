import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ✅ Avant Garde Local Font */
const avantGarde = localFont({
  src: [
    {
      path: "../../public/fonts/AvantGardeITCbyBT-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvantGardeITCbyBT-Demi.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/AvantGardeITCbyBT-DemiOblique.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-avant-garde",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sivavarunan Portfolio",
  description: "created by siva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${avantGarde.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
