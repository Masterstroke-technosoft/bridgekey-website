'use client';

import React from 'react';

interface SpecItem {
  feature: string;
  benefit: string;
}

interface SpecTableProps {
  items: SpecItem[];
}

export default function SpecTable({ items }: SpecTableProps) {
  return (
    <div style={{
      border: '1px solid var(--line)',
      borderRadius: '18px',
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0))',
      overflow: 'hidden',
      width: '100%',
    }}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-3 md:gap-6 p-5 md:p-6"
            style={{
              borderBottom: isLast ? 'none' : '1px solid var(--line)',
              alignItems: 'baseline',
            }}
          >
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: 'var(--teal)',
              fontWeight: 500,
              fontSize: '14px',
              letterSpacing: '-0.02em',
            }}>
              {item.feature}
            </div>
            <div style={{
              color: 'var(--ink-dim)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              lineHeight: '1.6',
            }}>
              {item.benefit}
            </div>
          </div>
        );
      })}
    </div>
  );
}
