"use client";

import React, { useRef, useEffect, useState } from "react";

export default function FeaturesScroll() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      id: 1,
      index: "001",
      imgSrc: "/features/v1.jpg",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
      title: "Create or Import Your Wallet",
      description: "Get started in minutes by creating a new wallet or securely importing an existing one using your Private Key. Your wallet is created locally on your device, ensuring complete ownership from day one.",
    },
    {
      id: 2,
      index: "002",
      imgSrc: "/features/V2.jpg",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      ),
      title: "Send & Receive Crypto with Ease",
      description: "Transfer digital assets quickly using wallet addresses or QR codes. Share your wallet address and manage transactions through a streamlined interface designed for speed and simplicity.",
    },
    {
      id: 3,
      index: "003",
      imgSrc: "/features/V3.jpg",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Manage Multiple Wallet Accounts",
      description: "Create and manage multiple wallet accounts within a single application. Easily organize your assets, switch between accounts, and keep your portfolio structured the way you want.",
    },
    {
      id: 4,
      index: "004",
      imgSrc: "/features/V4.jpg",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Support for Multiple Blockchain Networks",
      description: "Access MST Blockchain alongside leading EVM-compatible networks, including Ethereum, BNB Chain, Polygon, Base, Arbitrum, OP Mainnet, and Linea. Add custom RPC networks to expand your blockchain connectivity.",
    },
    {
      id: 5,
      index: "005",
      imgSrc: "/features/V5.jpg",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
          <line x1="12" y1="22" x2="12" y2="12" />
          <line x1="12" y1="12" x2="22" y2="8.5" />
          <line x1="12" y1="12" x2="2" y2="8.5" />
        </svg>
      ),
      title: "Manage Tokens, NFTs & Digital Assets",
      description: "Store and manage cryptocurrencies, ERC-20 tokens, NFTs, and other digital assets in one secure wallet. Import custom tokens and organize your portfolio with ease.",
    },
    {
      id: 6,
      index: "006",
      imgSrc: "/features/V6.jpg",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
      title: "Built-in Web3 Browser",
      description: "Explore decentralized applications directly within BridgeKey using the integrated browser. Connect with Web3 platforms, blockchain services, and ecosystem applications without leaving your wallet.",
    },
    {
      id: 7,
      index: "007",
      imgSrc: "/features/V7.jpg",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "Hardware Wallet Compatibility",
      description: "Enhance your security by connecting supported hardware wallets, including Ledger, Keystone, and Ngrave Zero, giving you greater control over your digital assets.",
    },
    {
      id: 8,
      index: "008",
      imgSrc: "/features/V8.jpg",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: "Smart Account Support",
      description: "Upgrade to Smart Accounts on supported networks to unlock next-generation wallet functionality designed for a more flexible and efficient Web3 experience.",
    },
    {
      id: 9,
      index: "009",
      imgSrc: "/features/V9.jpg",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Transaction History & Wallet Insights",
      description: "Track your wallet activity with a clear transaction history, monitor transfers, and stay informed about your on-chain interactions from a single dashboard.",
    },
    {
      id: 10,
      index: "010",
      imgSrc: "/features/V2.jpg ",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      title: "Custom Network & Token Management",
      description: "Personalize your Web3 experience by adding custom blockchain networks and importing supported tokens, giving you complete flexibility across the decentralized ecosystem.",
    },
  ];

  const numItems = features.length;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const { top, height } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate scroll progress (0 to 1) for the duration this section passes through viewport
            const maxScroll = height - windowHeight;
            const currentScroll = -top;
            let scrollProgress = currentScroll / maxScroll;

            // Clamp between 0 and 1
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));

            const percentageLeft = -scrollProgress * (numItems - 1) * 100;
            const percentageRight = -((numItems - 1) * 100 - scrollProgress * (numItems - 1) * 100);

            if (leftColRef.current) {
              leftColRef.current.style.transform = `translateY(${percentageLeft}%)`;
            }
            if (rightColRef.current) {
              rightColRef.current.style.transform = `translateY(${percentageRight}%)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [numItems]);

  return (
    <>
      {/* Desktop/Tablet Sticky Parallax Layout */}
      <section
        ref={containerRef}
        className="hidden lg:block relative w-full"
        style={{
          height: `${numItems * 100}vh`,
          background: 'var(--bg)'
        }}
      >
        {/* Fixed Sticky Wrapper for the single static card container */}
        <div className="sticky top-[120px] mx-auto flex h-[70vh] min-h-[480px] max-h-[600px] w-full max-w-6xl flex-row overflow-hidden rounded-[2rem] border border-gray-800 bg-[#070F1F] shadow-2xl">

          {/* Left Column: Text content sliding UP */}
          <div className="relative w-1/2 h-full overflow-hidden">
            <div
              ref={leftColRef}
              className="w-full h-full will-change-transform"
              style={{
                transform: 'translateY(0%)',
                transition: 'transform 0.1s ease-out'
              }}
            >
              {features.map((feature) => (
                <div key={feature.id} className="flex h-full w-full flex-col justify-center pl-16 pr-6 py-16 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-sm tracking-widest text-[#00E5C0]">
                      {feature.index}
                    </span>
                    <div className="text-[#00E5C0]" style={{ display: 'flex', alignItems: 'center' }}>
                      {feature.icon}
                    </div>
                  </div>
                  <h2 className="mb-4 text-4xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {feature.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-400" style={{ color: 'var(--ink-dim)' }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Demo Images sliding DOWN */}
          <div className="relative w-1/2 h-full overflow-hidden border-l border-gray-800 bg-[#09101f]">
            <div
              ref={rightColRef}
              className="w-full h-full will-change-transform"
              style={{
                transform: `translateY(-${(numItems - 1) * 100}%)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Reverse images array so that the first card's image is positioned at the bottom of DOM stack initially */}
              {[...features].reverse().map((feature) => (
                <div key={`img-${feature.id}`} className="flex h-full w-full items-center justify-center p-6 bg-[#09101f]">
                  <img
                    src={feature.imgSrc.trim()}
                    alt={feature.title}
                    className="w-full h-full rounded-xl object-contain mx-auto my-auto transition-transform duration-300 hover:scale-[1.05]"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Mobile/Tablet Fallback Layout */}
      <section className="block lg:hidden w-full bg-[#070F1F] py-16 px-4">
        <div className="flex flex-col gap-8 max-w-xl mx-auto">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col gap-4 p-6 rounded-[2rem] border border-gray-800 bg-[#0b1322] overflow-hidden shadow-xl">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-sm tracking-widest text-[#00E5C0]">
                    {feature.index}
                  </span>
                  <div className="text-[#00E5C0]">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400" style={{ color: 'var(--ink-dim)' }}>
                  {feature.description}
                </p>
              </div>
              <div className="mt-4 flex justify-center bg-[#09101f] rounded-2xl p-4 border border-gray-800/40">
                <img
                  src={feature.imgSrc.trim()}
                  alt={feature.title}
                  className="max-h-[220px] w-auto object-contain rounded-xl mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
