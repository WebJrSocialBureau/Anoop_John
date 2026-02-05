import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    const updateInteractions = () => {
      document.querySelectorAll("a, button, .hover-trigger").forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });
    };

    updateInteractions();

    // Mutation observer to handle dynamically added elements
    const observer = new MutationObserver(updateInteractions);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-9999 mix-blend-difference flex items-center justify-center border border-white/50 bg-white"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isClicking ? 0.8 : isHovering ? 2.5 : 1,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
    >
      {isHovering && <ArrowUpRight className="w-2 h-2 text-black" />}
    </motion.div>
  );
};

export default CustomCursor;
