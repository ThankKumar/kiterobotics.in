"use client";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#02040a] text-gray-400 py-16 px-6 border-t border-blue-900/30">
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
            <motion.div
              className="absolute inset-0 rounded-2xl blur-[15px] bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative p-[2px] rounded-2xl bg-[#0a101f] border border-blue-900/50 shadow-xl group-hover:border-blue-500 transition-colors">
              <div className="bg-white rounded-xl p-2 px-3">
                <img
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
            <h2 className="text-2xl font-extrabold text-white tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              KITE ROBOTICS
            </h2>
            <p className="mt-4 text-gray-500 text-sm leading-relaxed font-light">
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
          <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-widest">Headquarters</h3>
          <ul className="space-y-3 text-sm font-light">
            {['Bihar', 'Chennai', 'Hyderabad', 'Mumbai', 'Kolkata'].map((loc, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-blue-500" /> {loc}
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
          <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-widest">Contact Stream</h3>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex items-center gap-3 text-gray-400">
              <div className="w-8 h-8 rounded-full bg-[#0a101f] border border-blue-900/50 flex flex-shrink-0 items-center justify-center"><Phone className="w-4 h-4 text-cyan-400" /></div>
              +91 956 8466 985
            </li>
            <li className="flex items-center gap-3 text-gray-400 break-all text-left">
              <div className="w-8 h-8 rounded-full bg-[#0a101f] border border-blue-900/50 flex flex-shrink-0 items-center justify-center"><Mail className="w-4 h-4 text-cyan-400" /></div>
              gm.kiterobotics@gmail.com
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <div className="w-8 h-8 rounded-full bg-[#0a101f] border border-blue-900/50 flex flex-shrink-0 items-center justify-center"><MessageCircle className="w-4 h-4 text-green-400" /></div>
              +91 956 8466 985
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
          <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-widest">Grid Links</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7409878807303598080" className="w-10 h-10 rounded-full border border-blue-900/50 bg-[#0a101f] flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all"><FaLinkedin size={18}/></a>
            <a href="https://www.facebook.com/share/14Ua5eeJSi2/" className="w-10 h-10 rounded-full border border-blue-900/50 bg-[#0a101f] flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all"><FaFacebook size={18}/></a>
            <a href="https://www.instagram.com/robotics_kite/" className="w-10 h-10 rounded-full border border-blue-900/50 bg-[#0a101f] flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all"><FaInstagram size={18}/></a>
            <a href="https://x.com/RoboticsKite" className="w-10 h-10 rounded-full border border-blue-900/50 bg-[#0a101f] flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all"><FaTwitter size={18}/></a>
            <a href="https://github.com/roboticskite" className="w-10 h-10 rounded-full border border-blue-900/50 bg-[#0a101f] flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all"><FaGithub size={18}/></a>
          </div>

          <ul className="flex flex-wrap gap-4 justify-center md:justify-start text-sm font-light text-gray-500">
            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
            <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
          </ul>
        </motion.div>

      </div>

      {/* Bottom Legal */}
      <div className="text-center text-xs text-gray-600 mt-16 border-t border-blue-900/20 pt-6">
        © {new Date().getFullYear()} KITE ROBOTICS. All rights reserved.<br />
        <span className="mt-1 inline-block opacity-50">System architecture supported by AI protocols.</span>
      </div>
    </footer>
  );
}
