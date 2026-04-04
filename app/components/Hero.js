"use client";
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const filterRef = useRef(null);
  const turbRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX - innerWidth / 2) / 20); 
    mouseY.set((clientY - innerHeight / 2) / 20);
  };

  useAnimationFrame((time) => {
    if (!filterRef.current) return;
    
    const currentScale = parseFloat(filterRef.current.getAttribute("scale") || "0");
    const targetScale = isHovered ? 8 : 0; 
    const newScale = currentScale + (targetScale - currentScale) * 0.1;
    
    if (Math.abs(newScale - targetScale) > 0.05 || currentScale > 0) {
      filterRef.current.setAttribute("scale", newScale.toString());
    }

    if (turbRef.current && currentScale > 0.1) {
      const wave = Math.sin(time / 800);
      const wave2 = Math.cos(time / 600);
      turbRef.current.setAttribute(
        "baseFrequency",
        `${0.015 + wave * 0.005} ${0.02 + wave2 * 0.005}`
      );
    }
  });

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="h-screen flex items-center justify-center text-center bg-[#03060d] text-white relative overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div 
         className="absolute inset-0 pointer-events-none opacity-[0.03]"
         style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}
      ></div>

      {/* Parallax Core Sphere */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-blue-500/10 pointer-events-none z-0"
        style={{ x: useTransform(springX, (v) => v * -0.5), y: useTransform(springY, (v) => v * -0.5) }}
      >
        <div className="absolute inset-0 rounded-full bg-blue-600/10 blur-[100px]"></div>
      </motion.div>

      {/* Futuristic Particles Component */}
      {mounted && [...Array(15)].map((_, i) => (
        <motion.div
           key={i}
           className="absolute w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)] pointer-events-none z-0"
           initial={{
             x: Math.random() * window.innerWidth,
             y: Math.random() * window.innerHeight,
             opacity: Math.random() * 0.5 + 0.2
           }}
           animate={{
             y: [null, Math.random() * -200 - 100],
             opacity: [null, 0, 0.8, 0]
           }}
           transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
        />
      ))}

      {/* Rotating Cybernetic SVG */}
      <motion.div
        className="absolute -top-[10%] -right-[5%] opacity-[0.08] pointer-events-none z-0 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ x: useTransform(springX, (v) => v * 1.5), y: useTransform(springY, (v) => v * 1.5) }}
      >
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none" stroke="#3b82f6" strokeWidth="1">
           <circle cx="50" cy="50" r="40" strokeDasharray="5,5" />
           <circle cx="50" cy="50" r="30" />
           <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50" />
           <path d="M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 22 L78 29" />
           <circle cx="50" cy="50" r="10" />
        </svg>
      </motion.div>

      {/* AI Scanline */}
      <div className="absolute inset-x-0 h-40 animate-scanline pointer-events-none z-20"></div>

      <svg style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}>
        <filter id="water-ripple" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence ref={turbRef} type="fractalNoise" baseFrequency="0.015 0.02" numOctaves="2" result="noise" />
          <feDisplacementMap ref={filterRef} in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <style>{`
        .idle-glow {
          animation: ambientGlow 4s ease-in-out infinite;
        }
        @keyframes ambientGlow {
          0%, 100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.1); }
          50% { text-shadow: 0 0 20px rgba(59, 130, 246, 0.7), 0 0 35px rgba(59, 130, 246, 0.5); }
        }
      `}</style>

      {/* Content wrapper with slight parallax */}
      <motion.div 
        className="px-6 md:px-12 relative z-10 w-full"
        style={{ x: useTransform(springX, (v) => v * 0.2), y: useTransform(springY, (v) => v * 0.2) }}
      >
        <motion.div
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
           onTouchStart={() => setIsHovered(true)}
           onTouchEnd={() => setIsHovered(false)}
           className="inline-block"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-5xl md:text-7xl font-extrabold mb-6 cursor-default tracking-wide select-none ${isHovered ? '' : 'idle-glow'}`}
            style={{
              filter: "url(#water-ripple)",
              transition: "text-shadow 0.3s ease",
              textShadow: isHovered ? "0 0 30px rgba(59, 130, 246, 0.9)" : undefined,
            }}
          >
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">KITE ROBOTICS</span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto mb-10 font-light"
        >
          Empowering Innovation with <span className="font-semibold text-white">Robotics</span>,{" "}
          <span className="font-semibold text-white">AI</span> & <span className="font-semibold text-white">IoT</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a
            href="#products"
            className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] transition-all duration-300 uppercase tracking-widest text-sm relative overflow-hidden group"
          >
            <span className="relative z-10">Initialize Sequence</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 pointer-events-none"></div>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-blue-500/50 text-blue-300 font-bold rounded-xl hover:bg-blue-600/10 hover:text-white hover:border-blue-400 transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Contact Grid
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
