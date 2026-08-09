
"use client";

import { useEffect, useRef } from "react";

export default function RainBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width;
    let height;
    let animationId;
    let lastTime = 0;

    const fontSize = 14;

    const characters =
      "01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let drops = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      const count =
        Math.ceil(width / fontSize);

      drops = Array.from(
        { length: count },
        () => ({
          y:
            Math.random() *
            -height,

          speed:
            40 +
            Math.random() * 80,

          length:
            8 +
            Math.floor(
              Math.random() * 15
            ),

          opacity:
            0.08 +
            Math.random() * 0.18,
        })
      );
    };

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    const animate = (time) => {
      animationId =
        requestAnimationFrame(
          animate
        );

      if (
        time - lastTime <
        30
      ) {
        return;
      }

      const delta =
        (time - lastTime) /
        1000;

      lastTime = time;

      /*
       * Transparent dark layer
       * creates rain trails.
       */
      ctx.fillStyle =
        "rgba(2, 6, 23, 0.10)";

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      ctx.font =
        `${fontSize}px monospace`;

      ctx.textAlign = "center";

      drops.forEach(
        (drop, index) => {
          const x =
            index *
              fontSize +
            fontSize / 2;

          drop.y +=
            drop.speed *
            delta;

          /*
           * Draw rain characters.
           */
          for (
            let i = 0;
            i < drop.length;
            i++
          ) {
            const y =
              drop.y -
              i * fontSize;

            if (
              y < -fontSize ||
              y > height
            ) {
              continue;
            }

            const fade =
              1 -
              i /
                drop.length;

            const char =
              characters[
                Math.floor(
                  Math.random() *
                    characters.length
                )
              ];

            if (i === 0) {
              ctx.fillStyle =
                `rgba(180,255,255,${
                  0.7 +
                  drop.opacity
                })`;
            } else {
              ctx.fillStyle =
                `rgba(0,210,255,${
                  drop.opacity *
                  fade
                })`;
            }

            ctx.fillText(
              char,
              x,
              y
            );
          }

          /*
           * Reset rain column.
           */
          if (
            drop.y -
              drop.length *
                fontSize >
            height
          ) {
            drop.y =
              Math.random() *
              -300;

            drop.speed =
              40 +
              Math.random() * 80;

            drop.length =
              8 +
              Math.floor(
                Math.random() * 15
              );

            drop.opacity =
              0.08 +
              Math.random() * 0.18;
          }
        }
      );
    };

    animationId =
      requestAnimationFrame(
        animate
      );

    return () => {
      cancelAnimationFrame(
        animationId
      );

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        fixed
        inset-0
        w-full
        h-full
        pointer-events-none
        z-[1]
        opacity-50
      "
    />
  );
}

