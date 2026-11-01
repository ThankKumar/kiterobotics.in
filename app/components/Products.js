"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Bot,
  Wifi,
  Activity,
  BrainCircuit,
  ShoppingCart,
  ArrowRight,
  Sparkles,
  Eye,
  CheckCircle2,
  X,
  ShieldCheck,
  Truck,
  BookOpen,
  Zap,
  Star,
  Layers,
} from "lucide-react";

/* =========================================================
   PRODUCTS DATA
======================================================================================== */

const CATEGORIES = [
  { id: "all", label: "All Hardware" },
  { id: "starter", label: "Starter & Boards" },
  { id: "robotics", label: "Autonomous Robotics" },
  { id: "iot-ai", label: "IoT & Edge AI" },
];

const products = [
  {
    id: "arduino",
    category: "starter",
    title: "Arduino Uno Starter Kit",
    badge: "Beginner Friendly",
    tagline: "Essential Electronics & Coding Lab",
    price: "₹2,499",
    originalPrice: "₹3,499",
    discount: "28% OFF",
    rating: "4.9",
    reviewsCount: "1,200+",
    accent: "#FF7A00", // Orange
    glow: "rgba(255, 122, 0, 0.35)",
    icon: Cpu,
    description:
      "All-in-one starter lab with ATmega328P microcontroller, breadboard, jumper wires, sensors, and structured step-by-step experiment guides.",
    deliverables: [
      "Uno R3 ATmega328P Board",
      "30+ Modular Sensors & LEDs",
      "Comprehensive Beginner Manual",
      "15+ Pre-coded Example Projects",
    ],
    specs: [
      { label: "Microcontroller", value: "ATmega328P (16MHz)" },
      { label: "Operating Voltage", value: "5V USB / 7-12V DC Jack" },
      { label: "I/O Ports", value: "14 Digital (6 PWM), 6 Analog" },
      { label: "Programming", value: "Arduino IDE, Scratch, C++" },
    ],
    skills: ["Circuit Theory", "Embedded C++", "Sensor Interfacing", "Breadboard Prototyping"],
  },
  {
    id: "robot",
    category: "robotics",
    title: "4WD Autonomous Rover Kit",
    badge: "Bestseller 🔥",
    tagline: "Obstacle Avoidance & Bluetooth Bot",
    price: "₹4,999",
    originalPrice: "₹6,499",
    discount: "23% OFF",
    rating: "5.0",
    reviewsCount: "850+",
    accent: "#22C55E", // Green
    glow: "rgba(34, 197, 94, 0.35)",
    icon: Bot,
    description:
      "Build a multi-functional robotic rover with high-torque DC motors, ultrasonic collision radar, infrared line-trackers, and mobile app control.",
    deliverables: [
      "Dual-deck Acrylic Chassis",
      "4x High-Torque Gear Motors & Wheels",
      "L298N Motor Driver + Servo Radar",
      "Bluetooth BLE Wireless Telemetry",
    ],
    specs: [
      { label: "Drive System", value: "4-Wheel Independent Drive" },
      { label: "Sensors", value: "Ultrasonic Distance + 2x IR" },
      { label: "Control", value: "Autonomous PID / Android App" },
      { label: "Battery", value: "Li-Ion 18650 Dual Cell Holder" },
    ],
    skills: ["Robotic Kinematics", "Motor Drivers", "PID Navigation", "Mobile App Telemetry"],
  },
  {
    id: "iot",
    category: "iot-ai",
    title: "ESP32 IoT Cloud Station",
    badge: "Cloud Telemetry",
    tagline: "Smart Home & Wireless Automation",
    price: "₹3,499",
    originalPrice: "₹4,499",
    discount: "22% OFF",
    rating: "4.8",
    reviewsCount: "620+",
    accent: "#06B6D4", // Cyan
    glow: "rgba(6, 182, 212, 0.35)",
    icon: Wifi,
    description:
      "Connect your sensors and relays to live web dashboards using dual-core ESP32 with built-in Wi-Fi, Bluetooth LE, and MQTT integration.",
    deliverables: [
      "ESP32 Dual-Core NodeMCU Board",
      "4-Channel Optocoupled Relays",
      "0.96-inch OLED Live Telemetry HUD",
      "Cloud Dashboard Setup Source Code",
    ],
    specs: [
      { label: "Wireless", value: "Wi-Fi 802.11 b/g/n + BLE 4.2" },
      { label: "Processor", value: "Xtensa 32-bit Dual Core (240MHz)" },
      { label: "Display", value: "128x64 I2C OLED Monochrome" },
      { label: "Protocols", value: "HTTP, MQTT, WebSockets, BLE" },
    ],
    skills: ["IoT Architecture", "MQTT Broker Setup", "Cloud Telemetry", "Relay Automation"],
  },
  {
    id: "sensor",
    category: "starter",
    title: "16-in-1 Sensor Master Pack",
    badge: "Lab Essential",
    tagline: "Comprehensive Telemetry Arsenal",
    price: "₹1,899",
    originalPrice: "₹2,699",
    discount: "30% OFF",
    rating: "4.9",
    reviewsCount: "950+",
    accent: "#A855F7", // Purple
    glow: "rgba(168, 85, 247, 0.35)",
    icon: Activity,
    description:
      "A complete laboratory kit of 16 precision sensors covering motion, atmospheric temperature, acoustics, infrared, gas, and soil moisture.",
    deliverables: [
      "16 Plug-and-Play Precision Modules",
      "Ultrasonic, PIR Motion, Gas & Sound",
      "Soil Moisture, Flame & Temperature",
      "40x Multi-color Female-to-Male Jumpers",
    ],
    specs: [
      { label: "Modules Count", value: "16 Calibrated Sensors" },
      { label: "Logic Level", value: "3.3V and 5V Dual Compatibility" },
      { label: "Outputs", value: "Digital Threshold & Analog Pin" },
      { label: "Compatibility", value: "Arduino, ESP32, Raspberry Pi" },
    ],
    skills: ["Analog Signal Sampling", "Digital Thresholds", "Calibration", "Multi-Sensor Fusion"],
  },
  {
    id: "ai",
    category: "iot-ai",
    title: "Edge AI & Vision Pro Kit",
    badge: "Next-Gen AI ⚡",
    tagline: "On-Device Neural Machine Vision",
    price: "₹6,999",
    originalPrice: "₹8,999",
    discount: "22% OFF",
    rating: "5.0",
    reviewsCount: "410+",
    accent: "#3B82F6", // Blue
    glow: "rgba(59, 130, 246, 0.35)",
    icon: BrainCircuit,
    description:
      "Smart machine vision camera module with dedicated hardware neural accelerators for real-time face detection, object tracking, and gesture recognition.",
    deliverables: [
      "Neural Smart Vision Camera Sensor",
      "On-Board Deep Learning TPU Processor",
      "Pan-Tilt Dual Micro Servo Gantry",
      "Pre-trained Model Weights & Python Repo",
    ],
    specs: [
      { label: "AI Acceleration", value: "Hardware Neural Engine (KPU)" },
      { label: "Camera Resolution", value: "HD Sensor with Wide Lens" },
      { label: "Frame Rate", value: "Up to 60 FPS Neural Inference" },
      { label: "Supported Models", value: "YOLO, MobileNet, Haar Cascade" },
    ],
    skills: ["Computer Vision", "Object Detection", "Model Deployment", "Autonomous Tracking"],
  },
];

const WHATSAPP_BASE = "https://wa.me/919564866985";

/* =========================================================
   ANIMATED PRODUCT VISUAL CORE
========================================================= */

function ProductVisualCore({ product }) {
  const accent = product.accent;

  if (product.id === "arduino") {
    return (
      <div className="relative w-full h-36 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-black/20 to-black/40">
        {/* Glowing Circuit Grid */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke={accent} strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-grid)" />
          </svg>
        </div>

        {/* Microcontroller PCB Visual */}
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-36 h-20 rounded-lg border-2 flex items-center justify-center shadow-lg"
          style={{
            backgroundColor: "#0d2818",
            borderColor: accent,
            boxShadow: `0 0 25px ${product.glow}`,
          }}
        >
          {/* Main MCU Chip */}
          <div className="w-12 h-10 bg-neutral-900 border border-neutral-700 rounded flex flex-col items-center justify-center relative shadow-inner">
            <span className="text-[7px] font-mono font-bold text-orange-400">ATmega</span>
            <span className="text-[6px] font-mono text-neutral-400">328P</span>
            {/* Chip pins */}
            <div className="absolute -left-1.5 top-1 bottom-1 flex flex-col justify-between">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1.5 h-[2px] bg-neutral-400" />
              ))}
            </div>
            <div className="absolute -right-1.5 top-1 bottom-1 flex flex-col justify-between">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1.5 h-[2px] bg-neutral-400" />
              ))}
            </div>
          </div>

          {/* USB Port */}
          <div className="absolute -left-2 top-2.5 w-3.5 h-5 bg-neutral-300 border border-neutral-500 rounded-sm" />

          {/* Crystal Oscillator */}
          <div className="absolute top-2.5 right-4 w-4 h-2 bg-neutral-400 rounded-full border border-neutral-600" />

          {/* Blinking RX/TX LEDs */}
          <div className="absolute bottom-2.5 right-3 flex items-center gap-1.5">
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#22c55e]"
            />
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_#ff7a00]"
            />
          </div>
        </motion.div>
      </div>
    );
  }

  if (product.id === "robot") {
    return (
      <div className="relative w-full h-36 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-black/20 to-black/40">
        {/* Animated Radar Scanning Lines */}
        <motion.div
          animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.5, 0.1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-28 h-28 rounded-full border border-dashed"
          style={{ borderColor: accent }}
        />

        {/* 4WD Rover Body */}
        <motion.div
          animate={{ rotate: [-2, 2, -2], y: [-2, 2, -2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-32 h-20 rounded-xl border flex items-center justify-between px-2.5 shadow-xl"
          style={{
            backgroundColor: "color-mix(in srgb, var(--surface) 90%, black)",
            borderColor: accent,
            boxShadow: `0 0 25px ${product.glow}`,
          }}
        >
          {/* Left Wheels */}
          <div className="absolute -left-2.5 inset-y-1 flex flex-col justify-between">
            <div className="w-3 h-6 bg-neutral-900 border border-neutral-600 rounded-sm shadow-md" />
            <div className="w-3 h-6 bg-neutral-900 border border-neutral-600 rounded-sm shadow-md" />
          </div>

          {/* Ultrasonic Sensor Eyes */}
          <div className="mx-auto flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-neutral-900 border-2 border-green-400 flex items-center justify-center shadow-inner">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            </div>
            <div className="w-5 h-5 rounded-full bg-neutral-900 border-2 border-green-400 flex items-center justify-center shadow-inner">
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>
          </div>

          {/* Right Wheels */}
          <div className="absolute -right-2.5 inset-y-1 flex flex-col justify-between">
            <div className="w-3 h-6 bg-neutral-900 border border-neutral-600 rounded-sm shadow-md" />
            <div className="w-3 h-6 bg-neutral-900 border border-neutral-600 rounded-sm shadow-md" />
          </div>
        </motion.div>
      </div>
    );
  }

  if (product.id === "iot") {
    return (
      <div className="relative w-full h-36 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-black/20 to-black/40">
        {/* Pulsing WiFi Wave Rings */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            animate={{ scale: [0.6, 1.3], opacity: [0.8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: ring * 0.4,
              ease: "easeOut",
            }}
            className="absolute rounded-full border pointer-events-none"
            style={{
              width: `${ring * 42}px`,
              height: `${ring * 42}px`,
              borderColor: accent,
            }}
          />
        ))}

        {/* ESP32 Module Visual */}
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-32 h-18 rounded-lg border-2 flex items-center justify-between px-3 shadow-xl z-10"
          style={{
            backgroundColor: "#081b29",
            borderColor: accent,
            boxShadow: `0 0 25px ${product.glow}`,
          }}
        >
          {/* Metal RF Shield */}
          <div className="w-14 h-12 bg-gradient-to-tr from-neutral-300 via-neutral-100 to-neutral-400 rounded border border-neutral-500 flex flex-col items-center justify-center shadow">
            <span className="text-[7px] font-mono font-bold text-neutral-800">ESP-WROOM</span>
            <span className="text-[6px] font-mono text-cyan-700 font-bold">32</span>
          </div>

          {/* PCB Serpentine Antenna */}
          <div className="flex flex-col gap-0.5">
            <div className="w-6 h-[2px] bg-amber-400 rounded-full" />
            <div className="w-4 h-[2px] bg-amber-400 rounded-full self-end" />
            <div className="w-6 h-[2px] bg-amber-400 rounded-full" />
            <div className="w-4 h-[2px] bg-amber-400 rounded-full self-end" />
          </div>
        </motion.div>
      </div>
    );
  }

  if (product.id === "sensor") {
    return (
      <div className="relative w-full h-36 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-black/20 to-black/40">
        {/* Revolving Orbiting Sensor Nodes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="relative w-28 h-28 rounded-full border border-purple-500/30 flex items-center justify-center"
        >
          {[0, 90, 180, 270].map((deg, idx) => (
            <motion.div
              key={idx}
              className="absolute w-4 h-4 rounded-full border flex items-center justify-center shadow-md"
              style={{
                transform: `rotate(${deg}deg) translate(56px) rotate(-${deg}deg)`,
                backgroundColor: "#2e1065",
                borderColor: accent,
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-purple-300 animate-pulse" />
            </motion.div>
          ))}
        </motion.div>

        {/* Center Multi-Meter HUD */}
        <div
          className="absolute w-14 h-14 rounded-2xl border-2 flex flex-col items-center justify-center shadow-xl"
          style={{
            backgroundColor: "color-mix(in srgb, var(--surface) 90%, black)",
            borderColor: accent,
            boxShadow: `0 0 25px ${product.glow}`,
          }}
        >
          <Activity size={20} style={{ color: accent }} />
          <span className="text-[8px] font-mono font-bold mt-1 text-purple-300">16-in-1</span>
        </div>
      </div>
    );
  }

  // Edge AI Neural Core
  return (
    <div className="relative w-full h-36 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-black/20 to-black/40">
      {/* Target Reticle Crosshair */}
      <div className="absolute inset-x-8 top-1/2 h-[1px] bg-blue-500/20" />
      <div className="absolute inset-y-4 left-1/2 w-[1px] bg-blue-500/20" />

      {/* Rotating 3D Neural Ring */}
      <motion.div
        animate={{ rotateZ: 360, rotateY: [0, 180, 360] }}
        transition={{
          rotateZ: { duration: 10, repeat: Infinity, ease: "linear" },
          rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="w-24 h-24 rounded-full border border-dashed flex items-center justify-center"
        style={{ borderColor: accent }}
      >
        <div className="w-16 h-16 rounded-full border border-blue-400/40" />
      </motion.div>

      {/* Glowing AI Neural Core */}
      <motion.div
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-14 h-14 rounded-2xl border-2 flex flex-col items-center justify-center shadow-xl"
        style={{
          backgroundColor: "#0f172a",
          borderColor: accent,
          boxShadow: `0 0 30px ${product.glow}`,
        }}
      >
        <BrainCircuit size={22} style={{ color: accent }} />
        <span className="text-[7px] font-mono uppercase tracking-widest text-blue-300 font-bold mt-0.5">
          TPU CORE
        </span>
      </motion.div>
    </div>
  );
}

/* =========================================================
   QUICK INSPECT MODAL
========================================================= */

function ProductInspectModal({ product, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Kite Robotics, I am interested in ordering the "${product.title}" (${product.price}). Please share payment and delivery details.`
  );
  const whatsappUrl = `${WHATSAPP_BASE}?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.92, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 shadow-2xl"
        style={{
          backgroundColor: "var(--card-bg)",
          borderColor: product.accent,
          boxShadow: `0 25px 60px -15px ${product.glow}`,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full border flex items-center justify-center transition-colors cursor-pointer"
          style={{
            borderColor: "var(--card-border)",
            backgroundColor: "color-mix(in srgb, var(--surface) 80%, transparent)",
            color: "var(--text-secondary)",
          }}
        >
          <X size={16} />
        </button>

        {/* Header with Visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
          <ProductVisualCore product={product} />

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full border"
                style={{
                  borderColor: `${product.accent}60`,
                  backgroundColor: `${product.accent}15`,
                  color: product.accent,
                }}
              >
                {product.badge}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                <Star size={13} className="fill-amber-400" />
                <span>{product.rating}</span>
                <span className="text-[10px] text-neutral-400">({product.reviewsCount})</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
              {product.title}
            </h3>
            <p className="text-xs font-medium text-orange-400 mt-1 mb-3">{product.tagline}</p>

            <div className="flex items-baseline gap-2.5">
              <span className="text-3xl font-black" style={{ color: product.accent }}>
                {product.price}
              </span>
              <span className="text-sm line-through" style={{ color: "var(--text-muted)" }}>
                {product.originalPrice}
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-green-500/20 text-green-400">
                {product.discount}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
          {product.description}
        </p>

        {/* Technical Specs Table */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5" style={{ color: "var(--text-primary)" }}>
            <Zap size={14} style={{ color: product.accent }} />
            <span>Hardware Specifications</span>
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {product.specs.map((item, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl border flex flex-col"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--surface) 60%, transparent)",
                  borderColor: "var(--card-border)",
                }}
              >
                <span className="text-[10px] font-semibold uppercase text-neutral-400">{item.label}</span>
                <span className="font-bold mt-0.5" style={{ color: "var(--text-primary)" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5" style={{ color: "var(--text-primary)" }}>
            <Layers size={14} style={{ color: product.accent }} />
            <span>What&apos;s Included In The Box</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {product.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 size={13} style={{ color: product.accent }} className="shrink-0" />
                <span style={{ color: "var(--text-secondary)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Tag Pills */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {product.skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-[10px] font-semibold px-2.5 py-1 rounded-md border"
              style={{
                borderColor: `${product.accent}40`,
                backgroundColor: `${product.accent}10`,
                color: product.accent,
              }}
            >
              #{skill}
            </span>
          ))}
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--card-border)" }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider text-white text-center flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
            style={{
              background: `linear-gradient(135deg, ${product.accent} 0%, #22C55E 100%)`,
              boxShadow: `0 4px 20px ${product.glow}`,
            }}
          >
            <ShoppingCart size={15} />
            <span>Order Direct on WhatsApp</span>
          </a>

          <Link
            href={`/buy?product=${product.id}`}
            className="w-full sm:w-auto py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider border text-center transition-colors cursor-pointer"
            style={{
              borderColor: "var(--card-border)",
              backgroundColor: "color-mix(in srgb, var(--surface) 70%, transparent)",
              color: "var(--text-primary)",
            }}
          >
            View in Store
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   MAIN PRODUCTS SECTION
========================================================= */

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [inspectingProduct, setInspectingProduct] = useState(null);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="products"
      className="relative px-4 pt-1 sm:pt-2 pb-16 sm:pb-24 md:px-8 overflow-hidden transition-colors duration-300 select-none"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text-primary)",
      }}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-500/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 mb-3">
            <Sparkles size={13} className="text-green-400" />
            <span className="text-xs uppercase font-bold tracking-wider text-green-400">
              Genuine Hardware &amp; Robotics Kits
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-1 sm:mb-2 tracking-tight flex justify-center items-center gap-2 sm:gap-3"
            style={{ color: "var(--text-primary)" }}
          >
            <span>Our</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-cyan-500">
              Robotics
            </span>
            <span>Products</span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light tracking-wide px-4 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Production-grade microcontrollers, autonomous 4WD rover chassis, cloud IoT stations, and on-device AI vision modules.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-5 px-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count =
                cat.id === "all"
                  ? products.length
                  : products.filter((p) => p.category === cat.id).length;

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

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.article
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 border backdrop-blur-md"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--card-bg) 92%, transparent)",
                  borderColor: "color-mix(in srgb, var(--card-border) 80%, transparent)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                {/* Active Top Accent Line */}
                <div
                  className="absolute top-0 inset-x-0 h-[2px] transition-all duration-500"
                  style={{
                    backgroundColor: product.accent,
                  }}
                />

                {/* 3D Animated Visual Stage */}
                <div className="p-3 pb-0">
                  <ProductVisualCore product={product} />
                </div>

                {/* Card Content Area */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  {/* Badge & Reviews */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span
                      className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: `${product.accent}50`,
                        backgroundColor: `${product.accent}12`,
                        color: product.accent,
                      }}
                    >
                      {product.badge}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
                      <Star size={11} className="fill-amber-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    className="text-base font-bold tracking-tight leading-snug mb-1 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-[11px] font-medium text-orange-400 mb-3">{product.tagline}</p>

                  {/* Price Tag Row */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-xl font-black" style={{ color: product.accent }}>
                      {product.price}
                    </span>
                    <span className="text-xs line-through" style={{ color: "var(--text-muted)" }}>
                      {product.originalPrice}
                    </span>
                    <span className="text-[10px] font-bold text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">
                      {product.discount}
                    </span>
                  </div>

                  {/* Quick Feature Checklist (2 items) */}
                  <div className="space-y-1.5 mb-5 mt-auto">
                    {product.deliverables.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px]" style={{ color: "var(--text-secondary)" }}>
                        <CheckCircle2 size={11} style={{ color: product.accent }} className="shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-3 border-t" style={{ borderColor: "color-mix(in srgb, var(--card-border) 40%, transparent)" }}>
                    {/* Quick Inspect Button */}
                    <button
                      type="button"
                      onClick={() => setInspectingProduct(product)}
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold tracking-wider uppercase border transition-all duration-200 cursor-pointer"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--surface) 60%, transparent)",
                        borderColor: "color-mix(in srgb, var(--card-border) 80%, transparent)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <Eye size={13} style={{ color: product.accent }} />
                      <span>Inspect Specs</span>
                    </button>

                    {/* Direct Buy / WhatsApp Button */}
                    <a
                      href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                        `Hello Kite Robotics, I would like to order the "${product.title}" (${product.price}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-md transition-transform active:scale-95 cursor-pointer"
                      style={{
                        background: `linear-gradient(135deg, ${product.accent} 0%, #22C55E 100%)`,
                        boxShadow: `0 4px 15px ${product.glow}`,
                      }}
                    >
                      <ShoppingCart size={13} />
                      <span>Buy Now</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 p-4 sm:p-5 rounded-2xl border" style={{
          backgroundColor: "color-mix(in srgb, var(--card-bg) 60%, transparent)",
          borderColor: "var(--card-border)",
        }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-orange-500/10 text-orange-400">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>100% Tested Kits</p>
              <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Verified DOA Guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-green-500/10 text-green-400">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>Free Video Guides</p>
              <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Step-by-step Tutorials</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-cyan-500/10 text-cyan-400">
              <Truck size={20} />
            </div>
            <div>
              <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>Express Shipping</p>
              <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Pan-India Fast Dispatch</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-purple-500/10 text-purple-400">
              <Zap size={20} />
            </div>
            <div>
              <p className="text-xs font-bold" style={{ color: "var(--text-primary)" }}>Mentor Hotline</p>
              <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Instant WhatsApp Help</p>
            </div>
          </div>
        </div>

        {/* Bottom Custom Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-xs sm:text-sm mb-3 font-light" style={{ color: "var(--text-secondary)" }}>
            Need bulk institutional kits, customized lab components, or official Quotation?
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/buy"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer hover:scale-105"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--primary-accent)",
                color: "var(--text-primary)",
              }}
            >
              <ShoppingCart size={14} className="text-orange-500" />
              <span>Explore Store Page</span>
            </Link>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer hover:scale-105"
              style={{
                backgroundColor: "color-mix(in srgb, var(--surface) 70%, transparent)",
                borderColor: "var(--card-border)",
                color: "var(--text-secondary)",
              }}
            >
              <span>Contact Mentors</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Interactive Quick Inspect Modal */}
      <AnimatePresence>
        {inspectingProduct && (
          <ProductInspectModal
            product={inspectingProduct}
            onClose={() => setInspectingProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
