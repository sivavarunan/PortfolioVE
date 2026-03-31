"use client";

import Reveal from "./Reveal";
import { motion } from "framer-motion";

interface Video {
  id: string;
  title: string;
}

interface RecentWorkProps {
  videos: Video[];
}

export default function RecentWork({ videos }: RecentWorkProps) {
  return (
    <section id="recent-work" className="px-6 py-16">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-gray-900">
          Recent Work
        </h2>
        <p className="text-gray-900 text-center max-w-xl mx-auto mb-12 text-sm sm:text-base">
          A selection of my latest video editing and motion graphics projects.
        </p>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {videos.map((video, index) => (
          <Reveal key={video.id}>
            <motion.div
              className="flex flex-col items-center w-[200px] sm:w-[240px] md:w-[350px] group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className="relative w-full rounded-xl shadow-lg overflow-hidden
                           group-hover:shadow-2xl transition-shadow duration-500"
                style={{ paddingTop: '177.78%' }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-gray-900 text-center">
                {video.title}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
