'use client';

export default function MSTChain() {
  return (
    <section className="mst" id="mst">
      <div className="container">
        <div className="mst-grid">
          <div className="mst-copy">
            <div className="reveal">
              <div className="section-eyebrow">
                <span className="num">02 / Chain</span>
              </div>
            </div>
            <h2 className="section-title reveal" data-delay="1">
              Built on <em>MST</em> —
              <br />
              India's first Layer‑1.
            </h2>
            <p className="section-sub reveal" data-delay="2">
              More than a billion people. One Sovereign chain. BridgeKey is the first gateway to natively speak MST.
            </p>

            <div className="mst-stats reveal" data-delay="3">
              <div className="stat">
                <div className="num">3.0 s</div>
                <div className="lbl">Average Block Time</div>
              </div>
              <div className="stat">
                <div className="num">73,000 +</div>
                <div className="lbl">Active validators</div>
              </div>
              <div className="stat">
                <div className="num">0.001 MSTC</div>
                <div className="lbl">Average Txn Fees</div>
              </div>
            </div>
          </div>

          <svg viewBox="0 0 800 440" aria-hidden="true">
            <defs>
              <radialGradient id="indiaGlow" cx=".5" cy=".5" r=".5">
                <stop offset="0%" stopColor="#FFB830" stopOpacity=".35" />
                <stop offset="100%" stopColor="#FFB830" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="bridgeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FFB830" />
                <stop offset="100%" stopColor="#00E5C0" />
              </linearGradient>
            </defs>

            <g stroke="rgba(255,184,48,.07)" strokeWidth=".6" strokeDasharray="2 6">
              <line x1="0" y1="220" x2="800" y2="220" />
              <line x1="0" y1="170" x2="800" y2="170" />
              <line x1="0" y1="270" x2="800" y2="270" />
              <line x1="200" y1="0" x2="200" y2="440" />
              <line x1="400" y1="0" x2="400" y2="440" />
              <line x1="600" y1="0" x2="600" y2="440" />
            </g>

            <ellipse cx="600" cy="215" rx="140" ry="65" fill="url(#indiaGlow)" />

            <g className="world-outline">
              <path d="M 50 95 L 95 70 L 155 60 L 215 70 L 245 95 L 250 125 L 235 155 L 200 180 L 165 200 L 140 220 L 115 215 L 90 195 L 65 165 L 50 130 Z" />
              <path d="M 290 60 L 335 58 L 355 85 L 345 115 L 315 122 L 290 100 Z" />
              <path d="M 165 220 L 195 228 L 215 250 L 208 268 L 190 262 L 170 240 Z" />
              <path d="M 205 270 L 240 278 L 258 305 L 262 345 L 245 380 L 220 395 L 198 372 L 192 335 L 192 295 Z" />
              <circle cx="378" cy="128" r="7" />
              <path d="M 395 115 L 445 105 L 475 120 L 480 140 L 460 155 L 425 158 L 400 148 L 388 130 Z" />
              <path d="M 430 75 L 460 65 L 478 85 L 470 110 L 445 110 L 430 95 Z" />
              <path d="M 415 170 L 470 168 L 495 195 L 510 240 L 495 290 L 460 322 L 432 322 L 415 295 L 405 255 L 402 215 L 408 185 Z" />
              <path d="M 525 285 L 535 285 L 537 305 L 530 315 L 522 305 Z" />
              <path d="M 480 100 L 555 85 L 625 90 L 685 105 L 720 125 L 735 152 L 715 170 L 670 180 L 615 184 L 565 180 L 520 175 L 488 158 L 475 130 Z" />
              <path d="M 550 180 L 600 180 L 612 210 L 608 240 L 588 260 L 568 252 L 555 220 Z" />
              <path d="M 632 178 L 668 185 L 672 215 L 668 240 L 648 255 L 632 250 L 625 220 L 625 195 Z" />
              <path d="M 715 145 L 728 152 L 732 168 L 722 182 L 712 172 L 710 158 Z" />
              <path d="M 692 158 L 702 162 L 700 178 L 690 178 Z" />
              <ellipse cx="640" cy="275" rx="28" ry="6" />
              <ellipse cx="688" cy="278" rx="18" ry="5" />
              <ellipse cx="685" cy="290" rx="11" ry="4" />
              <ellipse cx="668" cy="262" rx="8" ry="3.5" />
              <path d="M 680 308 L 740 305 L 762 325 L 750 352 L 708 360 L 680 340 L 668 322 Z" />
              <path d="M 778 348 L 786 360 L 783 372 L 775 362 Z" />
              <path d="M 786 370 L 792 380" stroke="rgba(255,184,48,.55)" strokeWidth="1.5" fill="none" />
            </g>

            <path className="bridge-line" d="M 580 215 Q 620 195 645 222" />

            <circle cx="155" cy="128" r="2.5" fill="var(--gold)" className="city-major" style={{ filter: 'drop-shadow(0 0 5px var(--gold))' }} />
            <circle cx="228" cy="332" r="2.5" fill="var(--gold)" className="city-major" style={{ filter: 'drop-shadow(0 0 5px var(--gold))', animationDelay: '0.4s' }} />
            <circle cx="437" cy="128" r="2.5" fill="var(--teal)" className="city-major" style={{ filter: 'drop-shadow(0 0 5px var(--teal))', animationDelay: '0.8s' }} />
            <circle cx="450" cy="245" r="2.5" fill="var(--gold)" className="city-major" style={{ filter: 'drop-shadow(0 0 5px var(--gold))', animationDelay: '1.2s' }} />
            <circle cx="715" cy="332" r="2.5" fill="var(--teal)" className="city-major" style={{ filter: 'drop-shadow(0 0 5px var(--teal))', animationDelay: '1.6s' }} />

            <path className="bridge-line" d="M 215 112 Q 300 52 395 118" opacity="0.6" style={{ animationDelay: '-0.5s' }} />
            <path className="bridge-line" d="M 183 222 Q 194 248 208 270" opacity="0.6" style={{ animationDelay: '-1.8s' }} />
            <path className="bridge-line" d="M 445 158 Q 440 164 430 170" opacity="0.6" style={{ animationDelay: '-0.9s' }} />
            <path className="bridge-line" d="M 476 126 Q 538 106 608 122" opacity="0.6" style={{ animationDelay: '-2.4s' }} />
            <path className="bridge-line" d="M 410 215 Q 328 268 250 295" opacity="0.6" style={{ animationDelay: '-3.1s' }} />
            <path className="bridge-line" d="M 650 254 Q 666 278 682 306" opacity="0.6" style={{ animationDelay: '-1.4s' }} />
            <path className="bridge-line" d="M 724 156 Q 748 232 743 306" opacity="0.6" style={{ animationDelay: '-2.7s' }} />

            <g className="pune-mark">
              <circle className="ripple" cx="580" cy="215" r="4" style={{ stroke: 'var(--gold)', animation: 'ripple 3s linear infinite' }} />
              <circle className="ripple" cx="580" cy="215" r="4" style={{ stroke: 'var(--gold)', animation: 'ripple 3s linear infinite 1s' }} />
              <circle className="ripple" cx="580" cy="215" r="4" style={{ stroke: 'var(--gold)', animation: 'ripple 3s linear infinite 2s' }} />
              <circle className="city-major" cx="580" cy="215" r="5" fill="var(--gold)" style={{ filter: 'drop-shadow(0 0 8px var(--gold))' }} />
              <circle cx="580" cy="215" r="2.5" fill="#FFEAB0" />
              <line x1="580" y1="215" x2="540" y2="175" stroke="rgba(255,184,48,.4)" strokeWidth=".7" />
              <text className="city-label-big" x="540" y="170" textAnchor="end" fill="var(--gold)">
                PUNE
              </text>
              <text className="coord-label" x="540" y="160" textAnchor="end">
                18.52°N · 73.85°E · IND
              </text>
            </g>

            <g className="vn-mark">
              <circle className="ripple" cx="645" cy="222" r="4" style={{ stroke: 'var(--teal)', animation: 'ripple 3s linear infinite .5s' }} />
              <circle className="ripple" cx="645" cy="222" r="4" style={{ stroke: 'var(--teal)', animation: 'ripple 3s linear infinite 1.5s' }} />
              <circle className="ripple" cx="645" cy="222" r="4" style={{ stroke: 'var(--teal)', animation: 'ripple 3s linear infinite 2.5s' }} />
              <circle className="city-major" cx="645" cy="222" r="5" fill="var(--teal)" style={{ filter: 'drop-shadow(0 0 8px var(--teal))' }} />
              <circle cx="645" cy="222" r="2.5" fill="#A8FFE8" />
              <line x1="645" y1="222" x2="690" y2="262" stroke="rgba(0,229,192,.4)" strokeWidth=".7" />
              <text className="city-label-big" x="694" y="266" fill="var(--teal)">
                VIETNAM
              </text>
              <text className="coord-label" x="694" y="277">
                21.03°N · 105.83°E · VNM
              </text>
            </g>

            <text x="20" y="32" fontFamily="JetBrains Mono" fontSize="9" fill="rgba(255,184,48,.65)" letterSpacing="2.5">
              MST · GLOBAL · L1
            </text>
            <text x="780" y="32" textAnchor="end" fontFamily="JetBrains Mono" fontSize="8" fill="rgba(143,160,182,.45)" letterSpacing="2">
              21 NODES
            </text>
            <text x="20" y="425" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(143,160,182,.45)" letterSpacing="2">
              EQUIRECTANGULAR · WGS84
            </text>
            <text x="780" y="425" textAnchor="end" fontFamily="JetBrains Mono" fontSize="7" fill="rgba(143,160,182,.45)" letterSpacing="2">
              bridgeKey
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
