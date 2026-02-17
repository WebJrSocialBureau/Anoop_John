import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Eye, Users, Film } from "lucide-react";
import PremiumHeading from "./PremiumHeading";

const Showreel = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0.4, 0.6], [5, 0]);

  return (
    <section className="py-24 px-6 bg-black overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <PremiumHeading title="Cinematic Reach" subtitle="The Showreel" />
            <p className="text-gray-400 text-lg max-w-xl font-light">
              A glimpse into the high-energy productions that have dominated TRP
              charts for 17 years.
            </p>
          </div>

          <div className="flex gap-12 pb-4">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-white">
                500M+
              </div>
              <div className="text-[8px] text-amber-500 uppercase font-black tracking-widest">
                Digital Views
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-white">
                100+
              </div>
              <div className="text-[8px] text-amber-500 uppercase font-black tracking-widest">
                Masterclasses
              </div>
            </div>
          </div>
        </div>

        <motion.div
          style={{ scale, rotate }}
          className="relative aspect-video rounded-[3rem] overflow-hidden group border border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-1000"
            alt="Director in Action"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-amber-500 flex items-center justify-center text-black group/btn overflow-hidden relative"
            >
              <Play className="w-8 h-8 fill-current relative z-10" />
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.button>
          </div>
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
            <div className="glass p-6 rounded-2xl">
              <span className="text-[10px] font-black tracking-widest text-amber-500 uppercase block mb-1">
                Now Featuring
              </span>
              <h4 className="text-xl font-bold text-white uppercase italic tracking-tighter">
                Star Magic World Tour
              </h4>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white">
                <Users className="w-4 h-4" />
              </div>
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white">
                <Film className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showreel;
