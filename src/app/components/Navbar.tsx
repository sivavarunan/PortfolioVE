"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Work", id: "recent-work" },
    { label: "About", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled
          ? "bg-black/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <Image
            src="/logo.jpg"
            alt="Siva Edits Logo"
            width={36}
            height={36}
            className="rounded-full ring-2 ring-white/20 group-hover:ring-white/50 transition"
          />
          <h1
            className={`text-lg font-semibold tracking-wide transition-colors duration-300
              ${scrolled ? "text-white" : "text-black"}`}
          >
            SIVAEDITS_25
          </h1>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-1 text-sm font-semibold">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-300
                ${scrolled
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-black/70 hover:text-black hover:bg-black/5"
                }`}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className={`block w-6 h-[2px] transition-colors ${scrolled ? "bg-white" : "bg-black"}`}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block w-6 h-[2px] transition-colors ${scrolled ? "bg-white" : "bg-black"}`}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className={`block w-6 h-[2px] transition-colors ${scrolled ? "bg-white" : "bg-black"}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-xl overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-white text-lg font-medium">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="cursor-pointer hover:text-white/70 transition"
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
