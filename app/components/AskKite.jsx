"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Phone, Mail, ExternalLink, Sparkles } from "lucide-react";

export default function AskKite() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm KMS-AI 🤖 (Kite Mind System). How can I assist you with Robotics, AI, IoT, or Training Programs today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleOpenEvent = () => {
      setIsOpen(true);
    };

    window.addEventListener("open-kms-ai", handleOpenEvent);
    return () => window.removeEventListener("open-kms-ai", handleOpenEvent);
  }, []);

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
          text: "⚠️ KMS-AI is currently unavailable. Please connect with our team at info@kiterobotics.in or call +91 9564866985.", 
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
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-[9999] p-3.5 sm:p-4 rounded-full text-white shadow-xl transition-all duration-300 cursor-pointer bottom-6 right-6"
        style={{
          background: "linear-gradient(135deg, #FF7A00 0%, #22C55E 50%, #06B6D4 100%)",
          boxShadow: "0 0 25px rgba(255, 122, 0, 0.4)"
        }}
        aria-label="Toggle KMS-AI"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-orange-500"></span>
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
            className="fixed bottom-24 right-6 w-[340px] sm:w-[380px] md:w-[410px] h-[520px] max-h-[80vh] backdrop-blur-2xl rounded-2xl shadow-2xl flex flex-col z-[9999] overflow-hidden border transition-colors"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--primary-accent)',
              boxShadow: 'var(--card-shadow)'
            }}
          >
            {/* Header */}
            <div 
              className="p-4 border-b flex items-center justify-between"
              style={{
                background: 'linear-gradient(90deg, rgba(255, 122, 0, 0.15), rgba(34, 197, 94, 0.15))',
                borderColor: 'var(--card-border)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-tr from-orange-500 to-green-500 text-white shadow-md">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm flex items-center gap-1.5" style={{color: 'var(--text-primary)'}}>
                    KMS-AI Assistant <Sparkles size={14} className="text-orange-400" />
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest font-semibold text-green-500">
                    Kite Mind System • Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-orange-500/10 transition-colors"
                style={{color: 'var(--text-secondary)'}}
                aria-label="Close KMS-AI Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "text-white rounded-br-none shadow-md"
                        : "rounded-bl-none shadow-sm border"
                    } ${msg.isError ? "border-red-500/40 bg-red-500/10" : ""}`}
                    style={
                      msg.sender === "user"
                        ? { background: 'linear-gradient(135deg, #FF7A00, #EA580C)' }
                        : { 
                            backgroundColor: 'var(--card-bg)', 
                            color: 'var(--text-primary)',
                            borderColor: 'var(--card-border)'
                          }
                    }
                  >
                    {msg.isError ? (
                      <div className="flex flex-col gap-3">
                        <p>{msg.text.split("Please")[0]}</p>
                        <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-white/10 text-xs">
                          <a href="mailto:info@kiterobotics.in" className="flex items-center gap-2 text-orange-400 hover:underline">
                            <Mail size={14} /> info@kiterobotics.in
                          </a>
                          <a href="tel:+919564866985" className="flex items-center gap-2 text-green-400 hover:underline">
                            <Phone size={14} /> +91 95648 66985
                          </a>
                        </div>
                        <button 
                          onClick={() => window.location.href = "mailto:info@kiterobotics.in"}
                          className="mt-2 w-full py-2 bg-gradient-to-r from-orange-500 to-green-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 text-xs transition-all shadow-md cursor-pointer"
                        >
                          <ExternalLink size={14} /> Connect With Mentors
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
                  <div 
                    className="p-3 rounded-2xl rounded-bl-none border"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--card-border)'
                    }}
                  >
                    <div className="flex gap-1.5 items-center">
                      <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div 
              className="p-3 border-t"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)'
              }}
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask KMS-AI anything..."
                  className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all pr-12 border"
                  style={{
                    backgroundColor: 'var(--input-bg)',
                    borderColor: 'var(--input-border)',
                    color: 'var(--text-primary)',
                    boxShadow: 'none'
                  }}
                />
                <button
                  onClick={handleSend}
                  disabled={loading}
                  className="absolute right-2 p-2 rounded-lg text-white hover:opacity-90 transition-all disabled:opacity-40 cursor-pointer shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, #FF7A00, #22C55E)'
                  }}
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
