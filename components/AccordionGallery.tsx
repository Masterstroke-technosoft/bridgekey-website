'use client';

import { useRef, useEffect, useState, useCallback, CSSProperties, KeyboardEvent, MouseEvent } from 'react';
import { gsap } from 'gsap';

import './AccordionGallery.css';

export interface AccordionGalleryItem {
  image: string;
  category?: string;
  heading?: string;
  label?: string;
  subHeading?: string;
  excerpt?: string;
  author?: string;
  date?: string;
  rawDate?: string;
  featured?: boolean;
  link?: string;
  alt?: string;
}

export interface AccordionGalleryProps {
  items?: AccordionGalleryItem[];
  defaultIndex?: number;
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  cardTheme?: 'light' | 'dark';
  height?: number;
  gap?: number;
  radius?: number;
  expandRatio?: number;
  orientation?: 'horizontal' | 'vertical';
  duration?: number;
  ease?: string;
  tilt?: number;
  trigger?: 'hover' | 'click';
  className?: string;
}

const DEFAULT_ITEMS: AccordionGalleryItem[] = [
  {
    image: 'https://ik.imagekit.io/avboeabnm1/blog-posts/6a9955066dcd567e2ac69968/email_banner_design2.jpg_ABBec7vEj.jpeg',

    category: 'GENERAL',
    heading: 'Bridge Key: Secure API Keys and Authentication for Modern Applications',
    subHeading: 'A practical guide to managing API keys securely, protecting application credentials, and simplifying authentication.',
    author: 'MST Editorial Team',
    date: 'Sep 4, 2026',
    link: '/blogs/bridge-key-secure-api-key-management'
  },
  {
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop',
    category: 'SECURITY',
    heading: 'Biometric Non-Custodial Vaults & Key Protection',
    subHeading: 'How zero-knowledge recovery and hardware enclaves protect your digital assets without KYC.',
    author: 'BridgeKey Security Lab',
    date: 'Sep 2, 2026',
    link: '/security'
  },
  {
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?q=80&w=1200&auto=format&fit=crop',
    category: 'MULTI-CHAIN',
    heading: 'Unified Cross-Chain Routing Across 95+ EVM Networks',
    subHeading: 'Seamless asset transfers and real-time gas optimization across Ethereum, MST, and beyond.',
    author: 'Ecosystem Engineering',
    date: 'Aug 29, 2026',
    link: '/multi-chain'
  },
  {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    category: 'LAYER-1',
    heading: 'MST Layer-1 Consensus: High Speed & Low Latency',
    subHeading: 'Understanding validator network mechanics and high-performance Web3 infrastructure.',
    author: 'MST Protocol Team',
    date: 'Aug 25, 2026',
    link: 'https://mstblockchain.com'
  }
];

const AccordionGallery = ({
  items = DEFAULT_ITEMS,
  defaultIndex = 0,
  accentColor = '#2563eb',
  overlayColor = '#060010',
  textColor = '#0f172a',
  cardTheme = 'light',
  height = 470,
  gap = 16,
  radius = 20,
  expandRatio = 0.58,
  orientation = 'horizontal',
  duration = 0.6,
  ease = 'power3.out',
  tilt = 3,
  trigger = 'hover',
  className = ''
}: AccordionGalleryProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const firstRunRef = useRef(true);

  const vertical = orientation === 'vertical';
  const count = items.length;
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), count - 1));

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const applyLayout = useCallback(
    (animate: boolean) => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;

        const rot = isActive ? 0 : i < active ? tilt : -tilt;
        const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };

        tl.to(
          panel,
          {
            flexGrow: isActive ? grow : 1,
            ...rotProp,
            duration: dur,
            ease
          },
          0
        );
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      prefersReduced
    ]
  );

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = (i: number) => {
    if (trigger === 'hover') setActive(i);
  };

  const handleClick = (i: number, e: MouseEvent) => {
    if (i !== active) {
      e.preventDefault();
      setActive(i);
    }
  };

  const handleKeyDown = (i: number, e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    }
  };

  const rootStyle = {
    '--ag-accent': accentColor,
    '--ag-overlay': overlayColor,
    '--ag-text': textColor,
    '--ag-gap': `${gap}px`,
    '--ag-radius': `${radius}px`,
    height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`
  } as CSSProperties;

  return (
    <div
      ref={rootRef}
      className={`accordion-gallery${vertical ? ' accordion-gallery--vertical' : ''}${className ? ` ${className}` : ''}`}
      style={rootStyle}
      role="list"
      aria-label="Blog cards accordion gallery"
    >
      {items.map((item, i) => {
        const isActive = i === active;
        const Tag = (item.link ? 'a' : 'div') as 'a';
        const headingText = item.heading || item.label || '';
        const excerptText = item.subHeading || item.excerpt || '';

        return (
          <Tag
            key={i}
            ref={(el: HTMLElement | null) => {
              panelRefs.current[i] = el;
            }}
            className={`ag-panel ag-panel--${cardTheme}${isActive ? ' ag-panel--active' : ''}`}
            style={{ borderRadius: `${radius}px` }}
            href={item.link || undefined}
            onClick={e => handleClick(i, e)}
            onMouseEnter={() => handleEnter(i)}
            onFocus={() => setActive(i)}
            onKeyDown={e => handleKeyDown(i, e)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={headingText}
          >
            <div className="ag-card-inner">
              {/* Cover Image Area - Never cut off */}
              <div className="ag-card-media-wrapper">
                <img
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                  className="ag-card-media-blur"
                />
                <div className="ag-card-media">
                  <img
                    src={item.image}
                    alt={item.alt || headingText}
                    draggable={false}
                    className="ag-card-media-main"
                  />
                </div>
              </div>

              {/* Card Body - Well Proportioned */}
              <div className="ag-card-body">
                <div className="ag-card-body-top">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    {item.category && (
                      <span className="ag-card-category">{item.category}</span>
                    )}
                    {item.featured && (
                      <span className="ag-card-featured-badge">★ Featured</span>
                    )}
                  </div>

                  <h3 className="ag-card-heading">{headingText}</h3>

                  {excerptText && (
                    <p className="ag-card-subheading">{excerptText}</p>
                  )}
                </div>

                {(item.author || item.date) && (
                  <div className="ag-card-meta">
                    {item.author && (
                      <span className="ag-card-author">{item.author}</span>
                    )}
                    {item.author && item.date && (
                      <span className="ag-card-dot">·</span>
                    )}
                    {item.date && (
                      <span className="ag-card-date">{item.date}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Tag>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
