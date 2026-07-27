'use client';

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal, .step').forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll('.feature').forEach((card) => {
      card.addEventListener('mousemove', (e: Event) => {
        const event = e as MouseEvent;
        const r = (card as HTMLElement).getBoundingClientRect();
        (card as HTMLElement).style.setProperty('--mx', event.clientX - r.left + 'px');
        (card as HTMLElement).style.setProperty('--my', event.clientY - r.top + 'px');
      });
    });
  }, []);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e: Event) => {
        const event = e as MouseEvent;
        const href = (a as HTMLAnchorElement).getAttribute('href');
        if (href && href.length > 1) {
          const t = document.querySelector(href);
          if (t) {
            event.preventDefault();
            window.scrollTo({
              top: t.getBoundingClientRect().top + window.scrollY - 20,
              behavior: 'smooth',
            });
          }
        }
      });
    });
  }, []);

  return null;
}
