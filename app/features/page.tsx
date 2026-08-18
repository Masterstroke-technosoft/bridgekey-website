import type { Metadata, Viewport } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ParticleNetwork from '@/components/ParticleNetwork';
import ScrollReveal from '@/components/ScrollReveal';
import FeaturesScroll from '@/components/FeaturesScroll';

export const metadata: Metadata = {
  title: "BridgeKey Wallet Features — Web3, DeFi, NFT & Multi-Chain Support",
  description: "Explore BridgeKey's crypto wallet features: send & receive crypto, built-in Web3 browser, NFT support, hardware wallet compatibility, multi-account management, and 95+ chain access on Android.",
  keywords: "crypto wallet features, Web3 browser wallet, NFT wallet India, hardware wallet support India, DeFi wallet India, multi-account crypto wallet, ERC-20 token wallet Android, smart account wallet",
  alternates: {
    canonical: "https://bridgekey.io/features",
    languages: {
      "en-IN": "https://bridgekey.io/features",
      "en": "https://bridgekey.io/features",
      "x-default": "https://bridgekey.io/features",
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
    title: "BridgeKey Features — Web3 Wallet with DeFi, NFT & Hardware Support",
    description: "One wallet. Every feature you need. Multi-chain, Web3 browser, NFT management, hardware wallet support, smart accounts — all in BridgeKey.",
    url: "https://bridgekey.io/features",
    locale: "en_IN",
    images: [
      {
        url: "https://bridgekey.io/assets/og-features.png",
        width: 1200,
        height: 630,
        alt: "BridgeKey Wallet Features — Web3, DeFi, NFT & Multi-Chain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BridgekeyWallet",
    creator: "@BridgekeyWallet",
    title: "BridgeKey Features — Web3 Wallet with DeFi, NFT & Hardware Support",
    description: "One wallet. Every feature you need. Multi-chain, Web3 browser, NFT management, hardware wallet support, smart accounts — all in BridgeKey.",
    images: [
      {
        url: "https://bridgekey.io/assets/og-features.png",
        alt: "BridgeKey Wallet Features — Web3, DeFi, NFT & Multi-Chain",
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

export default function FeaturesPage() {
  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "BridgeKey Wallet Features",
    "url": "https://bridgekey.io/features",
    "description": "Explore BridgeKey's crypto wallet features including Web3 browser, NFT management, hardware wallet support, and 95+ chain compatibility.",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "BridgeKey Wallet",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "ANDROID",
      "url": "https://bridgekey.io",
      "downloadUrl": "https://play.google.com/store/apps/details?id=com.bridgekey",
      "featureList": [
        "Non-custodial self-custody wallet",
        "Multi-chain support — 95+ EVM chains",
        "MST Blockchain native support",
        "Built-in Web3 browser for dApps",
        "NFT and digital asset management",
        "Hardware wallet compatibility — Ledger, Keystone, Ngrave Zero",
        "Smart account support",
        "Multi-account management",
        "Custom RPC network support",
        "Biometric authentication",
        "Transaction history and wallet insights",
        "ERC-20 token management",
        "QR code send and receive",
        "Testnet connectivity for developers"
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
        "name": "Features",
        "item": "https://bridgekey.io/features"
      }
    ]
  };

  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does BridgeKey support NFTs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BridgeKey allows you to store, view, and manage NFTs and other digital assets alongside your cryptocurrencies in one wallet."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use BridgeKey with a hardware wallet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BridgeKey supports Ledger, Keystone, and Ngrave Zero hardware wallets for enhanced security of your digital assets."
        }
      },
      {
        "@type": "Question",
        "name": "Does BridgeKey have a built-in Web3 browser?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BridgeKey includes a built-in Web3 browser that lets you explore decentralized applications directly from your wallet without switching apps."
        }
      },
      {
        "@type": "Question",
        "name": "Can I manage multiple wallet accounts in BridgeKey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can create and manage multiple wallet accounts within a single BridgeKey app, making it easy to organize different portfolios."
        }
      },
      {
        "@type": "Question",
        "name": "Does BridgeKey support smart accounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BridgeKey supports Smart Accounts on supported networks, unlocking next-generation wallet functionality for a more flexible Web3 experience."
        }
      }
    ]
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "BridgeKey Wallet Features — Web3, DeFi, NFT & Multi-Chain Support",
    "url": "https://bridgekey.io/features",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".feature-description"]
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

      <div style={{ paddingTop: '150px', minHeight: '100vh' }}>
        {/* Intro Section */}
        <section className="features-intro" style={{ paddingBottom: '60px' }}>
          <div className="container">
            <div className="reveal">
              <div className="section-eyebrow">
                <span className="num">01 / Features</span>
              </div>
            </div>
            <h1 className="section-title reveal" data-delay="1" style={{ maxWidth: '800px' }}>
              Powerful Features for the Modern <em>Web3</em> User
            </h1>
            <p className="section-sub reveal" data-delay="2" style={{ maxWidth: '650px' }}>
              BridgeKey combines powerful wallet management, seamless blockchain connectivity, and advanced security features to help you confidently manage your digital assets across the Web3 ecosystem.
            </p>
          </div>
        </section>

        {/* Opposite Scroll Parallax Section */}
        <FeaturesScroll />

        {/* Custom CTA Band */}
        <section className="cta-band" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="container">
            <h2 className="reveal">
              Ready to Experience the Future of <em>Web3</em>?
            </h2>
            <p className="reveal" data-delay="1" style={{ maxWidth: '600px', margin: '16px auto 32px auto' }}>
              Secure your digital assets, explore multiple blockchain networks, and connect with the decentralized world through BridgeKey.
            </p>
            <div className="reveal" data-delay="2">
              <a href="https://play.google.com/store/apps/details?id=com.bridgekey" className="playstore-btn" target="_blank" rel="noopener noreferrer">
                <img src="/assets/playstore.png" alt="playstore logo" style={{ height: '28px', width: 'auto' }} />
                <span className="hidden sm:inline">Download BridgeKey and start your Web3 journey today.</span>
                <span className="inline sm:hidden">Download</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollReveal />
    </main>
  );
}
