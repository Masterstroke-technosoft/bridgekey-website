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
    "description": "BridgeKey is a non-custodial Web3 wallet built for MST Blockchain and 95+ EVM chains, designed in India for the world.",
    "mainEntity": {
      "@type": "Organization",
      "name": "BridgeKey",
      "url": "https://bridgekey.io",
      "logo": "https://bridgekey.io/uploads/header-logo.png",
      "description": "Next-generation self-custody crypto wallet engineered for India, built for the global Web3 ecosystem.",
      "foundingLocation": {
        "@type": "Place",
        "name": "Pune, India"
      },
      "sameAs": [
        "https://x.com/BridgekeyWallet",
        "https://www.instagram.com/bridgekeywallet/",
        "https://t.me/s/mstblockchain"
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
        "name": "Who built BridgeKey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BridgeKey is built by the MST Blockchain team in India. It is the native wallet for MST Blockchain, India's first Layer-1 blockchain network."
        }
      },
      {
        "@type": "Question",
        "name": "What is BridgeKey's mission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BridgeKey's mission is to make crypto self-custody simple, secure, and accessible for everyone — from beginners exploring Web3 to advanced blockchain users."
        }
      },
      {
        "@type": "Question",
        "name": "Is BridgeKey an Indian crypto wallet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BridgeKey is engineered in India and is the native wallet for MST Blockchain, India's inaugural Layer-1 blockchain network. It is built for India and the global Web3 ecosystem."
        }
      },
      {
        "@type": "Question",
        "name": "What is MST Blockchain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MST Blockchain is India's first Layer-1 blockchain network. BridgeKey is its native wallet, providing optimized access to the MST ecosystem including MSTC tokens and ecosystem applications."
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
              Your Gateway to Secure and Seamless <em>Web3</em> Access
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
              Built for the <em>MST Blockchain</em> Ecosystem
            </h2>
            <div className="reveal" data-delay="2" style={{ marginTop: '24px', maxWidth: '800px' }}>
              <p style={{ color: 'var(--ink-dim)', fontSize: '16px', lineHeight: '1.7' }}>
                BridgeKey is designed as the primary wallet solution for the MST Blockchain ecosystem, providing users with direct access to a high-performance Layer 1 blockchain network. By combining MST Blockchain&apos;s scalable infrastructure with BridgeKey&apos;s secure wallet technology, users can experience faster transactions, low network fees, and efficient interaction with blockchain applications. BridgeKey helps unlock the potential of MST Blockchain by providing a reliable and accessible platform for managing MSTC tokens, digital assets, and Web3 transactions.
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
              BridgeKey — Your Gateway to On-Chain Value.
            </p>
          </div>
        </section>
      </div>

      <CTABand />
      <Footer />
      <ScrollReveal />
    </main>
  );
}