"use client";

import React, { useEffect, useState } from 'react';

export default function SecurityConsole() {
  const [keyHash, setKeyHash] = useState('Generating key entropy stream...');
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    // Periodically update mock private key segments to simulate entropy generation
    const interval = setInterval(() => {
      const chars = '0123456789abcdef';
      let result = '0x';
      for (let i = 0; i < 40; i++) {
        result += chars[Math.floor(Math.random() * 16)];
      }
      setKeyHash(result.substring(0, 10) + '...' + result.substring(34));
      setPulse(p => !p);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bk-console">
      {/* Console Header */}
      <div className="bk-console__header">
        <div className="bk-console__status">
          <span className="bk-console__dot" />
          <span className="font-mono text-[10px] tracking-wider text-[#00E5C0]">SYSTEM: ACTIVE &amp; SECURE</span>
        </div>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
        </div>
      </div>

      {/* Console Display Screen */}
      <div className="bk-console__screen">
        {/* Animated Radar Visual */}
        <div className="bk-radar">
          <div className="bk-radar__sweep" />
          <div className="bk-radar__ring bk-radar__ring--1" />
          <div className="bk-radar__ring bk-radar__ring--2" />
          <div className="bk-radar__ring bk-radar__ring--3" />
          <div className="bk-radar__center" />
        </div>

        {/* Live Metrics Panel */}
        <div className="bk-metrics">
          <div className="bk-metric">
            <span className="bk-metric__label">ENTROPY GENERATION</span>
            <span className="bk-metric__value font-mono text-white text-xs">{keyHash}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bk-metric">
              <span className="bk-metric__label">KEY STORAGE</span>
              <span className="bk-metric__value text-[#00E5C0] font-mono text-xs">[ DEVICE LOCKED ]</span>
            </div>
            <div className="bk-metric">
              <span className="bk-metric__label">THREAT SCANNER</span>
              <span className="bk-metric__value text-[#00E5C0] font-mono text-xs">[ 0.00% DETECTED ]</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bk-console {
          position: relative;
          background: rgba(7, 15, 31, 0.7);
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 24px;
          backdrop-filter: blur(12px);
          box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          overflow: hidden;
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
        }

        .bk-console__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 16px;
        }

        .bk-console__status {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .bk-console__dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #00E5C0;
          box-shadow: 0 0 12px #00E5C0;
          animation: bk-pulse 1.5s ease-in-out infinite;
        }

        .bk-console__screen {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Radar Scanning Screen Animation */
        .bk-radar {
          position: relative;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 1px solid rgba(0, 229, 192, 0.1);
          margin: 0 auto;
          background: radial-gradient(circle, rgba(0, 229, 192, 0.03) 0%, transparent 80%);
          overflow: hidden;
        }

        .bk-radar__sweep {
          position: absolute;
          width: 100%;
          height: 100%;
          background: conic-gradient(from 0deg, rgba(0, 229, 192, 0.15) 0deg, transparent 90deg);
          border-radius: 50%;
          animation: bk-radar-spin 4s linear infinite;
        }

        .bk-radar__ring {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px solid rgba(0, 229, 192, 0.05);
        }

        .bk-radar__ring--1 { width: 40px; height: 40px; }
        .bk-radar__ring--2 { width: 80px; height: 80px; }
        .bk-radar__ring--3 { width: 120px; height: 120px; }

        .bk-radar__center {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #00E5C0;
          box-shadow: 0 0 8px #00E5C0;
        }

        @keyframes bk-radar-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Metrics list styling */
        .bk-metrics {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          padding: 16px;
        }

        .bk-metric {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .bk-metric__label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.4);
        }

        .bk-metric__value {
          font-weight: 500;
        }

        @keyframes bk-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
