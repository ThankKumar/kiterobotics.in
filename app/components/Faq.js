// "use client";
// import { useState } from "react";

// const faqData = [
//   {
//     question: "What is Kite Robotics?",
//     answer:
//       "Kite Robotics is a technology-driven organization providing robotics, AI, IoT, and coding education with hands-on learning."
//   },
//   {
//     question: "Who can join Kite Robotics programs?",
//     answer:
//       "School students, college students, beginners, educators, and working professionals can join our programs."
//   },
//   {
//     question: "Do you provide hands-on practical training?",
//     answer:
//       "Yes, all our programs focus on real-time projects, hardware handling, and practical problem-solving."
//   },
//   {
//     question: "What courses does Kite Robotics offer?",
//     answer:
//       "We offer Robotics, Arduino, AI, IoT, Machine Learning, Python, Web Development, and STEM-based courses."
//   },
//   {
//     question: "Do you provide kits and tools for learning?",
//     answer:
//       "Yes, required robotics kits, sensors, and tools are provided during training sessions."
//   },
//   {
//     question: "Are your programs suitable for beginners?",
//     answer:
//       "Absolutely. Our courses start from basics and gradually move to advanced concepts."
//   },
//   {
//     question: "Do you provide certificates after completion?",
//     answer:
//       "Yes, participants receive a certificate after successful course or workshop completion."
//   },
//   {
//     question: "Do you conduct workshops and school programs?",
//     answer:
//       "Yes, we conduct workshops, bootcamps, teacher training, and school STEM programs."
//   },
//   {
//     question: "Is online and offline training available?",
//     answer:
//       "Yes, Kite Robotics provides both online live sessions and offline classroom training."
//   },
//   {
//     question: "What makes Kite Robotics different?",
//     answer:
//       "We focus on practical learning, industry-relevant skills, affordable education, and expert mentorship."
//   }
// ];

// export default function Faq() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFaq = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const midIndex = Math.ceil(faqData.length / 2);
//   const firstColumn = faqData.slice(0, midIndex);
//   const secondColumn = faqData.slice(midIndex);

//   return (
//     <div className="p-8 max-w-6xl mx-auto">
//       <h2 className="text-4xl font-bold text-center mb-10 text-orange-600">
//         Kite Robotics – FAQs
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {[firstColumn, secondColumn].map((column, colIndex) => (
//           <div key={colIndex} className="space-y-4">
//             {column.map((item, index) => {
//               const realIndex = colIndex === 0 ? index : index + midIndex;

//               return (
//                 <div
//                   key={realIndex}
//                   className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:shadow-lg transition bg-white"
//                   onClick={() => toggleFaq(realIndex)}
//                 >
//                   <div className="flex justify-between items-center text-orange-600 font-semibold">
//                     {item.question}
//                     <span className="text-xl">
//                       {openIndex === realIndex ? "−" : "+"}
//                     </span>
//                   </div>

//                   {openIndex === realIndex && (
//                     <p className="mt-2 text-gray-700 text-sm leading-relaxed">
//                       {item.answer}
//                     </p>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




"use client";
import { useState } from "react";

const faqData = [
  {
    question: "What is Kite Robotics?",
    answer:
      "Kite Robotics is a technology-driven organization providing robotics, AI, IoT, and coding education with hands-on learning."
  },
  {
    question: "Who can join Kite Robotics programs?",
    answer:
      "School students, college students, beginners, educators, and working professionals can join our programs."
  },
  {
    question: "Do you provide hands-on practical training?",
    answer:
      "Yes, all our programs focus on real-time projects, hardware handling, and practical problem-solving."
  },
  {
    question: "What courses does Kite Robotics offer?",
    answer:
      "We offer Robotics, Arduino, AI, IoT, Machine Learning, Python, Web Development, and STEM-based courses."
  },
  {
    question: "Do you provide kits and tools for learning?",
    answer:
      "Yes, required robotics kits, sensors, and tools are provided during training sessions."
  },
  {
    question: "Are your programs suitable for beginners?",
    answer:
      "Absolutely. Our courses start from basics and gradually move to advanced concepts."
  },
  {
    question: "Do you provide certificates after completion?",
    answer:
      "Yes, participants receive a certificate after successful course or workshop completion."
  },
  {
    question: "Do you conduct workshops and school programs?",
    answer:
      "Yes, we conduct workshops, bootcamps, teacher training, and school STEM programs."
  },
  {
    question: "Is online and offline training available?",
    answer:
      "Yes, Kite Robotics provides both online live sessions and offline classroom training."
  },
  {
    question: "What makes Kite Robotics different?",
    answer:
      "We focus on practical learning, industry-relevant skills, affordable education, and expert mentorship."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midIndex = Math.ceil(faqData.length / 2);
  const firstColumn = faqData.slice(0, midIndex);
  const secondColumn = faqData.slice(midIndex);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-orange-600">
        Kite Robotics – FAQs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[firstColumn, secondColumn].map((column, colIndex) => (
          <div key={colIndex} className="space-y-6">
            {column.map((item, index) => {
              const realIndex = colIndex === 0 ? index : index + midIndex;

              return (
                <div
                  key={realIndex}
                  className="cursor-pointer"
                  onClick={() => toggleFaq(realIndex)}
                >
                  {/* Question Row */}
                  <div className="flex justify-between items-center font-semibold text-black">
                    {item.question}
                    <span className="text-xl text-black">
                      {openIndex === realIndex ? "−" : "+"}
                    </span>
                  </div>

                  {/* Gradient Line */}
                  <div className="h-[2px] w-full mt-2 mb-2 bg-gradient-to-r from-green-500 via-yellow-400 to-black"></div>

                  {/* Answer */}
                  {openIndex === realIndex && (
                    <p className="text-gray-700 text-sm leading-relaxed mt-2">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
