"use client";

export default function Footer() {
  const scrollToSection = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative mx-6 sm:mx-8 mb-8 mt-8">
      <div
        className="max-w-6xl mx-auto rounded-3xl
                   bg-white/70 backdrop-blur-xl border border-white/40
                   shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                   px-8 sm:px-12 py-12"
      >
        {/* Top row: Brand + Nav + Socials */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={() => scrollToSection("top")}
              className="text-xl font-bold text-black tracking-wide hover:opacity-80 transition cursor-pointer"
            >
              SIVAEDITS_25
            </button>
            <p className="text-sm text-gray-800 mt-1">
              Video Editor & Motion Graphics Designer
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex gap-8 text-sm font-semibold">
            {[
              { label: "Work", id: "recent-work" },
              { label: "About", id: "portfolio" },
              { label: "Contact", id: "contact" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-800 hover:text-black transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@sivaedits_25"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/80 border border-gray-200
                         flex items-center justify-center
                         text-gray-800 hover:text-red-500 hover:border-red-200 hover:bg-red-50
                         transition-all duration-300"
              aria-label="YouTube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a2.96 2.96 0 0 0-2.085-2.086C19.744 3.5 12 3.5 12 3.5s-7.744 0-9.413.6A2.96 2.96 0 0 0 .502 6.186 30.12 30.12 0 0 0 0 12a30.12 30.12 0 0 0 .502 5.814 2.96 2.96 0 0 0 2.085 2.086C4.256 20.5 12 20.5 12 20.5s7.744 0 9.413-.6a2.96 2.96 0 0 0 2.085-2.086A30.12 30.12 0 0 0 24 12a30.12 30.12 0 0 0-.502-5.814ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/sivaedits_25"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/80 border border-gray-200
                         flex items-center justify-center
                         text-gray-800 hover:text-pink-500 hover:border-pink-200 hover:bg-pink-50
                         transition-all duration-300"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
              </svg>
            </a>

            <a
              href="https://wa.me/94768359459"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/80 border border-gray-200
                         flex items-center justify-center
                         text-gray-800 hover:text-green-500 hover:border-green-200 hover:bg-green-50
                         transition-all duration-300"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.949 11.949 0 0012 0C5.373 0 0 5.373 0 12a11.95 11.95 0 001.64 6.04L0 24l5.96-1.64A11.947 11.947 0 0012 24c6.627 0 12-5.373 12-12 0-3.18-1.236-6.17-3.48-8.52zM12 22a10 10 0 01-5.34-1.52l-.38-.23-3.53.97.97-3.53-.23-.38A10 10 0 1122 12c0 5.523-4.477 10-10 10zm5.16-7.4c-.28-.14-1.64-.8-1.9-.89-.25-.09-.44-.14-.63.14-.19.28-.74.89-.91 1.07-.16.19-.31.21-.57.07-.25-.14-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.28.38-.42.13-.14.17-.25.28-.42.11-.16.06-.31-.03-.44-.09-.14-.63-1.52-.86-2.08-.23-.56-.46-.49-.63-.5-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.28s-1.01.99-1.01 2.42 1.04 2.8 1.18 2.99c.14.19 2.04 3.1 4.95 4.34.69.3 1.22.48 1.64.61.69.21 1.32.18 1.82.11.56-.08 1.64-.67 1.87-1.32.23-.64.23-1.19.16-1.32-.07-.13-.25-.21-.54-.35z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300/50 mb-6" />

        <p className="text-center text-sm text-gray-800 font-medium">
          &copy; {new Date().getFullYear()} Sivavarunan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
