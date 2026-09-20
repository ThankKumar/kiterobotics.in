


import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import AskKite from "./components/AskKite";
import StarField from "./components/StarField";
import AiEcosystemTicker from "./components/AiEcosystemTicker";

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
    <html lang="en">
      <body className={`${inter.variable} antialiased`} style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)', margin: 0, padding: 0, overflow: 'hidden' }}>

        {/* ✨ Cosmic Star Field (dark mode only) */}
        <StarField />

        {/* Custom Glowing Cursor */}
        <CustomCursor />

        {/* 🤖 ASK KITE CHATBOT */}
        <AskKite />

        {/* Global Navbar - Fixed at top */}
        <Navbar />
        <AiEcosystemTicker />

        {/* Scrollable Content Container */}
        <div id="scrollable-container" style={{ 
          position: 'fixed',
          top: '126px',
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: 'auto',
          overflowX: 'hidden',
          zIndex: 1
        }}>
          {/* Page Content */}
          <main style={{ position: 'relative', zIndex: 2 }}>
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}




