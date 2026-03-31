"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Video Editing",
      description: "Crafting cinematic edits, seamless transitions, and storytelling that captivates viewers.",
      image: "/videoediting.jpg",
    },
    {
      title: "Motion Graphics",
      description: "Designing animated visuals, typography, and creative motion elements for your projects.",
      image: "/motion.jpg",
    },
    {
      title: "Visual Effects",
      description: "Adding VFX magic to your videos, from compositing to digital enhancements.",
      image: "/vfx.jpg",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative max-w-6xl mx-auto my-14 px-6 sm:px-10 py-12 rounded-3xl
                 bg-white/70 backdrop-blur-xl border border-white/40
                 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
    >
      {/* subtle glass highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent" />

      <div className="px-2 sm:px-8 py-10 sm:py-14 relative z-10">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-black">What I Do</h2>
          <p className="text-gray-900 max-w-2xl mb-10 mx-auto text-center text-sm sm:text-base">
            I combine creativity and technical expertise to bring your vision to life.
            From cinematic edits to motion graphics and visual effects.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title}>
              <motion.div
                className="relative flex flex-col items-center justify-end h-72 sm:h-80 rounded-2xl
                           shadow-lg overflow-hidden cursor-pointer group"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent
                               group-hover:from-black/90 transition-all duration-300" />

                <div className="relative z-10 p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
