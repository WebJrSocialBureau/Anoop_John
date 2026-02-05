import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const networks = [
    "FLOWERS TV",
    "ZEE KERALAM",
    "MAZHAVIL MANORAMA",
    "ASIANET",
    "SONY MEDIA",
    "FLOWERS TV",
    "ZEE KERALAM",
    "MAZHAVIL MANORAMA",
    "ASIANET",
    "SONY MEDIA",
  ];

  return (
    <div className="py-12 md:py-20 bg-black overflow-hidden border-y border-white/5 select-none">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 md:gap-20 items-center"
      >
        {networks.map((net, i) => (
          <span
            key={i}
            className="text-3xl sm:text-5xl md:text-8xl font-serif font-black text-white/5 hover:text-amber-500/20 transition-colors uppercase italic tracking-tighter"
          >
            {net}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
