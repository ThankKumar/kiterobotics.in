"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";

export default function SignupModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    
    setTimeout(() => {
      setStatus("success");
      
      setTimeout(() => {
        const text = `Hello Sir, I am ${formData.name}. I am interested in ${formData.course}. My phone is ${formData.phone}. ${formData.message}`;
        const WHATSAPP_LINK = `https://api.whatsapp.com/send/?phone=9195648666985&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
        window.open(WHATSAPP_LINK, "_blank");
        onClose();
        setTimeout(() => setStatus("idle"), 500); // reset after hidden
      }, 1500);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#0b101e] border border-blue-500/30 rounded-2xl p-6 w-full max-w-md relative z-10 shadow-[0_0_40px_rgba(59,130,246,0.2)] overflow-hidden"
          >
            {/* Soft decorative background glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/30 blur-[60px] pointer-events-none rounded-full"></div>
            
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-20">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <span className="bg-blue-500 w-1.5 h-6 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span> Connect With Us
            </h2>

            {status === "success" ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}
                  className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/50"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </motion.div>
                <h3 className="text-xl font-bold text-white tracking-wide">Secure Link Established</h3>
                <p className="text-blue-200/70 text-sm mt-3 animate-pulse">Redirecting to Communication Protocol...</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <input required type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full bg-[#131b2f] border border-[#1e2a44] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                <input required type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full bg-[#131b2f] border border-[#1e2a44] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                <input required type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full bg-[#131b2f] border border-[#1e2a44] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition" />
                
                <select required name="course" onChange={handleChange} className="w-full bg-[#131b2f] border border-[#1e2a44] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition appearance-none cursor-pointer">
                  <option value="" className="text-gray-500">Select Interested Field</option>
                  <option value="Robotics">Robotics & Automation</option>
                  <option value="AI_ML">AI & Machine Learning</option>
                  <option value="IoT">Internet of Things (IoT)</option>
                  <option value="WebDev">Web / App Development</option>
                </select>

                <textarea name="message" placeholder="Optional Message" onChange={handleChange} rows="3" className="w-full bg-[#131b2f] border border-[#1e2a44] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"></textarea>
                
                <button disabled={status === "loading"} type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3.5 rounded-lg transition shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
                  {status === "loading" ? <><Loader2 className="animate-spin" size={20} /> Processing...</> : "Submit Request"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
