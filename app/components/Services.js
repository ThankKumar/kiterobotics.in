"use client";

import { motion } from "framer-motion";

const services = [
  {
    img: "/services/web_development.png",
    title: "Web Development",
    desc: "Designing fast, responsive, and secure websites using modern frameworks and technologies."
  },
  {
    img: "/services/mobile_development.png",
    title: "Mobile App Development",
    desc: "Building user-friendly Android and iOS applications with smooth performance."
  },
  {
    img: "/services/robotics_Ai.png",
    title: "Robotics / AI",
    desc: "Hands-on robotics and artificial intelligence solutions for real-world applications."
  },
  {
    img: "/services/ml.png",
    title: "Machine Learning",
    desc: "Creating intelligent systems that learn from data and improve decision-making."
  },
  {
    img: "/services/technical_support.png",
    title: "Technical Support",
    desc: "Reliable troubleshooting and technical assistance for hardware and software systems."
  },
  {
    img: "/services/iOt.png",
    title: "IoT Integration",
    desc: "Connecting devices and sensors to automate and monitor systems efficiently."
  },
  {
    img: "/services/chat_support.png",
    title: "Chat Support",
    desc: "24/7 chat-based assistance to resolve queries quickly and effectively."
  },
  {
    img: "/services/3dprinter.png",
    title: "3D-Printing",
    desc: "Designing and producing precise 3D models for prototyping and education."
  },
  {
    img: "/services/enginner_solution.png",
    title: "Engineering Tools",
    desc: "Providing advanced tools and solutions for engineering design and development."
  },
  {
    img: "/services/cyber_security.png",
    title: "Cybersecurity Solutions",
    desc: "Protecting systems and data from cyber threats using secure practices."
  },
  {
    img: "/services/clude_computing.png",
    title: "Cloud Computing",
    desc: "Deploying scalable and secure applications on cloud platforms."
  },
  {
    img: "/services/data_analystic.png",
    title: "Data Science & Analytics",
    desc: "Analyzing data to extract insights and support smart business decisions."
  },
];

const WHATSAPP_LINK =
  "https://wa.me/9195648666985?text=Hello%20Sir%2C%20I%20am%20contacting%20you%20via%20WhatsApp";

export default function ShopPage() {
  return (
    <div className="relative p-6 min-h-screen" style={{ background: "#f2f2f2" }}>
      {/* Floating Robot */}
      <motion.img
        src="/robot_floating.png"
        alt="Floating Robot"
        className="w-20 h-20 fixed z-50"
        animate={{
          x: ["0%", "80%", "0%"],
          y: ["0%", "30%", "0%"],
          rotate: [0, 360, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Services Section */}
      <motion.div className="py-12 px-6">
        <motion.h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          ⚙️ Our{" "}
          <span className="bg-gradient-to-r from-gray-700 via-black to-gray-700 bg-clip-text text-transparent">
            Services
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              className="rounded-xl overflow-hidden flex flex-col transition relative"
              style={{
                background:
                  "linear-gradient(to bottom, #f8f8f8 50%, #3a3a3a 100%)",
              }}
              whileHover={{
                boxShadow: "0 0 25px rgba(0,0,0,0.4)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-contain p-4"
                whileHover={{ rotate: 360, y: -10, opacity: 0.75 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              <div className="p-4 flex flex-col flex-1">
                {/* 🖤 Dark Black Heading */}
                <h4 className="text-sm font-bold mb-2 text-black">
                  {service.title}
                </h4>

                {/* 🧠 Concept-based Paragraph */}
                <p className="text-[11px] mb-4 text-gray-900">
                  {service.desc}
                </p>

                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="mt-auto bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded-lg transition text-center"
                >
                  Join Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
