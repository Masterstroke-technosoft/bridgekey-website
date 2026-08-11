'use client';

import React, { useState } from 'react';

interface NetworkChipProps {
  name: string;
  logo?: string;
}

export default function NetworkChip({ name, logo }: NetworkChipProps) {
  const [hasError, setHasError] = useState(false);
  const useTeal = name.charCodeAt(0) % 2 === 0;
  const monogramColor = useTeal ? 'var(--teal)' : 'var(--gold)';
  const monogramBg = useTeal ? 'rgba(0, 229, 192, 0.12)' : 'rgba(255, 184, 48, 0.15)';

  const showMonogram = !logo || hasError;

  return (
    <div className="network-chip" style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '8px 18px',
      borderRadius: '9999px',
      background: 'var(--bg-2)',
      border: '1px solid var(--line)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      fontFamily: 'Inter, sans-serif',
      color: 'var(--ink)',
      fontSize: '14px',
      fontWeight: 500,
    }}>
      {showMonogram ? (
        <div style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: monogramBg,
          border: `1px solid ${monogramColor}`,
          color: monogramColor,
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase',
          flexShrink: 0,
        }}>
          {name.charAt(0)}
        </div>
      ) : (
        <img
          src={logo}
          alt={`${name} logo`}
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            flexShrink: 0,
          }}
          onError={() => setHasError(true)}
        />
      )}
      <span style={{ fontFamily: 'Inter, sans-serif' }}>{name}</span>
    </div>
  );
}
