"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Phone, Mail, ExternalLink } from "lucide-react";

export default function AskKite() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Ask Kite 🤖. How can I help you with Robotics or IoT today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ask-kite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) throw new Error("API Failure");

      const data = await response.json();
      if (data.response) {
        setMessages((prev) => [...prev, { text: data.response, sender: "bot" }]);
      } else {
        throw new Error("Empty Response");
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev, 
        { 
          text: "⚠️ I’m currently unavailable. Please contact us at info@kiterobotics.in or call +91 9564866985.", 
          sender: "bot", 
          isError: true 
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button with Smart Positioning */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-[9999] p-4 rounded-full bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] transition-all duration-300
                   bottom-[90px] right-[20px] md:bottom-[90px] md:right-[20px] 
                   sm:bottom-[80px] sm:right-[15px]"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
           <span className="absolute -top-1 -right-1 flex h-4 w-4">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
           </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-[160px] right-[20px] w-[350px] md:w-[400px] h-[500px] bg-[#0a101f]/95 backdrop-blur-2xl border border-blue-500/30 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.5)] flex flex-col z-[9999] overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-blue-600/20 border-b border-blue-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Ask Kite 🤖</h3>
                  <p className="text-[10px] text-blue-400 uppercase tracking-widest">Robotics Assistant Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-500/30 scrollbar-track-transparent">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[90%] p-3 rounded-2xl text-sm ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-white/10 border border-white/10 text-gray-200 rounded-bl-none shadow-sm"
                    } ${msg.isError ? "border-red-500/30 bg-red-500/5 text-white" : ""}`}
                  >
                    {msg.isError ? (
                      <div className="flex flex-col gap-3">
                        <p>{msg.text.split("Please")[0]}</p>
                        <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-white/10">
                          <a href="mailto:info@kiterobotics.in" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                            <Mail size={14} /> info@kiterobotics.in
                          </a>
                          <a href="tel:+919564866985" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                            <Phone size={14} /> +91 95648 66985
                          </a>
                        </div>
                        <button 
                          onClick={() => window.location.href = "mailto:info@kiterobotics.in"}
                          className="mt-2 w-full py-2 bg-blue-600/80 hover:bg-blue-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
                        >
                          <ExternalLink size={16} /> Connect Now
                        </button>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 border border-white/10 p-3 rounded-2xl rounded-bl-none">
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-blue-500/20 bg-blue-900/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="w-full bg-[#050914] border border-blue-500/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white placeholder:text-gray-600"
                />
                <button
                  onClick={handleSend}
                  disabled={loading}
                  className="absolute right-2 top-2 p-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
