

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What is Kite Robotics?",
    answer: "Kite Robotics is a technology-driven organization providing robotics, AI, IoT, and coding education with hands-on learning.",
  },
  {
    question: "Who can join Kite Robotics programs?",
    answer: "School students, college students, beginners, educators, and working professionals can join our programs.",
  },
  {
    question: "Do you provide hands-on practical training?",
    answer: "Yes, all our programs focus on real-time projects, hardware handling, and practical problem-solving.",
  },
  {
    question: "What courses does Kite Robotics offer?",
    answer: "We offer Robotics, Arduino, AI, IoT, Machine Learning, Python, Web Development, and STEM-based courses.",
  },
  {
    question: "Do you provide kits and tools for learning?",
    answer: "Yes, required robotics kits, sensors, and tools are provided during training sessions.",
  },
  {
    question: "Are your programs suitable for beginners?",
    answer: "Absolutely. Our courses start from basics and gradually move to advanced concepts.",
  },
  {
    question: "Do you provide certificates after completion?",
    answer: "Yes, participants receive a certificate after successful course or workshop completion.",
  },
  {
    question: "Do you conduct workshops and school programs?",
    answer: "Yes, we conduct workshops, bootcamps, teacher training, and school STEM programs.",
  },
  {
    question: "Is online and offline training available?",
    answer: "Yes, Kite Robotics provides both online live sessions and offline classroom training.",
  },
  {
    question: "What makes Kite Robotics different?",
    answer: "We focus on practical learning, industry-relevant skills, affordable education, and expert mentorship.",
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
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div id="faq" className="bg-[#03060d] py-24 min-h-screen relative overflow-hidden text-gray-300">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 pb-2 tracking-tight text-white flex justify-center items-center gap-3">
             <span className="w-4 h-4 bg-cyan-400 rounded-sm animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.8)]"></span>
             Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Database</span>
             <span className="w-4 h-4 bg-blue-500 rounded-sm animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.8)]"></span>
          </h2>
          <p className="text-blue-200/50 max-w-2xl mx-auto text-lg font-light tracking-wide">
             Query our servers for common protocols and parameters.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6"
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
                    className={`cursor-pointer border rounded-2xl transition-all duration-300 group ${isOpen ? 'bg-[#0a101f] border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'bg-[#050914] border-blue-900/30 hover:border-blue-500/40 hover:bg-[#080d1a]'}`}
                    onClick={() => toggleFaq(realIndex)}
                  >
                    <div className="flex justify-between items-center p-5 md:p-6">
                      <h4 className={`font-semibold text-sm md:text-[15px] tracking-wide transition-colors ${isOpen ? 'text-blue-400' : 'text-gray-300 group-hover:text-white'}`}>
                        {item.question}
                      </h4>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={`min-w-6 min-h-6 flex items-center justify-center rounded-full border transition-colors ${isOpen ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'border-gray-700 text-gray-500 group-hover:border-gray-500'}`}
                      >
                        {isOpen ? "−" : "+"}
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-6 text-gray-400 text-sm font-light leading-relaxed border-t border-blue-900/30 pt-4 mt-2">
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
