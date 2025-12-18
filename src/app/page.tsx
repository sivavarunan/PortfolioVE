"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import RecentWork from "./components/RecentWork";
import Contact from "./components/contact";
import Footer from "./components/Footer";

const recentVideos = [
  { id: "mW9GltKoEoc", title: "Motion Graphics Reel 1" },
  { id: "cuBjX9_O8SQ", title: "Video Editing Reel 2" },
  { id: "3QeU3IMBGxk", title: "Motion Design Reel 3" },
];

export default function Home() {
  const { scrollY } = useScroll();

  // Smooth cinematic parallax
  const y = useTransform(scrollY, [0, 6000], ["0%", "-25%"]);

  return (
    <main className="relative">

      <motion.div
        style={{ y }}
        className="fixed inset-0 -z-10 "
      >
        <div
          className="absolute left-1/2 top-2/3 w-full h-[150vh] 
               -translate-x-1/2 -translate-y-1/2
               bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: "url('/background.jpg')",
          }}
        />
      </motion.div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Showreel
          youtubeId="BKheYm0Raeo"
          youtubeIdMotion="9NzuSHEsUZg"
          youtubeChannel="https://www.youtube.com/@sivaedits_25"
          instagram="https://www.instagram.com/sivaedits_25"
        />
        <RecentWork videos={recentVideos} />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
