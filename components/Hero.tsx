'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Ticker from './Ticker';

export default function Hero() {
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [payHash, setPayHash] = useState('tx 0x7f3a…c8b1');

  useEffect(() => {
    const el = taglineRef.current;
    if (!el) return;

    const text = 'Biometric login. Web3 browser built in. Send, swap and sign across 95+ EVM chains. Your keys stay on your device — always.';
    el.innerHTML = '<span class="caret"></span>';
    let i = 0;

    const typeTimer = setTimeout(function type() {
      if (i <= text.length) {
        el.innerHTML = text.slice(0, i) + '<span class="caret"></span>';
        i++;
        setTimeout(type, 28 + Math.random() * 22);
      }
    }, 1400);

    return () => clearTimeout(typeTimer);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!hero || !left || !right) return;

    let ticking = false;
    const MAX_SHIFT = 90;
    const FADE_AMT = 0.35;

    const update = () => {
      ticking = false;
      if (window.innerWidth < 980) {
        left.style.transform = '';
        right.style.transform = '';
        left.style.opacity = '';
        right.style.opacity = '';
        return;
      }

      const rect = hero.getBoundingClientRect();
      const total = Math.max(1, rect.height * 0.85);
      const progress = Math.max(0, Math.min(1, -rect.top / total));
      const shift = progress * MAX_SHIFT;
      const op = 1 - progress * FADE_AMT;

      left.style.transform = `translate3d(${shift}px, 0, 0)`;
      right.style.transform = `translate3d(${-shift}px, 0, 0)`;
      left.style.opacity = `${op}`;
      right.style.opacity = `${op}`;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const hex = '0123456789abcdef';
      let s = '0x';
      for (let i = 0; i < 4; i++) s += hex[(Math.random() * 16) | 0];
      s += '…';
      for (let i = 0; i < 4; i++) s += hex[(Math.random() * 16) | 0];
      setPayHash('tx ' + s);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero" ref={heroRef}>
      <Ticker />
      <div className="grid-bg"></div>
      <div className="hero-inner">
        <div className="hero-left" ref={leftRef}>
          <div className="logo-stage">
            <div className="logo-3d">
              <div className="logo-img"></div>
            </div>
          </div>

          <div className="eyebrow">Non-Custodial &middot; Self-Custody &middot; 95+ Chains</div>
          <h1 className="headline">
            <span className="lq">Non‑Custodial</span> Crypto Wallet. <br />
            <span className="accent">95+ Chains</span>. No KYC.
          </h1>
          <p className="tagline" ref={taglineRef}>
            <span className="caret"></span>
          </p>

          <div className="cta-row">
            <a
              href="https://play.google.com/store/apps/details?id=com.bridgekey"
              className="playstore-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assets/icons8-google-play-store-48.png" alt="playstore-logo" style={{ height: '28px', width: 'auto' }} />
              Download BridgeKey
            </a>
          </div>

          <div className="meta-row">
            <span>Non‑custodial</span>
            <span>MST L1 Native</span>
            <span>Multi-Asset</span>
          </div>
        </div>

        <div className="hero-right" ref={rightRef}>
          <div className="pay-stage" id="payStage">
            <div className="halo"></div>
            <div className="pay-card">
              <div className="pay-watermark">
                <div className="img"></div>
              </div>

              <div className="pay-top">
                <span className="live">Live</span>
                <span className="hash" id="payHash">
                  {payHash}
                </span>
              </div>

              <span className="bg-hash h1">0x9c2e…4af3</span>
              <span className="bg-hash h2">0x1d88…ee02</span>
              <span className="bg-hash h3">0x5af7…b3c1</span>

              <svg className="pay-svg" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="screenL" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1A2952" />
                    <stop offset="100%" stopColor="#0A1226" />
                  </linearGradient>
                  <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00E5C0" />
                    <stop offset="100%" stopColor="#FFB830" />
                  </linearGradient>
                  <radialGradient id="btcG" cx=".3" cy=".3" r=".8">
                    <stop offset="0%" stopColor="#FFD880" />
                    <stop offset="55%" stopColor="#F7931A" />
                    <stop offset="100%" stopColor="#B55800" />
                  </radialGradient>
                  <radialGradient id="ethG" cx=".3" cy=".3" r=".8">
                    <stop offset="0%" stopColor="#C0CCFF" />
                    <stop offset="55%" stopColor="#627EEA" />
                    <stop offset="100%" stopColor="#2030A0" />
                  </radialGradient>
                  <radialGradient id="solG" cx=".3" cy=".3" r=".8">
                    <stop offset="0%" stopColor="#D0A0FF" />
                    <stop offset="50%" stopColor="#9945FF" />
                    <stop offset="100%" stopColor="#14F195" stopOpacity=".85" />
                  </radialGradient>
                </defs>

                <ellipse cx="96" cy="292" rx="75" ry="6" fill="rgba(0,0,0,.4)" opacity=".5" />
                <ellipse cx="504" cy="292" rx="75" ry="6" fill="rgba(0,0,0,.4)" opacity=".5" />

                <g className="phone phone-l">
                  <image href="/assets/BridgekeyS.png" x="36" y="5" width="182" height="300" preserveAspectRatio="xMidYMid slice" />
                  <rect x="3" y="95" width="2" height="28" rx="1" fill="#0A0F1A" />
                </g>

                <g className="phone phone-r">
                  <image href="/assets/BridgekeyR.png" x="390" y="5" width="182" height="300" preserveAspectRatio="xMidYMid slice" />
                  <rect x="595" y="95" width="2" height="28" rx="1" fill="#0A0F1A" />
                </g>

                <g className="coins">
                  <g className="fcoin c1">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M 215 130 Q 300 30 385 130" keyTimes="0;0.15;0.50;1" keyPoints="0;0;1;1" calcMode="linear" />
                    <g className="body">
                      <circle r="9" fill="url(#btcG)" stroke="#FFD080" strokeWidth=".8" />
                      <text y="3.5" textAnchor="middle" fontFamily="Syne" fontSize="9" fontWeight="800" fill="#fff">
                        ₿
                      </text>
                    </g>
                  </g>
                  <g className="fcoin c2">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M 220 135 Q 300 55 380 135" keyTimes="0;0.15;0.50;1" keyPoints="0;0;1;1" calcMode="linear" />
                    <g className="body">
                      <circle r="8" fill="url(#ethG)" stroke="#A0AAFF" strokeWidth=".7" />
                      <text y="3" textAnchor="middle" fontFamily="Syne" fontSize="8.5" fontWeight="700" fill="#fff">
                        Ξ
                      </text>
                    </g>
                  </g>
                  <g className="fcoin c3">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M 218 128 Q 300 15 386 128" keyTimes="0;0.15;0.50;1" keyPoints="0;0;1;1" calcMode="linear" />
                    <g className="body">
                      <circle r="7" fill="url(#solG)" stroke="#C080FF" strokeWidth=".6" />
                      <text y="2.5" textAnchor="middle" fontFamily="Syne" fontSize="6.5" fontWeight="800" fill="#fff">
                        ◎
                      </text>
                    </g>
                  </g>
                  <g className="fcoin c4">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M 222 140 Q 300 70 378 140" keyTimes="0;0.15;0.50;1" keyPoints="0;0;1;1" calcMode="linear" />
                    <g className="body">
                      <circle r="8" fill="url(#ethG)" stroke="#A0AAFF" strokeWidth=".7" />
                      <text y="3" textAnchor="middle" fontFamily="Syne" fontSize="8.5" fontWeight="700" fill="#fff">
                        Ξ
                      </text>
                    </g>
                  </g>
                  <g className="fcoin c5">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M 216 132 Q 300 40 384 132" keyTimes="0;0.15;0.50;1" keyPoints="0;0;1;1" calcMode="linear" />
                    <g className="body">
                      <circle r="6.5" fill="url(#btcG)" stroke="#FFD080" strokeWidth=".5" />
                      <text y="2.5" textAnchor="middle" fontFamily="Syne" fontSize="7" fontWeight="800" fill="#fff">
                        ₿
                      </text>
                    </g>
                  </g>
                </g>
              </svg>

              <div className="pay-bottom">
                <div className="pay-status">
                  <div className="s s1">Signing transaction…</div>
                  <div className="s s2">Broadcasting · 3/5 validators</div>
                  <div className="s s3">✓ Confirmed in 812ms</div>
                </div>
                <div className="pay-amt">142.00 MST</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </header>
  );
}
