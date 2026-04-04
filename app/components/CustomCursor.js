"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for lag-free performance
  const springX = useSpring(0, { stiffness: 600, damping: 30 });
  const springY = useSpring(0, { stiffness: 600, damping: 30 });

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    const manageMouseMove = (e) => {
      springX.set(e.clientX - 16);
      springY.set(e.clientY - 16);
    };

    const manageHover = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("button") ||
        target.closest("a") || 
        target.classList.contains("cursor-pointer") ||
        target.style.cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", manageHover);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", manageHover);
    };
  }, [springX, springY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-400 rounded-full pointer-events-none z-[10000] mix-blend-screen shadow-[0_0_10px_rgba(96,165,250,0.6)]"
        style={{ x: springX, y: springY }}
        animate={{
          scale: isHovering ? 1.6 : 1,
          borderColor: isHovering ? "#3b82f6" : "#60a5fa",
          backgroundColor: isHovering ? "rgba(59,130,246,0.1)" : "transparent"
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"></div>
      </motion.div>
    </>
  );
}
