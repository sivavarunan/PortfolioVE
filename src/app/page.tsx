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
import Loader from "./components/loader";

const recentVideos = [
  { id: "Kx_CBr2HKiQ", title: "Motion Graphics Reel 1" },
  { id: "VENtAF9htU4", title: "Video Editing Reel 2" },
  { id: "3QeU3IMBGxk", title: "Motion Design Reel 3" },
];

export default function Home() {
  const { scrollY } = useScroll();

  // Smooth cinematic parallax
  const y = useTransform(scrollY, [0, 6000], ["0%", "-25%"]);

  return (
    <Loader>
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
          reels={[
            {
              id: "9NzuSHEsUZg",
              title: "Motion Graphics Reel",
              description:
                "A collection of my best motion graphics work — animated visuals, kinetic typography, and creative motion design.",
              aspect: "landscape",
            },
            {
              id: "BKheYm0Raeo",
              title: "Video Editing Reel",
              description:
                "Cinematic cuts, seamless transitions, and storytelling that keeps viewers engaged from start to finish.",
              aspect: "landscape",
            },
          ]}
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
    </Loader>
  );
}
