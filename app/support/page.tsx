'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ParticleNetwork from '@/components/ParticleNetwork';

export default function Support() {
  return (
    <main>
      <CursorGlow />
      <ParticleNetwork />
      <Navbar />
      <div style={{ paddingTop: '150px', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1100px', margin: 'auto', padding: '60px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h1 style={{ fontSize: '56px', margin: 0, color: '#00E5C0' }}>BridgeKey Support</h1>
            <p style={{ color: '#8FA0B6', fontSize: '18px', marginTop: '12px' }}>
              We're here to help you use BridgeKey Wallet safely and effectively.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(12,21,40,.9)',
              border: '1px solid rgba(143,160,182,.15)',
              borderRadius: '24px',
              padding: '40px',
              backdropFilter: 'blur(12px)',
              marginBottom: '24px',
            }}
          >
            <h2 style={{ color: '#FFB830', marginTop: 0, fontSize: '30px' }}>Frequently Asked Questions</h2>

            <h3 style={{ color: '#00E5C0', marginTop: '28px' }}>How do I create a new wallet?</h3>
            <p>
              Open BridgeKey Wallet, select <strong>Create Wallet</strong>, and create a strong password. After logging in, you can choose to securely back up your Recovery Phrase from the wallet settings.
            </p>

            <h3 style={{ color: '#00E5C0', marginTop: '28px' }}>How do I import an existing wallet?</h3>
            <p>
              Select <strong>Import Wallet</strong> and enter your Secret Recovery Phrase or supported private key. Never share this information with anyone.
            </p>

            <h3 style={{ color: '#00E5C0', marginTop: '28px' }}>I forgot my wallet password.</h3>
            <p>
              If you have previously backed up your Recovery Phrase, you can restore your wallet by reinstalling or resetting the wallet and importing it again.
            </p>
            <p>If you have lost both your password and your Recovery Phrase, your wallet cannot be recovered.</p>

            <h3 style={{ color: '#00E5C0', marginTop: '28px' }}>Why can't I see my tokens?</h3>
            <p>
              Verify that you are connected to the correct blockchain network. If necessary, add the token manually using its official contract address.
            </p>

            <h3 style={{ color: '#00E5C0', marginTop: '28px' }}>A transaction is pending.</h3>
            <p>
              Pending transactions are usually caused by blockchain network congestion or low transaction fees. You can monitor the transaction using the transaction hash on the appropriate blockchain explorer.
            </p>

            <h3 style={{ color: '#00E5C0', marginTop: '28px' }}>How do I connect to a dApp?</h3>
            <p>
              Visit the supported decentralized application, click <strong>Connect Wallet</strong>, choose BridgeKey Wallet, and approve the connection request within the extension.
            </p>

            <h3 style={{ color: '#00E5C0', marginTop: '28px' }}>How do I report a bug?</h3>
            <p>Please include:</p>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Browser version</li>
              <li>BridgeKey Wallet version</li>
              <li>Operating system</li>
              <li>Screenshots (if applicable)</li>
              <li>Steps to reproduce the issue</li>
            </ul>
          </div>

          <div
            style={{
              background: 'rgba(12,21,40,.9)',
              border: '1px solid rgba(143,160,182,.15)',
              borderRadius: '24px',
              padding: '40px',
              backdropFilter: 'blur(12px)',
              marginBottom: '24px',
            }}
          >
            <h2 style={{ color: '#FFB830', marginTop: 0, fontSize: '30px' }}>Security Tips</h2>

            <div
              style={{
                borderLeft: '4px solid #00E5C0',
                paddingLeft: '18px',
                margin: '12px 0',
              }}
            >
              Never share your Secret Recovery Phrase.
            </div>
            <div
              style={{
                borderLeft: '4px solid #00E5C0',
                paddingLeft: '18px',
                margin: '12px 0',
              }}
            >
              BridgeKey will never ask for your recovery phrase or password.
            </div>
            <div
              style={{
                borderLeft: '4px solid #00E5C0',
                paddingLeft: '18px',
                margin: '12px 0',
              }}
            >
              Always verify website URLs before connecting your wallet.
            </div>
            <div
              style={{
                borderLeft: '4px solid #00E5C0',
                paddingLeft: '18px',
                margin: '12px 0',
              }}
            >
              Keep your browser and extension updated.
            </div>
            <div
              style={{
                borderLeft: '4px solid #00E5C0',
                paddingLeft: '18px',
                margin: '12px 0',
              }}
            >
              Use a strong, unique password.
            </div>
          </div>

          <div
            style={{
              background: 'rgba(12,21,40,.9)',
              border: '1px solid rgba(143,160,182,.15)',
              borderRadius: '24px',
              padding: '40px',
              backdropFilter: 'blur(12px)',
              textAlign: 'center',
              marginBottom: '24px',
            }}
          >
            <h2 style={{ color: '#FFB830', marginTop: 0, fontSize: '30px' }}>Contact Support</h2>
            <p>For assistance, please contact the BridgeKey support team.</p>

            <p>
              <strong>Email:</strong>
              <br />
              <a href="mailto:support@bridgekey.io" style={{ color: '#00E5C0', textDecoration: 'none' }}>
                support@bridgekey.io
              </a>
            </p>

            <p>
              <strong>Website:</strong>
              <br />
              <a href="https://bridgekey.io" style={{ color: '#00E5C0', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
                https://bridgekey.io
              </a>
            </p>

            <p>We aim to respond to support requests as quickly as possible.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
