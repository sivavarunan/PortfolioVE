import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Video Editing",
      description: "Crafting cinematic edits, seamless transitions, and storytelling that captivates viewers.",
      image: "/videoediting.jpg",
    },
    {
      title: "Motion Graphics",
      description: "Designing animated visuals, typography, and creative motion elements for your projects.",
      image: "/motion.jpg",
    },
    {
      title: "Visual Effects",
      description: "Adding VFX magic to your videos, from compositing to digital enhancements.",
      image: "/vfx.jpg",
    },
  ];

  return (
    <section className="px-8 py-20 text-white">
      <Reveal>
        <h3 className="text-3xl font-bold mb-4 text-center">What I Do</h3>
        <p className="text-gray-400 max-w-2xl mb-10 mx-auto text-center">
          I combine creativity and technical expertise to bring your vision to life.
          From cinematic edits to motion graphics and visual effects, I craft immersive experiences that engage and inspire.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Reveal key={service.title}>
            <motion.div
              className="relative flex flex-col items-center justify-center h-64 rounded-xl shadow-lg cursor-pointer overflow-hidden text-center bg-gray-800 hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.08 }}
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="  p-4 rounded-md">
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-200 text-sm">{service.description}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
