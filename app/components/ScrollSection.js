"use client";

import { useRef, useEffect } from "react";

/*
  ============================================================
  GSAP + ScrollTrigger ZOOM PARALLAX
  ============================================================
  Each section gets two ScrollTrigger instances:
  
  OUTGOING (gsap.to):  scale 1→0.7, opacity 1→0.3, y 0→-100
  INCOMING (gsap.from): scale 0.3→1, opacity 0→1,   y 100→0
  
  - Duration: 0.8–1s per transition
  - Stagger between entering and leaving animations
  - Hero: pinned + zooms out via separate ScrollTrigger
  - All via direct DOM — zero React re-renders on scroll
*/

/* Lazy-load GSAP + ScrollTrigger only in browser */
let gsapLoaded = false;
let gsapPromise = null;

function loadGSAP() {
  if (gsapPromise) return gsapPromise;
  gsapPromise = Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]).then(([{ gsap }, { ScrollTrigger }]) => {
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scrub defaults
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });

    gsapLoaded = true;
    return { gsap, ScrollTrigger };
  });
  return gsapPromise;
}

/* ══════════════════════════════════════════════════════════════
   HERO SCROLL REVEAL
   - Pinned at top while it zooms out (stays stuck until next section)
   - gsap.to: scale 1→0.75, opacity 1→0, y 0→-80, blur 0→8px
   - Duration: 1s, ease power2.inOut
══════════════════════════════════════════════════════════════ */
export function HeroScrollReveal({ children }) {
  const containerRef = useRef(null);
  const innerRef     = useRef(null);
  const vignetteRef  = useRef(null);

  useEffect(() => {
    // Scroll animations disabled
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", zIndex: 5 }}
    >
      {/* Animated hero surface */}
      <div
        ref={innerRef}
        style={{
          position: "relative",
          width: "100%",
          transformOrigin: "center center",
          willChange: "transform, opacity, filter",
        }}
      >
        {/* Cinematic vignette */}
        <div
          ref={vignetteRef}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.9) 100%)",
            opacity: 0,
            zIndex: 50,
            pointerEvents: "none",
          }}
        />
        {/* Top & bottom depth bars */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 80,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45), transparent)",
          zIndex: 51, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
          background: "linear-gradient(to top, rgba(0,0,0,0.45), transparent)",
          zIndex: 51, pointerEvents: "none",
        }} />

        {children}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   SCROLL SECTION
   Two GSAP animations per section:

   1. INCOMING (gsap.from):
      Triggers when section enters viewport from below.
      scale: 0.3→1, opacity: 0→1, y: 100→0
      Duration: 0.9s, ease: power3.out

   2. OUTGOING (gsap.to):
      Triggers when section is scrolled past.
      scale: 1→0.7, opacity: 1→0.3, y: 0→-100
      Duration: 0.8s, ease: power2.inOut

   Stagger: outgoing starts 0.15s before incoming for overlap.
══════════════════════════════════════════════════════════════ */
export function ScrollSection({ children, index = 0, total = 6 }) {
  const wrapRef  = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    // Scroll animations disabled
  }, [index]);

  const zIndex = index + 10;

  return (
    <div
      ref={wrapRef}
      style={{ position: "relative", zIndex }}
    >
      <div
        ref={innerRef}
        style={{
          position: "relative",
          zIndex,
          transformOrigin: "center top",
          willChange: "transform, opacity",
          overflow: "hidden",
        }}
      >
        {/* Neon top-edge highlight — section rising from depth */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, rgba(139,92,246,0.6), rgba(255,122,0,0.5), rgba(34,211,238,0.6), transparent)",
          zIndex: zIndex + 1,
          pointerEvents: "none",
        }} />

        {/* Depth shadow top */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "50px",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)",
          zIndex: zIndex + 1,
          pointerEvents: "none",
        }} />

        {children}
      </div>
    </div>
  );
}
