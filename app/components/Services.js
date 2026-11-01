"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Bot,
  BookOpen,
  GraduationCap,
  MonitorPlay,
  Printer,
  Headphones,
  FlaskConical,
  Microscope,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

/* =========================================================
   SERVICES DATA
======================================================================================== */

const CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "tech", label: "Robotics & AI" },
  { id: "academic", label: "Academics & ATL" },
  { id: "labs", label: "Prototyping & R&D" },
];

const services = [
  {
    num: "01",
    title: "Robotics & AI",
    category: "tech",
    badge: "Core Tech",
    icon: Bot,
    accent: "#06B6D4", // Cyan
    glow: "rgba(6, 182, 212, 0.35)",
    description:
      "Comprehensive robotics kits, intelligent computer vision algorithms, and autonomous control systems for practical automation.",
    deliverables: ["Autonomous Bots", "AI Computer Vision", "Microcontroller Logic"],
  },
  {
    num: "02",
    title: "Academic Support",
    category: "academic",
    badge: "Education",
    icon: BookOpen,
    accent: "#A855F7", // Purple
    glow: "rgba(168, 85, 247, 0.35)",
    description:
      "Turnkey institutional STEM integration, experiential classroom training modules, and dedicated faculty enablement.",
    deliverables: ["K-12 STEM Modules", "Classroom Lab Kits", "Faculty Enablement"],
  },
  {
    num: "03",
    title: "Curriculum Support",
    category: "academic",
    badge: "Pedagogy",
    icon: GraduationCap,
    accent: "#FF7A00", // Orange
    glow: "rgba(255, 122, 0, 0.35)",
    description:
      "NEP-2020 aligned experiential syllabus, structured lesson roadmaps, interactive lab manuals, and student workbooks.",
    deliverables: ["NEP-2020 Aligned", "Graded Courseware", "Teacher Manuals"],
  },
  {
    num: "04",
    title: "Workshops & Bootcamps",
    category: "tech",
    badge: "Hands-on",
    icon: MonitorPlay,
    accent: "#22C55E", // Green
    glow: "rgba(34, 197, 94, 0.35)",
    description:
      "Dynamic robotics hackathons, drone fabrication masterclasses, and weekend engineering sprints with certified credentials.",
    deliverables: ["Live Hackathons", "Drone & IoT Sprints", "Verified Certificate"],
  },
  {
    num: "05",
    title: "3D Printing & Prototyping",
    category: "labs",
    badge: "Fabrication",
    icon: Printer,
    accent: "#3B82F6", // Blue
    glow: "rgba(59, 130, 246, 0.35)",
    description:
      "Industrial precision additive manufacturing, CAD model drafting, custom chassis fabrication, and rapid prototyping.",
    deliverables: ["Rapid Prototyping", "CAD 3D Modeling", "Custom Parts Printing"],
  },
  {
    num: "06",
    title: "IT & Lab Infrastructure",
    category: "labs",
    badge: "Infrastructure",
    icon: Headphones,
    accent: "#EC4899", // Pink
    glow: "rgba(236, 72, 153, 0.35)",
    description:
      "Complete lab computer networking, robotics software environments, hardware diagnostics, and responsive technical helpdesk.",
    deliverables: ["Lab Networking", "Firmware Setup", "Dedicated Helpdesk"],
  },
  {
    num: "07",
    title: "R&D & Innovation Lab",
    category: "labs",
    badge: "Applied R&D",
    icon: FlaskConical,
    accent: "#F59E0B", // Amber
    glow: "rgba(245, 158, 11, 0.35)",
    description:
      "Custom hardware invention, sensor telemetry, IoT patent-ready prototypes, and advanced technology feasibility testing.",
    deliverables: ["IoT Telemetry", "Custom PCB Design", "Patent Prototyping"],
  },
  {
    num: "08",
    title: "Atal Tinkering Lab Setup",
    category: "academic",
    badge: "Govt & ATL",
    icon: Microscope,
    accent: "#10B981", // Emerald
    glow: "rgba(16, 185, 129, 0.35)",
    description:
      "End-to-end ATL setup as per NITI Aayog guidelines: equipment procurement, room spatial layout, and regular student mentoring.",
    deliverables: ["NITI Aayog Compliant", "Complete ATL Packages", "Onsite Mentorship"],
  },
];

const WHATSAPP_BASE = "https://wa.me/919564866985";

/* =========================================================
   SERVICE CARD COMPONENT
========================================================= */

function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = service.icon;

  const whatsappMessage = encodeURIComponent(
    `Hello Kite Robotics, I would like to inquire about your "${service.title}" service.`
  );
  const whatsappUrl = `${WHATSAPP_BASE}?text=${whatsappMessage}`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: "color-mix(in srgb, var(--card-bg) 92%, transparent)",
        borderColor: isHovered
          ? service.accent
          : "color-mix(in srgb, var(--card-border) 80%, transparent)",
        borderWidth: "1px",
        borderStyle: "solid",
        boxShadow: isHovered
          ? `0 20px 40px -15px ${service.glow}, 0 0 0 1px ${service.accent}40`
          : "var(--card-shadow)",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* Top subtle accent gradient wash on hover */}
      <div
        className="absolute top-0 inset-x-0 h-28 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(120% 100% at 50% 0%, ${service.glow} 0%, transparent 100%)`,
          opacity: isHovered ? 1 : 0.25,
        }}
      />

      {/* Top border active accent line */}
      <div
        className="absolute top-0 inset-x-0 h-[2px] transition-all duration-500"
        style={{
          backgroundColor: service.accent,
          opacity: isHovered ? 1 : 0.4,
          transform: isHovered ? "scaleX(1)" : "scaleX(0.4)",
          transformOrigin: "center",
        }}
      />

      <div className="relative p-6 sm:p-7 flex flex-col flex-1 z-10">
        {/* Header: Meta Badge + Index Number */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border transition-colors duration-300"
            style={{
              borderColor: `${service.accent}50`,
              backgroundColor: `${service.accent}15`,
              color: service.accent,
            }}
          >
            {service.badge}
          </span>
          <span
            className="font-mono text-xs font-bold tracking-wider transition-colors duration-300"
            style={{
              color: isHovered ? service.accent : "var(--text-muted)",
            }}
          >
            #{service.num}
          </span>
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-13 h-13 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 shadow-sm"
            style={{
              backgroundColor: `${service.accent}12`,
              borderColor: isHovered ? service.accent : `${service.accent}35`,
              transform: isHovered ? "scale(1.08) rotate(3deg)" : "scale(1) rotate(0deg)",
              boxShadow: isHovered ? `0 0 20px ${service.glow}` : "none",
            }}
          >
            <IconComponent
              size={26}
              style={{
                color: service.accent,
              }}
            />
          </div>

          <div className="flex-1 min-w-0 pt-1">
            <h3
              className="text-lg sm:text-xl font-bold tracking-tight leading-snug transition-colors duration-300"
              style={{
                color: "var(--text-primary)",
              }}
            >
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-[13px] sm:text-sm font-normal leading-relaxed mb-6"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          {service.description}
        </p>

        {/* Key Deliverables Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {service.deliverables.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-md border transition-all duration-200"
              style={{
                backgroundColor: "color-mix(in srgb, var(--surface) 60%, transparent)",
                borderColor: "color-mix(in srgb, var(--card-border) 60%, transparent)",
                color: "var(--text-secondary)",
              }}
            >
              <CheckCircle2
                size={11}
                className="shrink-0"
                style={{ color: service.accent }}
              />
              <span>{item}</span>
            </span>
          ))}
        </div>

        {/* Footer: Action Button */}
        <div className="pt-4 border-t" style={{ borderColor: "color-mix(in srgb, var(--card-border) 40%, transparent)" }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Inquire about ${service.title}`}
            className="group/btn relative w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider uppercase border transition-all duration-300"
            style={{
              backgroundColor: isHovered
                ? `${service.accent}18`
                : "color-mix(in srgb, var(--surface) 70%, transparent)",
              borderColor: isHovered ? service.accent : "color-mix(in srgb, var(--card-border) 80%, transparent)",
              color: isHovered ? service.accent : "var(--text-primary)",
            }}
          >
            <span>Inquire Now</span>
            <div
              className="w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/btn:translate-x-1"
              style={{
                backgroundColor: isHovered ? service.accent : "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                color: isHovered ? "#FFFFFF" : "var(--text-secondary)",
              }}
            >
              <ArrowRight size={13} />
            </div>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   SERVICES MAIN SECTION
========================================================= */

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="services"
      className="relative px-4 pt-1 sm:pt-2 pb-14 sm:pb-20 md:px-8 overflow-hidden transition-colors duration-300 select-none"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      {/* Ambient background glows */}
      <motion.div
        className="absolute top-1/4 -right-16 md:-right-32 w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-orange-500/10 blur-[110px] md:blur-[160px] pointer-events-none"
        animate={{
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 -left-16 md:-left-32 w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-cyan-500/10 blur-[110px] md:blur-[160px] pointer-events-none"
        animate={{
          y: [0, 60, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 mb-3">
            <Sparkles size={13} className="text-orange-400" />
            <span className="text-xs uppercase font-bold tracking-wider text-orange-400">
              Future-Ready STEM Solutions
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-1 sm:mb-2 tracking-tight flex justify-center items-center gap-2 sm:gap-3"
            style={{
              color: "var(--text-primary)",
            }}
          >
            <span>Our</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500">
              Services
            </span>
          </h2>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-5 px-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count =
                cat.id === "all"
                  ? services.length
                  : services.filter((s) => s.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer border flex items-center gap-2"
                  style={{
                    backgroundColor: isSelected
                      ? "var(--primary-accent)"
                      : "color-mix(in srgb, var(--card-bg) 80%, transparent)",
                    borderColor: isSelected
                      ? "var(--primary-accent)"
                      : "color-mix(in srgb, var(--card-border) 70%, transparent)",
                    color: isSelected ? "#FFFFFF" : "var(--text-secondary)",
                    boxShadow: isSelected
                      ? "0 4px 16px rgba(255, 122, 0, 0.35)"
                      : "none",
                  }}
                >
                  <span>{cat.label}</span>
                  <span
                    className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-md"
                    style={{
                      backgroundColor: isSelected
                        ? "rgba(255, 255, 255, 0.25)"
                        : "color-mix(in srgb, var(--surface) 80%, transparent)",
                      color: isSelected ? "#FFFFFF" : "var(--text-muted)",
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Services Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, i) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={i}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
