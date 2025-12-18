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
      className="
        relative
        max-w-6xl mx-auto
        my-20
        px-6 sm:px-10 py-16
        rounded-3xl
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        shadow-[0_30px_80px_rgba(0,0,0,0.35)]
      "
    >
      {/* subtle glass highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent" />

      <section className="px-8 py-20 text-white relative z-10">
        <Reveal>
          <h2 className="text-4xl font-bold mb-4 text-center text-black">What I Do</h2>
          <p className="text-gray-800 max-w-4xl mb-10 mx-auto text-center">
            I combine creativity and technical expertise to bring your vision to life.
            From cinematic edits to motion graphics and visual effects, I craft immersive experiences that engage and inspire.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Reveal key={service.title}>
              <motion.div
                className="relative flex flex-col items-center justify-center h-64 rounded-xl shadow-lg cursor-pointer overflow-hidden text-center hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.08 }}
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backdropFilter: "blur(8px)", // subtle glass effect on card itself
                  backgroundColor: "rgba(255,255,255,0.1)"
                }}
              >
                <div className="p-4 rounded-md bg-black/30">
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
    </motion.section>
  );
}
