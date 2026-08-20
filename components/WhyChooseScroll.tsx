'use client';

import React, { useRef, useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

export default function WhyChooseScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMatch = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    checkMatch();
    window.addEventListener('resize', checkMatch);
    return () => {
      window.removeEventListener('resize', checkMatch);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (containerRef.current && trackRef.current) {
            const { top, height } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate how far we've scrolled into the container (0 to 1)
            const maxScroll = height - windowHeight;
            const currentScroll = -top;
            let progress = currentScroll / maxScroll;

            // Clamp progress between 0 and 1
            progress = Math.max(0, Math.min(1, progress));

            // Calculate translation in pixels based on track vs screen width
            const trackWidth = 2804; // 7 cards of 380px + 6 gaps of 24px
            const viewWidth = window.innerWidth;
            const maxTranslate = Math.max(0, trackWidth - viewWidth + 96); // 96px accounts for 48px left/right padding
            const tx = progress * maxTranslate;

            trackRef.current.style.transform = `translateX(-${tx}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isDesktop]);

  const cards = [
    {
      index: "001",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "True Self-Custody",
      description: (
        <>
          <strong>&quot;Your Assets. Your Keys. Your Control.&quot;</strong> BridgeKey is a non-custodial crypto wallet that gives you complete ownership of your digital assets. Your private keys and Secret Recovery Phrase remain securely stored on your device, ensuring only you have access to your funds.
        </>
      ),
    },
    {
      index: "002",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Multi-Chain by Design",
      description: (
        <>
          <strong>&quot;Manage Multiple Networks from One Wallet.&quot;</strong> Access and manage cryptocurrencies across MST Blockchain and leading EVM-compatible networks, including Ethereum, BNB Chain, Polygon, Base, Arbitrum, Linea, and more. Easily switch networks and manage all your assets from one seamless interface.
        </>
      ),
    },
    {
      index: "003",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Built for the MST Ecosystem",
      description: (
        <>
          <strong>&quot;Your Gateway to MST Blockchain.&quot;</strong> As the native wallet for MST Blockchain, BridgeKey provides optimized access to the MST ecosystem. Manage MSTC tokens, interact with ecosystem applications, and experience fast transactions with low network fees.
        </>
      ),
    },
    {
      index: "004",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
      title: "Smart Web3 Experience",
      description: (
        <>
          <strong>&quot;Explore Web3 Without Complexity.&quot;</strong> From creating a wallet and sending crypto to connecting with decentralized applications, BridgeKey delivers an intuitive experience designed for both newcomers and experienced blockchain users.
        </>
      ),
    },
    {
      index: "005",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 11l3 3 5-5" />
        </svg>
      ),
      title: "Advanced Security You Can Trust",
      description: (
        <>
          <strong>&quot;Security at Every Step.&quot;</strong> BridgeKey combines self-custody, biometric authentication, secure transaction signing, and Secret Recovery Phrase protection to help safeguard your digital assets without compromising usability.
        </>
      ),
    },
    {
      index: "006",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M12 10v4M10 12h4" />
        </svg>
      ),
      title: "Seamless Digital Asset Management",
      description: (
        <>
          <strong>&quot;Everything You Need in One Place.&quot;</strong> Store, send, receive, and manage cryptocurrencies, ERC-20 tokens, NFTs, and digital assets with an organized wallet experience designed for everyday use.
        </>
      ),
    },
    {
      index: "007",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Ready for the Future of Web3",
      description: (
        <>
          <strong>&quot;Built to Grow with Blockchain Innovation.&quot;</strong> BridgeKey is continuously evolving with support for Smart Accounts, hardware wallets, custom blockchain networks, and expanding Web3 capabilities, ensuring you're always ready for what's next.
        </>
      ),
    },
  ];

  if (!mounted || !isDesktop) {
    return (
      <section className="about-why" style={{ padding: '80px 0', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="reveal">
            <div className="section-eyebrow">
              <span className="num">03 / Why BridgeKey</span>
            </div>
          </div>
          <h2 className="section-title reveal" data-delay="1" style={{ marginBottom: '48px' }}>
            Why Choose BridgeKey? <br />
            <em>India&apos;s Most Trusted Non‑Custodial Crypto Wallet</em>
          </h2>

          <div className="feature-grid">
            {cards.map((card, idx) => (
              <FeatureCard
                key={idx}
                index={card.index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                delay={1}
              />
            ))}
          </div>

          {/* Internal Links */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            marginTop: '48px',
            textAlign: 'center'
          }} className="reveal" data-delay="2">
            <a href="/features" style={{ color: 'var(--teal)', fontWeight: 600, fontSize: '16px', fontFamily: 'Syne, sans-serif' }}>Explore BridgeKey Features →</a>
            <a href="/security" style={{ color: 'var(--teal)', fontWeight: 600, fontSize: '16px', fontFamily: 'Syne, sans-serif' }}>Learn About BridgeKey Security →</a>
            <a href="/multi-chain" style={{ color: 'var(--teal)', fontWeight: 600, fontSize: '16px', fontFamily: 'Syne, sans-serif' }}>See All Supported Chains →</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative about-why" style={{ height: '300vh', borderTop: '1px solid var(--line)' }}>
      {/* Sticky wrapper */}
      <div className="sticky top-0 flex items-center overflow-hidden" style={{ height: '100vh' }}>
        <div className="container" style={{ width: '100%', maxWidth: '100%', padding: '0 48px' }}>
          <div style={{ marginBottom: '48px' }}>
            <div>
              <div className="section-eyebrow">
                <span className="num">03 / Why BridgeKey</span>
              </div>
            </div>
            <h2 className="section-title">
              Why Choose BridgeKey? <br />
              <em>India&apos;s Most Trusted Non‑Custodial Crypto Wallet</em>
            </h2>
          </div>

          {/* Horizontal scroll track */}
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform"
            style={{
              transform: 'translateX(0px)',
            }}
          >
            {cards.map((card, idx) => (
              <div key={idx} style={{ width: '380px', flexShrink: 0 }}>
                <FeatureCard
                  index={card.index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  delay={1}
                  reveal={false}
                />
              </div>
            ))}
          </div>

          {/* Internal Links for Desktop */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginTop: '56px'
          }}>
            <a href="/features" style={{ color: 'var(--teal)', fontWeight: 600, fontSize: '16px', fontFamily: 'Syne, sans-serif', transition: 'opacity 0.2s' }} className="hover:opacity-80">Explore BridgeKey Features →</a>
            <a href="/security" style={{ color: 'var(--teal)', fontWeight: 600, fontSize: '16px', fontFamily: 'Syne, sans-serif', transition: 'opacity 0.2s' }} className="hover:opacity-80">Learn About BridgeKey Security →</a>
            <a href="/multi-chain" style={{ color: 'var(--teal)', fontWeight: 600, fontSize: '16px', fontFamily: 'Syne, sans-serif', transition: 'opacity 0.2s' }} className="hover:opacity-80">See All Supported Chains →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
