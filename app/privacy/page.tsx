'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';
import ParticleNetwork from '@/components/ParticleNetwork';

export default function PrivacyPolicy() {
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
            <h1 style={{ color: '#00E5C0', margin: 0, fontSize: '48px' }}>Privacy Policy</h1>
            <div
              style={{
                color: '#FFB830',
                margin: '12px 0 32px',
                fontFamily: 'monospace',
              }}
            >
              Effective Date: July 2026
            </div>

            <p>
              Welcome to BridgeKey Wallet (&quot;BridgeKey&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). Your privacy and security are important to us. This Privacy Policy explains how BridgeKey Wallet collects, uses, and protects information when you use our browser extension and related services.
            </p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>1. About BridgeKey Wallet</h2>
            <p>
              BridgeKey Wallet is a non-custodial Web3 wallet that enables users to securely manage digital assets, interact with decentralized applications (dApps), and access blockchain networks.
            </p>
            <p>
              As a non-custodial wallet, BridgeKey does not have access to your private keys, wallet password, or any recovery phrase that you choose to generate and back up within the application.
            </p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>2. Information We Collect</h2>
            <p>
              <b>Information Stored Locally:</b>
            </p>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Encrypted wallet data</li>
              <li>Wallet preferences</li>
              <li>Selected blockchain network</li>
              <li>Custom token information</li>
              <li>Extension settings</li>
            </ul>
            <p>This information remains on your device unless you choose to export or back it up.</p>
            <p>
              <b>Information We Do Not Collect:</b>
            </p>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Your wallet password</li>
              <li>Any recovery phrase or backup phrase generated or stored by you within the wallet</li>
              <li>Your private keys</li>
              <li>Personal identity information unless voluntarily provided</li>
              <li>Your cryptocurrency balances on our servers</li>
            </ul>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>3. Blockchain Information</h2>
            <p>
              Transactions performed using BridgeKey are recorded on public blockchain networks. Blockchain information such as wallet addresses, transaction hashes, balances, and smart contract interactions is publicly accessible and is not controlled by BridgeKey.
            </p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>4. Analytics</h2>
            <p>
              BridgeKey may collect limited anonymous usage information to improve performance and user experience, including extension version, browser type, operating system, and anonymous crash reports. This information cannot be used to identify individual users.
            </p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>5. Permissions Used</h2>
            <p>BridgeKey uses browser permissions solely to deliver essential wallet features, including:</p>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Local storage</li>
              <li>Notifications (where supported)</li>
              <li>Active browser tab access during wallet interactions</li>
              <li>Access to approved websites for dApp connectivity</li>
            </ul>
            <p>Permissions are used solely to provide wallet functionality.</p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>6. Security</h2>
            <p>We use industry-standard security practices including:</p>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Local encryption</li>
              <li>Password-protected access</li>
              <li>Automatic wallet locking</li>
              <li>HTTPS communication</li>
            </ul>
            <p>
              If you choose to back up your Recovery Phrase, you are solely responsible for storing it securely. BridgeKey cannot recover, access, or reset your Recovery Phrase or private keys.
            </p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>7. Third-Party Services</h2>
            <p>
              BridgeKey may connect to blockchain nodes, RPC providers, block explorers, and decentralized applications. These services operate independently and are governed by their own privacy policies.
            </p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>8. Children&apos;s Privacy</h2>
            <p>BridgeKey is not intended for individuals under the age of 18.</p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Continued use of BridgeKey after changes become effective constitutes acceptance of the updated policy.</p>

            <h2 style={{ color: '#00E5C0', marginTop: '36px' }}>10. Contact Us</h2>
            <p>If you have questions regarding this Privacy Policy, please contact us through the BridgeKey Support page.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
