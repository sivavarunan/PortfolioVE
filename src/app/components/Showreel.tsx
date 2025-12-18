import Reveal from "./Reveal";
import { motion } from "framer-motion";

interface ShowreelProps {
  youtubeId: string;           // Portrait Video Editor reel
  youtubeIdMotion?: string;    // Landscape Motion Graphics reel
  youtubeChannel?: string;
  instagram?: string;
}

export default function Showreel({
  youtubeId,
  youtubeIdMotion,
  youtubeChannel,
  instagram
}: ShowreelProps) {
  return (
    <section className="px-4 sm:px-6 py-16">
    <div className="flex flex-col md:flex-row items-start md:gap-16 max-w-6xl mx-auto">
  
      {/* Left Side: Text + Links + Motion Graphics */}
      <motion.div
        className="md:w-1/2 w-full flex flex-col gap-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-2">Showreel</h3>
        <p className="text-gray-400 text-sm sm:text-base">
          Watch my latest video editing and motion graphics work.
          This reel showcases my cinematic style, motion design, and creative storytelling.
        </p>
        {/* Landscape Motion Graphics Reel */}
        {youtubeIdMotion && (
          <div
            className="relative w-full rounded-md shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105 mt-4"
            style={{ paddingTop: '56.25%' }} // 16:9 landscape ratio
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md shadow-lg"
              src={`https://www.youtube.com/embed/${youtubeIdMotion}?rel=0&modestbranding=1`}
              title="Motion Graphics Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <p className="text-gray-400 text-sm sm:text-base">See more of my work:</p>
  
        {/* Social Links */}
        <div className="flex gap-3 mt-2 flex-wrap items-center">
          {youtubeChannel && (
            <a
              href={youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-red-500 font-semibold text-sm sm:text-base hover:underline"
            >
              {/* YouTube SVG */}
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
              className="flex items-center gap-1 text-pink-500 font-semibold text-sm sm:text-base hover:underline"
            >
              {/* Instagram SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
              </svg>
              Instagram
            </a>
          )}
        </div>
  
        
      </motion.div>
  
      {/* Right Side: Portrait Video Editor */}
      <motion.div
        className="md:w-1/3 flex justify-center w-2/3 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div
          className="relative w-full rounded-md shadow-lg overflow-hidden transition-transform duration-500 hover:scale-102"
          style={{ paddingTop: '177.78%' }} // 9:16 portrait ratio
        >
          <iframe
            className="absolute top-0  w-full h-full rounded-md shadow-lg"
            src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&autoplay=0&mute=1&loop=1&playlist=${youtubeId}`}
            title="Video Editor Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
  
    </div>
  </section>
  
  );
}
