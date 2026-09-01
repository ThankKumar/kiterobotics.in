"use client";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone, Mail, Bot } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  const handleOpenKmsAi = () => {
    window.dispatchEvent(new CustomEvent("open-kms-ai"));
  };

  return (
    <footer 
      className="py-16 px-6 border-t transition-colors duration-300"
      style={{
        backgroundColor: 'var(--background)',
        borderColor: 'var(--navbar-border)',
        color: 'var(--text-secondary)'
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 text-center md:text-left relative z-10 w-full">

        {/* Brand + Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start col-span-1 md:col-span-2 pr-0 md:pr-10"
        >
          <a href="#home" className="relative inline-block group mb-6">
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500 shadow-md">
              <div className="bg-white rounded-xl p-2 px-3">
                <Image
                  src="/kite_logo.jpg"
                  alt="KITE Robotics Logo"
                  width={120}
                  height={80}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </a>

          <div>
            <h2 
              className="text-2xl font-black tracking-widest uppercase"
              style={{ color: 'var(--text-primary)' }}
            >
              KITE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">ROBOTICS</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed font-light" style={{ color: 'var(--text-secondary)' }}>
              Empowering Innovation with Robotics, AI & IoT. <br/>
              Built and Operated by IIT Talent.
            </p>
          </div>
        </motion.div>

        {/* Headquarters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-xs font-bold mb-5 uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Headquarters</h3>
          <ul className="space-y-3 text-sm font-light">
            {['Bihar', 'Chennai', 'Hyderabad', 'Mumbai', 'Kolkata'].map((loc, idx) => (
              <li key={idx} className="flex items-center gap-2.5 justify-center md:justify-start" style={{ color: 'var(--text-secondary)' }}>
                <MapPin className="w-4 h-4 text-orange-500" /> {loc}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xs font-bold mb-5 uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Contact Stream</h3>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex items-center gap-3 justify-center md:justify-start" style={{ color: 'var(--text-secondary)' }}>
              <div 
                className="w-8 h-8 rounded-full border flex flex-shrink-0 items-center justify-center shadow-sm"
                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
              >
                <Phone className="w-4 h-4 text-orange-500" />
              </div>
              +91 95648 66985
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start break-all text-left" style={{ color: 'var(--text-secondary)' }}>
              <div 
                className="w-8 h-8 rounded-full border flex flex-shrink-0 items-center justify-center shadow-sm"
                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
              >
                <Mail className="w-4 h-4 text-cyan-500" />
              </div>
              info@kiterobotics.in
            </li>
            <li className="flex items-center gap-3 justify-center md:justify-start" style={{ color: 'var(--text-secondary)' }}>
              <div 
                className="w-8 h-8 rounded-full border flex flex-shrink-0 items-center justify-center shadow-sm"
                style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
              </div>
              +91 95648 66985
            </li>
          </ul>
        </motion.div>

        {/* Social Media & Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xs font-bold mb-5 uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Network Nodes</h3>
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start mb-6">
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7409878807303598080" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl border flex items-center justify-center hover:scale-110 transition-all" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}><FaLinkedin size={16}/></a>
            <a href="https://www.facebook.com/share/14Ua5eeJSi2/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl border flex items-center justify-center hover:scale-110 transition-all" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}><FaFacebook size={16}/></a>
            <a href="https://www.instagram.com/robotics_kite/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl border flex items-center justify-center hover:scale-110 transition-all" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}><FaInstagram size={16}/></a>
            <a href="https://x.com/RoboticsKite" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl border flex items-center justify-center hover:scale-110 transition-all" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}><FaTwitter size={16}/></a>
            <a href="https://github.com/roboticskite" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl border flex items-center justify-center hover:scale-110 transition-all" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)', color: 'var(--text-primary)' }}><FaGithub size={16}/></a>
          </div>

          <ul className="flex flex-wrap gap-3.5 justify-center md:justify-start text-xs font-semibold uppercase tracking-wider">
            <li><a href="#home" className="hover:text-orange-500 transition-colors" style={{ color: 'var(--text-secondary)' }}>Home</a></li>
            <li><a href="#about" className="hover:text-orange-500 transition-colors" style={{ color: 'var(--text-secondary)' }}>About</a></li>
            <li><a href="#services" className="hover:text-orange-500 transition-colors" style={{ color: 'var(--text-secondary)' }}>Services</a></li>
            <li><a href="#faq" className="hover:text-orange-500 transition-colors" style={{ color: 'var(--text-secondary)' }}>FAQ</a></li>
            <li><button onClick={handleOpenKmsAi} className="hover:text-green-500 transition-colors cursor-pointer text-orange-500 font-bold flex items-center gap-1"><Bot size={12} /> KMS-AI</button></li>
          </ul>
        </motion.div>

      </div>

      {/* Bottom Legal */}
      <div className="text-center text-xs mt-12 border-t pt-6 pb-2 transition-colors flex flex-col gap-2" style={{ borderColor: 'var(--navbar-border)', color: 'var(--text-muted)' }}>
        <p className="font-semibold text-gray-400">PAN: AAMCK9318G &nbsp;|&nbsp; TAN: PTNK05972B &nbsp;|&nbsp; CIN: U85499BR2026PTC085389</p>
        <p>www.kiterobotics.in &nbsp;|&nbsp; +91 95648 66985 &nbsp;|&nbsp; info@kiterobotics.in</p>
        <p>© {new Date().getFullYear()} KITE ROBOTICS. All rights reserved. • Powered by <span className="font-bold text-orange-500">KMS-AI</span> Intelligence.</p>
      </div>
    </footer>
  );
}
