'use client';

import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="reveal">
          <div className="section-eyebrow">
            <span className="num">01 / Features</span>
          </div>
        </div>
        <h2 className="section-title reveal" data-delay="1">
          Everything You Need in a Crypto Wallet — <br />
          Built for India&apos;s <em>Web3 Future</em>
        </h2>
        <p className="section-sub reveal" data-delay="2">
          No seed phrase anxiety. No mental gas math. Just access to the value, the chains, and the future that belong to you.
        </p>

        <div className="feature-grid">
          <FeatureCard
            index="001"
            icon={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.4" />
                <path d="M16 8v8l5 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="16" cy="16" r="2" fill="currentColor" />
              </svg>
            }
            title="One‑tap access."
            description="Biometric unlock, instant signing. From cold start to confirmed transaction in under three seconds every time."
            delay={1}
          />

          <FeatureCard
            index="002"
            icon={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 3 L26 9 V20 L16 29 L6 20 V9 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                <path d="M16 3 L16 29 M6 9 L26 9 M6 20 L26 20 M16 11 L11 14.5 L11 20 M16 11 L21 14.5 L21 20" stroke="currentColor" strokeWidth="1" opacity=".6" />
              </svg>
            }
            title="India‑native chain."
            description={
              <>
                The first interface built natively for{' '}
                <strong style={{ color: 'var(--gold)', fontWeight: '500' }}>MST Blockchain</strong>{' '}
                India's inaugural Layer‑1. Sub‑second finality, denominated fees.
              </>
            }
            delay={2}
          />

          <FeatureCard
            index="003"
            icon={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 12h16l-4-4M26 20H10l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6" cy="12" r="1.5" fill="currentColor" />
                <circle cx="26" cy="20" r="1.5" fill="currentColor" />
              </svg>
            }
            title="Zero‑friction transfers."
            description="Pay anyone on any supported chain with one signature, gas auto‑routed in the background."
            delay={3}
          />
        </div>
      </div>
    </section>
  );
}
