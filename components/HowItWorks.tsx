'use client';

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <div className="reveal">
          <div className="section-eyebrow">
            <span className="num">03 / Flow</span>
          </div>
        </div>
        <h2 className="section-title reveal" data-delay="1">
          How to Set Up Your BridgeKey Crypto Wallet — <br />
          <em>3 Simple Steps</em>
        </h2>
        <p className="section-sub reveal" data-delay="2">
          No paperwork. No KYC theater. Just a key, a chain, and a confirmation.
        </p>

        <div className="steps">
          <div className="step reveal" data-delay="1">
            <div className="step-num">
              <span>01</span>
            </div>
            <h3>Create.</h3>
            <p>Generate your sovereign key in under a minute. Backed up via your trusted devices never a server.</p>
            <div className="code">→ create_key()</div>
          </div>
          <div className="step reveal" data-delay="2">
            <div className="step-num">
              <span>02</span>
            </div>
            <h3>Connect.</h3>
            <p>Link to MST and 70 other supported chains in one move. Permissions live on your terms, not the dApp's.</p>
            <div className="code">→ connect(mst, eth, sol)</div>
          </div>
          <div className="step reveal" data-delay="3">
            <div className="step-num">
              <span>03</span>
            </div>
            <h3>Transact.</h3>
            <p>Send, swap, sign, and stake from a single surface. Gas auto‑sourced. Receipts that read like a sentence.</p>
            <div className="code">→ sign &amp; broadcast ✓</div>
          </div>
        </div>
      </div>
    </section>
  );
}
