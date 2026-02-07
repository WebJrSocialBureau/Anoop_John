import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PremiumHeading from "./PremiumHeading";

const Portfolio = ({ projects }) => {
  return (
    <section
      id="works"
      className="py-16 md:py-20 lg:py-24 px-6 md:px-12 max-w-[1700px] mx-auto"
    >
      <PremiumHeading title="Selected Works" subtitle="The Portfolio" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {projects.map((proj, i) => {
          // Explicitly make index 2 (Super Show) and index 0 large
          const isLarge = i === 0 || i === 2;
          const gridSpan = isLarge ? "lg:col-span-8" : "lg:col-span-4";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-[3rem] bg-zinc-900 flex flex-col justify-end p-8 md:p-16 border border-white/5 ${gridSpan}`}
            >
              <img
                src={proj.img}
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-2000 ease-out"
                alt={proj.title}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent transition-opacity group-hover:opacity-80" />

              <div className="relative z-10 w-full">
                <div className="flex justify-between items-end mb-8">
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                    >
                      <span className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase block">
                        {proj.org} • {i + 1}
                      </span>
                    </motion.div>
                  </div>
                </div>

                <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-8 text-white tracking-tighter leading-none">
                  {proj.title}
                </h3>

                <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-1000 ease-out">
                  <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl pb-8 border-b border-white/10">
                    {proj.desc}
                  </p>
                  <div className="py-6 flex items-center gap-6">
                    <span className="text-[10px] font-black tracking-widest uppercase text-amber-500/50">
                      Role
                    </span>
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white">
                      {proj.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
