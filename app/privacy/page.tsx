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
        <div style={{ maxWidth: '900px', margin: 'auto', padding: '40px' }}>
          <div
            style={{
              border: '1px solid #1f3147',
              padding: '28px',
              borderRadius: '18px',
              background: '#070F1F',
            }}
          >
            <h1 style={{ color: '#00E5C0' }}>Privacy Policy</h1>
            <small style={{ color: '#8FA0B6' }}>Effective Date: July, 2026</small>

            <p>
              Welcome to BridgeKey Wallet ("BridgeKey", "we", "our", or "us"). Your privacy and security are important to us. This Privacy Policy explains how BridgeKey Wallet collects, uses, and protects information when you use our browser extension and related services.
            </p>

            <h2 style={{ color: '#00E5C0' }}>1. About BridgeKey Wallet</h2>
            <p>
              BridgeKey Wallet is a non-custodial Web3 wallet that enables users to securely manage digital assets, interact with decentralized applications (dApps), and access blockchain networks.
            </p>
            <p>
              As a non-custodial wallet, BridgeKey does not have access to your private keys, wallet password, or any recovery phrase that you choose to generate and back up within the application.
            </p>

            <h2 style={{ color: '#00E5C0' }}>2. Information We Collect</h2>
            <p>
              <b>Information Stored Locally</b>
              <br />
              Encrypted wallet data
              <br />
              Wallet preferences
              <br />
              Selected blockchain network
              <br />
              Custom token information
              <br />
              Extension settings
            </p>
            <p>This information remains on your device unless you choose to export or back it up.</p>
            <p>
              <b>Information We Do Not Collect</b>
              <br />
              Your wallet password
              <br />
              Any recovery phrase or backup phrase generated or stored by you within the wallet
              <br />
              Your private keys
              <br />
              Personal identity information unless voluntarily provided
              <br />
              Your cryptocurrency balances on our servers
            </p>

            <h2 style={{ color: '#00E5C0' }}>3. Blockchain Information</h2>
            <p>
              Transactions performed using BridgeKey are recorded on public blockchain networks. Blockchain information such as wallet addresses, transaction hashes, balances, and smart contract interactions is publicly accessible and is not controlled by BridgeKey.
            </p>

            <h2 style={{ color: '#00E5C0' }}>4. Analytics</h2>
            <p>
              BridgeKey may collect limited anonymous usage information to improve performance and user experience, including extension version, browser type, operating system, and anonymous crash reports. This information cannot be used to identify individual users.
            </p>

            <h2 style={{ color: '#00E5C0' }}>5. Permissions Used</h2>
            <p>
              Local storage, notifications (where supported), active browser tab access during wallet interactions, and access to approved websites for dApp connectivity. Permissions are used solely to provide wallet functionality.
            </p>

            <h2 style={{ color: '#00E5C0' }}>6. Security</h2>
            <p>
              We use industry-standard security practices including local encryption, password-protected access, automatic wallet locking, and HTTPS communication. If you choose to back up your Recovery Phrase, you are solely responsible for storing it securely. BridgeKey cannot recover, access, or reset your Recovery Phrase or private keys.
            </p>

            <h2 style={{ color: '#00E5C0' }}>7. Third-Party Services</h2>
            <p>
              BridgeKey may connect to blockchain nodes, RPC providers, block explorers, and decentralized applications. These services operate independently and are governed by their own privacy policies.
            </p>

            <h2 style={{ color: '#00E5C0' }}>8. Children's Privacy</h2>
            <p>BridgeKey is not intended for individuals under the age of 18.</p>

            <h2 style={{ color: '#00E5C0' }}>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Continued use of BridgeKey after changes become effective constitutes acceptance of the updated policy.</p>

            <h2 style={{ color: '#00E5C0' }}>10. Contact Us</h2>
            <p>If you have questions regarding this Privacy Policy, please contact us through the BridgeKey Support page.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
