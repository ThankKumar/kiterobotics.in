"use client";
import { useEffect, useState, useRef } from "react";

// ── Cosmic Star Field with Shooting Stars ──
// Renders twinkling static stars + occasional shooting stars (meteors)
// Only visible in dark mode, fully hidden in light mode

export default function StarField() {
  const canvasRef = useRef(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check theme
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDark(theme !== "light");
    };
    checkTheme();

    // Observe theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isDark) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let stars = [];
    let shootingStars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    // ── Static twinkling stars ──
    const initStars = () => {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 8000); // density
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.4 + 0.3,
          opacity: Math.random() * 0.5 + 0.1,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          // Subtle drift
          driftX: (Math.random() - 0.5) * 0.08,
          driftY: (Math.random() - 0.5) * 0.04,
        });
      }
    };

    // ── Shooting star spawner ──
    const spawnShootingStar = () => {
      const side = Math.random();
      let x, y;
      if (side < 0.7) {
        // From top
        x = Math.random() * canvas.width;
        y = -10;
      } else {
        // From right
        x = canvas.width + 10;
        y = Math.random() * canvas.height * 0.5;
      }

      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3; // ~45deg downward-left
      const speed = Math.random() * 6 + 4;

      shootingStars.push({
        x,
        y,
        vx: Math.cos(angle) * speed * (side < 0.7 ? 1 : -1),
        vy: Math.sin(angle) * speed,
        life: 1.0,
        decay: Math.random() * 0.012 + 0.008,
        length: Math.random() * 60 + 40,
        thickness: Math.random() * 1.2 + 0.6,
        color: Math.random() > 0.5 ? "rgba(255, 122, 0," : "rgba(139, 92, 246,",
      });
    };

    // ── Main animation loop ──
    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw static stars with twinkle
      for (const star of stars) {
        star.twinklePhase += star.twinkleSpeed;
        const flicker = Math.sin(star.twinklePhase) * 0.35 + 0.65;
        const alpha = star.opacity * flicker;

        // Subtle drift
        star.x += star.driftX;
        star.y += star.driftY;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        // Glow for brighter stars
        if (star.radius > 1.0) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 180, 255, ${alpha * 0.15})`;
          ctx.fill();
        }
      }

      // Draw shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life -= s.decay;

        if (s.life <= 0 || s.x < -100 || s.x > canvas.width + 100 || s.y > canvas.height + 100) {
          shootingStars.splice(i, 1);
          continue;
        }

        // Trail gradient
        const tailX = s.x - (s.vx / Math.sqrt(s.vx * s.vx + s.vy * s.vy)) * s.length;
        const tailY = s.y - (s.vy / Math.sqrt(s.vx * s.vx + s.vy * s.vy)) * s.length;

        const grad = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        grad.addColorStop(0, `${s.color} 0)`);
        grad.addColorStop(0.6, `${s.color} ${s.life * 0.4})`);
        grad.addColorStop(1, `${s.color} ${s.life * 0.9})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.thickness;
        ctx.lineCap = "round";
        ctx.stroke();

        // Bright head
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.thickness * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.life * 0.9})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(animate);
    };

    // ── Spawn shooting stars at random intervals ──
    let spawnInterval;
    const startSpawning = () => {
      const delay = Math.random() * 3000 + 1500; // every 1.5-4.5 seconds
      spawnInterval = setTimeout(() => {
        spawnShootingStar();
        startSpawning();
      }, delay);
    };

    resize();
    animate(0);
    startSpawning();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(spawnInterval);
      window.removeEventListener("resize", resize);
    };
  }, [isDark]);

  if (!isDark) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
