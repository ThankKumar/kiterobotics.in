"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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
      className="min-h-screen flex items-center justify-center bg-[#050914] text-gray-300 px-6 py-24 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>

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
            className="relative p-[8px] rounded-full bg-gradient-to-r from-blue-600/30 via-cyan-500/30 to-blue-900/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] transform-style-3d cursor-pointer"
          >
            {/* 🌟 Neon Glow Animation */}
            <motion.div
              className="absolute inset-0 rounded-full blur-[40px] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-20"
              animate={{
                scale: hovering ? [1, 1.2, 1] : [1, 1.05, 1],
                opacity: hovering ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2],
              }}
              transition={{ duration: hovering ? 1 : 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Robot Image */}
            <div className="relative bg-[#0a101f] border border-blue-500/20 rounded-full p-4 overflow-hidden shadow-inner">
              <Image
                src="/360_Degree_Plan.png"
                alt="Rotating Robot"
                width={450}
                height={450}
                className="rounded-full object-cover mix-blend-screen opacity-90"
                priority
              />
              <div className="absolute inset-0 bg-blue-500/10 rounded-full pointer-events-none mix-blend-overlay"></div>
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white flex items-center justify-center lg:justify-start gap-3">
             <span className="w-8 h-1 bg-cyan-500 rounded-sm"></span> Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">KITE</span>
          </h2>
          <div className="text-lg leading-relaxed mb-8 text-gray-400 font-light space-y-5">
            <p className="cursor-default">
              KITE Robotics sparks innovation in young minds, shaping India’s future through hands-on STEM learning.
              Led by expert mentors, our programs nurture creativity, problem-solving, and global perspectives, empowering students to thrive in a tech-driven world.
            </p>
            <div className="bg-[#0a101f] border border-blue-900/30 p-6 sm:p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-default">
               <h4 className="text-white font-semibold uppercase tracking-widest text-xs flex items-center gap-2 mb-5">
                 <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span> The Core Advantage
               </h4>
               <ul className="space-y-3 text-sm text-gray-400">
                 <li><strong className="text-cyan-400 font-medium tracking-wide">Curriculum:</strong> Age-appropriate STEM challenges designed to inspire.</li>
                 <li><strong className="text-cyan-400 font-medium tracking-wide">Hardware:</strong> Build, code, and explore from simple machines to advanced robots.</li>
                 <li><strong className="text-cyan-400 font-medium tracking-wide">Global Scope:</strong> Real-world projects that go beyond borders.</li>
                 <li><strong className="text-cyan-400 font-medium tracking-wide">Mentorship:</strong> Passionate instructors guiding every step of the journey.</li>
               </ul>
            </div>
          </div>

          {/* 🌟 Logo + Button Flex Row */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 mt-10">
            {/* Logo with Glow */}
            <div className="relative inline-block group">
              <motion.div
                className="absolute inset-0 rounded-2xl blur-[20px] bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-600/40 to-cyan-500/40 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-shadow">
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 border border-blue-500 text-white font-bold tracking-widest uppercase text-xs shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Join Network</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 pointer-events-none"></div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}








