"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showreel from "./components/Showreel";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import RecentWork from "./components/RecentWork";

const recentVideos = [
    { id: "mW9GltKoEoc", title: "Motion Graphics Reel 1" },
    { id: "cuBjX9_O8SQ", title: "Video Editing Reel 2" },
    { id: "3QeU3IMBGxk", title: "Motion Design Reel 3" },
];

export default function Home() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <Navbar />
            <Hero/>
            <Showreel youtubeId="BKheYm0Raeo"youtubeIdMotion="9NzuSHEsUZg" youtubeChannel="https://www.youtube.com/@sivaedits_25"
                instagram="https://www.instagram.com/sivaedits_25" />
                 <RecentWork videos={recentVideos} />
            <Services />
            <Portfolio />
            <Footer />
        </motion.main>
    );
}
