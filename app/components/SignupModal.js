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
        const WHATSAPP_LINK = `https://api.whatsapp.com/send/?phone=919564866985&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
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
            className="border rounded-2xl p-6 w-full max-w-md relative z-10 shadow-2xl overflow-hidden backdrop-blur-xl"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--primary-accent)',
              boxShadow: 'var(--card-shadow)'
            }}
          >
            {/* Soft decorative background glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/20 blur-[60px] pointer-events-none rounded-full"></div>
            
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-orange-500 transition z-20 cursor-pointer">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
               <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-orange-500 to-green-500"></span> Connect With Us
            </h2>

            {status === "success" ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}
                  className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/50"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </motion.div>
                <h3 className="text-xl font-bold tracking-wide" style={{ color: 'var(--text-primary)' }}>Secure Link Established</h3>
                <p className="text-sm mt-3 animate-pulse" style={{ color: 'var(--text-secondary)' }}>Redirecting to Communication Protocol...</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <input required type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 transition" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)', color: 'var(--text-primary)' }} />
                <input required type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 transition" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)', color: 'var(--text-primary)' }} />
                <input required type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 transition" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)', color: 'var(--text-primary)' }} />
                
                <select required name="course" onChange={handleChange} className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 transition cursor-pointer" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)', color: 'var(--text-primary)' }}>
                  <option value="">Select Interested Field</option>
                  <option value="Robotics">Robotics & Automation</option>
                  <option value="AI_ML">AI & Machine Learning</option>
                  <option value="IoT">Internet of Things (IoT)</option>
                  <option value="WebDev">Web / App Development</option>
                </select>

                <textarea name="message" placeholder="Optional Message" onChange={handleChange} rows="3" className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 transition resize-none" style={{ backgroundColor: 'var(--input-bg)', borderColor: 'var(--input-border)', color: 'var(--text-primary)' }}></textarea>
                
                <button disabled={status === "loading"} type="submit" className="w-full text-white font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95" style={{ background: 'linear-gradient(135deg, #FF7A00 0%, #22C55E 100%)' }}>
                  {status === "loading" ? <><Loader2 className="animate-spin" size={18} /> Processing...</> : "Submit Request"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
