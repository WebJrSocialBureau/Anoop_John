import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const yTranslate = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <section className="relative h-screen flex flex-col justify-end md:justify-center items-center px-6 pb-24 md:pb-0 overflow-hidden">
      <motion.div
        style={{ scale, opacity, y: yTranslate }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/Anoop_john.png"
          className="w-full h-full object-cover object-[15%_center] md:object-[15%_center] brightness-[0.8] md:brightness-[0.9]"
          alt="Anoop John - Award-Winning TV Director"
          fetchpriority="high"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-black/40 md:bg-transparent" />
        <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-l from-black via-black/20 to-transparent" />
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
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-end gap-3 md:gap-4 mb-6 md:mb-8">
              <span className="text-amber-500 text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em]">
                Directing the Future
              </span>
              <div className="w-8 md:w-12 h-px bg-amber-500" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-8 md:mb-10 tracking-tighter text-white uppercase drop-shadow-2xl">
              Anoop <span className="italic font-light text-outline">John</span>
              <span className="block text-amber-500 text-base sm:text-lg md:text-3xl mt-4 md:mt-6 tracking-normal normal-case font-light italic font-serif drop-shadow-xl">
                Media Architect & Non-Fiction Visionary
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-end gap-12"
          >
            <p className="max-w-xs text-xs md:text-sm text-gray-400 font-light leading-relaxed">
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
