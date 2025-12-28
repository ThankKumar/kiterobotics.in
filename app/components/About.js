
"use client";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function About() {
  const controls = useAnimation();
  const [hovering, setHovering] = useState(false);

  // 🔹 Start slow spin
  useEffect(() => {
    controls.start({
      rotateY: 360,
      transition: {
        repeat: Infinity,
        duration: 10, // slow spin
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white text-gray-800 px-6 py-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

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
                transition: {
                  repeat: Infinity,
                  duration: 3, // ⚡ faster spin
                  ease: "linear",
                },
              });
            }}
            onHoverEnd={() => {
              setHovering(false);
              controls.start({
                rotateY: 360,
                transition: {
                  repeat: Infinity,
                  duration: 10, // back to slow spin
                  ease: "linear",
                },
              });
            }}
            className="relative p-[12px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-2xl"
          >
            {/* 🌟 Neon Glow Animation */}
            <motion.div
              className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70"
              animate={{
                scale: hovering ? [1, 1.4, 1] : [1, 1.2, 1],
                opacity: hovering ? [0.6, 1, 0.6] : [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: hovering ? 1 : 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Robot Image */}
            <div className="relative bg-white rounded-full p-2">
              <Image
                src="/360_Degree_Plan.png"   // ✅ replace with your robot image
                alt="Rotating Robot"
                width={450}
                height={450}
                className="rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* 🔹 Right: Text + Logo + Button side by side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to <span className="text-blue-600">KITE ROBOTICS</span>
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            KITE Robotics sparks innovation in young minds, shaping India’s future through hands-on STEM learning.
            Led by expert mentors, our programs nurture creativity, problem-solving, and global perspectives, empowering students to thrive in a tech-driven world.

            <p>
              🚀 The KITE Robotics Advantage

              Cutting-edge Curriculum – Age-appropriate STEM challenges designed to inspire.

              Hands-On Robotics – Build, code, and explore from simple machines to advanced robots.

              Global Perspectives – Real-world projects that go beyond borders.

              Expert Instructors – Passionate mentors guiding every step of the journey.
            </p>
          </p>

          {/* 🌟 Logo + Button Flex Row */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Logo with Glow */}
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 rounded-xl blur-2xl bg-gradient-to-r from-green-400 via-blue-500 to-cyan-400 opacity-70"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.6, 0.85, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative p-[6px] rounded-xl bg-gradient-to-r from-green-500 to-blue-500 shadow-xl">
                <Image
                  src="/kite_logo.jpg"
                  alt="KITE Robotics Logo"
                  width={300}
                  height={200}
                  className="rounded-xl shadow-lg w-full max-w-[300px] h-auto"
                />
              </div>
            </div>

            {/* Call to Action Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-2xl transition"
            >
              Join Us 🚀
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}










