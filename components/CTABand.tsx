'use client';

export default function CTABand() {
  return (
    <section className="cta-band" id="get">
      <div className="container">
        <h2 className="reveal">
          Ready to Own Your Crypto?  <br />
          Download BridgeKey — <em>Non-Custodial. No KYC. Free.</em>
        </h2>
        <p className="reveal" data-delay="1">
          Join 20,000+ crypto users managing their digital assets with BridgeKey. No KYC. No middleman.
        </p>
        <div className="reveal" data-delay="2">
          <a href="https://play.google.com/store/apps/details?id=com.bridgekey" className="playstore-btn" target="_blank" rel="noopener noreferrer">
            <img src="/assets/playstore.png" alt="playstore logo" style={{ height: '28px', width: 'auto' }} />
            Download BridgeKey
          </a>
        </div>
      </div>
    </section>
  );
}
