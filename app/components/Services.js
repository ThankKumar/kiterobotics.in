"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { Bot, BookOpen, GraduationCap, MonitorPlay, Printer, Headphones, FlaskConical, Microscope } from "lucide-react";

/* =========================================================
   SERVICES
======================================================================================== */

const services = [
  {
    title: "Robotics & AI",
    icon: <Bot size={32} className="text-cyan-300" />,
    color: "cyan",
    gradient: "from-cyan-900/60 to-gray-900/80",
    border: "border-cyan-500/30 group-hover:border-cyan-400/80",
    glow: "rgba(34,211,238,0.5)",
    iconBg: "bg-cyan-900/50 border-cyan-500/40 group-hover:bg-cyan-800/50",
  },
  {
    title: "Academic Support",
    icon: <BookOpen size={32} className="text-purple-300" />,
    color: "purple",
    gradient: "from-purple-900/60 to-gray-900/80",
    border: "border-purple-500/30 group-hover:border-purple-400/80",
    glow: "rgba(168,85,247,0.5)",
    iconBg: "bg-purple-900/50 border-purple-500/40 group-hover:bg-purple-800/50",
  },
  {
    title: "Curriculum Support",
    icon: <GraduationCap size={32} className="text-orange-300" />,
    color: "orange",
    gradient: "from-orange-900/60 to-gray-900/80",
    border: "border-orange-500/30 group-hover:border-orange-400/80",
    glow: "rgba(251,146,60,0.5)",
    iconBg: "bg-orange-900/50 border-orange-500/40 group-hover:bg-orange-800/50",
  },
  {
    title: "Workshops",
    icon: <MonitorPlay size={32} className="text-green-300" />,
    color: "green",
    gradient: "from-green-900/60 to-gray-900/80",
    border: "border-green-500/30 group-hover:border-green-400/80",
    glow: "rgba(74,222,128,0.5)",
    iconBg: "bg-green-900/50 border-green-500/40 group-hover:bg-green-800/50",
  },
  {
    title: "3D Printing",
    icon: <Printer size={32} className="text-blue-300" />,
    color: "blue",
    gradient: "from-blue-900/60 to-gray-900/80",
    border: "border-blue-500/30 group-hover:border-blue-400/80",
    glow: "rgba(96,165,250,0.5)",
    iconBg: "bg-blue-900/50 border-blue-500/40 group-hover:bg-blue-800/50",
  },
  {
    title: "IT Support",
    icon: <Headphones size={32} className="text-pink-300" />,
    color: "pink",
    gradient: "from-pink-900/60 to-gray-900/80",
    border: "border-pink-500/30 group-hover:border-pink-400/80",
    glow: "rgba(244,114,182,0.5)",
    iconBg: "bg-pink-900/50 border-pink-500/40 group-hover:bg-pink-800/50",
  },
  {
    title: "R&D Support",
    icon: <FlaskConical size={32} className="text-yellow-300" />,
    color: "yellow",
    gradient: "from-yellow-900/60 to-gray-900/80",
    border: "border-yellow-500/30 group-hover:border-yellow-400/80",
    glow: "rgba(250,204,21,0.5)",
    iconBg: "bg-yellow-900/50 border-yellow-500/40 group-hover:bg-yellow-800/50",
  },
  {
    title: "Atal Tinker Lab Setup",
    icon: <Microscope size={32} className="text-emerald-300" />,
    color: "emerald",
    gradient: "from-emerald-900/60 to-gray-900/80",
    border: "border-emerald-500/30 group-hover:border-emerald-400/80",
    glow: "rgba(52,211,153,0.5)",
    iconBg: "bg-emerald-900/50 border-emerald-500/40 group-hover:bg-emerald-800/50",
  },
];

const WHATSAPP_LINK =
  "https://wa.me/919564866985?text=Hello%20Sir%2C%20I%20am%20contacting%20you%20via%20WhatsApp";

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ service, index, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: isMobile ? 0 : (index % 4) * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileTap={isMobile ? { scale: 0.98 } : undefined}
      className="group relative rounded-2xl cursor-pointer w-full mb-6 md:mb-0"
    >
      {/* One-sided left glow on hover */}
      <motion.div
        className="absolute -left-2 top-[20%] bottom-[20%] w-1 rounded-full pointer-events-none"
        style={{ backgroundColor: service.glow }}
        animate={isHovered ? { opacity: [0.4, 1, 0.4], scaleY: [1, 1.1, 1] } : { opacity: 0 }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />
      {/* Outer glow blur */}
      <motion.div
        className="absolute -inset-px rounded-2xl pointer-events-none"
        style={{ boxShadow: `0 0 0 0 ${service.glow}` }}
        animate={isHovered
          ? { boxShadow: `-6px 0 30px 4px ${service.glow}` }
          : { boxShadow: `0 0 0 0 ${service.glow}` }
        }
        transition={{ duration: 0.4 }}
      />

      {/* Card */}
      <div
        className={`
          relative flex flex-col h-full min-h-[240px]
          backdrop-blur-xl border rounded-2xl overflow-hidden
          transition-all duration-500 z-10
          bg-gradient-to-br ${service.gradient}
          ${service.border}
        `}
        style={{ boxShadow: 'var(--card-shadow)' }}
      >
        {/* Animated Core / Icon Container */}
        <div className="w-full flex justify-center items-center pt-8 pb-3 relative z-20">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center border shadow-inner transition-all duration-300 ${service.iconBg}`}>
            {service.icon}
          </div>
        </div>

        {/* Service Name + Button */}
        <div className="px-5 pb-6 flex flex-col flex-1 text-center items-center z-20 relative">
          {/* Service Name */}
          <h4
            className="text-[14px] md:text-[15px] font-bold mb-4 transition-colors uppercase tracking-widest min-h-[40px] flex items-center justify-center"
            style={{ color: 'var(--text-primary)' }}
          >
            {service.title}
          </h4>

          {/* Button */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            onClick={(e) => e.stopPropagation()}
            rel="noopener noreferrer"
            whileHover={!isMobile ? { scale: 1.05 } : {}}
            whileTap={{ scale: 0.95 }}
            className="mt-auto relative z-30 px-4 flex items-center justify-center h-[36px] w-full max-w-[160px] rounded-lg border text-[10px] md:text-[9px] tracking-widest uppercase font-bold shadow-sm transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: service.glow,
              color: 'var(--text-primary)'
            }}
          >
            Initialize Base
          </motion.a>
        </div>

        {/* Animated Bottom Energy Line */}
        <motion.div
          className="absolute bottom-0 h-[2px] bg-gradient-to-r from-transparent to-transparent"
          style={{ background: `linear-gradient(90deg, transparent, ${service.glow}, transparent)` }}
          animate={{
            width: ["0%", "100%", "0%"],
            left: ["0%", "0%", "100%"],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
        />

        {/* Corner accent */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l border-t transition-colors duration-300" style={{ borderColor: service.glow }} />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b transition-colors duration-300" style={{ borderColor: service.glow }} />
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function ShopPage() {
  const [isMobile, setIsMobile] =
    useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth < 768
      );
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return (
    <div
      id="services"
      className="
        relative
        px-4
        py-12
        sm:py-16
        md:px-6
        overflow-hidden
        transition-colors
        duration-300
      "
      style={{
        backgroundColor: 'var(--background)'
      }}
    >

      {/* Orange Background Orb */}
      <motion.div
        className="
          absolute
          top-1/4
          -right-10
          md:-right-20
          w-[400px]
          md:w-[700px]
          h-[400px]
          md:h-[700px]
          rounded-full
          bg-orange-500/10
          blur-[100px]
          md:blur-[140px]
          pointer-events-none
        "
        animate={{
          y: [0, -80, 0],
          scale: [
            1,
            1.1,
            1,
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Green Background Orb */}
      <motion.div
        className="
          absolute
          bottom-0
          -left-10
          md:-left-20
          w-[400px]
          md:w-[700px]
          h-[400px]
          md:h-[700px]
          rounded-full
          bg-green-500/10
          blur-[100px]
          md:blur-[140px]
          pointer-events-none
        "
        animate={{
          y: [0, 80, 0],
          scale: [
            1,
            1.12,
            1,
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Container */}
      <div
        className="
          max-w-7xl
          mx-auto
          md:px-6
          relative
          z-20
        "
      >

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            text-center
            mb-16
            md:mb-20
          "
        >

          <h2
            className="
              text-3xl
              md:text-5xl
              font-black
              mb-4
              md:mb-5
              pb-2
              tracking-tight
              flex
              justify-center
              items-center
              gap-2
              md:gap-3
            "
            style={{
              color: 'var(--text-primary)'
            }}
          >

            {/* Left Animated Square */}
            <motion.span
              className="
                w-3.5
                h-3.5
                md:w-4
                md:h-4
                bg-orange-500
                rounded-sm
                shadow-[0_0_12px_rgba(255,122,0,0.8)]
              "
              animate={{
                rotate: 360,
                scale: [
                  1,
                  1.25,
                  1,
                ],
              }}
              transition={{
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                },
              }}
            />

            <span>Our</span>

            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-orange-500
                via-green-500
                to-cyan-500
              "
            >
              Services
            </span>

            {/* Right Animated Square */}
            <motion.span
              className="
                w-3.5
                h-3.5
                md:w-4
                md:h-4
                bg-green-500
                rounded-sm
                shadow-[0_0_12px_rgba(34,197,94,0.8)]
              "
              animate={{
                rotate: -360,
                scale: [
                  1,
                  1.25,
                  1,
                ],
              }}
              transition={{
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                },
              }}
            />
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto
              text-[15px]
              md:text-lg
              font-light
              tracking-wide
              px-4
            "
            style={{
              color: 'var(--text-secondary)'
            }}
          >
            Explore our hands-on technology, academic curriculum and robotics innovation services.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            md:gap-8
          "
        >
          {services.map(
            (service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i}
                isMobile={
                  isMobile
                }
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
