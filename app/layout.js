
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// // Components
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// // Fonts
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// // ✅ Metadata must only be exported from a server component
// export const metadata = {
//   title: "KITE ROBOTICS",
//   description: "Empowering Innovation with Robotics, AI & IoT",
// };

// // Layout (server component)
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {/* <Navbar />
//         <Hero />
//         <Services />
//         <About />
//         <Contact /> */}
//         <main >{children}</main>
//         {/* <Footer /> */}
       
//       </body>
//     </html>
//   );
// }







import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingRobot from "./components/FloatingRobot";
import CustomCursor from "./components/CustomCursor";

// Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: "KITE ROBOTICS",
  description: "Empowering Innovation with Robotics, AI & IoT",
};

// Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#050914] text-white`}>

        {/* Custom Glowing Cursor */}
        <CustomCursor />

        {/* 🤖 FLOATING ROBOT (VISIBLE EVERYWHERE) */}
        <FloatingRobot />

        {/* Page Content */}
        <main>{children}</main>

      </body>
    </html>
  );
}
