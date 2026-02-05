import React from "react";
import { motion } from "framer-motion";

const PremiumHeading = ({ title, subtitle, centered }) => (
  <div className={`mb-12 md:mb-20 ${centered ? "text-center" : ""}`}>
    <motion.span
      initial={{ opacity: 0, tracking: "0.2em" }}
      whileInView={{ opacity: 1, tracking: "0.5em" }}
      className="text-amber-500 text-[10px] font-black uppercase mb-6 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-4xl sm:text-5xl md:text-8xl font-serif font-bold text-white tracking-tight leading-[0.9]"
    >
      {title}
    </motion.h2>
  </div>
);

export default PremiumHeading;
