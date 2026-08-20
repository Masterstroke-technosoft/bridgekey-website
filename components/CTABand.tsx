'use client';

export default function CTABand() {
  return (
    <section className="cta-band" id="get">
      <div className="container">
        <h2 className="reveal">
          Ready to Manage Your Crypto? <br />
          Download BridgeKey — <em>India&apos;s Best Web3 Wallet</em>
        </h2>
        <p className="reveal" data-delay="1">
          Join the crypto Wallet BridgeKey community and secure and manage your assets today
        </p>
        <div className="reveal" data-delay="2">
          <a href="https://play.google.com/store/apps/details?id=com.bridgekey" className="playstore-btn" target="_blank" rel="noopener noreferrer">
            <img src="/assets/playstore.png" alt="playstore logo" style={{ height: '28px', width: 'auto' }} />
            Download Bridgekey
          </a>
        </div>
      </div>
    </section>
  );
}
