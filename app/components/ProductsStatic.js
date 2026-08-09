"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, Bot, Wifi, Activity, BrainCircuit } from "lucide-react";

const products = [
  {
    icon: Cpu,
    type: "arduino",
    title: "Arduino Kits",
    desc: "Complete starter kits with microcontrollers, breadboards, and essential components for beginners.",
  },
  {
    icon: Bot,
    type: "robotics",
    title: "Robotics Kits",
    desc: "Advanced chassis, motors, and controllers to build your own autonomous rovers.",
  },
  {
    icon: Wifi,
    type: "iot",
    title: "IoT Modules",
    desc: "ESP8266/ESP32 boards and relays to connect your hardware to the global network.",
  },
  {
    icon: Activity,
    type: "sensors",
    title: "Sensors Pack",
    desc: "Ultrasonic, IR, temperature, and motion sensors for comprehensive data collection.",
  },
  {
    icon: BrainCircuit,
    type: "ai",
    title: "AI Learning Kits",
    desc: "Vision and edge-computing modules for implementing machine learning on edge devices.",
  },
];

export default function Products() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#01030a] text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

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
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-[#0a101f] border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-300 pointer-events-none shadow-[0_0_0_transparent] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]" />
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900 border border-gray-800 mb-6 shadow-inner">
                  <Icon size={36} className="text-blue-400" />
                </div>
                <h3 className="relative z-10 text-xl font-bold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors">
                  {product.title}
                </h3>
                <p className="relative z-10 text-sm text-gray-400 mb-6 flex-1">
                  {product.desc}
                </p>
                <Link href={`/buy?product=${product.type}`} className="relative z-10 mt-auto px-5 py-2 w-full rounded-lg bg-[#141d33] border border-gray-700 text-sm font-semibold text-gray-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                  View Details
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
