"use client";

import Reveal from "./Reveal";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax: start lower and scale smaller
  const y = useTransform(scrollY, [0, 500], [100, 50]); 
  const scale = useTransform(scrollY, [0, 500], [1.8, 1.25]);

  return (
<section className="relative h-screen w-full flex items-center justify-center px-8 md:px-16 overflow-hidden
                    bg-gradient-to-b from-white to-[#f4ede9]/95">

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

      {/* Foreground Text */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl">

        <Reveal>
          <h2 className="text-3xl sm:text-5xl text-black font-[var(--font-avant-garde)] font-bold">
            Video Editor & Motion Graphics Designer
          </h2>
        </Reveal>

       <Reveal>
  <p
    className="
      text-gray-950
      text-lg sm:text-xl
      font-[var(--font-avant-garde)]
      italic
    "
  >
    Crafting cinematic edits, motion graphics, and visual stories.
  </p>
</Reveal>

        <Reveal>
          <div className="mt-6 flex gap-4 flex-wrap justify-center">
            <button
              className="px-6 py-3 bg-white text-black rounded-md hover:scale-105 transition-transform duration-300"
              onClick={() => {
                const section = document.getElementById("recent-work");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Work
            </button>

            <button
              className="px-6 py-3 border border-black text-black rounded-md hover:scale-105 transition-transform duration-300"
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
