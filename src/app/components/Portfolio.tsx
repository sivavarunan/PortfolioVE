import Reveal from "./Reveal";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const applications = [
    { name: "After Effects", image: "/adobe-after-effects-svgrepo-com.svg" },
    { name: "Premiere Pro", image: "/adobe-premiere-svgrepo-com.svg" },
    { name: "Blender", image: "/blender-svgrepo-com.svg" },
    { name: "Photoshop", image: "/photoshop-color-svgrepo-com.svg" },
  ];

  return (
    <section className="px-8 py-20  text-white">
      {/* About Me */}
      <Reveal>
        <h3 className="text-3xl font-bold mb-4 text-center">About Me</h3>
        <p className="text-gray-400 max-w-3xl mx-auto mb-10 text-center">
          I am a passionate video editor with 1 year of professional experience,  
          dedicated to crafting cinematic and engaging videos. I am also a Software Engineering undergraduate,  
          constantly exploring ways to create professional-grade products and combine creativity with technology.
        </p>
      </Reveal>

      {/* Applications */}
      <Reveal>
        <h4 className="text-2xl font-semibold mb-6 text-center">Applications I Use</h4>
      </Reveal>
      <div className="flex flex-wrap justify-center gap-8">
        {applications.map((app, index) => (
          <Reveal key={app.name}>
            <motion.div
              className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300  flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Image
                src={app.image}
                alt={app.name}
                fill
                className="object-contain"
              />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
