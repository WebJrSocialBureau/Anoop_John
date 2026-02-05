import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { v: "17+", l: "Years of Mastery" },
    { v: "KSTA", l: "State Award Winner" },
    { v: "25+", l: "Production Formats" },
    { v: "500M+", l: "Impact REACH" },
  ];

  return (
    <section className="py-12 md:py-20 px-6 bg-zinc-950">
      <div className="flex flex-wrap justify-center gap-12 md:gap-32 border-y border-white/5 py-20 md:py-40">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <div className="text-5xl sm:text-7xl md:text-9xl font-serif font-bold text-white mb-2 tracking-tighter">
              {stat.v}
            </div>
            <div className="text-[10px] uppercase font-black tracking-[0.5em] text-amber-500">
              {stat.l}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
