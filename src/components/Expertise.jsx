import React from "react";
import { motion } from "framer-motion";
import PremiumHeading from "./PremiumHeading";

const Expertise = ({ areas }) => {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 bg-black">
      <div className="container mx-auto">
        <PremiumHeading title="Force Multiplier" subtitle="Expertise Matrix" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-8 lg:p-12 glass rounded-[3rem] border-white/5 group hover:bg-amber-500 transition-all duration-700 hover:scale-[1.02]"
            >
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-white group-hover:text-black transition-colors mb-8">
                {area.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {area.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-black/60 group-hover:border-black/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
