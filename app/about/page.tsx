import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ParticleNetwork from '@/components/ParticleNetwork';
import ScrollReveal from '@/components/ScrollReveal';
import FeatureCard from '@/components/FeatureCard';
import CTABand from '@/components/CTABand';
import WhyChooseScroll from '@/components/WhyChooseScroll';

export const metadata: Metadata = {
  title: 'About BridgeKey — Secure Web3 Wallet',
  description: 'Learn about BridgeKey, a secure non-custodial Web3 wallet built for MST Blockchain. Manage digital assets, explore DeFi, and access multiple blockchain networks with ease.',
};

export default function AboutPage() {
  return (
    <main>
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
            <h2 className="section-title reveal" data-delay="1" style={{ maxWidth: '900px' }}>
              Your Gateway to Secure and Seamless <em>Web3</em> Access
            </h2>
            <div className="reveal" data-delay="2" style={{ marginTop: '32px', maxWidth: '800px' }}>
              <p style={{ color: 'var(--ink-dim)', fontSize: '18px', lineHeight: '1.7' }}>
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
                BridgeKey is designed as the primary wallet solution for the MST Blockchain ecosystem, providing users with direct access to a high-performance Layer 1 blockchain network. By combining MST Blockchain's scalable infrastructure with BridgeKey's secure wallet technology, users can experience faster transactions, low network fees, and efficient interaction with blockchain applications. BridgeKey helps unlock the potential of MST Blockchain by providing a reliable and accessible platform for managing MSTC tokens, digital assets, and Web3 transactions.
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