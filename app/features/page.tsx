import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ParticleNetwork from '@/components/ParticleNetwork';
import ScrollReveal from '@/components/ScrollReveal';
import FeaturesScroll from '@/components/FeaturesScroll';

export const metadata: Metadata = {
  title: 'BridgeKey Wallet Features — Web3 & DeFi Enabled',
  description: 'Explore the powerful non-custodial features of BridgeKey Wallet. Manage accounts, send and receive crypto, interact with Web3 dApps, and switch blockchain networks seamlessly.',
};

export default function FeaturesPage() {
  return (
    <main>
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
            <h2 className="section-title reveal" data-delay="1" style={{ maxWidth: '800px' }}>
              Powerful Features for the Modern <em>Web3</em> User
            </h2>
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
