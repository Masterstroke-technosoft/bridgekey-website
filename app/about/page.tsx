import type { Metadata, Viewport } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ParticleNetwork from '@/components/ParticleNetwork';
import ScrollReveal from '@/components/ScrollReveal';
import FeatureCard from '@/components/FeatureCard';
import CTABand from '@/components/CTABand';
import WhyChooseScroll from '@/components/WhyChooseScroll';

export const metadata: Metadata = {
  title: "About BridgeKey — Non-Custodial Web3 Wallet | Made in India",
  description: "BridgeKey is India's non-custodial Web3 wallet built for MST Blockchain. Learn about our mission to make crypto self-custody simple, secure, and accessible for everyone.",
  keywords: "non-custodial Web3 wallet India, BridgeKey crypto wallet, MST blockchain India, secure crypto wallet India, self-custody blockchain India, decentralized wallet India",
  alternates: {
    canonical: "https://bridgekey.io/about",
    languages: {
      "en-IN": "https://bridgekey.io/about",
      "en": "https://bridgekey.io/about",
      "x-default": "https://bridgekey.io/about",
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
    title: "About BridgeKey — Non-Custodial Web3 Wallet Made in India",
    description: "Learn how BridgeKey is making self-custody crypto accessible for India and the world. Built on MST Blockchain, India's first Layer-1.",
    url: "https://bridgekey.io/about",
    locale: "en_IN",
    images: [
      {
        url: "https://bridgekey.io/assets/og-about.png",
        width: 1200,
        height: 630,
        alt: "About BridgeKey — Non-Custodial Web3 Wallet Made in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BridgekeyWallet",
    creator: "@BridgekeyWallet",
    title: "About BridgeKey — Non-Custodial Web3 Wallet Made in India",
    description: "Learn how BridgeKey is making self-custody crypto accessible for India and the world. Built on MST Blockchain, India's first Layer-1.",
    images: [
      {
        url: "https://bridgekey.io/assets/og-about.png",
        alt: "About BridgeKey — Non-Custodial Web3 Wallet Made in India",
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

export default function AboutPage() {
  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About BridgeKey",
    "url": "https://bridgekey.io/about",
    "description": "BridgeKey is India's non-custodial Web3 crypto wallet built on MST Blockchain",
    "mainEntity": {
      "@type": "Organization",
      "name": "BridgeKey",
      "url": "https://bridgekey.io",
      "foundingLocation": { "@type": "Place", "addressCountry": "IN", "addressLocality": "Pune" }
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
        "name": "About",
        "item": "https://bridgekey.io/about"
      }
    ]
  };

  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is BridgeKey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BridgeKey is India's non-custodial crypto wallet built natively on MST Blockchain. 95+ networks, no KYC, complete private key ownership."
        }
      },
      {
        "@type": "Question",
        "name": "Who built BridgeKey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BridgeKey is built in Pune, India by the team behind MST Blockchain — India's first sovereign Layer-1 blockchain."
        }
      },
      {
        "@type": "Question",
        "name": "What is MST Blockchain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MST Blockchain is India's first Layer-1 with sub-second finality, 73,000+ validators and average fees of 0.001 MSTC."
        }
      },
      {
        "@type": "Question",
        "name": "Is BridgeKey free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Free to download and use. Standard blockchain gas fees apply when sending crypto — set by the network, not BridgeKey."
        }
      },
      {
        "@type": "Question",
        "name": "Does BridgeKey support DeFi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BridgeKey connects to DeFi across 95+ chains via the built-in Web3 browser."
        }
      }
    ]
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About BridgeKey — Non-Custodial Web3 Wallet | Made in India",
    "url": "https://bridgekey.io/about",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".page-description"]
    }
  };

  return (
    <main>
      <meta httpEquiv="content-language" content="en-IN" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageJsonLd).replace(/</g, '\\u003c'),
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
        {/* Intro/Hero Section */}
        <section className="about-hero" style={{ paddingBottom: '60px' }}>
          <div className="container">
            <div className="reveal">
              <div className="section-eyebrow">
                <span className="num">About BridgeKey</span>
              </div>
            </div>
            <h1 className="section-title reveal" data-delay="1" style={{ maxWidth: '900px' }}>
              BridgeKey — Non-Custodial Crypto Wallet. <br />
              Built in India for the <em>World.</em>
            </h1>
            <div className="reveal" data-delay="2" style={{ marginTop: '32px', maxWidth: '800px' }}>
              <p className="page-description" style={{ color: 'var(--ink-dim)', fontSize: '18px', lineHeight: '1.7' }}>
                BridgeKey is a next-generation Web3 wallet and non-custodial crypto wallet designed to simplify blockchain adoption for users worldwide. Built as the native wallet for MST Blockchain, BridgeKey provides a secure and seamless platform to store, manage, and transfer digital assets across multiple blockchain networks. Our mission is to make cryptocurrency management simple, secure, and accessible for everyone by combining advanced blockchain technology with an intuitive user experience. Whether you are a beginner exploring Web3 or an experienced user interacting with decentralized applications (dApps), BridgeKey provides a trusted gateway to the decentralized ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="about-vision" style={{ padding: '80px 0', borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <h2 className="section-title reveal" data-delay="1" style={{ maxWidth: '800px' }}>
              Making Blockchain Accessible for <em>Everyone</em>
            </h2>
            <div className="reveal" data-delay="2" style={{ marginTop: '24px', maxWidth: '800px' }}>
              <p style={{ color: 'var(--ink-dim)', fontSize: '16px', lineHeight: '1.7' }}>
                At BridgeKey, we envision a future where blockchain technology becomes a part of everyday digital experiences. Our goal is to remove the complexity associated with crypto wallets and create a user-friendly multi-chain wallet experience that enables individuals, developers, and businesses to participate confidently in the Web3 ecosystem. Through secure infrastructure, seamless connectivity, and innovative wallet solutions, BridgeKey aims to accelerate global adoption of blockchain technology and decentralized finance (DeFi).
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="about-mission" style={{ padding: '80px 0', borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <div className="reveal">
              <div className="section-eyebrow">
                <span className="num">01 / Mission</span>
              </div>
            </div>
            <h2 className="section-title reveal" data-delay="1" style={{ marginBottom: '48px' }}>
              BridgeKey is built to empower users with:
            </h2>

            <div className="feature-grid-4">
              <FeatureCard
                index="001"
                icon={
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                }
                title="Secure Digital Asset Management"
                description="As a non-custodial wallet, BridgeKey ensures users maintain complete ownership and control over their private keys and digital assets. Security, privacy, and transparency remain at the core of our wallet architecture."
                delay={1}
              />

              <FeatureCard
                index="002"
                icon={
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="6" y1="3" x2="6" y2="15" />
                    <circle cx="18" cy="6" r="3" />
                    <circle cx="6" cy="18" r="3" />
                    <path d="M18 9a9 9 0 0 1-9 9" />
                  </svg>
                }
                title="Multi-Chain Blockchain Access"
                description="BridgeKey enables users to manage multiple cryptocurrencies and interact with different blockchain networks through a single platform. With support for MST Blockchain and EVM-compatible networks, users can experience seamless cross-chain accessibility."
                delay={2}
              />

              <FeatureCard
                index="003"
                icon={
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8M8 12h8" />
                  </svg>
                }
                title="Simplified Web3 Experience"
                description="We believe blockchain should be accessible to everyone. BridgeKey delivers an easy-to-use interface that allows users to send, receive, store, and manage crypto assets without unnecessary complexity."
                delay={3}
              />

              <FeatureCard
                index="004"
                icon={
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12 2 2 7 12 12 22 7 12 2 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                }
                title="Gateway to Decentralized Applications"
                description="BridgeKey connects users with the growing world of Web3 applications, decentralized finance (DeFi), and blockchain-based services, enabling participation in the decentralized economy."
                delay={4}
              />
            </div>
          </div>
        </section>

        {/* Built for MST Ecosystem Section */}
        <section className="about-ecosystem" style={{ padding: '80px 0', borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <div className="reveal">
              <div className="section-eyebrow">
                <span className="num">02 / Ecosystem</span>
              </div>
            </div>
            <h2 className="section-title reveal" data-delay="1">
              Built for MST Blockchain — <em>India&apos;s First Layer‑1 Crypto Ecosystem</em>
            </h2>
            <div className="reveal" data-delay="2" style={{ marginTop: '24px', maxWidth: '800px' }}>
              <p style={{ color: 'var(--ink-dim)', fontSize: '16px', lineHeight: '1.7' }}>
                BridgeKey is designed as the primary wallet solution for the MST Blockchain ecosystem, providing users with direct access to a high-performance Layer 1 blockchain network. By combining MST Blockchain&apos;s scalable infrastructure with BridgeKey&apos;s secure wallet technology, users can experience faster transactions, low network fees, and efficient interaction with blockchain applications. BridgeKey helps unlock the potential of MST Blockchain by providing a reliable and accessible platform for managing MSTC tokens, digital assets, and Web3 transactions. With 3-second average block times, 73,000+ active validators and average transaction fees of just 0.001 MSTC, MST Blockchain represents India&apos;s native decentralised infrastructure. BridgeKey is the only wallet built to natively access the full MST ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose BridgeKey Section */}
        <WhyChooseScroll />

        {/* Our Commitment Section */}
        <section className="about-commitment" style={{ padding: '80px 0 120px 0', borderTop: '1px solid var(--line)' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
            <p style={{ color: 'var(--ink-dim)', fontSize: '18px', lineHeight: '1.8', marginBottom: '24px' }}>
              The future of finance is decentralized, and BridgeKey is committed to making this future accessible to everyone. By combining blockchain security, multi-chain functionality, and user-focused design, we are building a wallet that enables individuals to confidently participate in the Web3 ecosystem. BridgeKey continues to innovate towards a future where managing digital assets and accessing blockchain technology becomes simple, secure, and accessible for all.
            </p>
            <p style={{ color: 'var(--ink)', fontSize: '20px', fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>
              BridgeKey — Your Gateway to On-Chain Value. Built in India for the World.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq py-20 border-t border-[var(--line)]">
          <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
                <span className="num">04 / FAQ</span>
              </div>
              <h2 className="section-title" style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                Frequently Asked <em>Questions</em>
              </h2>
            </div>

            <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  q: "What is BridgeKey?",
                  a: "BridgeKey is India&apos;s non‑custodial crypto wallet built natively on MST Blockchain. 95+ networks, no KYC, complete private key ownership."
                },
                {
                  q: "Who built BridgeKey?",
                  a: "BridgeKey is built in Pune, India by the team behind MST Blockchain — India&apos;s first sovereign Layer‑1 blockchain."
                },
                {
                  q: "What is MST Blockchain?",
                  a: "MST Blockchain is India&apos;s first Layer‑1 with sub‑second finality, 73,000+ validators and average fees of 0.001 MSTC."
                },
                {
                  q: "Is BridgeKey free to use?",
                  a: "Yes. Free to download and use. Standard blockchain gas fees apply when sending crypto — set by the network, not BridgeKey."
                },
                {
                  q: "Does BridgeKey support DeFi?",
                  a: "Yes. BridgeKey connects to DeFi across 95+ chains via the built‑in Web3 browser."
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
      </div>

      <CTABand />
      <Footer />
      <ScrollReveal />
    </main>
  );
}