'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ParticleNetwork from '@/components/ParticleNetwork';

export default function TermsAndConditions() {
  return (
    <main>
      <CursorGlow />
      <ParticleNetwork />
      <Navbar />
      <div style={{ paddingTop: '150px', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1000px', margin: 'auto', padding: '60px 24px' }}>
          <div
            style={{
              background: 'rgba(7,15,31,.92)',
              border: '1px solid rgba(143,160,182,.15)',
              borderRadius: '24px',
              padding: '48px',
              backdropFilter: 'blur(12px)',
            }}
          >
            <h1 style={{ color: '#00E5C0', margin: 0, fontSize: '48px' }}>Terms & Conditions</h1>
            <div
              style={{
                color: '#FFB830',
                margin: '12px 0 32px',
                fontFamily: 'monospace',
              }}
            >
              Effective Date: July 2026
            </div>

            <p>These Terms & Conditions govern your use of BridgeKey Wallet and related services. By installing or using BridgeKey Wallet, you agree to these Terms.</p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>1. Eligibility</h2>
            <p>You must be at least 18 years old and legally capable of entering into binding agreements.</p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>2. Non-Custodial Wallet</h2>
            <p>BridgeKey is a non-custodial wallet.</p>
            <p>You are solely responsible for:</p>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Any Recovery Phrase that you choose to generate and back up</li>
              <li>Your private keys</li>
              <li>Your wallet password</li>
              <li>All transactions initiated from your wallet</li>
            </ul>
            <p>BridgeKey cannot recover lost passwords, recovery phrases, or private keys.</p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>3. User Responsibilities</h2>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Keep your wallet credentials secure.</li>
              <li>Verify wallet addresses before sending assets.</li>
              <li>Use BridgeKey in compliance with applicable laws.</li>
              <li>Protect your device from unauthorized access.</li>
            </ul>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>4. Digital Asset Risks</h2>
            <p>Blockchain technology involves inherent risks, including:</p>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Price volatility</li>
              <li>Network congestion</li>
              <li>Smart contract vulnerabilities</li>
              <li>Irreversible transactions</li>
              <li>Loss of digital assets due to user error</li>
            </ul>
            <p>You acknowledge these risks before using BridgeKey.</p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>5. No Financial Advice</h2>
            <p>BridgeKey does not provide:</p>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Investment advice</li>
              <li>Financial advice</li>
              <li>Tax advice</li>
              <li>Legal advice</li>
            </ul>
            <p>All decisions regarding digital assets are your own responsibility.</p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>6. Third-Party Services</h2>
            <p>
              BridgeKey may allow interaction with third-party websites, decentralized applications, blockchain networks, and service providers.
            </p>
            <p>We do not control or guarantee the security, availability, or content of third-party services.</p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, BridgeKey shall not be liable for:</p>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Loss of digital assets</li>
              <li>Lost private keys or recovery phrases</li>
              <li>Unauthorized wallet access caused by user negligence</li>
              <li>Blockchain network failures</li>
              <li>Smart contract exploits</li>
              <li>Third-party service failures</li>
            </ul>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>8. Intellectual Property</h2>
            <p>
              The BridgeKey name, logo, branding, software, and related content are the intellectual property of BridgeKey unless otherwise stated.
            </p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>9. Changes to the Service</h2>
            <p>We may modify, improve, suspend, or discontinue features of BridgeKey at any time without prior notice.</p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>10. Changes to These Terms</h2>
            <p>We reserve the right to update these Terms. Continued use of BridgeKey after updates constitutes acceptance of the revised Terms.</p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>11. Contact</h2>
            <p>For questions regarding these Terms, please contact us through the BridgeKey Support page.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
