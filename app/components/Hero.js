"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white"
    >
      <div className="px-6 md:px-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Welcome to <span className="text-yellow-300">KITE ROBOTICS</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Empowering Innovation with <span className="font-semibold">Robotics</span>,{" "}
          <span className="font-semibold">AI</span> & <span className="font-semibold">IoT</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#about"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-300 transition"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-black transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
