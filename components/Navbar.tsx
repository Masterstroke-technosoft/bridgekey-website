'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadDropdownOpen, setDownloadDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDownloadDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          <Link href="/blogs">Blogs</Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDownloadDropdownOpen((prev) => !prev)}
              className="nav-cta cursor-pointer select-none"
              aria-expanded={downloadDropdownOpen}
              aria-haspopup="true"
            >
              <span className="dot"></span>
              <span className="hidden sm:inline">Download BridgeKey</span>
              <span className="inline sm:hidden">Download</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${downloadDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {downloadDropdownOpen && (
              <div className="absolute right-0 top-full pt-2 z-50 w-maxc min-w-max flex flex-col items-stretch">
                <a
                  href="https://chromewebstore.google.com/detail/bridgekey/bfjojdcfenehemjgjlepdjomkpginlkg"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDownloadDropdownOpen(false)}
                  className="nav-cta !w-full !justify-center !whitespace-nowrap bg-[#050A14] backdrop-blur-xl shadow-xl"
                > 
                  <span className="dot"></span>
                  <span>Add Extension</span>
                </a>
              </div>
            )}
          </div>

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
            <Link href="/multi-chain" onClick={() => setMenuOpen(false)} className="py-4 border-b border-[rgba(255,255,255,0.08)]">Multi-Chain</Link>
            <Link href="/blogs" onClick={() => setMenuOpen(false)} className="py-4">Blogs</Link>
          </div>
        </div>
      )}
    </>
  );
}
