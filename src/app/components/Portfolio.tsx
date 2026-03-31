"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const applications = [
    { name: "After Effects", image: "/adobe-after-effects-svgrepo-com.svg" },
    { name: "Premiere Pro", image: "/adobe-premiere-svgrepo-com.svg" },
    { name: "Blender", image: "/blender-svgrepo-com.svg" },
    { name: "Photoshop", image: "/photoshop-color-svgrepo-com.svg" },
  ];

  return (
    <section
      id="portfolio"
      className="relative px-6 sm:px-8 py-18 sm:py-24 overflow-hidden"
    >
      {/* About Me */}
      <div className="max-w-5xl mx-auto">
        {/* Mobile: photo on top, stacked layout */}
        {/* Desktop: side-by-side inside glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Mobile layout — photo outside the card, full and uncropped */}
          <div className="md:hidden flex flex-col items-center gap-8">
            <Reveal>
              <div className="relative mx-auto w-[260px] sm:w-[300px]">
                <Image
                  src="/about.jpg"
                  alt="Sivavarunan"
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
                />
              </div>
            </Reveal>

            <Reveal>
              <div
                className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40
                           shadow-[0_20px_60px_rgba(0,0,0,0.12)] px-7 py-8 text-center"
              >
                <h3 className="text-3xl font-bold mb-4 text-black">About Me</h3>
                <p className="text-gray-900 text-base leading-relaxed">
                  I am a passionate video editor with 1 year of professional experience,
                  dedicated to crafting cinematic and engaging videos.
                  I am also a Software Engineering undergraduate, constantly exploring
                  ways to create professional-grade products and combine creativity with technology.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Desktop layout — photo bleeds inside glass card */}
          <div
            className="hidden md:block relative rounded-3xl overflow-hidden
                       bg-white/70 backdrop-blur-xl border border-white/40
                       shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 to-transparent z-10" />

            <div className="relative z-10 flex items-stretch min-h-[460px]">
              {/* Photo — flush left, fills full height of card */}
              <div className="relative w-[400px] flex-shrink-0">
                <Image
                  src="/about.jpg"
                  alt="Sivavarunan"
                  fill
                  className="object-cover object-top"
                  sizes="400px"
                />
                {/* Soft fade into text area */}
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/70 to-transparent" />
              </div>

              {/* Text */}
              <Reveal>
                <div className="flex-1 flex flex-col justify-center px-12 py-14">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
                    About Me
                  </h3>
                  <p className="text-gray-900 text-lg leading-relaxed">
                    I am a passionate video editor with 1 year of professional experience,
                    dedicated to crafting cinematic and engaging videos.
                  </p>
                  <p className="text-gray-900 text-lg leading-relaxed mt-4">
                    I am also a Software Engineering undergraduate, constantly exploring
                    ways to create professional-grade products and combine creativity with technology.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Applications */}
      <div className="mt-20 sm:mt-24">
        <Reveal>
          <h4 className="text-3xl sm:text-4xl font-semibold mb-10 text-center text-black">
            Tools I Use
          </h4>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {applications.map((app, index) => (
            <Reveal key={app.name}>
              <motion.div
                className="flex flex-col items-center gap-3 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
                             rounded-2xl bg-white/70 backdrop-blur-sm shadow-md
                             border border-white/40
                             flex items-center justify-center p-4
                             group-hover:shadow-lg group-hover:scale-110
                             transition-all duration-300"
                >
                  <Image
                    src={app.image}
                    alt={app.name}
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-900">
                  {app.name}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
