



// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import Image from "next/image";

// const WHATSAPP_LINK =
//   "https://api.whatsapp.com/send/?phone=9195648666985&text=Hello+Sir%2C+I+am+contacting+you+via+WhatsApp&type=phone_number&app_absent=0";

// /* ================= OFFER BAR ================= */
// function OfferBar() {
//   const [timeLeft, setTimeLeft] = useState(5 * 24 * 60 * 60);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const days = Math.floor(timeLeft / (24 * 60 * 60));
//   const hours = Math.floor((timeLeft % (24 * 60 * 60)) / 3600);
//   const minutes = Math.floor((timeLeft % 3600) / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div className="fixed top-0 left-0 w-full z-[60] bg-black/30 backdrop-blur-sm text-white overflow-hidden">
//       <motion.div
//         initial={{ x: "100%" }}
//         animate={{ x: "-100%" }}
//         transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//         className="whitespace-nowrap py-1 text-xs md:text-sm font-medium"
//       >
//         🎉 Offer Ends In: {days}d {hours}h {minutes}m {seconds}s —
//         Enroll Now at KITE ROBOTICS 🚀 | +91 95648 66985
//       </motion.div>
//     </div>
//   );
// }

// /* ================= NAVBAR ================= */
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   const sections = ["home", "services", "about", "contact"];

//   useEffect(() => {
//     const handleScroll = () => {
//       let current = "home";
//       sections.forEach((id) => {
//         const section = document.getElementById(id);
//         if (section) {
//           const offsetTop = section.offsetTop - 80; // ✅ FIXED
//           if (window.scrollY >= offsetTop) current = id;
//         }
//       });
//       setActiveSection(current);
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <OfferBar />

//       {/* 🔥 FLOATING DEMO BUTTON (RIGHT-BOTTOM, TRANSPARENT) */}
//       <a
//         href={WHATSAPP_LINK}
//         target="_blank"
//         className="fixed right-6 bottom-6 z-[9999]
//                    px-4 py-2 rounded-full
//                    text-purple-500 font-semibold
//                    border border-purple-500
//                    backdrop-blur-sm
//                    glow-btn
//                    hover:text-purple-700 hover:border-purple-700"
//       >
//         Demo
//       </a>

//       <motion.nav
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className={`fixed w-full top-6 left-0 z-50 transition-all duration-500 ${
//           scrolled ? "bg-white shadow-md" : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">

//             {/* Logo */}
//             <div className="flex items-center gap-2">
//               <div className="p-[3px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
//                 <Image
//                   src="/kite_logo.jpg"
//                   alt="KITE Robotics Logo"
//                   width={48}
//                   height={48}
//                   className="rounded-full bg-white"
//                 />
//               </div>
//               <span
//                 className={`text-xl font-bold ${
//                   scrolled ? "text-blue-600" : "text-white"
//                 }`}
//               >
//                 KITE ROBOTICS
//               </span>
//             </div>

//             {/* Desktop Menu */}
//             <ul className="hidden md:flex items-center space-x-6 font-medium">
//               {sections.map((id) => (
//                 <li key={id}>
//                   <a
//                     href={`#${id}`}
//                     className={`transition-colors ${
//                       activeSection === id
//                         ? "text-blue-600 font-semibold"
//                         : scrolled
//                         ? "text-gray-700 hover:text-blue-500"
//                         : "text-white hover:text-blue-200"
//                     }`}
//                   >
//                     {id.charAt(0).toUpperCase() + id.slice(1)}
//                   </a>
//                 </li>
//               ))}

//               {/* Sign Up → WhatsApp */}
//               <li>
//                 <a
//                   href={WHATSAPP_LINK}
//                   target="_blank"
//                   className={`px-4 py-2 rounded-full font-semibold transition ${
//                     scrolled
//                       ? "bg-blue-600 text-white hover:bg-blue-700"
//                       : "bg-white text-blue-600 hover:bg-blue-100"
//                   }`}
//                 >
//                   Sign Up
//                 </a>
//               </li>
//             </ul>

//             {/* Mobile Button */}
//             <button
//               className={`md:hidden ${
//                 scrolled ? "text-gray-700" : "text-white"
//               }`}
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//             className={`md:hidden ${
//               scrolled ? "bg-white" : "bg-black/80"
//             }`}
//           >
//             <ul className="flex flex-col items-center py-4 space-y-4">
//               {sections.map((id) => (
//                 <li key={id}>
//                   <a
//                     href={`#${id}`}
//                     onClick={() => setIsOpen(false)}
//                     className={`${
//                       scrolled
//                         ? "text-gray-700 hover:text-blue-500"
//                         : "text-white hover:text-blue-200"
//                     }`}
//                   >
//                     {id.charAt(0).toUpperCase() + id.slice(1)}
//                   </a>
//                 </li>
//               ))}

//               {/* Mobile Sign Up → WhatsApp */}
//               <li>
//                 <a
//                   href={WHATSAPP_LINK}
//                   target="_blank"
//                   onClick={() => setIsOpen(false)}
//                   className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
//                 >
//                   Sign Up
//                 </a>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </motion.nav>
//     </>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=9195648666985&text=Hello+Sir%2C+I+am+contacting+you+via+WhatsApp&type=phone_number&app_absent=0";

/* ================= OFFER BAR ================= */
function OfferBar() {
  const [timeLeft, setTimeLeft] = useState(5 * 24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed top-0 left-0 w-full z-[60] bg-black/30 backdrop-blur-sm text-white overflow-hidden">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="whitespace-nowrap py-1 text-xs md:text-sm font-medium"
      >
        🎉 Offer Ends In: {days}d {hours}h {minutes}m {seconds}s —
        Enroll Now at KITE ROBOTICS 🚀 | +91 95648 66985
      </motion.div>
    </div>
  );
}

/* ================= NAVBAR ================= */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const sections = ["home", "services", "about", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 80;
          if (window.scrollY >= offsetTop) current = id;
        }
      });
      setActiveSection(current);
      setScrolled(window.scrollY > 50); // only for text color
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <OfferBar />

      {/* 🔥 FLOATING DEMO BUTTON */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        className="fixed right-6 bottom-6 z-[9999]
                   px-4 py-2 rounded-full
                   text-purple-500 font-semibold
                   border border-purple-500
                   backdrop-blur-sm
                   glow-btn
                   hover:text-purple-700 hover:border-purple-700"
      >
        Demo
      </a>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full top-6 left-0 z-50 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="p-[3px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                <Image
                  src="/kite_logo.jpg"
                  alt="KITE Robotics Logo"
                  width={48}
                  height={48}
                  className="rounded-full bg-white"
                />
              </div>
              <span
                className={`text-xl font-bold ${
                  scrolled ? "text-blue-600" : "text-white"
                }`}
              >
                KITE ROBOTICS
              </span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-6 font-medium">
              {sections.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`transition-colors ${
                      activeSection === id
                        ? "text-blue-600 font-semibold"
                        : scrolled
                        ? "text-gray-200 hover:text-blue-300"
                        : "text-white hover:text-blue-200"
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}

              {/* Sign Up */}
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className="px-4 py-2 rounded-full font-semibold bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                >
                  Sign Up
                </a>
              </li>
            </ul>

            {/* Mobile Button */}
            <button
              className={`md:hidden ${
                scrolled ? "text-white" : "text-white"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-black/80"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {sections.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-blue-300"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}
