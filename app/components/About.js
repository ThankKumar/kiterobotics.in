"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { KiteConstellation, KiteConceptCard, CONCEPTS } from "./KitePlan360";

function AnimatedCounter({ end, duration = 2200, suffix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [end, duration]);

  return (
    <span className="font-extrabold font-mono tracking-tight">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-cycle through concepts when not hovering
  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CONCEPTS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section
      id="about"
      className="w-full flex flex-col justify-start px-4 sm:px-6 lg:px-8 pt-0 pb-6 relative overflow-hidden transition-colors duration-300 select-none"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--text-secondary)'
      }}
    >
      {/* Anchor for backwards-compatible #home links */}
      <span id="home" className="absolute top-0 pointer-events-none" />

      {/* Cybernetic Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-home-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="var(--primary-accent)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-home-grid)" />
        </svg>
      </div>

      {/* Background Ambient Glows */}
      <div className="absolute -top-20 right-1/4 w-[400px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start lg:items-center relative z-10 w-full pt-1">

        {/* 🔹 Left: Interactive 360° Plan Constellation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center w-full"
        >
          <KiteConstellation
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            isHovering={isHovering}
            setIsHovering={setIsHovering}
          />
        </motion.div>

        {/* 🔹 Right: Text + Concept Detail Card + Button Line + Animated Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-left flex flex-col justify-center"
        >
          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-black mb-1 tracking-tight flex items-center justify-center lg:justify-start gap-2.5"
            style={{ color: 'var(--text-primary)' }}
          >
             <span className="w-6 h-1 rounded-full bg-gradient-to-r from-orange-500 to-green-500"></span> About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500">KITE ROBOTICS</span>
          </h2>
          
          <p 
            className="text-xs sm:text-sm leading-relaxed mb-1.5 font-normal cursor-default"
            style={{ color: 'var(--text-secondary)' }}
          >
            KITE Robotics sparks innovation in young minds, shaping India’s future through hands-on STEM learning led by expert IIT mentors.
          </p>

          {/* 🌟 Concept Detail Card + 01-08 Navigator */}
          <KiteConceptCard
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setIsHovering={setIsHovering}
          />

          {/* 🌟 Button Line: Join Network + DPIIT Certificate + Searching Funding */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mt-2">
            {/* Join Network Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-bold tracking-wider uppercase text-xs shadow-md transition-all duration-300 relative overflow-hidden group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #FF7A00 0%, #22C55E 100%)',
                boxShadow: '0 4px 16px rgba(255, 122, 0, 0.25)'
              }}
            >
              <span>Join Network</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* DPIIT Certificate Button */}
            <a
              href="https://recognition-be.startupindia.gov.in/s3/download/document/RECOGNITION_CERTIFICATE/76916f6a-7dbc-41bc-a327-b06389894b73.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 border font-bold rounded-xl text-xs tracking-wider uppercase hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 text-center cursor-pointer backdrop-blur-sm shadow-sm"
              style={{
                borderColor: 'var(--primary-accent)',
                color: 'var(--text-primary)',
                backgroundColor: 'var(--card-bg)'
              }}
            >
              <span>DPIIT Certificate</span>
            </a>

            {/* Searching Funding Button */}
            <a
              href="https://wa.me/919564866985"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 border font-bold rounded-xl text-xs tracking-wider uppercase hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 text-center cursor-pointer backdrop-blur-sm shadow-sm"
              style={{
                borderColor: '#22C55E',
                color: 'var(--text-primary)',
                backgroundColor: 'var(--card-bg)'
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span>Searching Funding</span>
            </a>
          </div>

          {/* 🌟 Animated Stats Counter Row (Automatically increases from 0 to target) */}
          <div className="grid grid-cols-4 gap-2 pt-2.5 mt-2.5 border-t border-white/10 w-full">
            <div className="flex flex-col text-center lg:text-left">
              <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-mono">
                <AnimatedCounter end={4} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-400 font-semibold leading-tight">
                IITs Trainer
              </span>
            </div>

            <div className="flex flex-col text-center lg:text-left">
              <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 font-mono">
                <AnimatedCounter end={10000} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-400 font-semibold leading-tight">
                Students
              </span>
            </div>

            <div className="flex flex-col text-center lg:text-left">
              <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono">
                <AnimatedCounter end={5} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-400 font-semibold leading-tight">
                School
              </span>
            </div>

            <div className="flex flex-col text-center lg:text-left">
              <span className="text-lg sm:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-mono">
                <AnimatedCounter end={19846} suffix="+" />
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-400 font-semibold leading-tight">
                Visitors
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}








