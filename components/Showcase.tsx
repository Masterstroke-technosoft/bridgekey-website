'use client';

export default function Showcase() {
  return (
    <section className="showcase" id="showcase">
      <div className="container">
        <div className="showcase-grid">
          <div className="sc-copy">
            <div className="reveal">
              <div className="sc-eyebrow">A device · A Wallet · A network</div>
            </div>
            <h2 className="sc-title reveal" data-delay="1">
              Hold every <em>EVM chain</em>, every
              <br />
              token, in one pocket.
            </h2>
            <p className="sc-sub reveal" data-delay="2">
              Your assets, your addresses, your signatures managed from a single surface. Tap to send. Scan to receive. Sign with a glance.
            </p>

            <div className="chain-stats reveal" data-delay="3">
              <div className="stat-card">
                <div className="lbl" style={{ color: 'white' }}>
                  <span>Playstore Ratings</span>
                  <svg className="ic" viewBox="0 0 16 16" fill="none">
                    <path d="M4 14V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v10M2 14h11M11 7l2 1v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1V6l-2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="num">
                  <span className="pre"></span>4.8 ★
                </div>
                <svg className="spark" viewBox="0 0 200 28" preserveAspectRatio="none">
                  <path d="M0 16 L20 12 L40 18 L60 10 L80 14 L100 8 L120 12 L140 6 L160 10 L180 4 L200 8" />
                </svg>
              </div>

              <div className="stat-card violet">
                <div className="lbl" style={{ color: 'white' }}>
                  <span>Total Downloads</span>
                  <svg className="ic" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M8 4v4l2.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="num">
                  20K<span className="unit">+</span>
                </div>
                <svg className="spark" viewBox="0 0 200 28" preserveAspectRatio="none">
                  <path d="M0 14 L20 10 L40 16 L60 12 L80 8 L100 14 L120 10 L140 12 L160 8 L180 14 L200 10" />
                </svg>
              </div>

              <div className="stat-card gold">
                <div className="lbl" style={{ color: 'white' }}>
                  <span>Network Support</span>
                  <svg className="ic" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.5 L13 4 V9 C13 11.5 11 13.5 8 14.5 C5 13.5 3 11.5 3 9 V4 Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    <path d="M6 8 L7.5 9.5 L10 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="num">
                  95+ <span className="chain" style={{ fontSize: 'medium' }}>chains</span>
                </div>
                <svg className="spark" viewBox="0 0 200 28" preserveAspectRatio="none">
                  <path d="M0 22 L20 20 L40 18 L60 16 L80 14 L100 12 L120 11 L140 9 L160 8 L180 6 L200 4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="sc-stage" style={{ position: 'relative' }}>
            <svg className="conn-lines" viewBox="0 0 400 600" preserveAspectRatio="none">
              <path d="M 20 60 Q 120 100 200 200" />
              <path d="M 380 220 Q 280 260 200 300" />
              <path d="M 30 480 Q 130 460 200 380" />
            </svg>

            <div className="coin-chip c1" title="MST">
              <img src="/assets/1.png" alt="MST" style={{ height: '40px', width: '40px' }} />
            </div>
            <div className="coin-chip c2" title="ETH">
              Ξ
            </div>
            <div className="coin-chip c3" title="USDC">
              $
            </div>

            <div className="tx-ping">
              <span className="tic">↓</span>
              <div className="meta">
                <span className="am">+12.40 MSTC</span>
                <small>from 0x9c2e…4af3</small>
              </div>
            </div>

            <div className="qr-card">
              <div className="lbl">Download</div>
              <img src="/assets/BridgekeyDownloadQR.png" height="40px" width="100px" alt="QR Code" />
            </div>

            <div className="device">
              <img className="app-screenshot" src="/assets/BridgekeyBig.png" alt="BridgeKey app screenshot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
