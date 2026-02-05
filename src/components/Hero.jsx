import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const yTranslate = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      <motion.div
        style={{ scale, opacity, y: yTranslate }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover brightness-[0.2]"
          alt="Hero Cinematic"
        />
        <div className="absolute inset-0 bg-linear-to-l from-black via-black/40 to-transparent" />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-amber-500/10 blur-[150px] rounded-full"
        />
      </motion.div>

      <div className="container mx-auto px-6 md:px-20 relative z-10 w-full flex flex-col items-end text-right">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-end gap-4 mb-8">
              <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.6em]">
                Directing the Future
              </span>
              <div className="w-12 h-px bg-amber-500" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif font-bold leading-none mb-10 tracking-tighter text-white uppercase">
              Anoop <span className="italic font-light text-outline">John</span>
              <span className="block text-white/40 text-lg sm:text-xl md:text-3xl mt-6 tracking-normal normal-case font-light italic font-serif">
                Media Architect & Non-Fiction Visionary
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col md:flex-row-reverse gap-12 items-end md:items-center"
          >
            <p className="max-w-xs text-sm text-gray-400 font-light leading-relaxed">
              Architecting cult-hits and high-energy formats with 17+ years of
              unfiltered creative disruption in television.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-12 bottom-0 h-1/3 w-px bg-linear-to-t from-amber-500 to-transparent opacity-30 hidden lg:block" />
    </section>
  );
};

export default Hero;
