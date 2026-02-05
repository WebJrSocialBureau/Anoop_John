import React from "react";
import { motion } from "framer-motion";
import { Trophy, Target } from "lucide-react";
import PremiumHeading from "./PremiumHeading";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-zinc-950/30">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <div className="flex-1">
          <PremiumHeading title="Beyond the Lens" subtitle="The Legacy" />
          <p className="text-2xl sm:text-3xl md:text-5xl font-light text-gray-200 leading-[1.2] mb-12">
            Architecting a new{" "}
            <span className="italic font-serif">Visual Language</span> for
            Indian TV.
          </p>
          <div className="space-y-8 text-gray-400 text-lg leading-relaxed max-w-2xl font-light">
            <p>
              Anoop John is not just a director; he is a media architect. With
              nearly two decades of disruption, he transformed Malayalam
              television from static sets to dynamic, augmented world-class
              spectacles.
            </p>
            <p>
              His ability to blend{" "}
              <span className="text-white font-bold">content strategy</span>{" "}
              with
              <span className="text-white font-bold">
                {" "}
                technical innovation
              </span>{" "}
              has earned him the prestigious{" "}
              <span className="text-amber-500 italic">
                Kerala State Television Award
              </span>
              .
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-2xl border-white/5 group hover:border-amber-500/40 transition-all">
              <Trophy className="w-8 h-8 text-amber-500 mb-6" />
              <h4 className="text-white font-bold mb-2">State Laureate</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">
                Best TV Show Recognition
              </p>
            </div>
            <div className="glass p-8 rounded-2xl border-white/5 group hover:border-amber-500/40 transition-all">
              <Target className="w-8 h-8 text-amber-500 mb-6" />
              <h4 className="text-white font-bold mb-2">TRP Disruptor</h4>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">
                500M+ Viewership Reach
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative group rounded-3xl overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5 }}
            className="relative z-10"
          >
            <img
              src="/Anoop John.png"
              alt="Anoop John"
              className="w-full object-cover transition-all duration-1000 grayscale hover:brightness-110"
            />
          </motion.div>
          <div className="absolute top-8 left-8 z-20">
            <div className="glass px-6 py-2 rounded-full text-[9px] font-black tracking-widest uppercase text-white border border-white/10">
              CCO — ZEE KERALAM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
