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
  title: "BridgeKey — Non-Custodial Crypto Wallet | 95+ EVM Chains | No KYC",
  description: "Download BridgeKey — non-custodial crypto wallet for 95+ EVM chains. Biometric login. No KYC. Web3 browser. Send, swap & sign Bitcoin, Ethereum & more. 4.8★",
  keywords: "non-custodial crypto wallet, self-custody wallet, EVM crypto wallet, multi-chain crypto wallet, crypto wallet no KYC, Web3 wallet, biometric crypto wallet, MST blockchain wallet, BridgeKey download",
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
    title: "BridgeKey — Non-Custodial Crypto Wallet | 95+ Chains | No KYC",
    description: "Non-custodial. 95+ chains. No KYC. Biometric login. Web3 browser. 20K+ downloads. 4.8★ on Google Play.",
    url: "https://bridgekey.io/",
    locale: "en_IN",
    images: [
      {
        url: "https://bridgekey.io/assets/og-home.png",
        width: 1200,
        height: 630,
        alt: "BridgeKey — Non-Custodial Crypto Wallet for 95+ EVM Chains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@BridgekeyWallet",
    creator: "@BridgekeyWallet",
    title: "BridgeKey — Non-Custodial Crypto Wallet | 95+ Chains | No KYC",
    description: "Non-custodial. 95+ chains. No KYC. Biometric login. Web3 browser. 4.8★ on Google Play.",
    images: [
      {
        url: "https://bridgekey.io/assets/og-home.png",
        alt: "BridgeKey — Non-Custodial Crypto Wallet for 95+ EVM Chains",
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
    "name": "BridgeKey Crypto Wallet",
    "operatingSystem": "Android",
    "applicationCategory": "FinanceApplication",
    "description": "Non-custodial crypto wallet — 95+ chains, MST Blockchain, biometric, no KYC.",
    "downloadUrl": "https://play.google.com/store/apps/details?id=com.bridgekey",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "5000",
      "bestRating": "5"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "featureList": ["Non-custodial","95+ chains","Biometric login","Web3 browser","Hardware wallet","Smart accounts","No KYC"]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BridgeKey",
    "url": "https://bridgekey.io",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://bridgekey.io/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
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
          "text": "BridgeKey is a non-custodial crypto wallet for Android supporting 95+ blockchain networks including Bitcoin, Ethereum, MST Chain, Polygon and BNB Chain. Features: biometric login, Web3 browser, hardware wallet support."
        }
      },
      {
        "@type": "Question",
        "name": "Is BridgeKey non-custodial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Your private keys are stored only on your device. BridgeKey's servers never access your wallet credentials or assets."
        }
      },
      {
        "@type": "Question",
        "name": "What blockchains does BridgeKey support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "95+ networks: MST Blockchain, Bitcoin, Ethereum, BNB Smart Chain, Polygon, Base, Arbitrum, OP Mainnet, Linea and all EVM chains. Custom RPC networks can also be added."
        }
      },
      {
        "@type": "Question",
        "name": "Does BridgeKey require KYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. No KYC, no email, no personal information. Create a wallet in under a minute with complete privacy."
        }
      },
      {
        "@type": "Question",
        "name": "What is MST Blockchain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MST Blockchain is a sovereign Layer-1 blockchain with 3-second block time, 73,000+ validators and fees of 0.001 MSTC. BridgeKey is the official native wallet for the MST Blockchain ecosystem."
        }
      }
    ]
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "BridgeKey — Non-Custodial Crypto Wallet | 95+ EVM Chains | No KYC",
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

      {/* FAQ Section */}
      <section id="faq" className="faq py-20 border-t border-[var(--line)]">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
              <span className="num">05 / FAQ</span>
            </div>
            <h2 className="section-title" style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
              Frequently Asked <em>Questions</em>
            </h2>
          </div>

          <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: "What is BridgeKey?",
                a: "BridgeKey is a non-custodial crypto wallet app for Android supporting 95+ blockchain networks including Bitcoin, Ethereum, MST Chain, Polygon and BNB Chain."
              },
              {
                q: "Is BridgeKey non-custodial?",
                a: "Yes. Your private keys and Secret Recovery Phrase are stored only on your device. BridgeKey&apos;s servers never access your wallet credentials or crypto assets."
              },
              {
                q: "What blockchains does BridgeKey support?",
                a: "BridgeKey supports 95+ networks: MST Blockchain, Bitcoin, Ethereum, BNB Smart Chain, Polygon, Base, Arbitrum, OP Mainnet, Linea and all EVM-compatible chains."
              },
              {
                q: "Does BridgeKey require KYC?",
                a: "No. No KYC, no email, no personal information required."
              },
              {
                q: "What is MST Blockchain?",
                a: "MST Blockchain is a sovereign Layer-1 blockchain with 3-second block time, 73,000+ validators and fees of 0.001 MSTC. BridgeKey is the official native wallet."
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

      <CTABand />
      <Footer />
      <ScrollReveal />
    </main>
  );
}
