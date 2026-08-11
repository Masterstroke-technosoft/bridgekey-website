'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

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
  }, [pathname]);

  useEffect(() => {
    const cards = document.querySelectorAll('.feature');
    const cleanups: (() => void)[] = [];

    cards.forEach((card) => {
      const htmlCard = card as HTMLElement;
      let rect: DOMRect | null = null;

      const handleMouseEnter = () => {
        rect = htmlCard.getBoundingClientRect();
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!rect) {
          rect = htmlCard.getBoundingClientRect();
        }
        htmlCard.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        htmlCard.style.setProperty('--my', `${e.clientY - rect.top}px`);
      };

      const handleMouseLeave = () => {
        rect = null;
      };

      htmlCard.addEventListener('mouseenter', handleMouseEnter);
      htmlCard.addEventListener('mousemove', handleMouseMove);
      htmlCard.addEventListener('mouseleave', handleMouseLeave);

      cleanups.push(() => {
        htmlCard.removeEventListener('mouseenter', handleMouseEnter);
        htmlCard.removeEventListener('mousemove', handleMouseMove);
        htmlCard.removeEventListener('mouseleave', handleMouseLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

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
  }, [pathname]);

  return null;
}
