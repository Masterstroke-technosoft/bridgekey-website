'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="top">
        <Link href="/" className="brand">
          <span className="mark"></span>
          BridgeKey
        </Link>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          {isHome ? (
            <a href="#mst">MST Chain</a>
          ) : (
            <a href="/#mst">MST Chain</a>
          )}
          {isHome ? (
            <a href="#how">How it works</a>
          ) : (
            <a href="/#how">How it works</a>
          )}
          <Link href="/security">Security</Link>
          <Link href="/multi-chain">Multi-Chain</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://play.google.com/store/apps/details?id=com.bridgekey" className="nav-cta" target="_blank" rel="noopener noreferrer">
            <span className="dot"></span>
            <span className="hidden sm:inline">Download BridgeKey</span>
            <span className="inline sm:hidden">Download</span>
          </a>
          
          <button 
            className="md:hidden text-white flex items-center justify-center p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 12h16M4 6h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050A14] flex flex-col pt-[100px] px-6 md:hidden overflow-y-auto pb-10">
          <div className="flex flex-col text-lg text-gray-200">
            <Link href="/about" onClick={() => setMenuOpen(false)} className="py-4 border-b border-[rgba(255,255,255,0.08)]">About</Link>
            <Link href="/features" onClick={() => setMenuOpen(false)} className="py-4 border-b border-[rgba(255,255,255,0.08)]">Features</Link>
            {isHome ? (
              <a href="#mst" onClick={() => setMenuOpen(false)} className="py-4 border-b border-[rgba(255,255,255,0.08)]">MST Chain</a>
            ) : (
              <a href="/#mst" onClick={() => setMenuOpen(false)} className="py-4 border-b border-[rgba(255,255,255,0.08)]">MST Chain</a>
            )}
            {isHome ? (
              <a href="#how" onClick={() => setMenuOpen(false)} className="py-4 border-b border-[rgba(255,255,255,0.08)]">How it works</a>
            ) : (
              <a href="/#how" onClick={() => setMenuOpen(false)} className="py-4 border-b border-[rgba(255,255,255,0.08)]">How it works</a>
            )}
            <Link href="/security" onClick={() => setMenuOpen(false)} className="py-4 border-b border-[rgba(255,255,255,0.08)]">Security</Link>
            <Link href="/multi-chain" onClick={() => setMenuOpen(false)} className="py-4">Multi-Chain</Link>
          </div>
        </div>
      )}
    </>
  );
}
