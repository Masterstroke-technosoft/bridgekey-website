import type { Metadata, Viewport } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Showcase from '@/components/Showcase';
import Features from '@/components/Features';
import MSTChain from '@/components/MSTChain';
import HowItWorks from '@/components/HowItWorks';
import Security from '@/components/Security';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ParticleNetwork from '@/components/ParticleNetwork';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: "BridgeKey — Crypto Wallet India | MST Blockchain & 95+ EVM Chains",
  description: "Download BridgeKey — India's non-custodial crypto wallet for MST Blockchain and 95+ EVM chains. Send, swap & sign Bitcoin, Ethereum & more. 20K+ downloads. 4.8★ on Google Play.",
  keywords: "crypto wallet India, non-custodial crypto wallet, MST blockchain wallet, Web3 wallet India, multi-chain wallet India, BridgeKey download, self-custody wallet India",
  alternates: {
    canonical: "https://bridgekey.io/",
    languages: {
      "en-IN": "https://bridgekey.io/",
      "en": "https://bridgekey.io/",
      "x-default": "https://bridgekey.io/",
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
    type: "website",
    siteName: "BridgeKey",
    title: "BridgeKey — India's Non-Custodial Crypto Wallet",
    description: "Manage MST, Bitcoin, Ethereum & 95+ chains. Self-custody. 20K+ downloads. 4.8★. Built in India for the world.",
    url: "https://bridgekey.io/",
    locale: "en_IN",
    images: [
      {
        url: "https://bridgekey.io/assets/og-home.png",
        width: 1200,
        height: 630,
        alt: "BridgeKey — India's Non-Custodial Crypto Wallet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BridgekeyWallet",
    creator: "@BridgekeyWallet",
    title: "BridgeKey — India's Non-Custodial Crypto Wallet",
    description: "Manage MST, Bitcoin, Ethereum & 95+ chains. Self-custody. 20K+ downloads. 4.8★. Built in India for the world.",
    images: [
      {
        url: "https://bridgekey.io/assets/og-home.png",
        alt: "BridgeKey — India's Non-Custodial Crypto Wallet",
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
    "google-play-app": "app-id=com.bridgekey",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export default function Home() {
  const mobileApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "BridgeKey Wallet",
    "operatingSystem": "ANDROID",
    "applicationCategory": "FinanceApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1239"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "url": "https://bridgekey.io",
    "downloadUrl": "https://play.google.com/store/apps/details?id=com.bridgekey",
    "description": "Non-custodial multi-chain crypto wallet built natively for MST Blockchain and compatible with 95+ EVM chains including Ethereum, BNB Chain, and Polygon.",
    "screenshot": "https://bridgekey.io/assets/BridgekeyBig.png",
    "featureList": [
      "Non-custodial self-custody",
      "MST Blockchain native support",
      "95+ EVM chain support",
      "Biometric authentication",
      "Built-in Web3 browser",
      "NFT management",
      "Hardware wallet support"
    ]
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
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
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BridgeKey",
    "url": "https://bridgekey.io",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bridgekey.io/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is BridgeKey Wallet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BridgeKey is a non-custodial crypto wallet built natively for MST Blockchain and compatible with 95+ EVM chains including Ethereum, BNB Chain, and Polygon. It is available free on Android."
        }
      },
      {
        "@type": "Question",
        "name": "Is BridgeKey safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. BridgeKey is non-custodial — your private keys never leave your device. BridgeKey cannot access, freeze, or transfer your funds under any circumstances."
        }
      },
      {
        "@type": "Question",
        "name": "Which blockchains does BridgeKey support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BridgeKey supports MST Blockchain, Ethereum, BNB Smart Chain, Polygon, Base, Arbitrum, OP Mainnet, Linea, and 95+ EVM-compatible networks. Custom RPC networks can also be added."
        }
      },
      {
        "@type": "Question",
        "name": "How do I download BridgeKey?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BridgeKey is available on the Google Play Store. Search for BridgeKey Wallet or visit https://play.google.com/store/apps/details?id=com.bridgekey to download it free."
        }
      },
      {
        "@type": "Question",
        "name": "Is BridgeKey available on iOS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BridgeKey is currently available on Android. iOS support is coming soon."
        }
      },
      {
        "@type": "Question",
        "name": "Does BridgeKey require KYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. BridgeKey requires no KYC or identity verification. Simply download the app, create a wallet, and start using it immediately."
        }
      }
    ]
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "BridgeKey — Crypto Wallet India | MST Blockchain & 95+ EVM Chains",
    "url": "https://bridgekey.io/",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-description", ".page-description"]
    }
  };

  return (
    <main>
      <meta httpEquiv="content-language" content="en-IN" />
      <link rel="alternate" href="android-app://com.bridgekey/https/bridgekey.io/" />
      <link rel="preload" as="image" href="/assets/BridgekeyBig.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://play.google.com" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mobileApplicationJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c'),
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
      <Hero />
      <Showcase />
      <Features />
      <MSTChain />
      <HowItWorks />
      <Security />
      <CTABand />
      <Footer />
      <ScrollReveal />
    </main>
  );
}
