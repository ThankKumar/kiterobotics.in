


"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import SignupModal from "./SignupModal";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=9195648666985&text=Hello+Sir%2C+I+am+contacting+you+via+WhatsApp&type=phone_number&app_absent=0";

function OfferBar() {
  const [timeLeft, setTimeLeft] = useState(5 * 24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-[#050914]/80 backdrop-blur-md border-b border-blue-500/20 text-blue-100 overflow-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="whitespace-nowrap py-1.5 text-xs md:text-sm font-medium tracking-wider flex items-center gap-3"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        SYSTEM PROTOCOL ONLINE — 🎉 Limited Offer Ends In: {days}d {hours}h {minutes}m {seconds}s — Establish Connection Now at KITE ROBOTICS 🚀 | +91 95648 66985
      </motion.div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const sections = ["home", "services", "products", "about", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          if (window.scrollY >= offsetTop) current = id;
        }
      });
      setActiveSection(current);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <OfferBar />
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Floating Fast-Connect Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed right-6 bottom-6 z-[90] px-5 py-2.5 rounded-full text-blue-400 font-bold border border-blue-500/50 bg-[#0a101f]/80 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:bg-blue-600 hover:text-white transition-all duration-300 group overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-300 group-hover:bg-white animate-pulse"></div>
          Connect
        </span>
        <div className="absolute inset-0 bg-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-8 left-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-[#050914]/80 backdrop-blur-lg border-b border-blue-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="p-[2px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-shadow">
                <Image
                  src="/kite_logo.jpg"
                  alt="KITE Robotics Logo"
                  width={44}
                  height={44}
                  className="rounded-full bg-white"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-widest group-hover:text-blue-400 transition-colors">
                KITE<span className="text-blue-500">ROBOTICS</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8 font-medium">
              {sections.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`relative text-sm uppercase tracking-wider transition-colors py-2 ${
                      activeSection === id ? "text-blue-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {id}
                    {activeSection === id && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}

              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-5 py-2 text-sm uppercase tracking-wider rounded-full font-bold border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                >
                  Sign Up
                </button>
              </li>
            </ul>

            {/* Mobile Button */}
            <button
              className="md:hidden text-gray-200 hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050914]/95 backdrop-blur-xl border-t border-blue-500/20 mt-2 overflow-hidden"
          >
            <ul className="flex flex-col py-6 space-y-6 px-6">
              {sections.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg uppercase tracking-wider font-semibold ${
                      activeSection === id ? "text-blue-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {id}
                  </a>
                </li>
              ))}

              <li>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-center tracking-wider hover:bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  SIGN UP PROTOCOL
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
