"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  const controls = useAnimation();
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    controls.start({
      rotateY: 360,
      transition: {
        repeat: Infinity,
        duration: 15,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section
      id="about"
      className="flex items-center justify-center px-6 py-12 sm:py-16 relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--text-secondary)'
      }}
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">

        {/* 🔹 Left: Rotating Robot with Glow */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            animate={controls}
            onHoverStart={() => {
              setHovering(true);
              controls.start({
                rotateY: 360,
                transition: { repeat: Infinity, duration: 4, ease: "linear" },
              });
            }}
            onHoverEnd={() => {
              setHovering(false);
              controls.start({
                rotateY: 360,
                transition: { repeat: Infinity, duration: 15, ease: "linear" },
              });
            }}
            className="relative p-[8px] rounded-full shadow-2xl transform-style-3d cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 122, 0, 0.4), rgba(34, 197, 94, 0.4), rgba(6, 182, 212, 0.4))'
            }}
          >
            {/* 🌟 Neon Glow Animation */}
            <motion.div
              className="absolute inset-0 rounded-full blur-[40px] opacity-30 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #FF7A00, #22C55E, #06B6D4)'
              }}
              animate={{
                scale: hovering ? [1, 1.2, 1] : [1, 1.05, 1],
                opacity: hovering ? [0.4, 0.7, 0.4] : [0.2, 0.35, 0.2],
              }}
              transition={{ duration: hovering ? 1 : 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Robot Image */}
            <div 
              className="relative rounded-full p-4 overflow-hidden border shadow-inner"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)'
              }}
            >
              <Image
                src="/360_Degree_Plan.png"
                alt="Rotating Robot"
                width={450}
                height={450}
                className="rounded-full object-cover opacity-95"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* 🔹 Right: Text + Logo + Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight flex items-center justify-center lg:justify-start gap-3"
            style={{ color: 'var(--text-primary)' }}
          >
             <span className="w-8 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-green-500"></span> About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500">KITE ROBOTICS</span>
          </h2>
          <div className="text-base sm:text-lg leading-relaxed mb-8 font-normal space-y-5" style={{ color: 'var(--text-secondary)' }}>
            <p className="cursor-default">
              KITE Robotics sparks innovation in young minds, shaping India’s future through hands-on STEM learning.
              Led by expert mentors from premier IIT institutes, our programs nurture creativity, problem-solving, and global perspectives, empowering students to thrive in a tech-driven world.
            </p>
            <div 
              className="border p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-md cursor-default text-left transition-colors"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                boxShadow: 'var(--card-shadow)'
              }}
            >
               <h4 
                 className="font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-5"
                 style={{ color: 'var(--text-primary)' }}
               >
                 <span className="w-2 h-2 rounded-full bg-green-500 shadow-md"></span> The Core Advantage
               </h4>
               <ul className="space-y-3.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                 <li className="flex items-start gap-2.5">
                   <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                   <span><strong style={{color: 'var(--text-primary)'}}>Curriculum:</strong> Age-appropriate STEM challenges designed to inspire.</span>
                 </li>
                 <li className="flex items-start gap-2.5">
                   <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                   <span><strong style={{color: 'var(--text-primary)'}}>Hardware:</strong> Build, code, and explore from simple machines to advanced rovers.</span>
                 </li>
                 <li className="flex items-start gap-2.5">
                   <CheckCircle2 size={18} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                   <span><strong style={{color: 'var(--text-primary)'}}>Global Scope:</strong> Real-world projects, workshops and competitions that go beyond borders.</span>
                 </li>
                 <li className="flex items-start gap-2.5">
                   <CheckCircle2 size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                   <span><strong style={{color: 'var(--text-primary)'}}>Mentorship:</strong> Passionate instructors guiding every step of the journey.</span>
                 </li>
               </ul>
            </div>
          </div>

          {/* 🌟 Logo + Button Flex Row */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 mt-8">
            {/* Logo with Glow */}
            <div className="relative inline-block group">
              <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-orange-500/50 via-green-500/50 to-cyan-500/50 shadow-md">
                <div className="bg-white rounded-[14px] px-4 py-2 flex items-center justify-center">
                  <Image
                    src="/kite_logo.jpg"
                    alt="KITE Robotics Logo"
                    width={180}
                    height={80}
                    className="object-contain h-12 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-white font-bold tracking-wider uppercase text-xs shadow-lg transition-all duration-300 relative overflow-hidden group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #FF7A00 0%, #22C55E 100%)',
                boxShadow: '0 4px 20px rgba(255, 122, 0, 0.3)'
              }}
            >
              <span className="relative z-10">Join Network</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}








