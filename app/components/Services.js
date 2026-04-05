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

// 🌟 Particle Scatter & Return Component (Disabled on Mobile)
const HologramParticles = ({ isHovered }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
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
            x: [0, p.endX, 0],
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

function ServiceCard({ service, index, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);
  const cardRef = useRef(null);
  
  // Magnetic + 3D logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Disable 3D tilt on mobile
  const rotateX = useTransform(y, [-100, 100], isMobile ? [0, 0] : [20, -20]);
  const rotateY = useTransform(x, [-100, 100], isMobile ? [0, 0] : [-20, 20]);
  
  // Magnetic Parallax for inner text elements (disabled on mobile)
  const innerX = useTransform(x, [-100, 100], isMobile ? [0, 0] : [-10, 10]);
  const innerY = useTransform(y, [-100, 100], isMobile ? [0, 0] : [-10, 10]);

  function handleMouse(event) {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    if (isMobile) return;
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
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleRipple}
      initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: isMobile ? 0 : (index % 4) * 0.1, type: "spring", stiffness: 100 }}
      whileTap={isMobile ? { scale: 0.98 } : undefined}
      className={`group relative rounded-2xl cursor-pointer w-full mb-6 md:mb-0 ${!isMobile && "transform-style-3d"}`}
    >
      {/* Intense glowing magnetic shadow undercard (desktop only) */}
      {!isMobile && (
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-70 blur-2xl transition duration-500 pointer-events-none"></div>
      )}

      {/* JARVIS Hologram Glassmorphism Card */}
      <div className={`relative flex flex-col h-full bg-[#03060d]/60 backdrop-blur-xl border border-cyan-500/20 md:group-hover:border-cyan-400/80 rounded-2xl overflow-hidden transition-all duration-500 shadow-[0_4px_15px_rgb(0,0,0,0.5)] md:shadow-[0_8px_30px_rgb(0,0,0,0.5)] md:group-hover:shadow-none z-10 ${!isMobile && "transform-style-3d z-index-10"}`}>
         
         {/* Subtle Grid Circuit Pattern Background */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.5) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
         
         {/* Scanline Effect Overlay (desktop only for performance) */}
         {!isMobile && <div className="absolute inset-0 pointer-events-none opacity-20 animate-scanline z-0"></div>}

         {/* Ripple Clicks rendered here */}
         {ripples.map((rip) => (
            <motion.div
              key={rip.id}
              className="absolute rounded-full bg-cyan-400/40 pointer-events-none z-10 mix-blend-screen"
              style={{ left: rip.x, top: rip.y }}
              initial={{ width: 0, height: 0, x: "-50%", y: "-50%", opacity: 1 }}
              animate={{ width: isMobile ? 250 : 400, height: isMobile ? 250 : 400, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
         ))}

         <div className="w-full flex justify-center items-center py-6 md:py-10 relative z-20">
            {/* Hologram Scattered Particles (desktop only) */}
            {!isMobile && <HologramParticles isHovered={isHovered} />}

            {/* Image container: gradient bg, rounded, glowing */}
            <motion.div 
              style={isMobile ? {} : { x: innerX, y: innerY }}
              className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-cyan-500/40 shadow-[0_0_15px_rgba(0,200,255,0.4)] md:group-hover:shadow-[0_0_35px_rgba(0,200,255,0.9)] flex items-center justify-center overflow-hidden transition-shadow duration-500 relative z-20"
              whileHover={!isMobile ? { scale: 1.15, rotate: 5 } : {}}
              transition={{ duration: 0.4 }}
            >
              <motion.img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover rounded-full transition-all duration-300"
                animate={!isMobile && isHovered ? { y: [0, -3, 0] } : { y: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Inner glowing ring overlay for holographic feel */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(0,200,255,0.5)] pointer-events-none"></div>
            </motion.div>
         </div>
         
         {/* Text Section with inner Parallax */}
         <motion.div style={isMobile ? {} : { x: innerX, y: innerY }} className="px-5 pb-6 flex flex-col flex-1 text-center items-center z-20 relative">
            <h4 className="text-[15px] md:text-lg font-bold mb-2 md:mb-3 text-white/95 md:group-hover:text-cyan-400 transition-colors uppercase tracking-widest md:opacity-80 md:group-hover:opacity-100 min-h-[40px] md:min-h-[48px] flex items-center justify-center">
              {service.title}
            </h4>
            <p className="text-[12px] md:text-sm text-gray-400 mb-5 md:mb-6 flex-1 font-light leading-relaxed md:opacity-70 md:group-hover:opacity-100 transition-opacity duration-300">
              {service.desc}
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              onClick={(e) => { e.stopPropagation(); }}
              rel="noopener noreferrer"
              className="mt-auto relative z-30 px-5 flex items-center justify-center h-[44px] md:py-3 w-full max-w-[200px] rounded-xl bg-[#0a101f] md:bg-white/5 md:backdrop-blur-sm border border-cyan-500/30 md:border-cyan-500/20 text-[11px] md:text-[10px] tracking-widest uppercase font-bold text-cyan-400 md:text-gray-300 md:group-hover:bg-cyan-500 md:group-hover:text-black md:group-hover:border-cyan-400 transition-all duration-300 pointer-events-auto block md:group-hover:shadow-[0_0_20px_rgba(0,200,255,0.8)] active:bg-cyan-600 active:text-white"
            >
              Initialize Base
            </a>
         </motion.div>
      </div>
    </motion.div>
  );
}

export default function ShopPage() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Init Check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="services" className="relative px-4 py-20 md:p-6 md:py-24 min-h-screen bg-[#03060d] overflow-hidden">
      <div className="absolute inset-x-0 h-40 top-0 bg-gradient-to-b from-[#050914] to-transparent pointer-events-none z-10"></div>
      
      {/* Background Parallax Hologram Spheres (Disabled animation on Mobile) */}
      <motion.div 
        className="absolute top-1/4 -right-10 md:-right-20 w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-purple-600/10 blur-[100px] md:blur-[140px] pointer-events-none"
        initial={{ y: 0 }}
        animate={!isMobile ? { y: [0, -80, 0] } : { y: 0 }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 -left-10 md:-left-20 w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-cyan-600/10 blur-[100px] md:blur-[140px] pointer-events-none"
        initial={{ y: 0 }}
        animate={!isMobile ? { y: [0, 80, 0] } : { y: 0 }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="max-w-7xl mx-auto md:px-6 relative z-20">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.1 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-5 pb-2 tracking-tight text-white flex justify-center items-center gap-2 md:gap-3">
             <span className="w-4 h-4 md:w-5 md:h-5 bg-cyan-400 rounded-sm animate-spin-slow shadow-[0_0_15px_rgba(0,200,255,0.6)]"></span>
             Holographic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Nexus</span>
             <span className="w-4 h-4 md:w-5 md:h-5 bg-purple-500 rounded-sm animate-spin-slow shadow-[0_0_15px_rgba(168,85,247,0.6)]"></span>
          </h2>
          <p className="text-cyan-100/50 max-w-2xl mx-auto text-[15px] md:text-lg font-light tracking-wide px-4">
             Query our active services matrix and initialize new protocols.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </div>
  );
}
