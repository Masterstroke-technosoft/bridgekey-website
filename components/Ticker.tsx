'use client';

import { useEffect, useRef } from 'react';

interface Coin {
  id: string;
  name: string;
  current_price: number;
  image: string;
}

export default function Ticker() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ids = 'ethereum,bitcoin,solana,ripple,polygon-pos,avalanche-2,chainlink,cosmos,tron,fantom,hedera-hashgraph,tezos,algorand,near-protocol,vechain';

    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`)
      .then((response) => response.json())
      .then((data) => {
        const cryptoData: Coin[] = data.map((coin: any) => ({
          id: coin.id,
          name: coin.name,
          current_price: coin.current_price,
          image: coin.image,
        }));

        const tickerStrip = stripRef.current;
        if (!tickerStrip) return;

        const tickerHTML = cryptoData
          .map(
            (coin) => {
              const price = coin.current_price;
              const precision = price >= 1 ? 2 : price >= 0.01 ? 4 : price >= 0.0001 ? 6 : 8;
              const priceFormatted = price.toFixed(precision);
              return `
          <div class="coin-item">
            <span class="coin-image"><img src="${coin.image}" alt="${coin.name} logo" width="20" height="20" /></span>
            <span class="coin-name">${coin.name}</span>
            <span class="coin-price">$${priceFormatted}</span>
          </div>
        `;
            }
          )
          .join('');

        tickerStrip.innerHTML = tickerHTML + tickerHTML;
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="ticker" aria-hidden="true">
      <div className="label" style={{ color: 'red' }}>
        <span className="dot"></span>Live
      </div>
      <div className="track">
        <div className="strip" id="tickerStrip" ref={stripRef}></div>
      </div>
    </div>
  );
}
