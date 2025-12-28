"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingRobot() {
  const handleClick = () => {
    window.open("https://kiterobotics.in", "_blank"); // target site
  };

  return (
    <motion.div
      className="fixed bottom-10 left-10 z-[9999] cursor-pointer"
      animate={{
        x: ["0vw", "70vw", "30vw", "80vw", "10vw"],
        y: ["0vh", "-40vh", "-10vh", "-60vh", "-20vh"],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      onClick={handleClick}
    >
      <Image
        src="/moon-rover.png"
        alt="Floating Robot"
        width={60}
        height={60}
        priority
      />
    </motion.div>
  );
}
