"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    title: "Robotics & AI",
    symbol: "AI",
  },
  {
    title: "Academic Support",
    symbol: "AS",
  },
  {
    title: "Curriculum Support",
    symbol: "CS",
  },
  {
    title: "Workshops",
    symbol: "WS",
  },
  {
    title: "3D Printing",
    symbol: "3D",
  },
  {
    title: "IT Support",
    symbol: "IT",
  },
  {
    title: "R&D Support",
    symbol: "R&D",
  },
  {
    title: "Atal Tinker Lab Setup",
    symbol: "ATL",
  },
];

const WHATSAPP_LINK =
  "https://wa.me/919564866985?text=Hello%20Sir%2C%20I%20am%20contacting%20you%20via%20WhatsApp";

/* =========================================================
   HOLOGRAM PARTICLES
========================================================= */

const HologramParticles = ({ isHovered }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      endX: (Math.random() - 0.5) * 220,
      endY: (Math.random() - 0.5) * 220,
      size: Math.random() * 3 + 1,
      duration: 0.8 + Math.random() * 1.5,
      delay: Math.random() * 0.5,
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-400 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
          }}
          initial={{
            opacity: 0,
            x: 0,
            y: 0,
          }}
          animate={
            isHovered
              ? {
                  opacity: [0, 1, 0],
                  x: [0, p.endX, 0],
                  y: [0, p.endY, 0],
                }
              : {
                  opacity: 0,
                  x: 0,
                  y: 0,
                }
          }
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: isHovered ? Infinity : 0,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* =========================================================
   ANIMATED SERVICE CORE
========================================================= */

function AnimatedServiceCore({ service, isHovered }) {
  return (
    <div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">

      {/* Outer Glow */}
      <motion.div
        className="absolute w-28 h-28 md:w-32 md:h-32 rounded-full bg-cyan-400/5 blur-2xl"
        animate={{
          scale: isHovered ? [1, 1.3, 1] : [1, 1.12, 1],
          opacity: isHovered
            ? [0.3, 0.8, 0.3]
            : [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-cyan-400/30"
        animate={{
          rotate: 360,
          scale: isHovered ? [1, 1.08, 1] : 1,
        }}
        transition={{
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Purple Ring */}
      <motion.div
        className="absolute inset-2 rounded-full border border-purple-500/30"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Dashed Ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-dashed border-cyan-400/50"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Small Orbit Ring */}
      <motion.div
        className="absolute inset-7 rounded-full border border-purple-400/20"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Central Reactor */}
      <motion.div
        className="
          relative
          w-16 h-16
          md:w-20 md:h-20
          rounded-full
          flex
          items-center
          justify-center
          bg-[#061522]
          border
          border-cyan-400/70
          shadow-[0_0_20px_rgba(0,200,255,0.5)]
          z-20
          overflow-hidden
        "
        animate={{
          scale: isHovered
            ? [1, 1.12, 1]
            : [1, 1.04, 1],
          boxShadow: isHovered
            ? [
                "0 0 20px rgba(0,200,255,0.5)",
                "0 0 45px rgba(0,200,255,1)",
                "0 0 20px rgba(0,200,255,0.5)",
              ]
            : [
                "0 0 15px rgba(0,200,255,0.3)",
                "0 0 25px rgba(0,200,255,0.6)",
                "0 0 15px rgba(0,200,255,0.3)",
              ],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        {/* Core Gradient */}
        <motion.div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-400/20
            via-transparent
            to-purple-500/30
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Central Symbol */}
        <motion.span
          className="
            relative
            z-10
            text-cyan-300
            font-black
            text-xs
            md:text-sm
            tracking-widest
          "
          animate={{
            opacity: [0.65, 1, 0.65],
            textShadow: [
              "0 0 5px rgba(0,200,255,0.4)",
              "0 0 20px rgba(0,200,255,1)",
              "0 0 5px rgba(0,200,255,0.4)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {service.symbol}
        </motion.span>

        {/* Core Scan Line */}
        <motion.div
          className="
            absolute
            left-0
            right-0
            h-[2px]
            bg-cyan-300/70
            blur-[1px]
          "
          animate={{
            top: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Orbit Dot 1 */}
      <motion.div
        className="
          absolute
          w-2
          h-2
          rounded-full
          bg-cyan-300
          shadow-[0_0_12px_rgba(0,255,255,1)]
        "
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          offsetPath: "ellipse(45px 45px at center)",
        }}
      />

      {/* Orbit Dot 2 */}
      <motion.div
        className="
          absolute
          w-1.5
          h-1.5
          rounded-full
          bg-purple-400
          shadow-[0_0_10px_rgba(168,85,247,1)]
        "
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Top Indicator */}
      <motion.span
        className="
          absolute
          top-0
          left-5
          text-[9px]
          text-cyan-400
        "
        animate={{
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        +
      </motion.span>

      {/* Bottom Indicator */}
      <motion.span
        className="
          absolute
          bottom-1
          right-5
          text-[9px]
          text-purple-400
        "
        animate={{
          opacity: [1, 0.2, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
      >
        +
      </motion.span>
    </div>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({ service, index, isMobile }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);
  const cardRef = useRef(null);

  /* Magnetic movement */
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  /* 3D Tilt */
  const rotateX = useTransform(
    y,
    [-100, 100],
    isMobile ? [0, 0] : [18, -18]
  );

  const rotateY = useTransform(
    x,
    [-100, 100],
    isMobile ? [0, 0] : [-18, 18]
  );

  /* Inner Parallax */
  const innerX = useTransform(
    x,
    [-100, 100],
    isMobile ? [0, 0] : [-8, 8]
  );

  const innerY = useTransform(
    y,
    [-100, 100],
    isMobile ? [0, 0] : [-8, 8]
  );

  /* Mouse Movement */
  function handleMouse(event) {
    if (isMobile || !cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    x.set(
      event.clientX -
        rect.left -
        rect.width / 2
    );

    y.set(
      event.clientY -
        rect.top -
        rect.height / 2
    );
  }

  /* Mouse Leave */
  function handleMouseLeave() {
    if (isMobile) return;

    x.set(0);
    y.set(0);
    setIsHovered(false);
  }

  /* Ripple Click */
  function handleRipple(event) {
    if (!cardRef.current) return;

    const rect =
      cardRef.current.getBoundingClientRect();

    const rippleX =
      event.clientX - rect.left;

    const rippleY =
      event.clientY - rect.top;

    const newRipple = {
      x: rippleX,
      y: rippleY,
      id: Date.now(),
    };

    setRipples((prev) => [
      ...prev,
      newRipple,
    ]);

    setTimeout(() => {
      setRipples((prev) =>
        prev.filter(
          (r) => r.id !== newRipple.id
        )
      );
    }, 700);
  }

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX,
        rotateY,
        perspective: 1500,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={() =>
        !isMobile &&
        setIsHovered(true)
      }
      onMouseLeave={handleMouseLeave}
      onClick={handleRipple}
      initial={{
        opacity: 0,
        y: isMobile ? 20 : 50,
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
        delay:
          isMobile
            ? 0
            : (index % 4) * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileTap={
        isMobile
          ? {
              scale: 0.98,
            }
          : undefined
      }
      className={`
        group
        relative
        rounded-2xl
        cursor-pointer
        w-full
        mb-6
        md:mb-0
        ${!isMobile
          ? "transform-style-3d"
          : ""}
      `}
    >

      {/* Magnetic Glow */}
      {!isMobile && (
        <motion.div
          className="
            absolute
            -inset-1
            rounded-2xl
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-600
            blur-2xl
            pointer-events-none
          "
          animate={
            isHovered
              ? {
                  opacity: [
                    0.2,
                    0.7,
                    0.2,
                  ],
                }
              : {
                  opacity: 0,
                }
          }
          transition={{
            duration: 2,
            repeat:
              isHovered
                ? Infinity
                : 0,
          }}
        />
      )}

      {/* Card */}
      <div
        className={`
          relative
          flex
          flex-col
          h-full
          min-h-[360px]
          bg-[#03060d]/75
          backdrop-blur-xl
          border
          border-cyan-500/20
          md:group-hover:border-cyan-400/80
          rounded-2xl
          overflow-hidden
          transition-all
          duration-500
          shadow-[0_8px_30px_rgb(0,0,0,0.5)]
          md:group-hover:shadow-[0_0_35px_rgba(0,200,255,0.15)]
          z-10
          ${!isMobile
            ? "transform-style-3d"
            : ""}
        `}
      >

        {/* Circuit Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            pointer-events-none
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.5) 1px, transparent 1px)",
            backgroundSize:
              "20px 20px",
          }}
        />

        {/* Scanline */}
        {!isMobile && (
          <motion.div
            className="
              absolute
              left-0
              right-0
              h-[2px]
              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
              pointer-events-none
              z-10
            "
            animate={{
              top: [
                "0%",
                "100%",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}

        {/* Ripple */}
        {ripples.map((rip) => (
          <motion.div
            key={rip.id}
            className="
              absolute
              rounded-full
              bg-cyan-400/30
              pointer-events-none
              z-30
              mix-blend-screen
            "
            style={{
              left: rip.x,
              top: rip.y,
            }}
            initial={{
              width: 0,
              height: 0,
              x: "-50%",
              y: "-50%",
              opacity: 1,
            }}
            animate={{
              width: isMobile
                ? 300
                : 450,
              height: isMobile
                ? 300
                : 450,
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Animated Core */}
        <div
          className="
            w-full
            flex
            justify-center
            items-center
            pt-8
            md:pt-10
            pb-4
            relative
            z-20
          "
        >
          {!isMobile && (
            <HologramParticles
              isHovered={isHovered}
            />
          )}

          <motion.div
            style={
              isMobile
                ? {}
                : {
                    x: innerX,
                    y: innerY,
                  }
            }
            whileHover={
              !isMobile
                ? {
                    scale: 1.08,
                  }
                : {}
            }
            transition={{
              duration: 0.4,
            }}
          >
            <AnimatedServiceCore
              service={service}
              isHovered={isHovered}
            />
          </motion.div>
        </div>

        {/* Service Name + Button */}
        <motion.div
          style={
            isMobile
              ? {}
              : {
                  x: innerX,
                  y: innerY,
                }
          }
          className="
            px-5
            pb-7
            flex
            flex-col
            flex-1
            text-center
            items-center
            z-20
            relative
          "
        >

          {/* Service Name */}
          <motion.h4
            className="
              text-[15px]
              md:text-lg
              font-bold
              mb-6
              text-white/95
              md:group-hover:text-cyan-400
              transition-colors
              uppercase
              tracking-widest
              min-h-[48px]
              flex
              items-center
              justify-center
            "
            animate={
              isHovered
                ? {
                    letterSpacing:
                      "0.18em",
                  }
                : {}
            }
            transition={{
              duration: 0.3,
            }}
          >
            {service.title}
          </motion.h4>

          {/* Button */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            onClick={(e) =>
              e.stopPropagation()
            }
            rel="noopener noreferrer"
            whileHover={
              !isMobile
                ? {
                    scale: 1.05,
                    boxShadow:
                      "0 0 25px rgba(0,200,255,0.8)",
                  }
                : {}
            }
            whileTap={{
              scale: 0.95,
            }}
            className="
              mt-auto
              relative
              z-30
              px-5
              flex
              items-center
              justify-center
              h-[44px]
              w-full
              max-w-[200px]
              rounded-xl
              bg-[#0a101f]
              md:bg-white/5
              md:backdrop-blur-sm
              border
              border-cyan-500/30
              text-[11px]
              md:text-[10px]
              tracking-widest
              uppercase
              font-bold
              text-cyan-400
              md:text-gray-300
              md:group-hover:bg-cyan-500
              md:group-hover:text-black
              md:group-hover:border-cyan-400
              transition-all
              duration-300
            "
          >
            Initialize Base
          </motion.a>
        </motion.div>

        {/* Animated Bottom Energy Line */}
        <motion.div
          className="
            absolute
            bottom-0
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-cyan-400
            to-transparent
          "
          animate={{
            width: [
              "0%",
              "100%",
              "0%",
            ],
            left: [
              "0%",
              "0%",
              "100%",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay:
              index * 0.15,
          }}
        />

        {/* Corner Decorations */}
        <div
          className="
            absolute
            top-3
            left-3
            w-5
            h-5
            border-l
            border-t
            border-cyan-400/40
          "
        />

        <div
          className="
            absolute
            top-3
            right-3
            w-5
            h-5
            border-r
            border-t
            border-purple-400/40
          "
        />

        <div
          className="
            absolute
            bottom-3
            left-3
            w-5
            h-5
            border-l
            border-b
            border-purple-400/40
          "
        />

        <div
          className="
            absolute
            bottom-3
            right-3
            w-5
            h-5
            border-r
            border-b
            border-cyan-400/40
          "
        />
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
        py-20
        md:p-6
        md:py-24
        min-h-screen
        bg-[#03060d]
        overflow-hidden
      "
    >

      {/* Top Gradient */}
      <div
        className="
          absolute
          inset-x-0
          h-40
          top-0
          bg-gradient-to-b
          from-[#050914]
          to-transparent
          pointer-events-none
          z-10
        "
      />

      {/* Purple Background Orb */}
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
          bg-purple-600/10
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

      {/* Cyan Background Orb */}
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
          bg-cyan-600/10
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
              font-extrabold
              mb-4
              md:mb-5
              pb-2
              tracking-tight
              text-white
              flex
              justify-center
              items-center
              gap-2
              md:gap-3
            "
          >

            {/* Left Animated Square */}
            <motion.span
              className="
                w-4
                h-4
                md:w-5
                md:h-5
                bg-cyan-400
                rounded-sm
                shadow-[0_0_15px_rgba(0,200,255,0.8)]
              "
              animate={{
                rotate: 360,
                scale: [
                  1,
                  1.3,
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

            Holographic

            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-purple-500
              "
            >
              Nexus
            </span>

            {/* Right Animated Square */}
            <motion.span
              className="
                w-4
                h-4
                md:w-5
                md:h-5
                bg-purple-500
                rounded-sm
                shadow-[0_0_15px_rgba(168,85,247,0.8)]
              "
              animate={{
                rotate: -360,
                scale: [
                  1,
                  1.3,
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
              text-cyan-100/50
              max-w-2xl
              mx-auto
              text-[15px]
              md:text-lg
              font-light
              tracking-wide
              px-4
            "
          >
            Explore our technology,
            academic and innovation
            services.
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
