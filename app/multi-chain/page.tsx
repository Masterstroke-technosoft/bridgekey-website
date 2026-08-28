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
  keywords: "multi-chain crypto wallet, EVM compatible wallet, Ethereum wallet, BNB Chain wallet, Polygon wallet, Arbitrum wallet, cross-chain crypto wallet, custom RPC wallet, non-custodial multi-chain wallet, Web3 multi-chain wallet, best wallet for DeFi",
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
    title: "BridgeKey Multi-Chain — Non-Custodial Wallet for 95+ EVM Networks",
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
    title: "BridgeKey Multi-Chain — Non-Custodial Wallet for 95+ EVM Networks",
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
        "MST Blockchain — Sovereign Layer-1 Blockchain",
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

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "BridgeKey Supported Blockchain Networks",
    "numberOfItems": 12,
    "itemListElement": [
      {
        "@type": "ListItem", "position": 1, "name": "MST Blockchain",
        "description": "Sovereign Layer-1 Blockchain. Native support, 3s block time, 0.001 MSTC fees."
      },
      {
        "@type": "ListItem", "position": 2, "name": "Ethereum",
        "description": "World's largest smart contract ecosystem with thousands of dApps."
      },
      {
        "@type": "ListItem", "position": 3, "name": "BNB Smart Chain",
        "description": "High-speed EVM chain with low fees and large DeFi ecosystem."
      },
      {
        "@type": "ListItem", "position": 4, "name": "Polygon",
        "description": "Ethereum Layer-2 with fast transactions and minimal gas fees."
      },
      {
        "@type": "ListItem", "position": 5, "name": "Base",
        "description": "Coinbase Layer-2 Ethereum network with growing Web3 ecosystem."
      },
      {
        "@type": "ListItem", "position": 6, "name": "Arbitrum",
        "description": "Ethereum optimistic rollup Layer-2 with Ethereum security at lower cost."
      },
      {
        "@type": "ListItem", "position": 7, "name": "OP Mainnet",
        "description": "Optimism Layer-2 Ethereum network for DeFi and dApp access."
      },
      {
        "@type": "ListItem", "position": 8, "name": "Linea",
        "description": "ConsenSys zkEVM Layer-2 Ethereum network."
      },
      { "@type": "ListItem", "position": 9, "name": "Sepolia Testnet" },
      { "@type": "ListItem", "position": 10, "name": "Avalanche (Custom)" },
      { "@type": "ListItem", "position": 11, "name": "zkSync (Custom)" },
      { "@type": "ListItem", "position": 12, "name": "Sei (Custom)" }
    ]
  };

  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does BridgeKey support Ethereum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BridgeKey natively supports Ethereum Mainnet, all ERC-20 tokens and thousands of Ethereum decentralised applications."
        }
      },
      {
        "@type": "Question",
        "name": "Does BridgeKey support BNB Chain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BridgeKey supports BNB Smart Chain natively, including BEP-20 tokens and BNB Chain dApps."
        }
      },
      {
        "@type": "Question",
        "name": "Does BridgeKey support Polygon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BridgeKey supports Polygon Mainnet, MATIC and all Polygon-based tokens and dApps."
        }
      },
      {
        "@type": "Question",
        "name": "Can I add custom blockchain networks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Go to Settings > Networks > Add Network. Enter the RPC URL, chain ID and currency symbol for any EVM-compatible chain."
        }
      },
      {
        "@type": "Question",
        "name": "How many chains does BridgeKey support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "95+ blockchain networks natively, plus unlimited custom EVM networks via RPC."
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
          __html: JSON.stringify(itemListJsonLd).replace(/</g, '\\u003c'),
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
                    <span className="num"> Chain</span>
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
                title="MST Blockchain — Sovereign Layer-1, No Central Control"
                description="MST Blockchain is a sovereign Layer-1 — no central bank, no government control, no single point of failure. BridgeKey is the only wallet with native MST support. Sub-second finality. Average fee: 0.001 MSTC."
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
                description="Access the world&apos;s largest smart contract ecosystem and interact with thousands of decentralized applications, tokens, and Web3 services. BridgeKey connects you to the full Ethereum ecosystem — manage ETH and all ERC-20 tokens, access Ethereum-based DeFi protocols, buy and store NFTs, and interact with thousands of decentralised applications directly from your wallet."
                delay={2}
              />

              <FeatureCard
                index="003"
                icon={
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12 2 20 6 20 18 12 22 4 18 4 6" />
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="4" y1="6" x2="20" y2="18" />
                    <line x1="20" y1="6" x2="4" y2="18" />
                  </svg>
                }
                title="BNB Smart Chain"
                description="BNB Smart Chain — Manage BNB and all BEP-20 tokens. BridgeKey connects you to Binance&apos;s high-speed network with some of the lowest transaction fees in DeFi, giving you access to a thriving ecosystem of tokens, protocols and dApps."
                delay={3}
              />

              <FeatureCard
                index="004"
                icon={
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                }
                title="Polygon"
                description="Polygon — Use Polygon&apos;s fast Ethereum-compatible network from BridgeKey. Send MATIC, interact with Polygon-based dApps and manage your assets on one of the most widely used Layer‑2 networks — with fees a fraction of Ethereum Mainnet."
                delay={4}
              />

              <FeatureCard
                index="005"
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
                delay={5}
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

        {/* FAQ Section */}
        <section id="faq" className="faq py-20 border-t border-[var(--line)]">
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
                <span className="num"> FAQ</span>
              </div>
              <h2 className="section-title" style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                Frequently Asked <em>Questions</em>
              </h2>
            </div>

            <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  q: "Does BridgeKey support Ethereum?",
                  a: "Yes. BridgeKey natively supports Ethereum Mainnet, all ERC-20 tokens and thousands of Ethereum dApps."
                },
                {
                  q: "Does BridgeKey support BNB Chain?",
                  a: "Yes. BridgeKey supports BNB Smart Chain natively, including BEP-20 tokens and dApps."
                },
                {
                  q: "Does BridgeKey support Polygon?",
                  a: "Yes. BridgeKey supports Polygon Mainnet, MATIC and all Polygon-based tokens and dApps."
                },
                {
                  q: "Can I add custom blockchain networks?",
                  a: "Yes. Go to Settings > Networks > Add Network. Enter RPC URL, chain ID and currency symbol."
                },
                {
                  q: "How many chains does BridgeKey support?",
                  a: "95+ networks natively, plus unlimited custom EVM networks via RPC."
                }
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="faq-item reveal"
                  data-delay="1"
                  style={{
                    border: '1px solid var(--line)',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.01)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <summary
                    style={{
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: 'white',
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '18px',
                      fontWeight: 600,
                      listStyle: 'none',
                      outline: 'none'
                    }}
                  >
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600, fontFamily: 'Syne, sans-serif', color: 'white', display: 'inline-block' }}>{faq.q}</h3>
                    <span className="faq-icon" style={{
                      color: 'var(--teal)',
                      fontSize: '20px',
                      display: 'inline-block',
                      marginLeft: '12px'
                    }}>+</span>
                  </summary>
                  <div
                    style={{
                      padding: '0 24px 20px 24px',
                      cursor: 'default'
                    }}
                  >
                    <p style={{
                      margin: 0,
                      color: 'var(--ink-dim)',
                      fontSize: '15px',
                      lineHeight: '1.6'
                    }}>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Custom CTA Band */}
        <section className="cta-band" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <h2 className="reveal">
              One Non-Custodial Wallet. Every Chain. <em>No Middleman.</em>
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
