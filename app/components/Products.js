"use client";
import { motion } from "framer-motion";
import { Cpu, Bot, Wifi, Activity, BrainCircuit } from "lucide-react";

const products = [
  {
    icon: <Cpu size={40} className="text-blue-400" />,
    title: "Arduino Kits",
    desc: "Complete starter kits with microcontrollers, breadboards, and essential components for beginners.",
  },
  {
    icon: <Bot size={40} className="text-purple-400" />,
    title: "Robotics Kits",
    desc: "Advanced chassis, motors, and controllers to build your own autonomous rovers.",
  },
  {
    icon: <Wifi size={40} className="text-pink-400" />,
    title: "IoT Modules",
    desc: "ESP8266/ESP32 boards and relays to connect your hardware to the global network.",
  },
  {
    icon: <Activity size={40} className="text-green-400" />,
    title: "Sensors Pack",
    desc: "Ultrasonic, IR, temperature, and motion sensors for comprehensive data collection.",
  },
  {
    icon: <BrainCircuit size={40} className="text-yellow-400" />,
    title: "AI Learning Kits",
    desc: "Vision and edge-computing modules for implementing machine learning on edge devices.",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 relative bg-[#050914] text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 pb-2 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Robotics</span> Products
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            High-performance hardware for your next big innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-[#0a101f] border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300"
            >
              {/* Glowing Border effect on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-300 pointer-events-none shadow-[0_0_0_transparent] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
              
              <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700 group-hover:border-blue-500/50 transition-colors shadow-inner">
                {product.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors relative z-10">{product.title}</h3>
              <p className="text-sm text-gray-400 mb-6 flex-1 relative z-10">{product.desc}</p>
              
              <button className="mt-auto relative z-10 px-5 py-2 w-full rounded-lg bg-[#141d33] border border-gray-700 text-sm font-semibold text-gray-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
