import React from "react";
import { motion } from "framer-motion";
import { NETWORKS } from "../constants/data";

const Marquee = () => {
  // Double the networks for seamless loop
  const displayNetworks = [...NETWORKS, ...NETWORKS];

  return (
    <div className="py-12 md:py-20 bg-black overflow-hidden border-y border-white/5 select-none">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 md:gap-20 items-center w-max"
      >
        {displayNetworks.map((net, i) => (
          <a
            key={i}
            href={net.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-5xl md:text-8xl font-serif font-black text-white/30 hover:text-amber-500 transition-colors uppercase italic tracking-tighter"
          >
            {net.name}
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
