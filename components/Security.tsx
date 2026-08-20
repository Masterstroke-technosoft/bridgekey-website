'use client';

import Link from 'next/link';

export default function Security() {
  return (
    <section className="security" id="security">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <span className="num">04 / Trust</span>
          </div>
          <h2 className="section-title" style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            Crypto Wallet Security You Can Trust — <br />
            <em>Non‑Custodial, Encrypted, Always Yours</em>
          </h2>
        </div>
        <div className="sec-grid">
          <div className="sec-item reveal" data-delay="1">
            <div className="ic">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M24 6 L40 13 V25 C40 34 33 41 24 43 C15 41 8 34 8 25 V13 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M17 24 L22 29 L31 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="tag">Property 01</span>
            <h4>Non‑custodial.</h4>
            <p className="content">Your keys live on your device. We can't see them, freeze them, or hand them over. Period.</p>
          </div>
          <div className="sec-item reveal" data-delay="2">
            <div className="ic">
              <svg viewBox="0 0 48 48" fill="none">
                <rect x="12" y="20" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M16 20 V14 C16 9.5 19.5 6 24 6 C28.5 6 32 9.5 32 14 V20" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="24" cy="30" r="2" fill="currentColor" />
                <path d="M24 32 V35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <span className="tag">Property 02</span>
            <h4>Multi-Asset Support.</h4>
            <p className="content">Store and manage MSTC, Bitcoin, Ethereum and thousand plus tokens in one secure wallet.</p>
          </div>
          <div className="sec-item reveal" data-delay="3">
            <div className="ic">
              <svg viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.4" />
                <path d="M14 24 L21 31 L34 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth=".6" opacity=".3" strokeDasharray="2 4" />
              </svg>
            </div>
            <span className="tag">Property 03</span>
            <h4>Transaction History.</h4>
            <p className="content">Keep track of all your transactions with detailed records and easy-to-understand summaries.</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal" data-delay="4">
          <Link href="/security" style={{
            fontFamily: 'JetBrains Mono, monospace',
            color: 'var(--teal)',
            fontSize: '14px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontWeight: 500,
            borderBottom: '1px solid transparent',
            transition: 'border-color 0.2s',
          }}
          className="hover:border-[var(--teal)]"
          >
            Learn more about our security →
          </Link>
        </div>
      </div>
    </section>
  );
}
