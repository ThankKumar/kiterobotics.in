
"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ── Animated Light/Dark Mode Switcher ──
function ThemeToggle({ theme, toggleTheme, mounted, size = "md" }) {
  const isDark = theme === "dark";
  const isSmall = size === "sm";

  const trackW = isSmall ? 52 : 58;
  const trackH = isSmall ? 28 : 30;
  const thumbSize = isSmall ? 20 : 22;
  const slideX = isSmall ? 24 : 28;

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center p-1 rounded-full cursor-pointer focus:outline-none transition-shadow select-none"
      style={{
        width: `${trackW}px`,
        height: `${trackH}px`,
        backgroundColor: isDark ? "rgba(15, 23, 42, 0.92)" : "rgba(224, 242, 254, 0.95)",
        border: isDark ? "1.5px solid rgba(255, 122, 0, 0.45)" : "1.5px solid rgba(249, 115, 22, 0.55)",
        boxShadow: isDark
          ? "inset 0 2px 4px rgba(0, 0, 0, 0.6), 0 0 12px rgba(255, 122, 0, 0.2)"
          : "inset 0 2px 4px rgba(0, 0, 0, 0.08), 0 0 12px rgba(249, 115, 22, 0.25)",
      }}
    >
      {/* Background celestial ambiance */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        {/* Dark mode stars */}
        <motion.div
          initial={false}
          animate={{
            opacity: isDark ? 1 : 0,
            scale: isDark ? 1 : 0.6,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-start pl-2"
        >
          <span className="w-1 h-1 rounded-full bg-cyan-200 animate-pulse" />
          <span className="w-0.5 h-0.5 rounded-full bg-amber-200 ml-1.5 -mt-1.5 opacity-80" />
          <span className="w-0.5 h-0.5 rounded-full bg-white ml-1 mt-1.5 opacity-70" />
        </motion.div>

        {/* Light mode daylight rays */}
        <motion.div
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.6 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-end pr-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
          <span className="w-1 h-1 rounded-full bg-orange-300/70 ml-0.5 -mt-1" />
        </motion.div>
      </div>

      {/* Sliding orb thumb with spring physics */}
      <motion.div
        className="relative z-10 flex items-center justify-center rounded-full"
        style={{
          width: `${thumbSize}px`,
          height: `${thumbSize}px`,
          background: isDark
            ? "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)"
            : "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
          boxShadow: isDark
            ? "0 0 10px rgba(139, 92, 246, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.25)"
            : "0 0 12px rgba(249, 115, 22, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.6)",
        }}
        animate={{
          x: isDark ? slideX : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {mounted && isDark ? (
            <motion.div
              key="moon-icon"
              initial={{ rotate: -120, scale: 0.2, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 120, scale: 0.2, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <Moon size={isSmall ? 11 : 12} className="text-cyan-200 fill-cyan-200/40" />
            </motion.div>
          ) : (
            <motion.div
              key="sun-icon"
              initial={{ rotate: 120, scale: 0.2, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -120, scale: 0.2, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              <Sun size={isSmall ? 12 : 13} className="text-white fill-amber-100" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  const sections = ["about", "services", "products", "contact"];
  const navItems = [
    { label: "about", href: "/#about", type: "page" },
    { label: "services", href: "/#services", type: "page" },
    { label: "products", href: "/#products", type: "page" },
    { label: "blog", href: "/blog", type: "page" },
    { label: "buy", href: "/buy", type: "page" },
    { label: "careers", href: "https://kiterobotic-career.vercel.app/careers", type: "external" },
  ];

  // Initialize theme from localStorage
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme with left-bottom circular reveal animation (like TatvaOS)
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    const performThemeChange = () => {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    };

    if (typeof document === "undefined") return;

    if (!document.startViewTransition) {
      // Fallback for browsers without native View Transitions API
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.inset = "0";
      overlay.style.zIndex = "999999";
      overlay.style.pointerEvents = "none";
      overlay.style.backgroundColor = newTheme === "dark" ? "#050816" : "#F8FAFC";
      overlay.style.clipPath = `circle(0px at 0px ${window.innerHeight}px)`;
      overlay.style.transition = "clip-path 700ms cubic-bezier(0.25, 1, 0.5, 1)";
      document.body.appendChild(overlay);

      requestAnimationFrame(() => {
        const endRadius = Math.hypot(window.innerWidth, window.innerHeight);
        overlay.style.clipPath = `circle(${endRadius}px at 0px ${window.innerHeight}px)`;
      });

      setTimeout(() => {
        performThemeChange();
        setTimeout(() => {
          overlay.remove();
        }, 50);
      }, 400);

      return;
    }

    // View Transitions API: circular wave expands from bottom-left corner
    const x = 0;
    const y = window.innerHeight;
    const endRadius = Math.hypot(window.innerWidth, window.innerHeight);

    const transition = document.startViewTransition(() => {
      performThemeChange();
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 750,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const handleOpenKmsAi = () => {
    window.dispatchEvent(new CustomEvent("open-kms-ai"));
  };

  useEffect(() => {
    const scrollContainer = document.getElementById("scrollable-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      let current = "about";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          if (scrollContainer.scrollTop >= offsetTop) current = id;
        }
      });
      setActiveSection(current);
      setScrolled(scrollContainer.scrollTop > 50);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <>
      {/* Fixed Navbar - Always Visible */}
      <nav
        className={`fixed w-full top-0 left-0 transition-all duration-300 ${
          scrolled ? "py-2 shadow-md" : "py-3"
        }`}
        style={{
          backgroundColor: 'var(--navbar-bg)',
          borderBottom: `1px solid var(--navbar-border)`,
          backdropFilter: 'blur(16px)',
          zIndex: 9999,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          visibility: 'visible',
          opacity: 1,
          pointerEvents: 'auto',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="p-[2px] rounded-full bg-gradient-to-tr from-[#FF7A00] via-[#22C55E] to-[#06B6D4] shadow-sm shadow-orange-500/20 group-hover:scale-105 transition-transform">
                <Image
                  src="/kite_logo.jpg"
                  alt="KITE Robotics Logo"
                  width={42}
                  height={42}
                  className="rounded-full bg-white object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-widest leading-tight transition-colors" style={{color: 'var(--text-primary)'}}>
                  KITE<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">ROBOTICS</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest font-semibold opacity-70" style={{color: 'var(--text-secondary)'}}>
                  Robotics • AI • IoT
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-7 font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.type === "external" ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative text-xs uppercase tracking-wider font-semibold transition-all py-1.5 hover:text-orange-400`}
                      style={{
                        color: activeSection === item.label ? 'var(--primary-accent)' : 'var(--text-secondary)'
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative text-xs uppercase tracking-wider font-semibold transition-all py-1.5 hover:text-orange-400`}
                      style={{
                        color: activeSection === item.label ? 'var(--primary-accent)' : 'var(--text-secondary)'
                      }}
                    >
                      {item.label}
                      {activeSection === item.label && (
                        <div className="absolute left-0 bottom-0 w-full h-[2px] rounded-full bg-gradient-to-r from-orange-500 to-green-500"></div>
                      )}
                    </Link>
                  )}
                </li>
              ))}



              {/* KMS-AI Button */}
              <li>
                <button
                  onClick={() => window.location.href = "https://kms-ai-live.vercel.app"}
                  className="relative px-5 py-2 text-xs uppercase tracking-widest rounded-full font-black border transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer shadow-md group overflow-hidden"
                  style={{
                    borderColor: 'var(--primary-accent)',
                    backgroundColor: 'var(--card-bg)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-green-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Sparkles size={14} className="text-orange-400 animate-spin-slow" />
                  <span className="bg-gradient-to-r from-orange-400 via-green-400 to-cyan-400 bg-clip-text text-transparent font-black">
                    KMS-AI
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                </button>
              </li>
            </ul>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                className="p-2 hover:opacity-80 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                style={{color: 'var(--text-primary)'}}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden backdrop-blur-xl mt-2 overflow-hidden shadow-2xl transition-all"
            style={{
              backgroundColor: 'var(--navbar-bg)',
              borderTop: `1px solid var(--navbar-border)`
            }}
          >
            <ul className="flex flex-col py-5 space-y-4 px-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.type === "external" ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className={`block text-base uppercase tracking-wider font-semibold transition-colors`}
                      style={{
                        color: activeSection === item.label ? 'var(--primary-accent)' : 'var(--text-secondary)'
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-base uppercase tracking-wider font-semibold transition-colors`}
                      style={{
                        color: activeSection === item.label ? 'var(--primary-accent)' : 'var(--text-secondary)'
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}

              {/* KMS-AI Mobile Button */}
              <li className="pt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = "https://kms-ai-live.vercel.app";
                  }}
                  className="w-full px-6 py-3.5 rounded-xl font-black text-center tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer text-white"
                  style={{
                    background: 'linear-gradient(135deg, #FF7A00 0%, #22C55E 50%, #06B6D4 100%)'
                  }}
                >
                  <Bot size={20} />
                  <span>LAUNCH KMS-AI</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Floating Bottom-Left Theme Toggle (TatvaOS Style) */}
      <div
        className="fixed bottom-6 left-6 z-[9998] flex items-center gap-2.5 px-3 py-1.5 rounded-full backdrop-blur-xl border shadow-2xl transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: 'var(--navbar-bg)',
          borderColor: 'var(--navbar-border)',
        }}
      >
        <span
          className="text-[10px] font-bold uppercase tracking-widest opacity-80 select-none hidden sm:inline"
          style={{ color: 'var(--text-secondary)' }}
        >
          {theme === "dark" ? "Dark" : "Light"}
        </span>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} mounted={mounted} size="sm" />
      </div>
    </>
  );
}
