"use client";

import Reveal from "./Reveal";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [100, 50]);
  const scale = useTransform(scrollY, [0, 500], [1.8, 1.25]);

  return (
    <section
      className="relative h-screen w-full flex items-center justify-center px-6 sm:px-8 md:px-16 overflow-hidden
                 bg-gradient-to-b from-[#f8f6f3] via-[#f8f6f3]/95 to-[#f0e8e3]"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src="/hero3.png"
          alt="Hero Background"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#f0e8e3]/60 via-transparent to-[#f8f6f3]/30 pointer-events-none" />

      {/* Foreground Text */}
      <div className="relative z-10 flex flex-col items-center text-center gap-5 max-w-3xl">
        <Reveal>
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-gray-700 font-medium">
            Freelance Creative
          </p>
        </Reveal>

        <Reveal>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-black font-bold leading-tight">
            Video Editor &<br />Motion Graphics Designer
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-gray-900 text-base sm:text-lg max-w-xl italic">
            Crafting cinematic edits, motion graphics, and visual stories.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-8 sm:mt-4 flex gap-4 flex-wrap justify-center">
            <button
              className="px-7 py-3 bg-black text-white rounded-full text-sm font-medium
                         hover:bg-gray-800 hover:scale-105 transition-all duration-300
                         shadow-lg shadow-black/20"
              onClick={() => {
                const section = document.getElementById("recent-work");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </button>

            <button
              className="px-7 py-3 border border-black/30 text-black rounded-full text-sm font-medium
                         hover:border-black hover:scale-105 transition-all duration-300"
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
