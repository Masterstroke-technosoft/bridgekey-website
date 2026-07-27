'use client';

export default function Footer() {
  return (
    <footer>
      <div className="container" style={{ padding: '0' }}>
        <div className="foot-top">
          <div className="foot-brand">
            <div className="brand">
              <span className="mark"></span>
              BridgeKey
            </div>
            <p className="tagline-foot">Your key. Your chain. Your future.
              <br /> Built in India, made for everywhere.</p>
          </div>
          <div className="wrapper">
            <div className="foot-col">
              <h5>Product</h5>
              <ul>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#mst">MST Chain</a>
                </li>
                <li>
                  <a href="#how">How It Works</a>
                </li>
                <li>
                  <a href="#security">Security</a>
                </li>
              </ul>
            </div>
            <div className="foot-col">
              <h5 className="bottom">Chain</h5>
              <ul>
                <li>
                  <a href="https://mstblockchain.com/" target="_blank" rel="noopener noreferrer">
                    MST L1
                  </a>
                </li>
                <li>
                  <a href="https://mstblockchain.com/portal" target="_blank" rel="noopener noreferrer">
                    Validators
                  </a>
                </li>
                <li>
                  <a href="https://mstscan.com/" target="_blank" rel="noopener noreferrer">
                    Explorer
                  </a>
                </li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Legal</h5>
              <ul>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms">Terms & Conditions</a>
                </li>
                <li>
                  <a href="/support">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="signature">© 2026 BridgeKey· <em>Crypto Wallet</em></div>
          <div className="socials">
            <a href="https://x.com/BridgekeyWallet" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M18.901 2H21.98l-6.73 7.692L23.5 22h-6.46l-5.06-6.615L6.2 22H3.12l7.2-8.23L.5 2h6.62l4.58 6.05L18.9 2zm-1.13 18h1.8L6.15 3.9H4.22L17.77 20z" fill="currentColor" />
              </svg>
            </a>

            <a href="https://t.me/s/mstblockchain" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 3L2.8 10.4c-1.3.5-1.3 1.2-.2 1.5l4.9 1.5 1.9 5.9c.2.7.1 1 .9 1l2.8-2.7 5.8 4.3c1.1.6 1.8.3 2.1-1L24 4.5C24.4 2.8 23.4 2 22 3zM8.3 12.9l10.9-6.9c.5-.3.9-.1.5.2l-9 8.1-.3 3.3-2.1-4.7z" fill="currentColor" />
              </svg>
            </a>

            <a href="https://www.instagram.com/bridgekeywallet/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M11.5 1.5h-7A3 3 0 0 0 1.5 4.5v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm1.5 10a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7z" fill="currentColor" />
                <path d="M8 4.5A3.5 3.5 0 1 0 8 11.5 3.5 3.5 0 1 0 8 4.5zm0 5.5A2 2 0 1 1 8 6a2 2 0 0 1 0 4z" fill="currentColor" />
                <circle cx="12" cy="4" r="0.8" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
