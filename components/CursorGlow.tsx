'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const dot = dotRef.current;
    if (!glow || !dot) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let gx = mx;
    let gy = my;
    let animationId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      glow.style.opacity = '1';
      dot.style.opacity = '1';
    };

    const onMouseLeave = () => {
      glow.style.opacity = '0';
      dot.style.opacity = '0';
    };

    const loop = () => {
      gx += (mx - gx) * 0.12;
      gy += (my - gy) * 0.12;
      glow.style.transform = `translate(${gx}px,${gy}px) translate(-50%,-50%)`;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      animationId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    loop();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" id="cglow" ref={glowRef}></div>
      <div className="cursor-dot" id="cdot" ref={dotRef}></div>
    </>
  );
}
