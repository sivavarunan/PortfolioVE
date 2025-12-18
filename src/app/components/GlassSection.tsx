"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

interface GlassSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassSection({ children, className = "" }: GlassSectionProps) {
  return (
    <Reveal>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          relative
          max-w-6xl mx-auto
          my-20
          px-6 sm:px-10 py-16
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          shadow-[0_30px_80px_rgba(0,0,0,0.35)]
          ${className}
        `}
      >
        {children}

        {/* subtle glass highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent" />
      </motion.section>
    </Reveal>
  );
}
