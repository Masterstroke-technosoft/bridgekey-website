'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0,
      H = 0;
    let parts: Particle[] = [];
    let animationId: number;

    const resize = () => {
      const dpr = Math.min(1.5, window.devicePixelRatio || 1);
      W = canvas.width = window.innerWidth * dpr;
      H = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      const target = Math.min(45, Math.floor((window.innerWidth * window.innerHeight) / 25000));
      parts = Array.from({ length: target }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18 * dpr,
        vy: (Math.random() - 0.5) * 0.18 * dpr,
        r: (Math.random() * 1.4 + 0.4) * dpr,
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const dpr = Math.min(1.5, window.devicePixelRatio || 1);
      const py = scrollY * 0.15 * dpr;

      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      }

      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i],
            b = parts[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const maxD = 140 * dpr;
          if (d2 < maxD * maxD) {
            const alpha = (1 - Math.sqrt(d2) / maxD) * 0.18;
            ctx.strokeStyle = `rgba(0,229,192,${alpha})`;
            ctx.lineWidth = 0.6 * dpr;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y - (py % H));
            ctx.lineTo(b.x, b.y - (py % H));
            ctx.stroke();
          }
        }
      }

      for (const p of parts) {
        ctx.fillStyle = 'rgba(0,229,192,.7)';
        ctx.beginPath();
        ctx.arc(p.x, p.y - (py % H), p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas className="particles" ref={canvasRef}></canvas>;
}
