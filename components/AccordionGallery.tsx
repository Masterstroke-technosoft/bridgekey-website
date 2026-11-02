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

const AccordionGallery = ({
  items = [],
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
