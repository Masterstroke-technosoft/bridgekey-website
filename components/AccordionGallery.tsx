'use client';

import { CSSProperties } from 'react';
import Link from 'next/link';

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
    subHeading: 'A practical guide to managing API keys securely, protecting application credentials, and simplifying authentication with Bridge Key.',
    author: 'MST Editorial Team',
    date: 'Sep 4, 2026',
    featured: true,
    link: '/blogs/bridge-key-secure-api-key-management'
  },
  {
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop',
    category: 'SECURITY',
    heading: 'Biometric Non-Custodial Vaults & Key Protection',
    subHeading: 'A practical guide to managing API keys securely, protecting application credentials, and simplifying authentication with Bridge Key.',
    author: 'BridgeKey Security Lab',
    date: 'Sep 2, 2026',
    featured: false,
    link: '/security'
  },
  {
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?q=80&w=1200&auto=format&fit=crop',
    category: 'MULTI-CHAIN',
    heading: 'Unified Cross-Chain Routing Across 95+ EVM Networks',
    subHeading: 'A practical guide to managing API keys securely, protecting application credentials, and simplifying authentication with Bridge Key.',
    author: 'Ecosystem Engineering',
    date: 'Aug 29, 2026',
    featured: false,
    link: '/multi-chain'
  },
  {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    category: 'LAYER-1',
    heading: 'MST Layer-1 Consensus: High Speed & Low Latency',
    subHeading: 'A practical guide to managing API keys securely, protecting application credentials, and simplifying authentication with Bridge Key.',
    author: 'MST Protocol Team',
    date: 'Aug 25, 2026',
    featured: false,
    link: 'https://mstblockchain.com'
  }
];

const AccordionGallery = ({
  items = DEFAULT_ITEMS,
  accentColor = '#2563eb',
  cardTheme = 'light',
  gap = 24,
  radius = 20,
  className = ''
}: AccordionGalleryProps) => {
  const isSingle = items.length === 1;

  const rootStyle = {
    '--ag-accent': accentColor,
    '--ag-gap': `${gap}px`,
    '--ag-radius': `${radius}px`,
  } as CSSProperties;

  return (
    <div
      className={`accordion-gallery-grid${items.length >= 3 ? ' grid-cols-multi' : ''}${isSingle ? ' max-w-[420px] mx-auto' : ''}${className ? ` ${className}` : ''}`}
      style={rootStyle}
      role="list"
      aria-label="Blog cards gallery"
    >
      {items.map((item, i) => {
        const headingText = item.heading || item.label || '';
        const excerptText = item.subHeading || item.excerpt || '';
        const href = item.link || '#';

        return (
          <Link
            key={i}
            href={href}
            className={`ag-card ag-card--${cardTheme}`}
            style={{ borderRadius: `${radius}px` }}
            role="listitem"
            aria-label={headingText}
          >
            {/* Featured Badge in Top Right Corner */}
            {item.featured && (
              <span className="ag-featured-badge">
                <span className="ag-featured-star">★</span>
                <span>Featured</span>
              </span>
            )}

            {/* Top Cover Image Area - 100% Contained & Never Cropped */}
            <div className="ag-card-media-wrapper">
              <div className="ag-card-media">
                <img
                  src={item.image}
                  alt={item.alt || headingText}
                  draggable={false}
                  className="ag-card-media-main"
                />
              </div>
            </div>

            {/* Bottom Content Body */}
            <div className="ag-card-body">
              <div className="ag-card-body-top">
                {item.category && (
                  <span className="ag-card-category">{item.category}</span>
                )}

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
          </Link>
        );
      })}
    </div>
  );
};

export default AccordionGallery;
