import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "BridgeKey — Your gateway to on-chain value",
  description: "A non-custodial wallet for the chains, currencies, and communities you actually use.",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BridgeKey",
              "url": "https://bridgekey.io",
              "logo": "https://bridgekey.io/uploads/header-logo.png",
              "description": "India's non-custodial multi-chain crypto wallet on MST Blockchain. 95+ EVM chains.",
              "foundingLocation": { "@type": "Place", "addressCountry": "IN", "addressLocality": "Pune" },
              "knowsAbout": ["Cryptocurrency","Blockchain","Web3","DeFi","Non-Custodial Wallet","MST Blockchain"],
              "sameAs": [
                "https://x.com/BridgekeyWallet",
                "https://www.instagram.com/bridgekeywallet/",
                "https://t.me/s/mstblockchain",
                "https://play.google.com/store/apps/details?id=com.bridgekey"
              ]
            }).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8Q9JW54E1L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8Q9JW54E1L');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
