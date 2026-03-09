import React from "react";
import { motion } from "framer-motion";
import PremiumHeading from "./PremiumHeading";
import { NETWORK_URLS } from "../constants/data";

const Experience = ({ timeline }) => {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
    >
      <PremiumHeading title="Experience" subtitle="The Journey" centered />

      <div className="relative">
        {/* Vertical Progress Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block" />

        <div className="space-y-20 md:space-y-40 relative z-10">
          {timeline.map((exp, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year Badge */}
                <div
                  className={`w-full md:w-[45%] ${isEven ? "md:text-right" : "md:text-left"}`}
                >
                  <motion.span
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="text-amber-500 text-2xl sm:text-3xl md:text-5xl font-serif italic mb-4 block"
                  >
                    {exp.p}
                  </motion.span>
                  {NETWORK_URLS[exp.o] ? (
                    <a
                      href={NETWORK_URLS[exp.o]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-white/40 uppercase tracking-[0.5em] font-black hover:text-amber-500 transition-colors"
                    >
                      {exp.o}
                    </a>
                  ) : (
                    <span className="text-[10px] text-white/40 uppercase tracking-[0.5em] font-black">
                      {exp.o}
                    </span>
                  )}
                </div>

                {/* Central Node */}
                <div className="hidden md:flex w-[10%] justify-center items-center relative h-full">
                  <div className="w-4 h-4 rounded-full bg-black border-2 border-amber-500 z-20" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1.5, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute w-8 h-8 rounded-full border border-amber-500/50 z-10"
                  />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-[45%] ${isEven ? "md:pl-20" : "md:pr-20"}`}
                >
                  <div className="glass p-6 md:p-10 rounded-[40px] border-white/5 hover:border-amber-500/20 transition-all duration-700">
                    <h3 className="text-xl md:text-3xl font-serif font-bold mb-6 text-white leading-tight">
                      {exp.r}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                      {exp.d}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
