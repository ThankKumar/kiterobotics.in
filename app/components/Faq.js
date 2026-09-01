

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";

const faqData = [
  {
    question: "What is Kite Robotics?",
    answer: "Kite Robotics is a technology-driven organization providing robotics, AI, IoT, and coding education with hands-on learning, mentorship, and high-quality hardware kits.",
  },
  {
    question: "Who can join Kite Robotics programs?",
    answer: "School students, college students, beginners, educators, and makers can join our foundational and advanced tracks.",
  },
  {
    question: "Do you provide hands-on practical training?",
    answer: "Yes, all our programs focus on real-time projects, hardware handling, testing sensors, and practical problem-solving.",
  },
  {
    question: "What courses does Kite Robotics offer?",
    answer: "We offer Robotics, Arduino, AI & Machine Learning, IoT, Python, Embedded Systems, and STEM-based innovation courses.",
  },
  {
    question: "Do you provide kits and tools for learning?",
    answer: "Yes, comprehensive robotics kits, microcontrollers, sensors, and tools are provided during training sessions and available for purchase.",
  },
  {
    question: "Are your programs suitable for beginners?",
    answer: "Absolutely. Our courses start from basics with visual guidance and step-by-step assembly before moving to advanced concepts.",
  },
  {
    question: "Do you provide certificates after completion?",
    answer: "Yes, participants receive verified industry-recognized certificates after successful course or workshop completion.",
  },
  {
    question: "Do you conduct workshops and school programs?",
    answer: "Yes, we conduct hands-on workshops, bootcamps, teacher training, and Atal Tinkering Lab (ATL) school setup programs.",
  },
  {
    question: "Is online and offline training available?",
    answer: "Yes, Kite Robotics provides both interactive online live sessions and offline classroom/lab training across various centers.",
  },
  {
    question: "What makes Kite Robotics different?",
    answer: "We focus on practical learning, mentorship by IIT talent, industry-relevant curriculum, affordable robotics kits, and KMS-AI support.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midIndex = Math.ceil(faqData.length / 2);
  const firstColumn = faqData.slice(0, midIndex);
  const secondColumn = faqData.slice(midIndex);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div 
      id="faq" 
      className="py-12 sm:py-16 relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--text-secondary)'
      }}
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-green-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4 text-xs font-bold uppercase tracking-wider shadow-sm" style={{ borderColor: 'var(--primary-accent)', backgroundColor: 'var(--card-bg)', color: 'var(--primary-accent)' }}>
            <HelpCircle size={14} /> Frequently Asked Questions
          </div>
          <h2 
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight flex justify-center items-center gap-3"
            style={{ color: 'var(--text-primary)' }}
          >
             Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500">Database</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg font-light tracking-wide" style={{ color: 'var(--text-secondary)' }}>
             Find answers to common questions about our robotics kits, courses, ATL setups, and mentorship.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {[firstColumn, secondColumn].map((column, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {column.map((item, index) => {
                const realIndex = colIndex === 0 ? index : index + midIndex;
                const isOpen = openIndex === realIndex;

                return (
                  <motion.div
                    variants={itemVariants}
                    key={realIndex}
                    className="cursor-pointer border rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-md"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: isOpen ? 'var(--primary-accent)' : 'var(--card-border)',
                      boxShadow: isOpen ? '0 10px 30px rgba(255, 122, 0, 0.15)' : 'var(--card-shadow)'
                    }}
                    onClick={() => toggleFaq(realIndex)}
                  >
                    <div className="flex justify-between items-center p-5 md:p-6 gap-4">
                      <h4 
                        className="font-bold text-sm md:text-base tracking-wide transition-colors"
                        style={{ color: isOpen ? 'var(--primary-accent)' : 'var(--text-primary)' }}
                      >
                        {item.question}
                      </h4>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="min-w-7 min-h-7 w-7 h-7 flex items-center justify-center rounded-full border transition-colors flex-shrink-0"
                        style={{
                          backgroundColor: isOpen ? 'var(--primary-accent)' : 'transparent',
                          borderColor: isOpen ? 'var(--primary-accent)' : 'var(--card-border)',
                          color: isOpen ? '#FFFFFF' : 'var(--text-secondary)'
                        }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div 
                            className="px-5 md:px-6 pb-6 text-sm font-normal leading-relaxed border-t pt-4"
                            style={{ 
                              color: 'var(--text-secondary)',
                              borderColor: 'var(--card-border)'
                            }}
                          >
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
