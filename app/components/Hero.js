
"use client";

import { useState, useEffect } from "react";
import { Sparkles, Bot, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ROTATING_WORDS = [
  { text: "India", gradient: "from-orange-400 via-white to-green-500" },
  { text: "Robotics/AI", gradient: "from-orange-400 to-amber-500" },
  { text: "STEM", gradient: "from-cyan-400 to-teal-400" },
  { text: "Students", gradient: "from-green-400 to-emerald-500" },
  { text: "Teachers", gradient: "from-purple-400 to-violet-500" },
  { text: "Technologies", gradient: "from-orange-400 via-pink-400 to-cyan-400" },
  { text: "Schools", gradient: "from-green-400 via-cyan-400 to-blue-500" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = ROTATING_WORDS[currentIndex].text;
    
    let timer;
    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        }
      }, 50); // Delete speed
    } else {
      // Typing text
      if (displayedText === currentWord) {
        // Wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1500); // Wait 1.5s after typing finishes
      } else {
        timer = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        }, 120); // Typing speed
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIndex]);

  const handleOpenKmsAi = () => {
    window.dispatchEvent(new CustomEvent("open-kms-ai"));
  };

  const currentWord = ROTATING_WORDS[currentIndex];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 select-none pt-24 pb-12"
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(139, 92, 246, 0.06), transparent 85%)`
      }}
    >
      {/* Subtle futuristic background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="var(--primary-accent)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Cybernetic ambient glow circles matching logo colors */}
      <div className="absolute -top-32 left-1/4 -translate-x-1/2 w-[500px] h-[350px] bg-orange-500/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-32 right-1/4 translate-x-1/2 w-[500px] h-[350px] bg-green-500/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[450px] h-[220px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Flying Kite Left */}
      <motion.div
        className="absolute left-10 xl:left-20 top-[40%] hidden lg:flex flex-col items-center justify-center opacity-70 pointer-events-none"
        animate={{
          y: [-30, 20, -30],
          x: [-10, 10, -10],
          rotateZ: [-15, 15, -15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Kite String */}
        <motion.div 
          className="absolute w-1 h-20 bg-gradient-to-b from-orange-400/50 to-transparent"
          style={{ top: "100%", left: "50%", transform: "translateX(-50%)" }}
        />
        
        {/* Kite Diamond Shape */}
        <div className="relative w-20 h-24 flex items-center justify-center">
          <svg viewBox="0 0 100 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Kite body - diamond with gradient */}
            <polygon points="50,0 100,40 50,100 0,40" fill="url(#kiteGradient1)" stroke="rgba(59,130,246,0.6)" strokeWidth="2"/>
            {/* Inner glow */}
            <polygon points="50,10 90,40 50,90 10,40" fill="none" stroke="rgba(139,92,246,0.4)" strokeWidth="1" opacity="0.6"/>
            {/* Center dot */}
            <circle cx="50" cy="50" r="4" fill="rgba(255,122,0,0.8)"/>
            
            <defs>
              <linearGradient id="kiteGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "rgb(30,144,255)", stopOpacity: 0.8}} />
                <stop offset="50%" style={{stopColor: "rgb(139,92,246)", stopOpacity: 0.8}} />
                <stop offset="100%" style={{stopColor: "rgb(34,211,238)", stopOpacity: 0.7}} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Kite Tail */}
        <motion.div 
          className="absolute w-1 h-32 bg-gradient-to-b from-orange-400/60 to-transparent pointer-events-none"
          style={{ top: "85%", left: "50%", transform: "translateX(-50%)" }}
          animate={{ rotateZ: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Flying Kite Right */}
      <motion.div
        className="absolute right-10 xl:right-20 top-[45%] hidden lg:flex flex-col items-center justify-center opacity-70 pointer-events-none"
        animate={{
          y: [20, -30, 20],
          x: [10, -10, 10],
          rotateZ: [15, -15, 15],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        {/* Kite String */}
        <motion.div 
          className="absolute w-1 h-20 bg-gradient-to-b from-purple-400/50 to-transparent"
          style={{ top: "100%", left: "50%", transform: "translateX(-50%)" }}
        />
        
        {/* Kite Diamond Shape */}
        <div className="relative w-20 h-24 flex items-center justify-center">
          <svg viewBox="0 0 100 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Kite body - diamond with gradient */}
            <polygon points="50,0 100,40 50,100 0,40" fill="url(#kiteGradient2)" stroke="rgba(34,211,238,0.6)" strokeWidth="2"/>
            {/* Inner glow */}
            <polygon points="50,10 90,40 50,90 10,40" fill="none" stroke="rgba(168,85,247,0.4)" strokeWidth="1" opacity="0.6"/>
            {/* Center dot */}
            <circle cx="50" cy="50" r="4" fill="rgba(34,211,238,0.8)"/>
            
            <defs>
              <linearGradient id="kiteGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "rgb(168,85,247)", stopOpacity: 0.8}} />
                <stop offset="50%" style={{stopColor: "rgb(139,92,246)", stopOpacity: 0.8}} />
                <stop offset="100%" style={{stopColor: "rgb(251,146,60)", stopOpacity: 0.7}} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Kite Tail */}
        <motion.div 
          className="absolute w-1 h-32 bg-gradient-to-b from-cyan-400/60 to-transparent pointer-events-none"
          style={{ top: "85%", left: "50%", transform: "translateX(-50%)" }}
          animate={{ rotateZ: [0, -5, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="w-full max-w-7xl mx-auto z-10 text-center flex flex-col items-center justify-center pt-12 md:pt-0">
        
        {/* Futuristic Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-md transition-transform hover:scale-105"
          style={{
            borderColor: 'var(--primary-accent)',
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-primary)'
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
          <span className="bg-gradient-to-r from-orange-400 via-green-400 to-cyan-400 bg-clip-text text-transparent font-black">
            KMS-AI & Next-Gen Robotics Ecosystem
          </span>
          <Sparkles size={13} className="text-orange-400" />
        </div>

        {/* ── Big Headline: Fixed + Rotating Word ── */}
        <div className="w-full flex flex-col items-center justify-center py-2">
          {/* Fixed text line */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight transition-colors duration-300 drop-shadow-sm"
            style={{ color: 'var(--text-primary)' }}
          >
            Preparing for the Future
          </h1>

          {/* Rotating word */}
          <div className="relative h-[3.5rem] sm:h-[4rem] md:h-[5rem] lg:h-[6rem] xl:h-[7rem] mt-2 sm:mt-3 w-full flex items-center justify-center">
            <span
              className={`
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight
                bg-gradient-to-r ${currentWord.gradient} bg-clip-text text-transparent
              `}
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 122, 0, 0.15))'
              }}
            >
              {displayedText}
            </span>
            <motion.span 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[2rem] sm:h-[2.5rem] md:h-[3rem] lg:h-[4rem] xl:h-[5rem] ml-2"
              style={{ backgroundColor: 'var(--primary-accent)' }}
            />
          </div>

          {/* Word indicator dots */}
          <div className="flex gap-1.5 mt-4">
            {ROTATING_WORDS.map((_, i) => (
              <span
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex 
                    ? "w-6 h-2 bg-gradient-to-r from-orange-400 to-green-400" 
                    : "w-2 h-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl mt-6 mb-10 max-w-3xl leading-relaxed font-normal transition-colors duration-300"
          style={{ color: 'var(--text-secondary)' }}
        >
          Empowering Innovation with STEM / Robotics, AI & IoT.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center w-full max-w-md sm:max-w-none mt-4">
          {/* Primary KMS-AI Button */}
          <button
            onClick={handleOpenKmsAi}
            className="w-full sm:w-auto px-6 py-3 font-black rounded-xl text-sm sm:text-base text-white hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 shadow-lg group"
            style={{
              background: 'linear-gradient(135deg, #FF7A00 0%, #22C55E 60%, #06B6D4 100%)',
              boxShadow: '0 8px 30px rgba(255, 122, 0, 0.35)'
            }}
          >
            <Bot size={18} className="group-hover:rotate-12 transition-transform" />
            <span>Launch KMS-AI</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Button */}
          <a
            href="/#contact"
            className="w-full sm:w-auto px-6 py-3 border-2 font-bold rounded-xl text-sm sm:text-base hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 whitespace-nowrap text-center cursor-pointer backdrop-blur-sm"
            style={{
              borderColor: 'var(--primary-accent)',
              color: 'var(--text-primary)',
              backgroundColor: 'var(--card-bg)'
            }}
          >
            Contact Grid
          </a>
          
          {/* DPIIT Button */}
          <a
            href="https://recognition-be.startupindia.gov.in/s3/download/document/RECOGNITION_CERTIFICATE/76916f6a-7dbc-41bc-a327-b06389894b73.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 border-2 font-bold rounded-xl text-sm sm:text-base hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 whitespace-nowrap text-center cursor-pointer backdrop-blur-sm"
            style={{
              borderColor: 'var(--primary-accent)',
              color: 'var(--text-primary)',
              backgroundColor: 'var(--card-bg)'
            }}
          >
            DPIIT Certificate
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919564866985"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 border-2 font-bold rounded-xl text-sm sm:text-base hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 whitespace-nowrap text-center cursor-pointer backdrop-blur-sm"
            style={{
              borderColor: '#25D366',
              color: 'var(--text-primary)',
              backgroundColor: 'var(--card-bg)'
            }}
          >
            Searching Funding
          </a>
        </div>
      </div>
    </section>
  );
}
