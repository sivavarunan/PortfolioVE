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
      className="relative px-8 pt-32 pb-10 min-h-[110vh] overflow-hidden"
    >
      {/* Polaroid photo at the top */}
      <motion.div
        className="absolute left-1/2 top-0 -translate-x-1/2 -z-10"
        initial={{ opacity: 0, rotate: -12, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/about.jpg"
          alt="Polaroid"
          width={480}
          height={600}
          className="rotate-[-18deg] shadow-[0_40px_100px_rgba(0,0,0,0.6)] mt-35"
        />
      </motion.div>



      {/* About Me Text */}
      <Reveal>
        <div className="relative z-10 max-w-3xl mx-auto text-center -mt-16">
          <h3 className="text-5xl font-bold mb-4 text-black">About Me</h3>
                {/* Spacer to make photo visible */}
      <div className="h-88"></div>

          <p className="text-gray-900 bg-white/70 backdrop-blur-md rounded-2xl px-6 py-5 shadow-lg">
            I am a passionate video editor with 1 year of professional experience,
            dedicated to crafting cinematic and engaging videos.
            I am also a Software Engineering undergraduate, constantly exploring
            ways to create professional-grade products and combine creativity with technology.
          </p>
        </div>
      </Reveal>

      {/* Applications */}
      <Reveal>
        <h4 className="text-4xl font-semibold mb-6 text-center text-black md:mt-76 mt-10">
          Applications I Use
        </h4>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-8 relative z-10">
        {applications.map((app, index) => (
          <Reveal key={app.name}>
            <motion.div
              className="
                relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
                rounded-xl shadow-lg cursor-pointer
                hover:scale-105 transition-transform duration-300
                flex items-center justify-center backdrop-blur
              "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Image
                src={app.image}
                alt={app.name}
                fill
                className="object-contain"
              />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
