"use client";

import Image from "next/image";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-3 py-4
                    bg-white/70 backdrop-blur-md">

      <button
        onClick={scrollToTop}
        className="flex items-center gap-3 cursor-pointer"
      >
        <Image
          src="/logo.jpg"
          alt="Siva Edits Logo"
          width={32}
          height={32}
          className="object-fill cursor-pointer rounded-4xl"
        />
        <h1 className="text-xl font-semibold text-black hover:opacity-80 transition">
          SIVAEDITS_25
        </h1>
      </button>

      {/* Nav Links */}
      <ul className="flex gap-6 text-sm text-black">
        <li
          className="cursor-pointer hover:opacity-70 transition"
          onClick={() => scrollToSection("recent-work")}
        >
          Work
        </li>
        <li
          className="cursor-pointer hover:opacity-70 transition"
          onClick={() => scrollToSection("portfolio")}
        >
          About
        </li>
        <li
          className="cursor-pointer hover:opacity-70 transition"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}
