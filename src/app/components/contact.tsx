"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function Contact() {
  const contactItems = [
    {
      label: "Email",
      value: "tharagan2001@gmail.com",
      href: "mailto:tharagan2001@gmail.com",
      color: "text-gray-900",
      hoverColor: "hover:bg-gray-50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      value: "+94 76 83 59 459",
      href: "https://wa.me/94768359459",
      color: "text-green-700",
      hoverColor: "hover:bg-green-50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.949 11.949 0 0012 0C5.373 0 0 5.373 0 12a11.95 11.95 0 001.64 6.04L0 24l5.96-1.64A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12 0-3.18-1.236-6.17-3.48-8.52zM12 22a10 10 0 01-5.34-1.52l-.38-.23-3.53.97.97-3.53-.23-.38A10 10 0 1122 12c0 5.523-4.477 10-10 10zm5.16-7.4c-.28-.14-1.64-.8-1.9-.89-.25-.09-.44-.14-.63.14-.19.28-.74.89-.91 1.07-.16.19-.31.21-.57.07-.25-.14-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.28.38-.42.13-.14.17-.25.28-.42.11-.16.06-.31-.03-.44-.09-.14-.63-1.52-.86-2.08-.23-.56-.46-.49-.63-.5-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.28s-1.01.99-1.01 2.42 1.04 2.8 1.18 2.99c.14.19 2.04 3.1 4.95 4.34.69.3 1.22.48 1.64.61.69.21 1.32.18 1.82.11.56-.08 1.64-.67 1.87-1.32.23-.64.23-1.19.16-1.32-.07-.13-.25-.21-.54-.35z" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/sivaedits_25",
      className: "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white shadow-md shadow-pink-500/25 hover:scale-105",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@sivaedits_25",
      className: "bg-red-600 text-white shadow-md shadow-red-600/25 hover:bg-red-700 hover:scale-105",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a2.96 2.96 0 0 0-2.085-2.086C19.744 3.5 12 3.5 12 3.5s-7.744 0-9.413.6A2.96 2.96 0 0 0 .502 6.186 30.12 30.12 0 0 0 0 12a30.12 30.12 0 0 0 .502 5.814 2.96 2.96 0 0 0 2.085 2.086C4.256 20.5 12 20.5 12 20.5s7.744 0 9.413-.6a2.96 2.96 0 0 0 2.085-2.086A30.12 30.12 0 0 0 24 12a30.12 30.12 0 0 0-.502-5.814ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative max-w-4xl mx-auto my-14 px-6 sm:px-10 py-14 rounded-3xl
                 bg-white/70 backdrop-blur-xl border border-white/40
                 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
    >
      {/* Glass highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent" />

      <div className="relative z-10">
        <Reveal>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-black">
            Let&apos;s Work Together
          </h3>
          <p className="text-gray-800 text-center max-w-xl mx-auto mb-10 text-sm sm:text-base">
            Have a project in mind or want to collaborate? Feel free to reach out —
            I&apos;m always open to creating professional, high-quality visual experiences.
          </p>
        </Reveal>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-4 p-5 bg-white/60 backdrop-blur-sm rounded-2xl
                         border border-white/50 ${item.hoverColor}
                         transition-all duration-300 hover:shadow-md group`}
            >
              <div className={`${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {item.label}
                </p>
                <p className={`text-sm sm:text-base font-medium ${item.color}`}>
                  {item.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-full
                         ${link.className} text-sm font-semibold transition-all duration-300`}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
