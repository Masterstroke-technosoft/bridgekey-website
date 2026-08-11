'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
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
      <a href="https://play.google.com/store/apps/details?id=com.bridgekey" className="nav-cta" target="_blank" rel="noopener noreferrer">
        <span className="dot"></span>
        <span className="hidden sm:inline">Download BridgeKey</span>
        <span className="inline sm:hidden">Download</span>
      </a>
    </nav>
  );
}
