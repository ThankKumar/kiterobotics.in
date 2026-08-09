
// "use client";

// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import { useMemo, useState, useEffect } from "react";

// export default function Hero() {
//   const [isScattered, setIsScattered] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // ==========================================
//   // MOUSE PARALLAX
//   // ==========================================

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springX = useSpring(mouseX, {
//     stiffness: 100,
//     damping: 30,
//   });

//   const springY = useSpring(mouseY, {
//     stiffness: 100,
//     damping: 30,
//   });

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;

//     mouseX.set(
//       (clientX - window.innerWidth / 2) / 20
//     );

//     mouseY.set(
//       (clientY - window.innerHeight / 2) / 20
//     );
//   };

//   // ==========================================
//   // PARALLAX
//   // ==========================================

//   const sphereX = useTransform(
//     springX,
//     (v) => v * -0.5
//   );

//   const sphereY = useTransform(
//     springY,
//     (v) => v * -0.5
//   );

//   const contentX = useTransform(
//     springX,
//     (v) => v * 0.2
//   );

//   const contentY = useTransform(
//     springY,
//     (v) => v * 0.2
//   );

//   const cyberX = useTransform(
//     springX,
//     (v) => v * 1.5
//   );

//   const cyberY = useTransform(
//     springY,
//     (v) => v * 1.5
//   );

//   // ==========================================
//   // TEXT
//   // ==========================================

//   const welcomeText = "Welcome to";
//   const kiteText = "KITE ROBOTICS";

//   // ==========================================
//   // CREATE LETTER POSITIONS
//   // ==========================================

//   const createCharacters = (
//     text,
//     type
//   ) => {
//     return [...text].map(
//       (char, index) => ({
//         char,
//         id: `${type}-${index}`,

//         // Scatter position
//         x:
//           Math.random() * 100 - 50,

//         y:
//           Math.random() * 100 - 50,

//         rotate:
//           Math.random() * 720 - 360,

//         scale:
//           0.5 +
//           Math.random() * 1.5,

//         delay:
//           Math.random() * 0.35,

//         duration:
//           0.8 +
//           Math.random() * 0.7,
//       })
//     );
//   };

//   const welcomeCharacters = useMemo(
//     () =>
//       createCharacters(
//         welcomeText,
//         "welcome"
//       ),
//     []
//   );

//   const kiteCharacters = useMemo(
//     () =>
//       createCharacters(
//         kiteText,
//         "kite"
//       ),
//     []
//   );

//   // ==========================================
//   // EXTRA ALPHABET PARTICLES
//   // ==========================================

//   const alphabetParticles = useMemo(() => {
//     const chars =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

//     return Array.from(
//       { length: 100 },
//       (_, index) => ({
//         id: index,

//         char:
//           chars[
//             Math.floor(
//               Math.random() *
//                 chars.length
//             )
//           ],

//         x:
//           Math.random() * 100,

//         y:
//           Math.random() * 100,

//         targetX:
//           Math.random() * 100,

//         targetY:
//           Math.random() * 100,

//         rotate:
//           Math.random() * 720 - 360,

//         delay:
//           Math.random() * 0.8,

//         duration:
//           1 +
//           Math.random() * 1.2,

//         size:
//           10 +
//           Math.random() * 18,

//         color: [
//           "#00FFFF",
//           "#00BFFF",
//           "#8A2BE2",
//           "#FF00FF",
//           "#00FF88",
//           "#FFFF00",
//         ][
//           Math.floor(
//             Math.random() * 6
//           )
//         ],
//       })
//     );
//   }, []);

//   // ==========================================
//   // HOVER
//   // ==========================================

//   const startScatter = () => {
//     setIsScattered(true);
//   };

//   const stopScatter = () => {
//     setIsScattered(false);
//   };

//   return (
//     <section
//       onMouseMove={handleMouseMove}
//       className="
//         relative
//         min-h-screen
//         flex
//         items-center
//         justify-center
//         overflow-hidden
//       "
//     >
//       {/* ======================================
//           GRID
//       ====================================== */}

//       <div
//         className="
//           absolute
//           inset-0
//           pointer-events-none
//           opacity-[0.03]
//         "
//         style={{
//           backgroundImage:
//             "url('https://www.transparenttextures.com/patterns/cubes.png')",
//         }}
//       />

//       {/* ======================================
//           GLOWING CORE
//       ====================================== */}

//       <motion.div
//         className="
//           absolute
//           top-1/2
//           left-1/2
//           -translate-x-1/2
//           -translate-y-1/2
//           w-[800px]
//           h-[800px]
//           rounded-full
//           border
//           border-blue-500/10
//           pointer-events-none
//           z-0
//         "
//         style={{
//           x: sphereX,
//           y: sphereY,
//         }}
//       >
//         <div
//           className="
//             absolute
//             inset-0
//             rounded-full
//             bg-blue-600/10
//             blur-[100px]
//           "
//         />
//       </motion.div>

//       {/* ======================================
//           ROTATING CYBER CIRCLE
//       ====================================== */}

//       <motion.div
//         className="
//           absolute
//           -top-[10%]
//           -right-[5%]
//           opacity-[0.08]
//           pointer-events-none
//           z-0
//           hidden md:block
//         "
//         animate={{
//           rotate: 360,
//         }}
//         transition={{
//           duration: 40,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         style={{
//           x: cyberX,
//           y: cyberY,
//         }}
//       >
//         <svg
//           width="600"
//           height="600"
//           viewBox="0 0 100 100"
//           fill="none"
//           stroke="#3b82f6"
//           strokeWidth="1"
//         >
//           <circle
//             cx="50"
//             cy="50"
//             r="40"
//             strokeDasharray="5,5"
//           />

//           <circle
//             cx="50"
//             cy="50"
//             r="30"
//           />

//           <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50" />

//           <path d="M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 22 L78 29" />

//           <circle
//             cx="50"
//             cy="50"
//             r="10"
//           />
//         </svg>
//       </motion.div>

//       {/* ======================================
//           🌌 FULL SCREEN ALPHABET
//       ====================================== */}

//       {mounted &&
//         alphabetParticles.map(
//           (particle) => (
//             <motion.span
//               key={particle.id}
//               className="
//                 fixed
//                 pointer-events-none
//                 font-mono
//                 font-bold
//                 z-40
//               "
//               style={{
//                 fontSize:
//                   particle.size,
//                 color:
//                   particle.color,
//                 textShadow: `
//                   0 0 5px ${particle.color},
//                   0 0 15px ${particle.color},
//                   0 0 30px ${particle.color}
//                 `,
//               }}
//               initial={{
//                 left:
//                   `${particle.x}%`,
//                 top:
//                   `${particle.y}%`,
//                 opacity: 0,
//                 scale: 0,
//               }}
//               animate={{
//                 left: isScattered
//                   ? `${particle.targetX}%`
//                   : `${particle.x}%`,

//                 top: isScattered
//                   ? `${particle.targetY}%`
//                   : `${particle.y}%`,

//                 opacity:
//                   isScattered
//                     ? 0.7
//                     : 0,

//                 scale:
//                   isScattered
//                     ? 1
//                     : 0,

//                 rotate:
//                   isScattered
//                     ? particle.rotate
//                     : 0,
//               }}
//               transition={{
//                 duration:
//                   particle.duration,
//                 delay:
//                   isScattered
//                     ? particle.delay
//                     : 0,
//                 ease:
//                   isScattered
//                     ? "easeOut"
//                     : "easeInOut",
//               }}
//             >
//               {particle.char}
//             </motion.span>
//           )
//         )}

//       {/* ======================================
//           MAIN CONTENT
//       ====================================== */}

//       <motion.div
//         className="
//           px-6
//           md:px-12
//           relative
//           z-30
//           w-full
//           text-center
//         "
//         style={{
//           x: contentX,
//           y: contentY,
//         }}
//       >
//         {/* ====================================
//             TEXT INTERACTION AREA
//         ==================================== */}

//         <div
//           className="
//             inline-block
//             relative
//             cursor-pointer
//           "
//           onMouseEnter={startScatter}
//           onMouseLeave={stopScatter}
//           onTouchStart={startScatter}
//           onTouchEnd={stopScatter}
//         >
//           {/* ==================================
//               EXTRA GLOW
//           ================================== */}

//           <motion.div
//             className="
//               absolute
//               inset-[-80px]
//               rounded-full
//               pointer-events-none
//               bg-cyan-400/10
//               blur-[80px]
//             "
//             animate={{
//               opacity:
//                 isScattered
//                   ? 1
//                   : 0,
//               scale:
//                 isScattered
//                   ? 1.3
//                   : 0.8,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//           />

//           {/* ==================================
//               WELCOME TO
//           ================================== */}

//           <motion.h1
//             initial={{
//               opacity: 0,
//               y: 30,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//             className="
//               text-5xl
//               md:text-7xl
//               font-extrabold
//               mb-6
//               tracking-wide
//               select-none
//               relative
//               z-10
//               leading-tight
//             "
//           >
//             {welcomeCharacters.map(
//               (item) => (
//                 <motion.span
//                   key={item.id}
//                   className="
//                     inline-block
//                     whitespace-pre
//                   "
//                   animate={{
//                     x: isScattered
//                       ? `${item.x}vw`
//                       : 0,

//                     y: isScattered
//                       ? `${item.y}vh`
//                       : 0,

//                     rotate:
//                       isScattered
//                         ? item.rotate
//                         : 0,

//                     scale:
//                       isScattered
//                         ? item.scale
//                         : 1,

//                     opacity:
//                       isScattered
//                         ? 0.05
//                         : 1,

//                     filter:
//                       isScattered
//                         ? "blur(2px)"
//                         : "blur(0px)",
//                   }}
//                   transition={{
//                     duration:
//                       item.duration,
//                     delay:
//                       isScattered
//                         ? item.delay
//                         : 0,
//                     ease:
//                       isScattered
//                         ? "easeOut"
//                         : "easeInOut",
//                   }}
//                 >
//                   {item.char}
//                 </motion.span>
//               )
//             )}

//             {" "}

//             {/* ==================================
//                 KITE ROBOTICS
//             ================================== */}

//             <span
//               className="
//                 inline-flex
//                 bg-gradient-to-r
//                 from-blue-400
//                 via-cyan-300
//                 to-blue-400
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               {kiteCharacters.map(
//                 (item) => (
//                   <motion.span
//                     key={item.id}
//                     className="
//                       inline-block
//                       whitespace-pre
//                     "
//                     animate={{
//                       x: isScattered
//                         ? `${item.x}vw`
//                         : 0,

//                       y: isScattered
//                         ? `${item.y}vh`
//                         : 0,

//                       rotate:
//                         isScattered
//                           ? item.rotate
//                           : 0,

//                       scale:
//                         isScattered
//                           ? item.scale
//                           : 1,

//                       opacity:
//                         isScattered
//                           ? 0.05
//                           : 1,

//                       filter:
//                         isScattered
//                           ? "blur(2px)"
//                           : "blur(0px)",
//                     }}
//                     transition={{
//                       duration:
//                         item.duration,
//                       delay:
//                         isScattered
//                           ? item.delay
//                           : 0,
//                       ease:
//                         isScattered
//                           ? "easeOut"
//                           : "easeInOut",
//                     }}
//                   >
//                     {item.char}
//                   </motion.span>
//                 )
//               )}
//             </span>
//           </motion.h1>
//         </div>

//         {/* ======================================
//             DESCRIPTION
//         ====================================== */}

//         <motion.p
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 1,
//             delay: 0.3,
//           }}
//           className="
//             text-lg
//             md:text-xl
//             text-blue-200/80
//             max-w-2xl
//             mx-auto
//             mb-10
//             font-light
//           "
//         >
//           Empowering Innovation with{" "}
//           <span className="font-semibold text-white">
//             Robotics
//           </span>
//           ,{" "}
//           <span className="font-semibold text-white">
//             AI
//           </span>{" "}
//           &{" "}
//           <span className="font-semibold text-white">
//             IoT
//           </span>
//           .
//         </motion.p>

//         {/* ======================================
//             BUTTONS
//         ====================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.9,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//           }}
//           transition={{
//             duration: 1,
//             delay: 0.6,
//           }}
//           className="
//             flex
//             flex-col
//             sm:flex-row
//             justify-center
//             gap-6
//           "
//         >
//           <a
//             href="#products"
//             className="
//               px-8
//               py-3.5
//               bg-blue-600
//               text-white
//               font-bold
//               rounded-xl
//               shadow-[0_0_20px_rgba(59,130,246,0.4)]
//               hover:shadow-[0_0_35px_rgba(59,130,246,0.8)]
//               transition-all
//               duration-300
//               uppercase
//               tracking-widest
//               text-sm
//               relative
//               overflow-hidden
//               group
//             "
//           >
//             <span className="relative z-10">
//               Initialize Sequence
//             </span>

//             <div
//               className="
//                 absolute
//                 inset-0
//                 bg-white/20
//                 translate-x-[-100%]
//                 group-hover:translate-x-0
//                 transition-transform
//                 duration-500
//                 pointer-events-none
//               "
//             />
//           </a>

//           <a
//             href="#contact"
//             className="
//               px-8
//               py-3.5
//               border
//               border-blue-500/50
//               text-blue-300
//               font-bold
//               rounded-xl
//               hover:bg-blue-600/10
//               hover:text-white
//               hover:border-blue-400
//               transition-all
//               duration-300
//               uppercase
//               tracking-widest
//               text-sm
//             "
//           >
//             Contact Grid
//           </a>
//         </motion.div>
//       </motion.div>

//       {/* ======================================
//           SCANLINE
//       ====================================== */}

//       <div
//         className="
//           absolute
//           inset-x-0
//           h-40
//           pointer-events-none
//           z-20
//           animate-scanline
//         "
//       />

//       <style jsx>{`
//         @keyframes scanline {
//           0% {
//             transform: translateY(-100%);
//             opacity: 0;
//           }

//           50% {
//             opacity: 0.25;
//           }

//           100% {
//             transform: translateY(100vh);
//             opacity: 0;
//           }
//         }

//         .animate-scanline {
//           animation: scanline 8s
//             linear infinite;

//           background: linear-gradient(
//             to bottom,
//             transparent,
//             rgba(
//               0,
//               220,
//               255,
//               0.15
//             ),
//             transparent
//           );
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  useState,
  useRef,
  useEffect,
  useMemo,
} from "react";

export default function Hero() {
  const [isScattered, setIsScattered] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ==========================================
  // MOUSE PARALLAX
  // ==========================================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 30,
  });

  const springY = useSpring(mouseY, {
    stiffness: 100,
    damping: 30,
  });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const centerX =
      window.innerWidth / 2;

    const centerY =
      window.innerHeight / 2;

    mouseX.set(
      (clientX - centerX) / 20
    );

    mouseY.set(
      (clientY - centerY) / 20
    );
  };

  // ==========================================
  // PARALLAX
  // ==========================================

  const sphereX = useTransform(
    springX,
    (value) => value * -0.5
  );

  const sphereY = useTransform(
    springY,
    (value) => value * -0.5
  );

  const contentX = useTransform(
    springX,
    (value) => value * 0.2
  );

  const contentY = useTransform(
    springY,
    (value) => value * 0.2
  );

  const cyberX = useTransform(
    springX,
    (value) => value * 1.5
  );

  const cyberY = useTransform(
    springY,
    (value) => value * 1.5
  );

  // ==========================================
  // CREATE SCATTER DATA
  // ==========================================

  const createCharacters = (
    text,
    prefix
  ) => {
    return [...text].map(
      (char, index) => ({
        id: `${prefix}-${index}`,

        char,

        // Full screen movement
        x:
          Math.random() * 180 -
          90,

        y:
          Math.random() * 140 -
          70,

        rotate:
          Math.random() * 720 -
          360,

        scale:
          0.6 +
          Math.random() * 1.2,

        delay:
          Math.random() * 0.35,

        duration:
          0.9 +
          Math.random() * 0.8,
      })
    );
  };

  // ==========================================
  // WELCOME TO CHARACTERS
  // ==========================================

  const welcomeCharacters =
    useMemo(
      () =>
        createCharacters(
          "Welcome to",
          "welcome"
        ),
      []
    );

  // ==========================================
  // KITE ROBOTICS CHARACTERS
  // ==========================================

  const kiteCharacters =
    useMemo(
      () =>
        createCharacters(
          "KITE ROBOTICS",
          "kite"
        ),
      []
    );

  // ==========================================
  // EXTRA ALPHABET PARTICLES
  // ==========================================

  const alphabetParticles =
    useMemo(() => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

      const particleColors = [
        "#00FFFF",
        "#00BFFF",
        "#0080FF",
        "#8A2BE2",
        "#FF00FF",
        "#FF1493",
        "#00FF88",
        "#39FF14",
        "#FFFF00",
        "#FF8C00",
      ];

      return Array.from(
        { length: 100 },
        (_, index) => ({
          id: index,

          character:
            characters[
              Math.floor(
                Math.random() *
                  characters.length
              )
            ],

          startX:
            Math.random() * 100,

          startY:
            Math.random() * 100,

          endX:
            Math.random() * 100,

          endY:
            Math.random() * 100,

          rotate:
            Math.random() * 720 -
            360,

          delay:
            Math.random() * 0.8,

          duration:
            0.8 +
            Math.random() * 1.5,

          size:
            10 +
            Math.random() * 18,

          color:
            particleColors[
              Math.floor(
                Math.random() *
                  particleColors.length
              )
            ],
        })
      );
    }, []);

  // ==========================================
  // START SCATTER
  // ==========================================

  const handleEnter = () => {
    setIsScattered(true);
  };

  // ==========================================
  // STOP SCATTER
  // ==========================================

  const handleLeave = () => {
    setIsScattered(false);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* ======================================
          GRID BACKGROUND
      ====================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.03]
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
        }}
      />

      {/* ======================================
          PARALLAX CORE SPHERE
      ====================================== */}

      <motion.div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[800px]
          h-[800px]
          rounded-full
          border
          border-blue-500/10
          pointer-events-none
          z-0
        "
        style={{
          x: sphereX,
          y: sphereY,
        }}
      >
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-blue-600/10
            blur-[100px]
          "
        />
      </motion.div>

      {/* ======================================
          FUTURISTIC PARTICLES
      ====================================== */}

      {mounted &&
        [...Array(15)].map(
          (_, index) => (
            <motion.div
              key={index}
              className="
                absolute
                w-1
                h-1
                bg-blue-400
                rounded-full
                shadow-[0_0_8px_rgba(59,130,246,0.8)]
                pointer-events-none
                z-0
              "
              initial={{
                x:
                  Math.random() *
                  window.innerWidth,

                y:
                  Math.random() *
                  window.innerHeight,

                opacity:
                  Math.random() *
                    0.5 +
                  0.2,
              }}
              animate={{
                y: [
                  null,
                  Math.random() *
                    -200 -
                    100,
                ],

                opacity: [
                  null,
                  0,
                  0.8,
                  0,
                ],
              }}
              transition={{
                duration:
                  Math.random() * 5 +
                  5,

                repeat: Infinity,

                ease: "linear",

                delay:
                  Math.random() * 2,
              }}
            />
          )
        )}

      {/* ======================================
          ROTATING CYBERNETIC SVG
      ====================================== */}

      <motion.div
        className="
          absolute
          -top-[10%]
          -right-[5%]
          opacity-[0.08]
          pointer-events-none
          z-0
          hidden
          md:block
        "
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          x: cyberX,
          y: cyberY,
        }}
      >
        <svg
          width="600"
          height="600"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            strokeDasharray="5,5"
          />

          <circle
            cx="50"
            cy="50"
            r="30"
          />

          <path d="M50 10 L50 20 M50 80 L50 90 M10 50 L20 50 M80 50 L90 50" />

          <path d="M22 22 L29 29 M71 71 L78 78 M22 78 L29 71 M71 22 L78 29" />

          <circle
            cx="50"
            cy="50"
            r="10"
          />
        </svg>
      </motion.div>

      {/* ======================================
          🌈 FULL SCREEN ALPHABET PARTICLES
      ====================================== */}

      {mounted &&
        alphabetParticles.map(
          (particle) => (
            <motion.span
              key={particle.id}
              className="
                fixed
                pointer-events-none
                font-mono
                font-bold
                z-40
              "
              style={{
                fontSize:
                  `${particle.size}px`,

                color:
                  particle.color,

                textShadow: `
                  0 0 5px ${particle.color},
                  0 0 12px ${particle.color},
                  0 0 25px ${particle.color}
                `,
              }}
              initial={{
                left:
                  `${particle.startX}%`,

                top:
                  `${particle.startY}%`,

                opacity: 0,

                scale: 0,
              }}
              animate={{
                left: isScattered
                  ? `${particle.endX}%`
                  : `${particle.startX}%`,

                top: isScattered
                  ? `${particle.endY}%`
                  : `${particle.startY}%`,

                opacity:
                  isScattered
                    ? 0.75
                    : 0,

                scale:
                  isScattered
                    ? 1
                    : 0,

                rotate:
                  isScattered
                    ? particle.rotate
                    : 0,
              }}
              transition={{
                duration:
                  particle.duration,

                delay:
                  isScattered
                    ? particle.delay
                    : 0,

                ease:
                  isScattered
                    ? "easeOut"
                    : "easeInOut",
              }}
            >
              {particle.character}
            </motion.span>
          )
        )}

      {/* ======================================
          MAIN CONTENT
      ====================================== */}

      <motion.div
        className="
          px-6
          md:px-12
          relative
          z-50
          w-full
          text-center
        "
        style={{
          x: contentX,
          y: contentY,
        }}
      >
        {/* ====================================
            INTERACTIVE HEADING
        ==================================== */}

        <div
          className="
            inline-block
            relative
            cursor-pointer
          "
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onTouchStart={handleEnter}
          onTouchEnd={handleLeave}
          onTouchCancel={handleLeave}
        >
          {/* ==================================
              BIG GLOW
          ================================== */}

          <motion.div
            className="
              absolute
              -inset-20
              rounded-full
              bg-cyan-400/10
              blur-[100px]
              pointer-events-none
            "
            animate={{
              opacity:
                isScattered ? 1 : 0,

              scale:
                isScattered
                  ? 1.4
                  : 0.8,
            }}
            transition={{
              duration: 0.5,
            }}
          />

          {/* ==================================
              HEADING
          ================================== */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              mb-6
              tracking-wide
              select-none
              relative
              z-50
              leading-tight
            "
          >
            {/* ==================================
                WELCOME TO
            ================================== */}

            <span className="inline-flex">
              {welcomeCharacters.map(
                (item) => (
                  <motion.span
                    key={item.id}
                    className="
                      inline-block
                      whitespace-pre
                    "
                    animate={{
                      x: isScattered
                        ? `${item.x}vw`
                        : 0,

                      y: isScattered
                        ? `${item.y}vh`
                        : 0,

                      rotate:
                        isScattered
                          ? item.rotate
                          : 0,

                      scale:
                        isScattered
                          ? item.scale
                          : 1,

                      opacity:
                        isScattered
                          ? 0
                          : 1,

                      filter:
                        isScattered
                          ? "blur(4px)"
                          : "blur(0px)",
                    }}
                    transition={{
                      duration:
                        item.duration,

                      delay:
                        isScattered
                          ? item.delay
                          : 0,

                      ease:
                        isScattered
                          ? [
                              0.2,
                              0.8,
                              0.3,
                              1,
                            ]
                          : [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                    }}
                  >
                    {item.char}
                  </motion.span>
                )
              )}
            </span>

            {" "}

            {/* ==================================
                KITE ROBOTICS
            ================================== */}

            <span className="inline-flex">
              {kiteCharacters.map(
                (item) => (
                  <motion.span
                    key={item.id}
                    className="
                      inline-block
                      whitespace-pre
                      bg-gradient-to-r
                      from-blue-400
                      via-cyan-300
                      to-blue-400
                      bg-clip-text
                      text-transparent
                    "
                    animate={{
                      x: isScattered
                        ? `${item.x}vw`
                        : 0,

                      y: isScattered
                        ? `${item.y}vh`
                        : 0,

                      rotate:
                        isScattered
                          ? item.rotate
                          : 0,

                      scale:
                        isScattered
                          ? item.scale
                          : 1,

                      opacity:
                        isScattered
                          ? 0
                          : 1,

                      filter:
                        isScattered
                          ? "blur(4px)"
                          : "blur(0px)",
                    }}
                    transition={{
                      duration:
                        item.duration,

                      delay:
                        isScattered
                          ? item.delay
                          : 0,

                      ease:
                        isScattered
                          ? [
                              0.2,
                              0.8,
                              0.3,
                              1,
                            ]
                          : [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                    }}
                  >
                    {item.char}
                  </motion.span>
                )
              )}
            </span>
          </motion.h1>
        </div>

        {/* ======================================
            DESCRIPTION
        ====================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="
            text-lg
            md:text-xl
            text-blue-200/80
            max-w-2xl
            mx-auto
            mb-10
            font-light
          "
        >
          Empowering Innovation with{" "}
          <span className="font-semibold text-white">
            Robotics
          </span>
          ,{" "}
          <span className="font-semibold text-white">
            AI
          </span>{" "}
          &{" "}
          <span className="font-semibold text-white">
            IoT
          </span>
          .
        </motion.p>

        {/* ======================================
            BUTTONS
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-6
          "
        >
          {/* INITIALIZE */}

          <a
            href="#products"
            className="
              px-8
              py-3.5
              bg-blue-600
              text-white
              font-bold
              rounded-xl
              shadow-[0_0_20px_rgba(59,130,246,0.4)]
              hover:shadow-[0_0_35px_rgba(59,130,246,0.8)]
              transition-all
              duration-300
              uppercase
              tracking-widest
              text-sm
              relative
              overflow-hidden
              group
            "
          >
            <span className="relative z-10">
              Initialize Sequence
            </span>

            <div
              className="
                absolute
                inset-0
                bg-white/20
                translate-x-[-100%]
                group-hover:translate-x-0
                transition-transform
                duration-500
                pointer-events-none
              "
            />
          </a>

          {/* CONTACT */}

          <a
            href="#contact"
            className="
              px-8
              py-3.5
              border
              border-blue-500/50
              text-blue-300
              font-bold
              rounded-xl
              hover:bg-blue-600/10
              hover:text-white
              hover:border-blue-400
              transition-all
              duration-300
              uppercase
              tracking-widest
              text-sm
            "
          >
            Contact Grid
          </a>
        </motion.div>
      </motion.div>

      {/* ======================================
          SCAN LINE
      ====================================== */}

      <div
        className="
          absolute
          inset-x-0
          h-40
          pointer-events-none
          z-20
          animate-scanline
        "
      />

      {/* ======================================
          CSS
      ====================================== */}

      <style jsx>{`
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }

          50% {
            opacity: 0.25;
          }

          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        .animate-scanline {
          animation:
            scanline 8s linear infinite;

          background: linear-gradient(
            to bottom,
            transparent,
            rgba(
              0,
              220,
              255,
              0.15
            ),
            transparent
          );
        }
      `}</style>
    </section>
  );
}
