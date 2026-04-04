"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStatus("Message encrypted and transmitted successfully.");
      setForm({ name: "", phone: "", email: "", message: "" });
      setLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }, 1500);
  };

  const InputField = ({ name, type, label, isTextArea }) => (
    <div className="relative mb-6">
      {isTextArea ? (
        <textarea
           name={name} id={name} required rows="4"
           value={form[name]} onChange={handleChange}
           className="peer w-full bg-[#0a101f] border border-blue-900/50 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none shadow-inner"
           placeholder=" "
        />
      ) : (
        <input
           type={type} name={name} id={name} required
           value={form[name]} onChange={handleChange}
           className="peer w-full bg-[#0a101f] border border-blue-900/50 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
           placeholder=" "
        />
      )}
      <label htmlFor={name} className="absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-blue-400 cursor-text pointer-events-none">
        {label}
      </label>
    </div>
  );

  return (
    <section id="contact" className="min-h-screen relative flex items-center justify-center bg-[#03060d] pt-24 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Contact Info */}
        <motion.div 
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex-1 flex flex-col justify-center"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-500 rounded-sm"></span> Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Node</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg font-light max-w-md cursor-default">
             Connect with our core systems. We are standing by to process your inquiries and establish new networking protocols.
          </p>

          <div className="space-y-8 mb-14">
            <div className="flex items-center gap-5 text-gray-300 cursor-default">
               <div className="w-14 h-14 rounded-full bg-[#0a101f] border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <MapPin size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-1">Geolocation</h4>
                 <p className="text-gray-400 font-light text-sm">Tech Hub, Cyber City, Sector 7</p>
               </div>
            </div>
            <div className="flex items-center gap-5 text-gray-300 cursor-default">
               <div className="w-14 h-14 rounded-full bg-[#0a101f] border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <Mail size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-1">Transmission Stream</h4>
                 <p className="text-gray-400 font-light text-sm">info@kiterobotics.com</p>
               </div>
            </div>
            <div className="flex items-center gap-5 text-gray-300 cursor-default">
               <div className="w-14 h-14 rounded-full bg-[#0a101f] border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <Phone size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-1">Comms Channel</h4>
                 <p className="text-gray-400 font-light text-sm">+91 95648 66985</p>
               </div>
            </div>
          </div>

          <div className="flex gap-4">
             {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
               <a key={idx} href="#" className="w-12 h-12 rounded-full bg-[#0a101f] border border-blue-900/50 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition-all duration-300 group">
                 <Icon size={20} className="group-hover:scale-110 transition-transform" />
               </a>
             ))}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex-1 bg-[#050914] border border-blue-500/20 rounded-2xl p-8 lg:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="relative z-10">
            <InputField name="name" type="text" label="Operator Designation (Name)" />
            <InputField name="phone" type="tel" label="Contact Frequency (Phone)" />
            <InputField name="email" type="email" label="Digital Address (Email)" />
            <InputField name="message" label="Payload Data (Message)" isTextArea={true} />

            <button
               type="submit"
               disabled={loading}
               className={`w-full mt-2 px-6 py-4 font-bold tracking-widest uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group border border-blue-500/50 ${
                 loading ? "bg-gray-800 text-gray-500 cursor-not-allowed border-gray-700" : "bg-[#0a101f] text-blue-400 hover:bg-blue-600 hover:text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
               }`}
            >
               <span className="relative z-10 flex items-center gap-2">
                 {loading ? "Transmitting..." : <>Transmit Data <Send size={18} /></>}
               </span>
               {!loading && <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 pointer-events-none"></div>}
            </button>

            {status && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 text-center font-medium text-green-400 flex items-center justify-center gap-2 text-sm bg-green-500/10 py-3 rounded-lg border border-green-500/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> {status}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
