import React from "react";
import { motion } from "framer-motion";
import { Zap, Monitor, Target } from "lucide-react";
import PremiumHeading from "./PremiumHeading";

const icons = { Zap, Monitor, Target };

const Vision = ({ pillars }) => {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 bg-black relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto">
        <PremiumHeading
          title="Creative Philosophy"
          subtitle="The Vision"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, i) => {
            const IconComponent = icons[pillar.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 group hover:border-amber-500/30 transition-all cursor-default"
              >
                <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-6 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-lg">
                  {pillar.desc}
                </p>
                <div className="mt-8 overflow-hidden">
                  <div className="h-px w-full bg-white/10 relative">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-amber-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ delay: i * 0.3, duration: 1.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 md:mt-32 text-center"
        >
          <p className="text-3xl sm:text-5xl md:text-8xl font-serif font-black text-white/5 italic select-none">
            IDEATE • INNOVATE • IMPACT
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
