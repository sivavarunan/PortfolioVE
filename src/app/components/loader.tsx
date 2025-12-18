"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1300); // Slightly longer for cinematic feel
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
          >
            <motion.h1
              className="text-5xl sm:text-7xl font-bold text-black"
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: 5,
                opacity: 0.3,
              }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            >
              SIVAEDITS_25
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Site content with smooth fade-in */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            key="site"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
