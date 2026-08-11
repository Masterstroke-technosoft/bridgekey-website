'use client';

import React from 'react';

interface FeatureCardProps {
  index: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  delay?: number;
  reveal?: boolean;
  style?: React.CSSProperties;
}

export default function FeatureCard({ index, icon, title, description, delay, reveal = true, style }: FeatureCardProps) {
  return (
    <article className={`feature ${reveal ? 'reveal' : ''}`} data-delay={delay} style={{ height: '100%', ...style }}>
      <span className="index">{index}</span>
      <div className="glyph">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
