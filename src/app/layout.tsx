import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
  title: "Sivavarunan | Video Editor & Motion Graphics Designer",
  description:
    "Freelance video editor and motion graphics designer crafting cinematic edits, VFX, and visual stories. Based in Sri Lanka.",
  icons: {
    icon: "/fav.png",
  },
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
          ${jakarta.variable}
          ${avantGarde.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
