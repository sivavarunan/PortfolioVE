import Reveal from "./Reveal";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]); // parallax depth
  const scale = useTransform(scrollY, [0, 500], [1, 1.05]); // optional subtle scale

  return (
    <section className="relative h-screen flex items-center justify-center px-8 md:px-16 overflow-hidden">
      
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>

      {/* Foreground Text */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl">
        <Reveal>
          <h2 className="text-5xl sm:text-6xl font-bold text-white">
            Video Editor & Motion Designer
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-gray-200 text-lg sm:text-xl">
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
            <button className="px-6 py-3 border border-white text-white rounded-md hover:scale-105 transition-transform duration-300">
              Contact
            </button>
          </div>
        </Reveal>
      </div>

    </section>
  );
}
