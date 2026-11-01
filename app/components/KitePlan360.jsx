"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  PenTool,
  Layers,
  Wrench,
  Code2,
  BrainCircuit,
  ClipboardCheck,
  Trophy
} from "lucide-react";

// ── The 8 Phases of Kite Robotics 360° Plan ──
export const CONCEPTS = [
  {
    id: "concept",
    num: "01",
    title: "CONCEPT",
    subtitle: "Ideation & Problem Discovery",
    color: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.45)",
    Icon: Lightbulb,
    desc: "Formulating innovative ideas, exploring real-world engineering challenges, and establishing fundamental STEM principles before building.",
    skills: ["Creative Brainstorming", "Real-world Problem Scoping", "STEM Foundations"]
  },
  {
    id: "apply",
    num: "02",
    title: "APPLY",
    subtitle: "Practical Science & Formulation",
    color: "#FF7A00",
    glowColor: "rgba(255, 122, 0, 0.45)",
    Icon: PenTool,
    desc: "Translating classroom theory into functional formulas, kinetic dynamics, circuit mechanics, and practical engineering blueprints.",
    skills: ["Applied Mathematics", "Kinematics & Physics", "Circuit Schematics"]
  },
  {
    id: "design",
    num: "03",
    title: "DESIGN",
    subtitle: "2D/3D CAD & Structural Blueprints",
    color: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.45)",
    Icon: Layers,
    desc: "Drafting 3D CAD models, structural chassis blueprints, and aerodynamic simulations to validate spatial design before production.",
    skills: ["3D Parametric CAD", "Structural Integrity", "Aero Prototyping"]
  },
  {
    id: "build",
    num: "04",
    title: "BUILD",
    subtitle: "Robotics Hardware & Assembly",
    color: "#22C55E",
    glowColor: "rgba(34, 197, 94, 0.45)",
    Icon: Wrench,
    desc: "Hands-on engineering workshop: fabricating chassis, connecting high-torque motors, wiring sensors, and configuring microcontrollers.",
    skills: ["Mechatronics Assembly", "Motor Drives & Gears", "Sensor Integration"]
  },
  {
    id: "code",
    num: "05",
    title: "CODE",
    subtitle: "Firmware, Logic & Automation",
    color: "#3B82F6",
    glowColor: "rgba(59, 130, 246, 0.45)",
    Icon: Code2,
    desc: "Breathing intelligence into robotic hardware through Scratch block coding, Arduino C++, Python automation, and PID control algorithms.",
    skills: ["Embedded C++", "Python Automation", "Autonomous Navigation"]
  },
  {
    id: "test",
    num: "06",
    title: "TEST",
    subtitle: "Sensor Calibration & Diagnostics",
    color: "#8B5CF6",
    glowColor: "rgba(139, 92, 246, 0.45)",
    Icon: BrainCircuit,
    desc: "Hardware-in-the-loop diagnostics, ultrasonic and LiDAR sensor calibration, fault-tracing, and performance tuning under extreme stress.",
    skills: ["Sensor Calibration", "Stress Benchmarking", "Diagnostics & AI Logic"]
  },
  {
    id: "task",
    num: "07",
    title: "TASK",
    subtitle: "Mission Challenges & Execution",
    color: "#EC4899",
    glowColor: "rgba(236, 72, 153, 0.45)",
    Icon: ClipboardCheck,
    desc: "Deploying autonomous robots to solve real arena tasks: maze solving, automated warehouse logistics, object sorting, and time trials.",
    skills: ["Obstacle Mazes", "Timed Precision Tasks", "Mission Milestone Execution"]
  },
  {
    id: "result",
    num: "08",
    title: "RESULT",
    subtitle: "Championships & Global STEM Honors",
    color: "#EAB308",
    glowColor: "rgba(234, 179, 8, 0.45)",
    Icon: Trophy,
    desc: "Demonstrating excellence at national & international robotics olympiads (WRO), IIT tech fests, patent showcases, and global hackathons.",
    skills: ["World Robot Olympiad", "IIT Tech Competitions", "Global STEM Certification"]
  }
];

// ── 360° Interactive Constellation SVG (Left Column) ──
export function KiteConstellation({
  activeIndex,
  setActiveIndex,
  isHovering,
  setIsHovering
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width - 0.5;
    const dy = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: Number((-dy * 14).toFixed(2)),
      y: Number((dx * 14).toFixed(2))
    });
  };

  const handleMouseLeave = () => {
    setIsHovering?.(false);
    setTilt({ x: 0, y: 0 });
  };

  const size = 640;
  const center = 320;
  const orbitRadius = 222;
  const fireRadius = 280;
  const flameCount = 32;

  const current = CONCEPTS[activeIndex] || CONCEPTS[0];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering?.(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[420px] lg:max-w-[460px] xl:max-w-[490px] aspect-square flex items-center justify-center transition-transform duration-500 ease-out cursor-default"
      style={{
        perspective: "1200px",
        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      }}
    >
      {/* Ambient Cosmic Background Glow */}
      <div
        className="absolute inset-0 rounded-full blur-[100px] opacity-30 pointer-events-none transition-colors duration-700"
        style={{
          background: `radial-gradient(circle, ${current.color} 0%, rgba(255, 122, 0, 0.25) 45%, transparent 70%)`
        }}
      />

      {/* Main SVG Graphic */}
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full overflow-visible drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Fiery Solar Flare Gradient */}
          {/* Cybernetic High-Tech Outer Ring Gradient (Cyan -> Emerald -> Indigo -> Violet) */}
          <linearGradient id="kiteTechRingGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="35%" stopColor="#10B981" />
            <stop offset="70%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          {/* Cyber Neon Glow Filter */}
          <filter id="cyberRingGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" />
          </filter>

          {/* Core Glow Filter */}
          <filter id="coreGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Kite Brand Center Shield Gradient */}
          <linearGradient id="kiteCenterGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF7A00" />
            <stop offset="50%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>

          {/* Card Background Gradient */}
          <linearGradient id="tileDarkGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d1430" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#070c20" stopOpacity="0.98" />
          </linearGradient>

          {/* ClipPath for Official Circular Kite Logo */}
          <clipPath id="centerLogoClip">
            <circle cx="0" cy="0" r="45" />
          </clipPath>

          {/* Dynamic Node Specific Gradients */}
          {CONCEPTS.map((c) => (
            <radialGradient id={`glow-${c.id}`} key={`glow-${c.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={c.color} stopOpacity="0.7" />
              <stop offset="100%" stopColor={c.color} stopOpacity="0" />
            </radialGradient>
          ))}

          <style>{`
            @keyframes spinClockwise {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes spinCounter {
              from { transform: rotate(360deg); }
              to { transform: rotate(0deg); }
            }
            @keyframes pulseRadar {
              0%, 100% { opacity: 0.65; stroke-width: 2px; }
              50% { opacity: 1; stroke-width: 3px; }
            }
            @keyframes rippleWave {
              0% { r: 55px; opacity: 0.65; }
              100% { r: 240px; opacity: 0; }
            }
            .spin-outer-track {
              transform-origin: ${center}px ${center}px;
              animation: spinClockwise 85s linear infinite;
            }
            .spin-inner-track {
              transform-origin: ${center}px ${center}px;
              animation: spinCounter 42s linear infinite;
            }
            .pulse-hud {
              animation: pulseRadar 3.2s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* ── Radiating Ripple Waves from Center ── */}
        {[0, 1.8, 3.6].map((delay, idx) => (
          <circle
            key={`ripple-${idx}`}
            cx={center}
            cy={center}
            r="55"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="1.2"
            opacity="0"
            style={{
              animation: `rippleWave 5.5s cubic-bezier(0.1, 0.4, 0.2, 1) infinite`,
              animationDelay: `${delay}s`
            }}
          />
        ))}

        {/* Faint Inner Guide Orbit */}
        <circle
          cx={center}
          cy={center}
          r={orbitRadius}
          fill="none"
          stroke="rgba(160, 180, 255, 0.16)"
          strokeWidth="1.2"
          strokeDasharray="3 8"
        />

        {/* Secondary Concentric Radar Ring */}
        <circle
          cx={center}
          cy={center}
          r="140"
          fill="none"
          stroke="rgba(255, 122, 0, 0.14)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />

        {/* ── High-Tech Cybernetic Quantum Orbital Ring (KITE Robotics Telemetry) ── */}
        {/* 1. Ambient Neon Cyan Glow Underlay */}
        <circle
          cx={center}
          cy={center}
          r={fireRadius}
          fill="none"
          stroke="#06B6D4"
          strokeWidth="14"
          opacity="0.18"
          filter="url(#cyberRingGlow)"
        />

        {/* 2. Counter-Rotating Inner Accelerator Ring (Neon Emerald & Cyan) */}
        <g className="spin-inner-track">
          <circle
            cx={center}
            cy={center}
            r={fireRadius - 10}
            fill="none"
            stroke="#10B981"
            strokeWidth="1.8"
            strokeDasharray="40 14 12 14 70 20"
            opacity="0.75"
          />
          <circle
            cx={center}
            cy={center}
            r={fireRadius - 16}
            fill="none"
            stroke="#06B6D4"
            strokeWidth="1"
            strokeDasharray="3 8"
            opacity="0.45"
          />
          {/* Sweeping Aerodynamic Brackets on Inner Ring */}
          {[0, 120, 240].map((deg) => (
            <g key={`bracket-${deg}`} transform={`rotate(${deg} ${center} ${center})`}>
              <path
                d={`M ${center - 24} ${center - fireRadius + 10} L ${center + 24} ${center - fireRadius + 10}`}
                stroke="#06B6D4"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.9"
              />
              <circle cx={center} cy={center - fireRadius + 10} r="2.5" fill="#FFFFFF" />
            </g>
          ))}
        </g>

        {/* 3. Primary Outer Precision Telemetry HUD Ring (Cyan -> Emerald -> Indigo -> Violet) */}
        <g className="spin-outer-track">
          {/* Main Segmented Rail */}
          <circle
            cx={center}
            cy={center}
            r={fireRadius}
            fill="none"
            stroke="url(#kiteTechRingGrad)"
            strokeWidth="2.6"
            strokeDasharray="24 8 8 8 48 10 12 10"
            className="pulse-hud"
            opacity="0.95"
          />

          {/* 48 Precision Radar/HUD Calibration Ticks */}
          {Array.from({ length: 48 }).map((_, i) => {
            const deg = (360 / 48) * i;
            const isMajor = i % 4 === 0;
            const tickLen = isMajor ? 11 : 6;
            const strokeCol = isMajor ? "#06B6D4" : "rgba(16, 185, 129, 0.4)";
            const sWidth = isMajor ? 1.8 : 1;

            return (
              <g
                key={`hud-tick-${i}`}
                transform={`rotate(${deg} ${center} ${center}) translate(${center} ${center - fireRadius})`}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2={tickLen}
                  stroke={strokeCol}
                  strokeWidth={sWidth}
                  strokeLinecap="round"
                />
              </g>
            );
          })}

          {/* 4 Cardinal Telemetry Micro-Nodes (North, East, South, West) */}
          {[0, 90, 180, 270].map((deg) => (
            <g
              key={`cardinal-${deg}`}
              transform={`rotate(${deg} ${center} ${center}) translate(${center} ${center - fireRadius})`}
            >
              <polygon
                points="0,-6 6,0 0,6 -6,0"
                fill="#060A19"
                stroke="#06B6D4"
                strokeWidth="1.6"
              />
              <circle cx="0" cy="0" r="2.2" fill="#22C55E" />
            </g>
          ))}
        </g>

        {/* 4. High-Speed Orbiting Photons / Energy Comets Tracing the Track */}
        {[
          { dur: "14s", color: "#06B6D4", r: 4.5, delay: "0s" },
          { dur: "18s", color: "#10B981", r: 4, delay: "-6s" },
          { dur: "22s", color: "#8B5CF6", r: 3.5, delay: "-12s" }
        ].map((comet, idx) => (
          <g key={`comet-${idx}`}>
            <circle r={comet.r} fill={comet.color} filter="url(#cyberRingGlow)" opacity="0.95">
              <animateMotion
                path={`M ${center} ${center - fireRadius} A ${fireRadius} ${fireRadius} 0 1 1 ${center - 0.1} ${center - fireRadius}`}
                dur={comet.dur}
                begin={comet.delay}
                repeatCount="indefinite"
              />
            </circle>
            <circle r={comet.r * 0.55} fill="#FFFFFF">
              <animateMotion
                path={`M ${center} ${center - fireRadius} A ${fireRadius} ${fireRadius} 0 1 1 ${center - 0.1} ${center - fireRadius}`}
                dur={comet.dur}
                begin={comet.delay}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* ── Radial Laser Bond Lines ── */}
        {CONCEPTS.map((c, i) => {
          const angle = -Math.PI / 2 + (i * 2 * Math.PI) / CONCEPTS.length;
          const x = center + orbitRadius * Math.cos(angle);
          const y = center + orbitRadius * Math.sin(angle);
          const isActive = activeIndex === i;

          return (
            <g key={`bond-${c.id}`}>
              <line
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke={c.color}
                strokeWidth={isActive ? 2.6 : 1.2}
                strokeOpacity={isActive ? 0.95 : 0.3}
                className="transition-all duration-300"
              />
              <circle
                r={isActive ? 4 : 2.5}
                fill={c.color}
                className="transition-all duration-300"
              >
                <animateMotion
                  path={`M${center} ${center} L${x.toFixed(1)} ${y.toFixed(1)}`}
                  dur={`${isActive ? 1.4 : 2.4 + (i % 3) * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* ── Central Kite Robotics Core (Header & Footer Logo) ── */}
        <g transform={`translate(${center} ${center})`}>
          <circle
            r="72"
            fill={current.color}
            opacity="0.36"
            filter="url(#coreGlow)"
            className="transition-colors duration-500"
          />

          <circle
            r="58"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeOpacity="0.5"
          >
            <animate
              attributeName="r"
              values="52;84"
              dur="2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              values="0.6;0"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            r="51"
            fill="#060a19"
            stroke="url(#kiteCenterGrad)"
            strokeWidth="3.8"
            className="drop-shadow-xl"
          />

          <circle
            r="46"
            fill="#FFFFFF"
          />

          <image
            href="/kite_logo.jpg"
            x="-45"
            y="-45"
            width="90"
            height="90"
            preserveAspectRatio="xMidYMid meet"
            clipPath="url(#centerLogoClip)"
          />

          <circle
            r="46"
            fill="none"
            stroke="rgba(255, 122, 0, 0.25)"
            strokeWidth="1.2"
          />

          <g transform="translate(0, 48)">
            <rect
              x="-40"
              y="-10"
              width="80"
              height="20"
              rx="10"
              fill="#060A19"
              stroke="url(#kiteCenterGrad)"
              strokeWidth="1.6"
              className="drop-shadow-md"
            />
            <text
              x="0"
              y="3.8"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="9"
              fontWeight="800"
              fontFamily="var(--font-inter), sans-serif"
              letterSpacing="0.08em"
            >
              360° PLAN
            </text>
          </g>
        </g>

        {/* ── 8 Concept Orbital Nodes ── */}
        {CONCEPTS.map((c, i) => {
          const angle = -Math.PI / 2 + (i * 2 * Math.PI) / CONCEPTS.length;
          const x = center + orbitRadius * Math.cos(angle);
          const y = center + orbitRadius * Math.sin(angle);
          const isActive = activeIndex === i;

          return (
            <g
              key={`node-${c.id}`}
              transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}
              className="cursor-pointer group"
              onClick={() => setActiveIndex(i)}
              onMouseEnter={() => {
                setActiveIndex(i);
                setIsHovering?.(true);
              }}
            >
              <circle
                r="44"
                fill={`url(#glow-${c.id})`}
                opacity={isActive ? 0.75 : 0}
                className="transition-opacity duration-300 pointer-events-none"
              />

              <g
                className="transition-transform duration-300 ease-out"
                transform={isActive ? "scale(1.15)" : "scale(1)"}
              >
                <rect
                  x="-37"
                  y="-37"
                  width="74"
                  height="74"
                  rx="16"
                  fill="url(#tileDarkGrad)"
                  stroke={c.color}
                  strokeWidth={isActive ? 2.4 : 1.2}
                  strokeOpacity={isActive ? 1 : 0.45}
                  className="transition-all duration-300 drop-shadow-md"
                />

                <rect
                  x="-37"
                  y="-37"
                  width="74"
                  height="74"
                  rx="16"
                  fill={c.color}
                  opacity={isActive ? 0.16 : 0.05}
                  className="transition-opacity duration-300"
                />

                <text
                  x="-26"
                  y="-20"
                  fill={isActive ? c.color : "#6B7280"}
                  fontSize="9"
                  fontWeight="700"
                  fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                >
                  {c.num}
                </text>

                <foreignObject x="-14" y="-18" width="28" height="28">
                  <div className="w-full h-full flex items-center justify-center">
                    <c.Icon
                      size={22}
                      color={c.color}
                      strokeWidth={isActive ? 2.4 : 1.8}
                      className={`transition-transform duration-300 ${
                        isActive ? "scale-110 drop-shadow-[0_0_8px_" + c.color + "]" : "opacity-85"
                      }`}
                    />
                  </div>
                </foreignObject>

                <text
                  x="0"
                  y="26"
                  textAnchor="middle"
                  fill={isActive ? "#FFFFFF" : "#94A3B8"}
                  fontSize="9.5"
                  fontWeight={isActive ? "800" : "600"}
                  letterSpacing="0.06em"
                  fontFamily="var(--font-inter), sans-serif"
                  className="transition-colors duration-300"
                >
                  {c.title}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ── Concept Showcase Card & Step Navigator (Replaces The Core Advantage Card) ──
export function KiteConceptCard({
  activeIndex,
  setActiveIndex,
  setIsHovering
}) {
  const current = CONCEPTS[activeIndex] || CONCEPTS[0];

  return (
    <div className="w-full my-1.5 text-left">
      {/* ── Main Detail Card ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="p-3.5 sm:p-4 rounded-2xl border backdrop-blur-xl relative overflow-hidden shadow-xl transition-all duration-300"
          style={{
            backgroundColor: "var(--card-bg)",
            borderColor: `${current.color}40`,
            boxShadow: `0 10px 30px -10px ${current.glowColor}`
          }}
          onMouseEnter={() => setIsHovering?.(true)}
          onMouseLeave={() => setIsHovering?.(false)}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-30 transition-colors duration-500"
            style={{ backgroundColor: current.color }}
          />

          {/* Header Row: Icon + Phase Badge + Title */}
          <div className="flex items-start gap-3 mb-2">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner mt-0.5"
              style={{
                backgroundColor: `${current.color}15`,
                border: `1.5px solid ${current.color}50`
              }}
            >
              <current.Icon size={18} color={current.color} strokeWidth={2.2} />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span
                  className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${current.color}20`,
                    color: current.color
                  }}
                >
                  PHASE {current.num}
                </span>
                <span className="text-[11px] text-gray-400 font-medium tracking-wide">
                  • 360° STEM PLAN
                </span>
              </div>
              <h3
                className="text-base sm:text-lg font-black tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {current.title}:{" "}
                <span style={{ color: current.color }}>{current.subtitle}</span>
              </h3>
            </div>
          </div>

          {/* Description Paragraph */}
          <p
            className="text-xs sm:text-sm leading-relaxed mb-2.5 font-normal"
            style={{ color: "var(--text-secondary)" }}
          >
            {current.desc}
          </p>

          {/* Core Focus Highlights with Bullet Dots */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-2 border-t border-white/10">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              CORE FOCUS:
            </span>
            {current.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shadow-sm"
                  style={{ backgroundColor: current.color }}
                />
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── 01 to 08 Phase Step Navigator (Under Card) ── */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 mt-2">
        {CONCEPTS.map((c, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={`nav-btn-${c.id}`}
              onClick={() => {
                setActiveIndex(idx);
                setIsHovering?.(true);
              }}
              onMouseEnter={() => {
                setActiveIndex(idx);
                setIsHovering?.(true);
              }}
              className={`py-1.5 px-0.5 rounded-lg text-center transition-all duration-200 border flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                isActive
                  ? "bg-white/10 shadow-md scale-105"
                  : "bg-transparent border-transparent text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }`}
              style={{
                borderColor: isActive ? c.color : "rgba(255,255,255,0.08)",
                color: isActive ? c.color : undefined
              }}
            >
              <span className="font-mono font-bold text-[11px]">{c.num}</span>
              <span
                className={`text-[9px] font-bold tracking-tight uppercase ${
                  isActive ? "text-white" : "text-gray-400"
                }`}
              >
                {c.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Default export wrapper (if rendered as a single component)
export default function KitePlan360() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CONCEPTS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className="w-full flex flex-col items-center">
      <KiteConstellation
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        isHovering={isHovering}
        setIsHovering={setIsHovering}
      />
      <KiteConceptCard
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setIsHovering={setIsHovering}
      />
    </div>
  );
}
