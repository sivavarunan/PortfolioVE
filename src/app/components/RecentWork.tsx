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
        <h3 className="text-3xl font-bold mb-12 text-center text-white">
          Recent Work
        </h3>
      </Reveal>

      <div className="flex flex-wrap justify-center gap-8">
        {videos.map((video, index) => (
          <Reveal key={video.id}>
            <motion.div
              className="flex flex-col items-center w-[200px] sm:w-[240px] md:w-[380px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className="relative w-full rounded-md shadow-lg overflow-hidden"
                style={{ paddingTop: '177.78%' }} // 9:16 portrait ratio
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
