import type { Metadata, Viewport } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ParticleNetwork from '@/components/ParticleNetwork';
import ScrollReveal from '@/components/ScrollReveal';
import FeatureCard from '@/components/FeatureCard';
import NetworkChip from '@/components/NetworkChip';
import ChainConsole from '@/components/ChainConsole';

export const metadata: Metadata = {
  title: "Multi-Chain Crypto Wallet — 95+ EVM Networks | BridgeKey",
  description: "BridgeKey supports MST Blockchain, Ethereum, BNB Chain, Polygon, Base, Arbitrum, and 95+ EVM networks in one non-custodial wallet. Switch chains instantly. Add custom RPC networks.",
  keywords: "multi-chain crypto wallet, EVM compatible wallet India, Ethereum wallet India, BNB chain wallet India, Polygon wallet India, cross-chain crypto wallet, custom RPC wallet, MST EVM wallet, Arbitrum wallet India",
  alternates: {
    canonical: "https://bridgekey.io/multi-chain",
    languages: {
      "en-IN": "https://bridgekey.io/multi-chain",
      "en": "https://bridgekey.io/multi-chain",
      "x-default": "https://bridgekey.io/multi-chain",
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
    title: "BridgeKey Multi-Chain — One Wallet for Every EVM Chain",
    description: "MST, Ethereum, BNB, Polygon, Base, Arbitrum & 95+ chains — all in one non-custodial wallet. Switch networks instantly with BridgeKey.",
    url: "https://bridgekey.io/multi-chain",
    locale: "en_IN",
    images: [
      {
        url: "https://bridgekey.io/assets/og-multichain.png",
        width: 1200,
        height: 630,
        alt: "BridgeKey Multi-Chain Crypto Wallet — 95+ EVM Networks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BridgekeyWallet",
    creator: "@BridgekeyWallet",
    title: "BridgeKey Multi-Chain — One Wallet for Every EVM Chain",
    description: "MST, Ethereum, BNB, Polygon, Base, Arbitrum & 95+ chains — all in one non-custodial wallet. Switch networks instantly with BridgeKey.",
    images: [
      {
        url: "https://bridgekey.io/assets/og-multichain.png",
        alt: "BridgeKey Multi-Chain Crypto Wallet — 95+ EVM Networks",
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
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export default function MultiChainPage() {
  const networks = [
    { name: 'MST Blockchain', logo: '/assets/1.png' },
    { name: 'Ethereum' },
    { name: 'BNB Smart Chain' },
    { name: 'Polygon' },
    { name: 'Base' },
    { name: 'Arbitrum' },
    { name: 'OP Mainnet' },
    { name: 'Linea' },
    { name: 'Sepolia' },
    { name: 'Avalanche (Custom)' },
    { name: 'zkSync (Custom)' },
    { name: 'Sei (Custom)' },
  ];

  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "BridgeKey Multi-Chain Support",
    "url": "https://bridgekey.io/multi-chain",
    "description": "BridgeKey supports 95+ EVM-compatible blockchain networks including MST Blockchain, Ethereum, BNB Chain, Polygon, Base, Arbitrum, OP Mainnet, Linea, and custom RPC networks.",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "BridgeKey Wallet",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "ANDROID",
      "url": "https://bridgekey.io",
      "downloadUrl": "https://play.google.com/store/apps/details?id=com.bridgekey",
      "description": "Multi-chain non-custodial crypto wallet supporting MST Blockchain and 95+ EVM-compatible networks.",
      "featureList": [
        "MST Blockchain — India's first Layer-1",
        "Ethereum Mainnet",
        "BNB Smart Chain",
        "Polygon",
        "Base",
        "Arbitrum",
        "OP Mainnet",
        "Linea",
        "Sepolia Testnet",
        "Avalanche (Custom RPC)",
        "zkSync (Custom RPC)",
        "Sei (Custom RPC)",
        "Custom RPC network support",
        "Instant network switching",
        "Developer testnet connectivity"
      ]
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
        "name": "Multi-Chain",
        "item": "https://bridgekey.io/multi-chain"
      }
    ]
  };

  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which blockchains does BridgeKey support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BridgeKey supports MST Blockchain, Ethereum, BNB Smart Chain, Polygon, Base, Arbitrum, OP Mainnet, Linea, Sepolia testnet, and allows custom RPC networks for any EVM-compatible blockchain. That is 95+ networks in total."
        }
      },
      {
        "@type": "Question",
        "name": "Can I add custom blockchains to BridgeKey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BridgeKey supports custom RPC networks, allowing you to connect to any EVM-compatible blockchain not already built in, including private networks and emerging ecosystems."
        }
      },
      {
        "@type": "Question",
        "name": "Does BridgeKey support Ethereum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BridgeKey fully supports Ethereum Mainnet along with Ethereum testnets and Ethereum Layer-2 networks including Base, Arbitrum, OP Mainnet, and Linea."
        }
      },
      {
        "@type": "Question",
        "name": "Is BridgeKey compatible with Polygon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Polygon is a natively supported network in BridgeKey. You can manage MATIC tokens and interact with Polygon dApps directly from the wallet."
        }
      },
      {
        "@type": "Question",
        "name": "Does BridgeKey support BNB Smart Chain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BNB Smart Chain is natively supported in BridgeKey, allowing you to manage BNB and BEP-20 tokens alongside assets on other chains."
        }
      },
      {
        "@type": "Question",
        "name": "Can developers use BridgeKey for testing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BridgeKey supports popular blockchain test networks including Sepolia, making it suitable for developers and blockchain builders who need testnet connectivity."
        }
      }
    ]
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Multi-Chain Crypto Wallet — 95+ EVM Networks | BridgeKey",
    "url": "https://bridgekey.io/multi-chain",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".chain-description"]
    }
  };

  return (
    <main>
      <meta httpEquiv="content-language" content="en-IN" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd).replace(/</g, '\\u003c'),
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

      <div className="pt-24 md:pt-36 min-h-screen">
        {/* Intro Section */}
        <section className="multi-chain-intro pb-10 md:pb-16">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-3/5">
                <div className="reveal">
                  <div className="section-eyebrow">
                    <span className="num">02 / Chain</span>
                  </div>
                </div>
                <h1 className="section-title reveal" data-delay="1" style={{ marginBottom: '24px' }}>
                  One Wallet. Every <em>Chain</em> That Matters.
                </h1>
                <p className="chain-description section-sub reveal" data-delay="2" style={{ maxWidth: '680px', margin: 0 }}>
                  BridgeKey brings the world&apos;s leading blockchain networks together in one secure, intuitive wallet. Manage digital assets, switch between networks, and explore the decentralized ecosystem all without leaving the BridgeKey experience. Whether you&apos;re interacting with MST Blockchain, Ethereum, or other EVM-compatible networks, BridgeKey keeps everything connected in one place.
                </p>
              </div>
              <div className="lg:w-2/5 w-full flex justify-center reveal" data-delay="3">
                <ChainConsole />
              </div>
            </div>
          </div>
        </section>

        {/* Short paragraph section */}
        <section className="multi-chain-summary py-10 md:pt-10 md:pb-16" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <div className="reveal" style={{ maxWidth: '800px' }}>
              <p className="chain-description" style={{ color: 'var(--ink-dim)', fontSize: '18px', lineHeight: '1.7' }}>
                Blockchain shouldn&apos;t be limited to a single network. BridgeKey empowers you to seamlessly manage assets across multiple ecosystems, making it easier to explore DeFi, NFTs, decentralized applications, and digital payments from one wallet.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="multi-chain-highlights py-12 md:py-20" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <div className="feature-grid">
              <FeatureCard
                index="001"
                icon={
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                }
                title="MST Blockchain"
                description="Experience the full potential of the MST ecosystem with native support for MST Mainnet. Manage MSTC, access ecosystem applications, and enjoy optimized performance designed specifically for the MST network."
                delay={1}
              />

              <FeatureCard
                index="002"
                icon={
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 12h5v8h10v-8h5L12 2z" />
                  </svg>
                }
                title="Ethereum Ecosystem"
                description="Access the world's largest smart contract ecosystem and interact with thousands of decentralized applications, tokens, and Web3 services."
                delay={2}
              />

              <FeatureCard
                index="003"
                icon={
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="8" height="8" rx="1" />
                    <rect x="14" y="2" width="8" height="8" rx="1" />
                    <rect x="2" y="14" width="8" height="8" rx="1" />
                    <rect x="14" y="14" width="8" height="8" rx="1" />
                    <line x1="10" y1="6" x2="14" y2="6" />
                    <line x1="6" y1="10" x2="6" y2="14" />
                    <line x1="18" y1="10" x2="18" y2="14" />
                    <line x1="10" y1="18" x2="14" y2="18" />
                  </svg>
                }
                title="Major EVM Networks"
                description="BridgeKey supports leading EVM-compatible networks, allowing you to manage assets across multiple blockchain ecosystems without switching wallets. Supported networks include: Ethereum, MST Mainnet, BNB Smart Chain, Polygon, Base, Arbitrum, OP Mainnet, Linea."
                delay={3}
              />
            </div>
          </div>
        </section>

        {/* Feature blocks & network utilities */}
        <section className="multi-chain-details py-12 md:py-20" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="reveal" data-delay="1" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div className="bk-detail-card">
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--teal)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Development & Testing</span>
                  <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '20px', fontWeight: 600, color: 'white', marginBottom: '12px' }}>Testnet Connectivity</h4>
                  <p style={{ color: 'var(--ink-dim)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                    Build, test, and explore with support for popular blockchain test networks, making BridgeKey suitable for developers and blockchain innovators.
                  </p>
                </div>

                <div className="bk-detail-card">
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--teal)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>Need access to another EVM-compatible blockchain?</span>
                  <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '20px', fontWeight: 600, color: 'white', marginBottom: '12px' }}>Custom RPC Networks</h4>
                  <p style={{ color: 'var(--ink-dim)', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                    BridgeKey lets you add custom RPC networks, giving you the flexibility to connect to emerging ecosystems and private blockchain environments.
                  </p>
                </div>
              </div>

              <div className="reveal" data-delay="2" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="bk-switch-card">
                  <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '24px', fontWeight: 600, color: 'white', marginBottom: '16px' }}>Seamless Network Switching</h4>
                  <p style={{ color: 'var(--ink-dim)', fontSize: '16px', lineHeight: '1.7', marginBottom: '0' }}>
                    Switch between supported blockchain networks with just a few taps. Your assets, balances, and supported tokens are organized for each network, helping you manage multiple ecosystems through one intuitive interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Multi-Chain Matters (Checklist) */}
        <section className="multi-chain-why py-12 md:py-20" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <h2 className="section-title reveal" style={{ maxWidth: '800px' }}>
              Why <em>Multi-Chain</em> Matters
            </h2>
            <p className="chain-description reveal" data-delay="1" style={{ color: 'var(--ink-dim)', fontSize: '18px', lineHeight: '1.7', margin: '24px 0 32px 0' }}>
              The future of Web3 is interconnected. By supporting multiple blockchain networks, BridgeKey enables you to:
            </p>
            <div className="reveal" data-delay="2" style={{ maxWidth: '650px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Manage assets across different ecosystems',
                  'Access a wider range of decentralized applications',
                  'Explore DeFi opportunities across networks',
                  'Interact with blockchain services from one wallet',
                  'Stay connected as the Web3 ecosystem continues to grow'
                ].map((item, idx) => (
                  <li key={idx} className="bk-checklist-item" style={{ fontSize: '16px' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--teal)', fontWeight: 'bold' }}>→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Supported Networks grid */}
        <section className="supported-networks py-12 md:py-20 overflow-hidden" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="container" style={{ position: 'relative' }}>
            <h2 className="section-title reveal" style={{ marginBottom: '48px', fontSize: 'clamp(30px, 4vw, 54px)', textAlign: 'center' }}>
              Supported Networks
            </h2>
            <div className="reveal bk-orbit-container" data-delay="1">
              <div className="bk-orbit-ring">
                {networks.map((network, index) => {
                  const angle = (index * 360) / networks.length;
                  return (
                    <div
                      key={index}
                      className="bk-orbit-item"
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(var(--orbit-radius))`,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div className="bk-orbit-item-inner">
                        <div className="bk-card-front">
                          <NetworkChip name={network.name} logo={network.logo} />
                        </div>
                        <div className="bk-card-back">
                          <NetworkChip name={network.name} logo={network.logo} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Custom CTA Band */}
        <section className="cta-band" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <h2 className="reveal">
              Connect Beyond a <em>Single Blockchain</em>
            </h2>
            <p className="reveal" data-delay="1" style={{ maxWidth: '600px', margin: '16px auto 32px auto' }}>
              BridgeKey gives you the freedom to manage assets, explore decentralized applications, and interact with multiple blockchain ecosystems all from one powerful wallet.
            </p>
            <div className="reveal" data-delay="2">
              <a href="https://play.google.com/store/apps/details?id=com.bridgekey" className="playstore-btn" target="_blank" rel="noopener noreferrer">
                <img src="/assets/playstore.png" alt="playstore logo" style={{ height: '28px', width: 'auto' }} />
                Explore BridgeKey
              </a>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        /* ---------- Custom styles for details cards ---------- */
        .bk-detail-card {
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 32px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, 0));
          transition: border-color 0.4s ease, background 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .bk-detail-card:hover {
          border-color: rgba(0, 229, 192, 0.25);
          background: rgba(0, 229, 192, 0.02);
          transform: translateY(-2px);
        }
        
        .bk-switch-card {
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 40px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.025), rgba(255, 255, 255, 0));
          width: 100%;
          transition: border-color 0.4s ease, background 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .bk-switch-card:hover {
          border-color: rgba(0, 229, 192, 0.25);
          background: rgba(0, 229, 192, 0.03);
          transform: translateY(-2px);
        }

        @media (max-width: 640px) {
          .bk-detail-card {
            padding: 20px;
          }
          .bk-switch-card {
            padding: 24px;
          }
        }

        /* ---------- Checklist indicator hover ---------- */
        .bk-checklist-item {
          display: flex;
          align-items: center;
          gap: 14px;
          color: var(--ink);
          transition: transform 0.3s ease;
        }
        .bk-checklist-item:hover {
          transform: translateX(4px);
        }

         /* ---------- Networks grid ---------- */
        .bk-networks-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: flex-start;
          align-items: center;
        }

        /* ---------- Tilted 3D Orbiting Networks ---------- */
        :root {
          --orbit-radius: 460px;
        }
        @media (max-width: 1024px) {
          :root {
            --orbit-radius: 340px;
          }
        }
        @media (max-width: 640px) {
          :root {
            --orbit-radius: 200px;
          }
        }

        .bk-orbit-container {
          position: relative;
          width: 100%;
          height: 380px;
          perspective: 1200px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
        }

        .bk-orbit-ring {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: bk-ring-orbit 24s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
        }

        .bk-orbit-item {
          transform-style: preserve-3d;
          backface-visibility: visible;
        }

        .bk-orbit-item-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          animation: bk-item-counter 24s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
        }

        .bk-card-front,
        .bk-card-back {
          position: absolute;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .bk-card-front {
          transform: rotateY(0deg);
        }

        .bk-card-back {
          transform: rotateY(180deg);
        }

        @keyframes bk-ring-orbit {
          0% {
            transform: rotateY(0deg) rotateX(-7deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(-7deg);
          }
        }

        @keyframes bk-item-counter {
          0% {
            transform: rotateY(0deg) rotateX(7deg);
          }
          100% {
            transform: rotateY(-360deg) rotateX(7deg);
          }
        }
      `}</style>
      <Footer />
      <ScrollReveal />
    </main>
  );
}
