"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStatus("Message encrypted and transmitted successfully to KITE Team.");
      setForm({ name: "", phone: "", email: "", message: "" });
      setLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }, 1200);
  };

  const InputField = ({ name, type, label, isTextArea }) => (
    <div className="relative mb-6">
      {isTextArea ? (
        <textarea
           name={name} id={name} required rows="4"
           value={form[name]} onChange={handleChange}
           className="peer w-full rounded-xl px-4 pt-6 pb-2 text-sm focus:outline-none focus:ring-2 transition-all resize-none shadow-inner border"
           style={{
             backgroundColor: 'var(--input-bg)',
             borderColor: 'var(--input-border)',
             color: 'var(--text-primary)'
           }}
           placeholder=" "
        />
      ) : (
        <input
           type={type} name={name} id={name} required
           value={form[name]} onChange={handleChange}
           className="peer w-full rounded-xl px-4 pt-6 pb-2 text-sm focus:outline-none focus:ring-2 transition-all shadow-inner border"
           style={{
             backgroundColor: 'var(--input-bg)',
             borderColor: 'var(--input-border)',
             color: 'var(--text-primary)'
           }}
           placeholder=" "
        />
      )}
      <label 
        htmlFor={name} 
        className="absolute duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 cursor-text pointer-events-none text-xs font-semibold uppercase tracking-wider"
        style={{ color: 'var(--text-muted)' }}
      >
        {label}
      </label>
    </div>
  );

  return (
    <section 
      id="contact" 
      className="relative py-12 sm:py-16 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Side: Contact Info */}
        <motion.div 
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex-1 flex flex-col justify-center"
        >
          <h2 
            className="text-4xl lg:text-5xl font-black mb-6 tracking-tight flex items-center gap-3"
            style={{ color: 'var(--text-primary)' }}
          >
            <span className="w-8 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-green-500"></span> Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500">Network</span>
          </h2>
          <p className="mb-10 text-base sm:text-lg font-light max-w-md cursor-default leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
             Connect with our core robotics team. We are standing by to collaborate, provide kits, train students, and build intelligent IoT solutions.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4 cursor-default">
               <div 
                 className="w-12 h-12 rounded-2xl border flex items-center justify-center shadow-md transition-colors"
                 style={{
                   backgroundColor: 'var(--card-bg)',
                   borderColor: 'var(--primary-accent)',
                   color: 'var(--primary-accent)'
                 }}
               >
                  <MapPin size={22} />
               </div>
               <div>
                 <h4 className="font-bold uppercase tracking-widest text-xs mb-0.5" style={{ color: 'var(--text-primary)' }}>Headquarters</h4>
                 <p className="font-light text-sm" style={{ color: 'var(--text-secondary)' }}>Tech Hub, Cyber City, Sector 7</p>
               </div>
            </div>

            <div className="flex items-center gap-4 cursor-default">
               <div 
                 className="w-12 h-12 rounded-2xl border flex items-center justify-center shadow-md transition-colors"
                 style={{
                   backgroundColor: 'var(--card-bg)',
                   borderColor: 'var(--secondary-accent)',
                   color: 'var(--secondary-accent)'
                 }}
               >
                  <Mail size={22} />
               </div>
               <div>
                 <h4 className="font-bold uppercase tracking-widest text-xs mb-0.5" style={{ color: 'var(--text-primary)' }}>Digital Transmission</h4>
                 <p className="font-light text-sm" style={{ color: 'var(--text-secondary)' }}>info@kiterobotics.in</p>
               </div>
            </div>

            <div className="flex items-center gap-4 cursor-default">
               <div 
                 className="w-12 h-12 rounded-2xl border flex items-center justify-center shadow-md transition-colors"
                 style={{
                   backgroundColor: 'var(--card-bg)',
                   borderColor: 'var(--tertiary-accent)',
                   color: 'var(--tertiary-accent)'
                 }}
               >
                  <Phone size={22} />
               </div>
               <div>
                 <h4 className="font-bold uppercase tracking-widest text-xs mb-0.5" style={{ color: 'var(--text-primary)' }}>Comms Channel</h4>
                 <p className="font-light text-sm" style={{ color: 'var(--text-secondary)' }}>+91 95648 66985</p>
               </div>
            </div>
          </div>

          <div className="flex gap-3">
             {[
               { Icon: FaLinkedin, href: "https://www.linkedin.com/feed/update/urn:li:activity:7409878807303598080" },
               { Icon: FaFacebook, href: "https://www.facebook.com/share/14Ua5eeJSi2/" },
               { Icon: FaInstagram, href: "https://www.instagram.com/robotics_kite/" },
               { Icon: FaTwitter, href: "https://x.com/RoboticsKite" },
               { Icon: FaGithub, href: "https://github.com/roboticskite" }
             ].map(({ Icon, href }, idx) => (
               <a 
                 key={idx} 
                 href={href} 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-11 h-11 rounded-xl border flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-sm"
                 style={{
                   backgroundColor: 'var(--card-bg)',
                   borderColor: 'var(--card-border)',
                   color: 'var(--text-primary)'
                 }}
               >
                 <Icon size={18} />
               </a>
             ))}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="flex-1 w-full rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden border backdrop-blur-md transition-colors"
           style={{
             backgroundColor: 'var(--card-bg)',
             borderColor: 'var(--card-border)',
             boxShadow: 'var(--card-shadow)'
           }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[50px] rounded-full pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="relative z-10">
            <InputField name="name" type="text" label="Full Name / Designation" />
            <InputField name="phone" type="tel" label="Contact Number" />
            <InputField name="email" type="email" label="Email Address" />
            <InputField name="message" label="Your Inquiry / Message" isTextArea={true} />

            <button
               type="submit"
               disabled={loading}
               className="w-full mt-2 px-6 py-4 font-extrabold tracking-wider uppercase rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-white cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
               style={{
                 background: 'linear-gradient(135deg, #FF7A00 0%, #22C55E 100%)',
                 boxShadow: '0 6px 25px rgba(255, 122, 0, 0.3)'
               }}
            >
               <span className="relative z-10 flex items-center gap-2 text-sm">
                 {loading ? "Transmitting..." : <>Submit Message <Send size={16} /></>}
               </span>
            </button>

            {status && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="mt-6 text-center font-medium flex items-center justify-center gap-2 text-sm py-3 rounded-lg border"
                style={{
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  borderColor: 'rgba(34, 197, 94, 0.4)',
                  color: '#22C55E'
                }}
              >
                <CheckCircle2 size={18} /> {status}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
