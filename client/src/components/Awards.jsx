import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Star, Medal } from "lucide-react";
import PremiumHeading from "./PremiumHeading";

const AwardIcon = ({ index }) => {
  const icons = [Award, Trophy, Star, Medal];
  const Icon = icons[index % icons.length];
  return <Icon className="w-12 h-12 text-amber-500 mb-6" />;
};

const Awards = ({ awards }) => {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 bg-zinc-950/50">
      <div className="container mx-auto">
        <PremiumHeading title="Recognition" subtitle="The Honors" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 p-8 md:p-10 rounded-3xl hover:border-amber-500/20 transition-all flex flex-col items-center text-center"
            >
              <AwardIcon index={i} />
              <div className="text-amber-500 text-[9px] font-black tracking-widest uppercase mb-4">
                {award.year}
              </div>
              <h4 className="text-xl font-serif font-bold text-white mb-2 leading-tight">
                {award.name}
              </h4>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">
                {award.category}
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 w-full">
                <span className="text-[10px] text-white/40 italic">
                  For "{award.show}"
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
