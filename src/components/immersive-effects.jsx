"use client";

import { useEffect, useRef } from "react";

export function ImmersiveEffects() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const spotlightRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!finePointer) {
      document.documentElement.classList.add("touch-pointer");
      return undefined;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const spotlight = spotlightRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    let animationFrame;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let particles = [];

    const resizeCanvas = () => {
      if (!canvas || !context) return;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const particleCount = Math.min(
        72,
        Math.max(28, Math.floor(window.innerWidth / 22)),
      );

      particles = Array.from({ length: particleCount }, (_, index) => ({
        x: (index * 173) % window.innerWidth,
        y: (index * 97) % window.innerHeight,
        radius: index % 4 === 0 ? 1.2 : 0.7,
        speed: 0.08 + (index % 5) * 0.025,
        alpha: 0.18 + (index % 4) * 0.08,
      }));
    };

    const onPointerMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (dot) {
        dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (spotlight) {
        spotlight.style.setProperty("--pointer-x", `${mouseX}px`);
        spotlight.style.setProperty("--pointer-y", `${mouseY}px`);
      }
    };

    const onPointerOver = (event) => {
      const interactive = event.target.closest(
        "a, button, [data-cursor='interactive']",
      );
      cursor?.classList.toggle("is-interactive", Boolean(interactive));
    };

    const render = () => {
      cursorX += (mouseX - cursorX) * 0.16;
      cursorY += (mouseY - cursorY) * 0.16;

      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      if (canvas && context && !reducedMotion) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        particles.forEach((particle) => {
          particle.y -= particle.speed;
          if (particle.y < -4) particle.y = window.innerHeight + 4;

          const dx = particle.x - mouseX;
          const dy = particle.y - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - distance / 240);

          context.beginPath();
          context.arc(
            particle.x + dx * proximity * 0.015,
            particle.y + dy * proximity * 0.015,
            particle.radius + proximity,
            0,
            Math.PI * 2,
          );
          context.fillStyle = `rgba(55, 235, 229, ${
            particle.alpha + proximity * 0.35
          })`;
          context.fill();
        });
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
      <div ref={spotlightRef} className="pointer-spotlight" aria-hidden="true" />
      <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
