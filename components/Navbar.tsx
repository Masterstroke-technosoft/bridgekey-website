'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="top">
      <Link href="/" className="brand">
        <span className="mark"></span>
        BridgeKey
      </Link>
      <div className="links">
        <a href="#features">Features</a>
        <a href="#mst">MST Chain</a>
        <a href="#how">How it works</a>
        <a href="#security">Security</a>
      </div>
      <a href="https://play.google.com/store/apps/details?id=com.bridgekey" className="nav-cta" target="_blank" rel="noopener noreferrer">
        <span className="dot"></span>Download BridgeKey
      </a>
    </nav>
  );
}
