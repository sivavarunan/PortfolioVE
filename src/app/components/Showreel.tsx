"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

interface Reel {
  id: string;
  title: string;
  description: string;
  aspect?: "landscape" | "portrait";
}

interface ShowreelProps {
  reels: Reel[];
  youtubeChannel?: string;
  instagram?: string;
}

export default function Showreel({
  reels,
  youtubeChannel,
  instagram,
}: ShowreelProps) {
  return (
    <section className="relative py-18 px-6">
      {/* Section header */}
      <Reveal>
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-800 font-medium mb-3">
            Featured Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Showreel
          </h2>
          <p className="text-gray-900 text-sm sm:text-base">
            A glimpse into my cinematic style, motion design, and creative storytelling.
          </p>
        </div>
      </Reveal>

      {/* Reels grid */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {reels.map((reel, index) => {
          const isPortrait = reel.aspect === "portrait";

          return (
            <Reveal key={reel.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative rounded-3xl overflow-hidden
                           bg-white/70 backdrop-blur-xl
                           border border-white/40
                           shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                           group"
              >
                {/* Glass highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl
                               bg-gradient-to-br from-white/30 to-transparent z-10" />

                <div
                  className={`flex ${isPortrait ? "flex-col sm:flex-row" : "flex-col"} items-center`}
                >
                  {/* Text side */}
                  <div
                    className={`relative z-10 p-8 sm:p-10
                      ${isPortrait ? "sm:w-1/2 w-full" : "w-full pb-0 sm:pb-0"}`}
                  >
                    <span className="inline-block text-xs font-mono uppercase tracking-widest
                                     text-gray-600 mb-4">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                      {reel.title}
                    </h3>
                    <p className="text-gray-900 text-sm sm:text-base leading-relaxed max-w-md">
                      {reel.description}
                    </p>
                  </div>

                  {/* Video embed */}
                  <div
                    className={`relative z-10 w-full
                      ${isPortrait
                        ? "sm:w-1/2 p-6 sm:p-8"
                        : "px-6 sm:px-10 pb-8 sm:pb-10"
                      }`}
                  >
                    <div
                      className={`relative w-full rounded-2xl overflow-hidden
                                  shadow-xl ring-1 ring-black/5
                                  group-hover:shadow-2xl transition-all duration-500
                                  ${isPortrait ? "max-w-[300px] mx-auto" : ""}`}
                      style={{
                        paddingTop: isPortrait ? "177.78%" : "56.25%",
                      }}
                    >
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${reel.id}?rel=0&modestbranding=1`}
                        title={reel.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      {/* Social links */}
      {(youtubeChannel || instagram) && (
        <Reveal>
          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <p className="w-full text-center text-sm text-gray-900 font-medium mb-2">
              Follow for more
            </p>
            {youtubeChannel && (
              <a
                href={youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full
                           bg-red-600 text-white text-sm font-semibold
                           hover:bg-red-700 hover:scale-105 transition-all duration-300
                           shadow-md shadow-red-600/25"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a2.96 2.96 0 0 0-2.085-2.086C19.744 3.5 12 3.5 12 3.5s-7.744 0-9.413.6A2.96 2.96 0 0 0 .502 6.186 30.12 30.12 0 0 0 0 12a30.12 30.12 0 0 0 .502 5.814 2.96 2.96 0 0 0 2.085 2.086C4.256 20.5 12 20.5 12 20.5s7.744 0 9.413-.6a2.96 2.96 0 0 0 2.085-2.086A30.12 30.12 0 0 0 24 12a30.12 30.12 0 0 0-.502-5.814ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
                YouTube
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full
                           bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400
                           text-white text-sm font-semibold
                           hover:scale-105 transition-all duration-300
                           shadow-md shadow-pink-500/25"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                </svg>
                Instagram
              </a>
            )}
          </div>
        </Reveal>
      )}
    </section>
  );
}
