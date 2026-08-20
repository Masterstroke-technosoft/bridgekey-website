import type { Metadata, Viewport } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ParticleNetwork from '@/components/ParticleNetwork';
import ScrollReveal from '@/components/ScrollReveal';
import SpecTable from '@/components/SpecTable';
import SecurityConsole from '@/components/SecurityConsole';

export const metadata: Metadata = {
  title: "BridgeKey Security: Non-Custodial Crypto Wallet | Private Keys Stay Yours",
  description: "BridgeKey never stores your private keys. Self-custody architecture, biometric login & local encryption protect your crypto. India's most secure non-custodial wallet. No KYC.",
  keywords: "crypto wallet security India, non-custodial wallet, is BridgeKey safe, private keys crypto wallet, no KYC crypto India, Secret Recovery Phrase, biometric crypto wallet, self-custody wallet",
  alternates: {
    canonical: "https://bridgekey.io/security",
    languages: {
      "en-IN": "https://bridgekey.io/security",
      "en": "https://bridgekey.io/security",
      "x-default": "https://bridgekey.io/security",
    },
  },
  robots: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  openGraph: {
    type: "article",
    siteName: "BridgeKey",
    title: "BridgeKey Security: Non-Custodial Crypto Wallet | Private Keys Stay Yours",
    description: "BridgeKey never stores your private keys. Self-custody, biometric login & local encryption. India's most secure non-custodial wallet.",
    url: "https://bridgekey.io/security",
    locale: "en_IN",
    images: [
      {
        url: "https://bridgekey.io/assets/og-security.png",
        width: 1200,
        height: 630,
        alt: "BridgeKey Crypto Wallet Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BridgekeyWallet",
    creator: "@BridgekeyWallet",
    title: "BridgeKey Security: Non-Custodial Crypto Wallet | Private Keys Stay Yours",
    description: "BridgeKey never stores your private keys. Self-custody, biometric & local encryption. No KYC. India's most secure crypto wallet.",
    images: [
      {
        url: "https://bridgekey.io/assets/og-security.png",
        alt: "BridgeKey Crypto Wallet Security",
      },
    ],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/assets/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "BridgeKey",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

const pillars = [
  {
    tag: 'Property 01',
    title: 'Non-Custodial Crypto Wallet — Your Private Keys Never Leave Your Device',
    quote: '"You Own Your Wallet. Always."',
    body: 'Your private keys and Secret Recovery Phrase never leave your device. BridgeKey never stores or controls your wallet credentials, ensuring that only you have access to your digital assets.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 6 L40 13 V25 C40 34 33 41 24 43 C15 41 8 34 8 25 V13 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M17 24 L22 29 L31 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    tag: 'Property 02',
    title: 'Biometric Wallet Authentication — Fingerprint & Face ID Access',
    quote: '"Access Your Wallet with Confidence."',
    body: 'Protect your wallet using your device password and biometric authentication. Every sensitive action and transaction requires your approval, adding an extra layer of protection to your Web3 experience.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="12" y="20" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 20 V14 C16 9.5 19.5 6 24 6 C28.5 6 32 9.5 32 14 V20" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="24" cy="30" r="2" fill="currentColor" />
        <path d="M24 32 V35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: 'Property 03',
    title: 'Secret Recovery Phrase Protection — The Key to Your Crypto, In Your Hands',
    quote: '"The Key to Your Wallet, Protected by You."',
    body: 'Your Secret Recovery Phrase is generated securely during wallet creation and remains accessible only to you. Before revealing it, BridgeKey includes an integrated security verification process that reinforces safe storage practices and helps users avoid common scams.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.4" />
        <path d="M14 24 L21 31 L34 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth=".6" opacity=".3" strokeDasharray="2 4" />
      </svg>
    ),
  },
  {
    tag: 'Property 04',
    title: 'Secure Crypto Transaction Approval — Every Transfer Needs Your Permission',
    quote: '"Every Transaction Starts with Your Permission."',
    body: "Every transaction is reviewed and approved by you before it's signed and submitted to the blockchain. BridgeKey helps ensure transparency and control over every on-chain interaction.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M14 20h20M14 28h14" strokeLinecap="round" />
        <rect x="8" y="6" width="32" height="36" rx="3" />
      </svg>
    ),
  },
  {
    tag: 'Property 05',
    title: 'Privacy-First Crypto Wallet — Your Data Never Reaches Our Servers',
    quote: '"Your Data Stays Yours."',
    body: 'BridgeKey is designed with privacy at its core. Your wallet credentials remain on your device, while optional settings allow you to control your privacy preferences without compromising functionality.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="24" cy="24" r="12" />
        <path d="M24 16v16M16 24h16" />
      </svg>
    ),
  },
  {
    tag: 'Property 06',
    title: 'Multi-Network Crypto Security — Safely Access 95+ Blockchains',
    quote: '"Connect with Confidence."',
    body: "Whether you're using MST Blockchain or other supported EVM-compatible networks, BridgeKey helps you manage network connections securely while supporting trusted blockchain infrastructure and custom networks.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="24" cy="24" r="18" />
        <path d="M10 24h28M24 10v28" />
      </svg>
    ),
  },
];

export default function SecurityPage() {
  const specItems = [
    { feature: 'Self-Custody', benefit: 'You always control your private keys and assets.' },
    { feature: 'Biometric Authentication', benefit: 'Secure and convenient wallet access.' },
    { feature: 'Secret Recovery Protection', benefit: 'Recovery credentials remain under your control.' },
    { feature: 'Secure Transaction Signing', benefit: 'Every transaction requires your approval.' },
    { feature: 'Privacy-First Architecture', benefit: 'Designed to minimize data exposure.' },
    { feature: 'Multi-Chain Security', benefit: 'Securely manage assets across supported blockchain networks.' },
  ];

  const securityWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "BridgeKey Wallet Security",
    "url": "https://bridgekey.io/security",
    "description": "BridgeKey uses non-custodial self-custody architecture ensuring private keys never leave the user's device. Includes biometric authentication, secure recovery phrase protection, and privacy-first design.",
    "about": {
      "@type": "Thing",
      "name": "Crypto Wallet Security",
      "description": "BridgeKey's security model is built on self-custody: your private keys are generated and stored only on your device. Biometric unlock, secure transaction signing, and zero server-side key storage protect your assets at every layer."
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bridgekey.io/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Security",
        "item": "https://bridgekey.io/security"
      }
    ]
  };

  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does BridgeKey store my private keys?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. BridgeKey is fully non-custodial. Your private keys and Secret Recovery Phrase are stored only on your device. BridgeKey has zero access to your wallet credentials and cannot retrieve them."
        }
      },
      {
        "@type": "Question",
        "name": "Can BridgeKey freeze or access my crypto funds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. As a non-custodial wallet, BridgeKey cannot see, access, freeze, or transfer your funds under any circumstances. Only you control your assets."
        }
      },
      {
        "@type": "Question",
        "name": "Does BridgeKey require KYC verification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. BridgeKey requires no KYC or identity verification of any kind. Simply download the app, create a wallet, and start using it immediately with complete privacy."
        }
      },
      {
        "@type": "Question",
        "name": "How does BridgeKey protect my wallet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BridgeKey protects your wallet through multiple layers: non-custodial key storage on your device, biometric authentication for access, secure transaction signing requiring your approval for every transaction, and a protected Secret Recovery Phrase that never leaves your device."
        }
      },
      {
        "@type": "Question",
        "name": "Is BridgeKey safe for large crypto holdings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. For maximum security on large holdings, BridgeKey supports hardware wallet integration with Ledger, Keystone, and Ngrave Zero devices, giving you cold storage protection alongside the BridgeKey interface."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I lose my phone with BridgeKey installed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your funds are safe. BridgeKey is non-custodial — your assets live on the blockchain, not on your device. Use your Secret Recovery Phrase to restore your wallet on any new device."
        }
      }
    ]
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "BridgeKey Wallet Security — Self-Custody, Biometric & Privacy-First",
    "url": "https://bridgekey.io/security",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".security-description"]
    }
  };

  return (
    <main>
      <meta httpEquiv="content-language" content="en-IN" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(securityWebPageJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(speakableJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <CursorGlow />
      <ParticleNetwork />
      <Navbar />

      <div style={{ paddingTop: '150px', minHeight: '100vh' }}>
        {/* Intro Section */}
        <section className="security-intro" style={{ paddingBottom: '60px' }}>
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-3/5">
                <div className="reveal">
                  <div className="section-eyebrow">
                    <span className="num">Trust</span>
                  </div>
                </div>
                <h1 className="section-title reveal" data-delay="1" style={{ marginBottom: '16px', fontSize: 'clamp(32px, 4vw, 56px)' }}>
                  BridgeKey Crypto Wallet Security — <br />
                  <em>Non‑Custodial, Encrypted & Fully Self‑Custody</em>
                </h1>
                <div className="reveal" data-delay="1.5" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '100px',
                  background: 'rgba(0, 229, 192, 0.08)',
                  border: '1px solid rgba(0, 229, 192, 0.2)',
                  color: 'var(--teal)',
                  fontSize: '14px',
                  fontWeight: 500,
                  fontFamily: 'JetBrains Mono, monospace',
                  marginBottom: '24px'
                }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--teal)' }}></span>
                  Trusted by 20,000+ crypto users across India &middot; 4.8★ on Google Play
                </div>
                <p className="security-description section-sub reveal" data-delay="2" style={{ maxWidth: '680px', margin: 0 }}>
                  Security isn&apos;t just a feature, it&apos;s the foundation of BridgeKey. Built with a self-custody architecture, BridgeKey gives you complete control over your digital assets while helping you navigate Web3 with confidence. From protecting your private keys to securing every transaction, every layer of BridgeKey is designed to put you in control.
                </p>
              </div>
              <div className="lg:w-2/5 w-full flex justify-center reveal" data-delay="3">
                <SecurityConsole />
              </div>
            </div>
          </div>
        </section>

        {/* Short paragraph section */}
        <section className="security-summary" style={{ padding: '40px 0 60px 0', borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <div className="reveal bk-quote-rail" style={{ maxWidth: '800px' }}>
              <p className="security-description" style={{ color: 'var(--ink-dim)', fontSize: '18px', lineHeight: '1.7' }}>
                Every interaction within BridgeKey is designed with security in mind. Whether you&apos;re creating a wallet, managing tokens, or exploring decentralized applications, BridgeKey helps safeguard your assets through intelligent security features and user-controlled access.
              </p>
            </div>
          </div>
        </section>

        {/* Security Pillars Section */}
        <section className="security-pillars" style={{ padding: '80px 0', borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <div className="bk-pillars-grid">
              {pillars.map((p, i) => (
                <div className="bk-pillar reveal" data-delay={String((i % 3) + 1)} key={p.tag}>
                  <span className="bk-pillar__scan" aria-hidden="true" />
                  <div className="bk-pillar__icon">{p.icon}</div>
                  <span className="tag bk-pillar__tag">{p.tag}</span>
                  <h4 className="bk-pillar__title">{p.title}</h4>
                  <p className="content bk-pillar__body">
                    <strong>{p.quote}</strong> {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SpecTable Section */}
        <section className="security-specs" style={{ padding: '80px 0', borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <h2 className="section-title reveal" style={{ marginBottom: '16px', fontSize: 'clamp(30px, 4vw, 54px)' }}>
              BridgeKey Security Features at a Glance
            </h2>
            <h3 style={{ fontSize: '20px', color: 'var(--teal)', marginBottom: '32px', fontWeight: 600, fontFamily: 'Syne, sans-serif' }} className="reveal">
              Security Parameters &amp; Benefits
            </h3>
            <div className="reveal bk-spec-panel" data-delay="1">
              <SpecTable items={specItems} />
            </div>
          </div>
        </section>

        {/* Closing paragraph */}
        <section className="security-commitment" style={{ padding: '60px 0 100px 0', borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p className="security-description" style={{ color: 'var(--ink-dim)', fontSize: '17px', lineHeight: '1.7' }}>
                As blockchain technology evolves, so do security challenges. BridgeKey is continuously designed to help users navigate the decentralized ecosystem with confidence by combining self-custody, privacy-first architecture, and secure wallet management into one seamless experience.
              </p>
            </div>
          </div>
        </section>

        {/* Custom CTA Band */}
        <section className="cta-band bk-cta" style={{ borderTop: '1px solid var(--line)' }}>
          <span className="bk-cta__glow" aria-hidden="true" />
          <div className="container">
            <h2 className="reveal">
              Take Control with <em>BridgeKey</em>
            </h2>
            <p className="reveal" data-delay="1" style={{ maxWidth: '600px', margin: '16px auto 32px auto' }}>
              Experience a wallet built to protect your assets while giving you complete ownership of your Web3 journey.
            </p>
            <div className="reveal" data-delay="2">
              <a
                href="https://play.google.com/store/apps/details?id=com.bridgekey"
                className="playstore-btn bk-cta__btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/playstore.png" alt="playstore logo" style={{ height: '28px', width: 'auto' }} />
                Download BridgeKey — Trusted by 20,000+ Crypto Users Across India
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollReveal />

      <style>{`
        /* ---------- Left accent rail on the short intro paragraph ---------- */
        .bk-quote-rail {
          position: relative;
          padding-left: 24px;
          border-left: 2px solid var(--line);
          transition: border-color 0.4s ease;
        }
        .bk-quote-rail:hover {
          border-left-color: var(--accent, #2dd4bf);
        }

        /* ---------- Pillars grid ---------- */
        .bk-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
          border-radius: 16px;
          overflow: hidden;
        }
        @media (max-width: 900px) {
          .bk-pillars-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .bk-pillars-grid { grid-template-columns: 1fr; }
        }

        .bk-pillar {
          position: relative;
          background: rgba(10, 14, 18, 0.6);
          padding: 40px 32px 36px;
          overflow: hidden;
          transition: background 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease;
        }
        .bk-pillar:hover {
          background: rgba(20, 30, 30, 0.85);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.6);
          z-index: 2;
        }

        /* signature motif: a thin security-scan line sweeps down the card on hover */
        .bk-pillar__scan {
          position: absolute;
          left: 0;
          right: 0;
          top: -20%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent, #2dd4bf), transparent);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .bk-pillar:hover .bk-pillar__scan {
          opacity: 0.9;
          animation: bk-scan 1.4s ease-in-out infinite;
        }
        @keyframes bk-scan {
          0%   { top: -10%; opacity: 0; }
          15%  { opacity: 0.9; }
          85%  { opacity: 0.9; }
          100% { top: 110%; opacity: 0; }
        }

        .bk-pillar__icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent, #2dd4bf);
          margin-bottom: 20px;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s ease;
        }
        .bk-pillar__icon svg { width: 32px; height: 32px; }
        .bk-pillar:hover .bk-pillar__icon {
          transform: scale(1.12);
          filter: drop-shadow(0 0 10px rgba(45, 212, 191, 0.55));
        }

        .bk-pillar__tag {
          display: inline-block;
          margin-bottom: 10px;
          letter-spacing: 0.08em;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
        .bk-pillar:hover .bk-pillar__tag { opacity: 1; }

        .bk-pillar__title {
          margin-bottom: 12px;
          transition: color 0.3s ease;
        }
        .bk-pillar:hover .bk-pillar__title { color: var(--accent, #2dd4bf); }

        .bk-pillar__body strong {
          color: var(--ink, #fff);
        }

        /* ---------- Spec table panel framing ---------- */
        .bk-spec-panel {
          position: relative;
          padding: 8px;
          border: 1px solid var(--line);
          border-radius: 20px;
          background: linear-gradient(180deg, rgba(45,212,191,0.04), transparent 40%);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .bk-spec-panel:hover {
          border-color: rgba(45, 212, 191, 0.4);
          box-shadow: 0 0 0 1px rgba(45, 212, 191, 0.08), 0 30px 60px -30px rgba(0,0,0,0.6);
        }

        /* ---------- CTA band ambient glow ---------- */
        .bk-cta { position: relative; overflow: hidden; }
        .bk-cta__glow {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 700px;
          height: 700px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(45,212,191,0.18) 0%, transparent 65%);
          pointer-events: none;
          animation: bk-pulse 6s ease-in-out infinite;
        }
        @keyframes bk-pulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50%      { opacity: 1;   transform: translate(-50%, -50%) scale(1.08); }
        }

        .bk-cta__btn {
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease;
        }
        .bk-cta__btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 30px -10px rgba(45, 212, 191, 0.5);
        }
        .bk-cta__btn:active {
          transform: translateY(0) scale(0.98);
        }

        /* ---------- Respect reduced motion ---------- */
        @media (prefers-reduced-motion: reduce) {
          .bk-pillar, .bk-pillar__icon, .bk-pillar__tag, .bk-pillar__title,
          .bk-cta__glow, .bk-cta__btn, .bk-quote-rail, .bk-spec-panel,
          .bk-pillar__scan {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}