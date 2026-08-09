// // "use client";
// // import { motion } from "framer-motion";
// // import { Cpu, Bot, Wifi, Activity, BrainCircuit } from "lucide-react";

// // const products = [
// //   {
// //     icon: <Cpu size={40} className="text-blue-400" />,
// //     title: "Arduino Kits",
// //     desc: "Complete starter kits with microcontrollers, breadboards, and essential components for beginners.",
// //   },
// //   {
// //     icon: <Bot size={40} className="text-purple-400" />,
// //     title: "Robotics Kits",
// //     desc: "Advanced chassis, motors, and controllers to build your own autonomous rovers.",
// //   },
// //   {
// //     icon: <Wifi size={40} className="text-pink-400" />,
// //     title: "IoT Modules",
// //     desc: "ESP8266/ESP32 boards and relays to connect your hardware to the global network.",
// //   },
// //   {
// //     icon: <Activity size={40} className="text-green-400" />,
// //     title: "Sensors Pack",
// //     desc: "Ultrasonic, IR, temperature, and motion sensors for comprehensive data collection.",
// //   },
// //   {
// //     icon: <BrainCircuit size={40} className="text-yellow-400" />,
// //     title: "AI Learning Kits",
// //     desc: "Vision and edge-computing modules for implementing machine learning on edge devices.",
// //   },
// // ];

// // export default function Products() {
// //   return (
// //     <section id="products" className="py-20 relative bg-[#050914] text-white overflow-hidden">
// //       {/* Background Decor */}
// //       <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
// //       <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
// //       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-extrabold mb-4 pb-2 tracking-tight">
// //             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Robotics</span> Products
// //           </h2>
// //           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
// //             High-performance hardware for your next big innovation.
// //           </p>
// //         </motion.div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
// //           {products.map((product, idx) => (
// //             <motion.div
// //               key={idx}
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.5, delay: idx * 0.1 }}
// //               whileHover={{ y: -10, scale: 1.02 }}
// //               className="group relative bg-[#0a101f] border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300"
// //             >
// //               {/* Glowing Border effect on hover */}
// //               <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-300 pointer-events-none shadow-[0_0_0_transparent] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
              
// //               <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700 group-hover:border-blue-500/50 transition-colors shadow-inner">
// //                 {product.icon}
// //               </div>
// //               <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors relative z-10">{product.title}</h3>
// //               <p className="text-sm text-gray-400 mb-6 flex-1 relative z-10">{product.desc}</p>
              
// //               <button className="mt-auto relative z-10 px-5 py-2 w-full rounded-lg bg-[#141d33] border border-gray-700 text-sm font-semibold text-gray-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
// //                 View Details
// //               </button>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }





// "use client";

// import { motion } from "framer-motion";
// import {
//   Cpu,
//   Bot,
//   Wifi,
//   Activity,
//   BrainCircuit,
// } from "lucide-react";

// const products = [
//   {
//     icon: <Cpu size={38} />,
//     type: "arduino",
//     title: "Arduino Kits",
//     desc: "Complete starter kits with microcontrollers, breadboards, and essential components for beginners.",
//   },
//   {
//     icon: <Bot size={38} />,
//     type: "robot",
//     title: "Robotics Kits",
//     desc: "Advanced chassis, motors, and controllers to build your own autonomous rovers.",
//   },
//   {
//     icon: <Wifi size={38} />,
//     type: "iot",
//     title: "IoT Modules",
//     desc: "ESP8266/ESP32 boards and relays to connect your hardware to the global network.",
//   },
//   {
//     icon: <Activity size={38} />,
//     type: "sensor",
//     title: "Sensors Pack",
//     desc: "Ultrasonic, IR, temperature, and motion sensors for comprehensive data collection.",
//   },
//   {
//     icon: <BrainCircuit size={38} />,
//     type: "ai",
//     title: "AI Learning Kits",
//     desc: "Vision and edge-computing modules for implementing machine learning on edge devices.",
//   },
// ];

// /* =========================================================
//    3D PRODUCT VISUAL
// ========================================================= */

// function ProductVisual({ type }) {
//   if (type === "arduino") {
//     return (
//       <div className="product-visual">
//         <motion.div
//           className="arduino-board"
//           animate={{
//             rotateY: [0, 12, -12, 0],
//             rotateX: [0, -5, 5, 0],
//             y: [0, -5, 0],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <div className="chip" />

//           <div className="usb" />

//           <div className="arduino-led" />

//           <div className="pin-row top">
//             {Array.from({ length: 8 }).map((_, i) => (
//               <span key={i} />
//             ))}
//           </div>

//           <div className="pin-row bottom">
//             {Array.from({ length: 8 }).map((_, i) => (
//               <span key={i} />
//             ))}
//           </div>
//         </motion.div>

//         <div className="circuit-line line-1" />
//         <div className="circuit-line line-2" />
//         <div className="circuit-line line-3" />
//       </div>
//     );
//   }

//   if (type === "robot") {
//     return (
//       <div className="product-visual">
//         <motion.div
//           className="robot-3d"
//           animate={{
//             rotateY: [0, 20, -20, 0],
//             y: [0, -8, 0],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <div className="robot-body">
//             <div className="robot-screen">
//               <span />
//               <span />
//             </div>
//           </div>

//           <div className="robot-wheel left" />
//           <div className="robot-wheel right" />

//           <div className="robot-sensor">
//             <i />
//             <i />
//           </div>
//         </motion.div>

//         <motion.div
//           className="scan-line"
//           animate={{
//             opacity: [0, 1, 0],
//             scaleX: [0.3, 1, 0.3],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//           }}
//         />
//       </div>
//     );
//   }

//   if (type === "iot") {
//     return (
//       <div className="product-visual">
//         <motion.div
//           className="iot-board"
//           animate={{
//             rotateY: [0, 15, -15, 0],
//             rotateX: [0, 5, -5, 0],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <div className="iot-chip" />

//           <div className="iot-antenna">
//             <span />
//             <span />
//             <span />
//           </div>

//           <div className="iot-led" />

//           <div className="iot-pins">
//             {Array.from({ length: 12 }).map((_, i) => (
//               <span key={i} />
//             ))}
//           </div>
//         </motion.div>

//         {/* WiFi rings */}

//         <motion.div
//           className="wifi-ring ring-1"
//           animate={{
//             scale: [0.7, 1.4],
//             opacity: [0.8, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//           }}
//         />

//         <motion.div
//           className="wifi-ring ring-2"
//           animate={{
//             scale: [0.7, 1.5],
//             opacity: [0.7, 0],
//           }}
//           transition={{
//             duration: 2,
//             delay: 0.5,
//             repeat: Infinity,
//           }}
//         />

//         <motion.div
//           className="wifi-ring ring-3"
//           animate={{
//             scale: [0.7, 1.6],
//             opacity: [0.6, 0],
//           }}
//           transition={{
//             duration: 2,
//             delay: 1,
//             repeat: Infinity,
//           }}
//         />
//       </div>
//     );
//   }

//   if (type === "sensor") {
//     return (
//       <div className="product-visual">
//         <motion.div
//           className="sensor-board"
//           animate={{
//             rotateY: [0, 15, -15, 0],
//             y: [0, -5, 0],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//           }}
//         >
//           <div className="sensor-eye left" />
//           <div className="sensor-eye right" />

//           <div className="sensor-chip" />

//           <div className="sensor-pins">
//             <span />
//             <span />
//             <span />
//             <span />
//           </div>
//         </motion.div>

//         {/* Radar */}

//         <motion.div
//           className="radar radar-1"
//           animate={{
//             scale: [0.4, 1.5],
//             opacity: [0.8, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//           }}
//         />

//         <motion.div
//           className="radar radar-2"
//           animate={{
//             scale: [0.4, 1.5],
//             opacity: [0.6, 0],
//           }}
//           transition={{
//             duration: 2,
//             delay: 0.8,
//             repeat: Infinity,
//           }}
//         />
//       </div>
//     );
//   }

//   return (
//     <div className="product-visual">
//       <motion.div
//         className="ai-core"
//         animate={{
//           rotateY: [0, 360],
//           rotateX: [0, 10, -10, 0],
//         }}
//         transition={{
//           rotateY: {
//             duration: 8,
//             repeat: Infinity,
//             ease: "linear",
//           },
//           rotateX: {
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//           },
//         }}
//       >
//         <div className="brain-core">
//           <BrainCircuit size={50} />
//         </div>

//         {Array.from({ length: 12 }).map((_, i) => {
//           const angle = (i / 12) * 360;

//           return (
//             <motion.span
//               key={i}
//               className="neural-node"
//               style={{
//                 transform: `rotate(${angle}deg) translateY(-62px)`,
//               }}
//               animate={{
//                 opacity: [0.3, 1, 0.3],
//               }}
//               transition={{
//                 duration: 1.5,
//                 delay: i * 0.1,
//                 repeat: Infinity,
//               }}
//             />
//           );
//         })}
//       </motion.div>

//       <div className="ai-orbit orbit-one" />
//       <div className="ai-orbit orbit-two" />
//     </div>
//   );
// }

// /* =========================================================
//    PRODUCTS
// ========================================================= */

// export default function Products() {
//   return (
//     <section className="relative py-24 overflow-hidden bg-[#01030a] text-white">

//       {/* Background Decor */}

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full" />

//         <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-600/10 blur-[120px] rounded-full" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

//         {/* Heading */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.6,
//           }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-4 pb-2 tracking-tight">
//             Our{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
//               Robotics
//             </span>{" "}
//             Products
//           </h2>

//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             High-performance hardware for your next big innovation.
//           </p>
//         </motion.div>

//         {/* Products */}

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

//           {products.map((product, idx) => (
//             <motion.div
//               key={idx}
//               initial={{
//                 opacity: 0,
//                 y: 40,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 duration: 0.5,
//                 delay: idx * 0.1,
//               }}
//               whileHover={{
//                 y: -10,
//                 scale: 1.02,
//               }}
//               className="product-card group relative bg-[#0a101f] border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300"
//             >

//               {/* Glow Border */}

//               <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-300 pointer-events-none group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]" />

//               {/* 3D */}

//               <ProductVisual type={product.type} />

//               {/* Icon */}

//               <div className="product-icon">
//                 {product.icon}
//               </div>

//               {/* Title */}

//               <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors relative z-10">
//                 {product.title}
//               </h3>

//               {/* Description */}

//               <p className="text-sm text-gray-400 mb-6 flex-1 relative z-10">
//                 {product.desc}
//               </p>

//               {/* Button */}

//               <button className="mt-auto relative z-10 px-5 py-2 w-full rounded-lg bg-[#141d33] border border-gray-700 text-sm font-semibold text-gray-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
//                 View Details
//               </button>

//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Bot,
  Wifi,
  Activity,
  BrainCircuit,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    icon: <Cpu size={38} />,
    type: "arduino",
    title: "Arduino Kits",
    desc: "Complete starter kits with microcontrollers, breadboards, and essential components for beginners.",
    buyLink: "/products/arduino-kits",
  },
  {
    icon: <Bot size={38} />,
    type: "robot",
    title: "Robotics Kits",
    desc: "Advanced chassis, motors, and controllers to build your own autonomous rovers.",
    buyLink: "/products/robotics-kits",


  },
  {
    icon: <Wifi size={38} />,
    type: "iot",
    title: "IoT Modules",
    desc: "ESP8266/ESP32 boards and relays to connect your hardware to the global network.",
    buyLink: "/products/iot-modules",
  },
  {
    icon: <Activity size={38} />,
    type: "sensor",
    title: "Sensors Pack",
    desc: "Ultrasonic, IR, temperature, and motion sensors for comprehensive data collection.",
    buyLink: "/products/sensors-pack",
  },
  {
    icon: <BrainCircuit size={38} />,
    type: "ai",
    title: "AI Learning Kits",
    desc: "Vision and edge-computing modules for implementing machine learning on edge devices.",
    buyLink: "/products/ai-learning-kits",
  },
];

/* =========================================================
   3D PRODUCT VISUAL
========================================================= */

function ProductVisual({ type }) {
  /* ================= ARDUINO ================= */

  if (type === "arduino") {
    return (
      <div className="product-visual">
        <motion.div
          className="arduino-board"
          animate={{
            rotateY: [0, 12, -12, 0],
            rotateX: [0, -5, 5, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="chip" />
          <div className="usb" />
          <div className="arduino-led" />

          <div className="pin-row top">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>

          <div className="pin-row bottom">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
        </motion.div>

        <div className="circuit-line line-1" />
        <div className="circuit-line line-2" />
        <div className="circuit-line line-3" />
      </div>
    );
  }

  /* ================= ROBOT ================= */

  if (type === "robot") {
    return (
      <div className="product-visual">
        <motion.div
          className="robot-3d"
          animate={{
            rotateY: [0, 20, -20, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="robot-body">
            <div className="robot-screen">
              <span />
              <span />
            </div>
          </div>

          <div className="robot-wheel left" />
          <div className="robot-wheel right" />

          <div className="robot-sensor">
            <i />
            <i />
          </div>
        </motion.div>

        <motion.div
          className="scan-line"
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    );
  }

  /* ================= IOT ================= */

  if (type === "iot") {
    return (
      <div className="product-visual">
        <motion.div
          className="iot-board"
          animate={{
            rotateY: [0, 15, -15, 0],
            rotateX: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="iot-chip" />

          <div className="iot-antenna">
            <span />
            <span />
            <span />
          </div>

          <div className="iot-led" />

          <div className="iot-pins">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="wifi-ring ring-1"
          animate={{
            scale: [0.7, 1.4],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="wifi-ring ring-2"
          animate={{
            scale: [0.7, 1.5],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="wifi-ring ring-3"
          animate={{
            scale: [0.7, 1.6],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
          }}
        />
      </div>
    );
  }

  /* ================= SENSOR ================= */

  if (type === "sensor") {
    return (
      <div className="product-visual">
        <motion.div
          className="sensor-board"
          animate={{
            rotateY: [0, 15, -15, 0],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          <div className="sensor-eye left" />
          <div className="sensor-eye right" />

          <div className="sensor-chip" />

          <div className="sensor-pins">
            <span />
            <span />
            <span />
            <span />
          </div>
        </motion.div>

        <motion.div
          className="radar radar-1"
          animate={{
            scale: [0.4, 1.5],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="radar radar-2"
          animate={{
            scale: [0.4, 1.5],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2,
            delay: 0.8,
            repeat: Infinity,
          }}
        />
      </div>
    );
  }

  /* ================= AI ================= */

  return (
    <div className="product-visual">
      <motion.div
        className="ai-core"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 10, -10, 0],
        }}
        transition={{
          rotateY: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          },
          rotateX: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div className="brain-core">
          <BrainCircuit size={50} />
        </div>

        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * 360;

          return (
            <motion.span
              key={i}
              className="neural-node"
              style={{
                transform: `rotate(${angle}deg) translateY(-62px)`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          );
        })}
      </motion.div>

      <div className="ai-orbit orbit-one" />
      <div className="ai-orbit orbit-two" />
    </div>
  );
}

/* =========================================================
   PRODUCTS SECTION
========================================================= */

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-24 overflow-hidden bg-[#01030a] text-white"
    >
      {/* Background Decor */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-600/10 blur-[120px] rounded-full" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

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
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
            <ShoppingCart size={16} />
            Explore Our Products
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 pb-2 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Robotics
            </span>{" "}
            Products
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            High-performance hardware for your next big innovation.
          </p>
        </motion.div>

        {/* Products Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

          {products.map((product, idx) => (
            <motion.div
              key={product.type}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="product-card group relative bg-[#0a101f] border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300"
            >

              {/* Glow Border */}

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-300 pointer-events-none group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]" />

              {/* 3D Product */}

              <ProductVisual type={product.type} />

              {/* Icon */}

              <div className="product-icon">
                {product.icon}
              </div>

              {/* Title */}

              <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors relative z-10">
                {product.title}
              </h3>

              {/* Description */}

              <p className="text-sm text-gray-400 mb-6 flex-1 relative z-10">
                {product.desc}
              </p>

              {/* Buttons */}

              <div className="w-full flex flex-col gap-3 relative z-10">

                {/* View Details */}

                <Link
                  href={product.buyLink}
                  className="group/details flex items-center justify-center gap-2 px-5 py-2.5 w-full rounded-lg bg-[#141d33] border border-gray-700 text-sm font-semibold text-gray-200 hover:bg-[#1b2740] hover:border-blue-500/50 transition-all duration-300"
                >
                  View Details
                  <ArrowRight
                    size={16}
                    className="group-hover/details:translate-x-1 transition-transform"
                  />
                </Link>

                {/* BUY NOW */}

                <Link
                  href={`/buy?product=${product.type}`}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 border border-blue-500 text-sm font-bold text-white shadow-[0_0_15px_rgba(37,99,235,0.25)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
                >
                  <ShoppingCart size={17} />
                  Buy Now
                </Link>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-14 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            Looking for a custom robotics solution?
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 bg-[#0a101f] text-gray-200 font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}