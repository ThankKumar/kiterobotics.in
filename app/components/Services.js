"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const services = [
  { img: "/services/web_development.png", title: "Web Development", desc: "Designing fast, responsive, and secure websites." },
  { img: "/services/mobile_development.png", title: "Mobile App Development", desc: "Building user-friendly Android & iOS apps." },
  { img: "/services/robotics_Ai.png", title: "Robotics / AI", desc: "Hands-on robotics and AI solutions for the real world." },
  { img: "/services/ml.png", title: "Machine Learning", desc: "Intelligent systems that learn and adapt." },
  { img: "/services/technical_support.png", title: "Technical Support", desc: "Reliable troubleshooting and technical assistance." },
  { img: "/services/iOt.png", title: "IoT Integration", desc: "Connecting devices and sensors to automate systems." },
  { img: "/services/chat_support.png", title: "Chat Support", desc: "24/7 chat-based assistance to resolve queries quickly." },
  { img: "/services/3dprinter.png", title: "3D-Printing", desc: "Designing and producing precise 3D models." },
  { img: "/services/enginner_solution.png", title: "Engineering Tools", desc: "Advanced tools and solutions for development." },
  { img: "/services/cyber_security.png", title: "Cybersecurity", desc: "Protecting systems and data from cyber threats." },
  { img: "/services/clude_computing.png", title: "Cloud Computing", desc: "Deploying scalable apps on cloud platforms." },
  { img: "/services/data_analystic.png", title: "Data Science", desc: "Analyzing data to extract actionable insights." },
];

const WHATSAPP_LINK = "https://wa.me/9195648666985?text=Hello%20Sir%2C%20I%20am%20contacting%20you%20via%20WhatsApp";

// 🌟 Particle Scatter & Return Component
const HologramParticles = ({ isHovered }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // 50 lightweight DOM nodes max per card => perfectly performant CSS transforms
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      endX: (Math.random() - 0.5) * 200,
      endY: (Math.random() - 0.5) * 200,
      size: Math.random() * 3 + 1,
      duration: 0.8 + Math.random() * 1.5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible z-10 transform-style-3d">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400 blur-[1px]"
          style={{ width: p.size, height: p.size }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={isHovered ? {
            opacity: [0, 1, 0],
            x: [0, p.endX, 0], // Scatter and return
            y: [0, p.endY, 0],
          } : { opacity: 0, x: 0, y: 0 }}
          transition={{
            duration: p.duration,
            repeat: isHovered ? Infinity : 0,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);
  const cardRef = useRef(null);
  
  // Magnetic + 3D logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);
  
  // Magnetic Parallax for inner text elements
  const innerX = useTransform(x, [-100, 100], [-10, 10]);
  const innerY = useTransform(y, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  // Ripple Click Event
  function handleRipple(event) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const rippleX = event.clientX - rect.left;
    const rippleY = event.clientY - rect.top;
    const newRipple = { x: rippleX, y: rippleY, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  }

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, perspective: 1500 }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleRipple}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, type: "spring", stiffness: 100 }}
      className="group relative rounded-2xl cursor-pointer w-full transform-style-3d"
    >
      {/* Intense glowing magnetic shadow undercard */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-70 blur-2xl transition duration-500 pointer-events-none"></div>

      {/* JARVIS Hologram Glassmorphism Card */}
      <div className="relative flex flex-col h-full bg-[#03060d]/60 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-400/80 rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.5)] transform-style-3d z-10 z-index-10">
         
         {/* Subtle Grid Circuit Pattern Background */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.5) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
         
         {/* Scanline Effect Overlay */}
         <div className="absolute inset-0 pointer-events-none opacity-20 pointer-events-none animate-scanline z-0"></div>

         {/* Ripple Clicks rendered here */}
         {ripples.map((rip) => (
            <motion.div
              key={rip.id}
              className="absolute rounded-full bg-cyan-400/40 pointer-events-none z-10 mix-blend-screen"
              style={{ left: rip.x, top: rip.y }}
              initial={{ width: 0, height: 0, x: "-50%", y: "-50%", opacity: 1 }}
              animate={{ width: 400, height: 400, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
         ))}

         <div className="w-full flex justify-center items-center py-10 relative z-20">
            {/* Hologram Scattered Particles */}
            <HologramParticles isHovered={isHovered} />

            {/* Image container: gradient bg, rounded, exact requested glow */}
            <motion.div 
              style={{ x: innerX, y: innerY }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-[#05112a] to-[#120524] border border-cyan-500/40 shadow-[0_0_20px_rgba(0,200,255,0.4)] group-hover:shadow-[0_0_35px_rgba(0,200,255,0.9)] flex items-center justify-center overflow-hidden transition-shadow duration-500 relative z-20"
              whileHover={{ scale: 1.15, rotate: 10 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img 
                src={service.img} 
                alt={service.title} 
                className="max-w-[60%] max-h-[60%] object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_15px_rgba(0,200,255,0.8)] transition-all duration-300"
                animate={isHovered ? { y: [0, -5, 0] } : { y: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
         </div>
         
         {/* Text Section with inner Parallax */}
         <motion.div style={{ x: innerX, y: innerY }} className="px-6 pb-6 flex flex-col flex-1 text-center items-center z-20 relative">
            <h4 className="text-[16px] font-bold mb-3 text-white/90 group-hover:text-cyan-400 transition-colors uppercase tracking-widest opacity-80 group-hover:opacity-100 min-h-[48px] flex items-center justify-center">
              {service.title}
            </h4>
            <p className="text-xs md:text-sm text-gray-400 mb-6 flex-1 font-light leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              {service.desc}
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              onClick={(e) => e.stopPropagation()} // don't ripple entire card if clicking button
              rel="noopener noreferrer"
              className="mt-auto relative z-30 px-5 py-3 w-full max-w-[200px] rounded-xl bg-white/5 backdrop-blur-sm border border-cyan-500/20 text-[10px] tracking-widest uppercase font-bold text-gray-300 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-400 transition-all duration-300 pointer-events-auto block group-hover:shadow-[0_0_20px_rgba(0,200,255,0.8)]"
            >
              Initialize Base
            </a>
         </motion.div>
      </div>
    </motion.div>
  );
}

export default function ShopPage() {
  return (
    <div id="services" className="relative p-6 py-24 min-h-screen bg-[#03060d] overflow-hidden">
      <div className="absolute inset-x-0 h-40 top-0 bg-gradient-to-b from-[#050914] to-transparent pointer-events-none z-10"></div>
      
      {/* Background Parallax Hologram Spheres */}
      <motion.div 
        className="absolute top-1/4 -right-20 w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: [0, -80, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 -left-20 w-[700px] h-[700px] rounded-full bg-cyan-600/10 blur-[140px] pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: [0, 80, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.3 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 pb-2 tracking-tight text-white flex justify-center items-center gap-3">
             <span className="w-5 h-5 bg-cyan-400 rounded-sm animate-spin-slow shadow-[0_0_20px_rgba(0,200,255,0.8)]"></span>
             Holographic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Nexus</span>
             <span className="w-5 h-5 bg-purple-500 rounded-sm animate-spin-slow shadow-[0_0_20px_rgba(168,85,247,0.8)]"></span>
          </h2>
          <p className="text-cyan-100/50 max-w-2xl mx-auto text-lg font-light tracking-wide">
             Query our active services matrix and initialize new protocols.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
