
"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles, Bot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  const sections = ["home", "services", "products", "about", "contact"];
  const navItems = [
    { label: "home", href: "/", type: "page" },
    { label: "services", href: "/#services", type: "page" },
    { label: "products", href: "/#products", type: "page" },
    { label: "about", href: "/#about", type: "page" },
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

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleOpenKmsAi = () => {
    window.dispatchEvent(new CustomEvent("open-kms-ai"));
  };

  useEffect(() => {
    const scrollContainer = document.getElementById("scrollable-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      let current = "home";
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

              {/* Theme Toggle */}
              <li>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg border border-transparent hover:border-orange-500/30 hover:bg-orange-500/10 transition-all cursor-pointer"
                  aria-label="Toggle theme"
                  style={{color: 'var(--text-primary)'}}
                >
                  {mounted && theme === "dark" ? (
                    <Sun size={19} className="text-orange-400 hover:rotate-45 transition-transform" />
                  ) : (
                    <Moon size={19} className="text-orange-600 hover:-rotate-12 transition-transform" />
                  )}
                </button>
              </li>

              {/* KMS-AI Button */}
              <li>
                <button
                  onClick={handleOpenKmsAi}
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
                onClick={toggleTheme}
                className="p-2 rounded-lg"
                aria-label="Toggle theme"
                style={{color: 'var(--text-primary)'}}
              >
                {mounted && theme === "dark" ? (
                  <Sun size={20} className="text-orange-400" />
                ) : (
                  <Moon size={20} className="text-orange-600" />
                )}
              </button>

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
                    handleOpenKmsAi();
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
    </>
  );
}
