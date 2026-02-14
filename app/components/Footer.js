
"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 text-center md:text-left">

        {/* Brand + Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start"
        >
          <a href="#home" className="relative inline-block group">
            <motion.div
              className="absolute inset-0 rounded-xl blur-2xl bg-gradient-to-r from-green-400 via-blue-500 to-cyan-400 opacity-60"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative p-[3px] rounded-xl bg-gradient-to-r from-green-500 to-blue-500 shadow-xl"
            >
              <img
                src="/kite_logo.jpg"
                alt="KITE Robotics Logo"
                width={80}
                height={80}
                className="rounded-xl w-[80px] h-auto"
              />
            </motion.div>
          </a>

          <div className="mt-4">
            <h2 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-cyan-400">
              KITE ROBOTICS
            </h2>
            <p className="mt-2 text-gray-400 text-sm">
              Empowering Innovation with Robotics, AI & IoT <br/>
              Built and Operated by IITs  Talent
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
          <h3 className="text-lg font-semibold text-white mb-3">Headquarters</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> Bihar</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> Chennai</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> Hyderabad</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> Mumbai</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-400" /> Kolkata</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400" />
              +91 956 8466 985
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              info@kiterobotics.in
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-green-500" />
              +91 956 8466 985
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7409878807303598080" className="hover:text-blue-400"><Linkedin /></a>
            <a href="https://www.facebook.com/share/14Ua5eeJSi2/" className="hover:text-blue-400"><Facebook /></a>
            <a href="https://www.instagram.com/robotics_kite/" className="hover:text-pink-400"><Instagram /></a>
            <a href="https://whatsapp.com/channel/0029Vb5ecgSBvvsp5Owh9P0g" className="hover:text-green-400"><MessageCircle /></a>
            <a href="https://x.com/RoboticsKite" className="hover:text-blue-400"><Twitter /></a>
            <a href="https://github.com/roboticskite" className="hover:text-gray-400"><Github /></a>
          </div>
        </motion.div>

        {/* Quick Links (LAST) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#services" className="hover:text-blue-400">Services</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Career</a></li>
          </ul>
        </motion.div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} KITE ROBOTICS. All rights reserved.<br />
        AI Disclosure: This write-up was supported by AI-based technology.
      </div>
    </footer>
  );
}
