import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-100 px-6 py-8 md:px-12 md:py-10 flex justify-between items-center mix-blend-difference">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-serif font-black tracking-tighter text-white"
        >
          ANOOP JOHN<span className="text-amber-500">.</span>
        </motion.div>

        <div className="flex gap-12 items-center">
          <div className="hidden md:flex gap-10 text-[9px] font-black tracking-[0.4em] uppercase opacity-60 text-white">
            <a href="#works" className="hover:opacity-100 transition-opacity">
              Portfolio
            </a>
            <a href="#about" className="hover:opacity-100 transition-opacity">
              Legacy
            </a>
            <a
              href="#experience"
              className="hover:opacity-100 transition-opacity"
            >
              Timeline
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all text-white border border-white/10"
          >
            {isMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-90 flex flex-col items-center justify-center p-12"
          >
            <div className="space-y-8 text-center">
              {["Portfolio", "Legacy", "Timeline", "Contact"].map(
                (item, idx) => (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-5xl md:text-7xl font-serif font-bold text-white hover:italic hover:text-amber-500 transition-all"
                  >
                    {item}
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
