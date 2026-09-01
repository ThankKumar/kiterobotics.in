"use client";

import Image from "next/image";

export default function FloatingRobot() {
  const handleClick = () => {
    window.open("https://kiterobotics.in", "_blank");
  };

  return (
    <div
      className="fixed bottom-10 left-10 z-[9999] cursor-pointer opacity-0 pointer-events-none"
      onClick={handleClick}
    >
      <Image
        src="/moon-rover.png"
        alt="Floating Robot"
        width={60}
        height={60}
        priority
      />
    </div>
  );
}

