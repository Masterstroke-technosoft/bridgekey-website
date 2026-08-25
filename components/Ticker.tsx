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
    const cryptoList = [
      { symbol: 'BTCUSDT', id: 'bitcoin', name: 'Bitcoin', image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png' },
      { symbol: 'ETHUSDT', id: 'ethereum', name: 'Ethereum', image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png' },
      { symbol: 'SOLUSDT', id: 'solana', name: 'Solana', image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png' },
      { symbol: 'XRPUSDT', id: 'xrp', name: 'XRP', image: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' }, 
      { symbol: 'POLUSDT', id: 'polygon', name: 'Polygon', image: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png' }, 
      { symbol: 'AVAXUSDT', id: 'avalanche', name: 'Avalanche', image: 'https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png' },
      { symbol: 'LINKUSDT', id: 'chainlink', name: 'Chainlink', image: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png' },
      { symbol: 'ATOMUSDT', id: 'cosmos', name: 'Cosmos Hub', image: 'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png' },
      { symbol: 'TRXUSDT', id: 'tron', name: 'TRON', image: 'https://assets.coingecko.com/coins/images/1094/large/tron-logo.png' },
      { symbol: 'HBARUSDT', id: 'hedera-hashgraph', name: 'Hedera', image: 'https://assets.coingecko.com/coins/images/3688/large/hbar.png' },
      { symbol: 'XTZUSDT', id: 'tezos', name: 'Tezos', image: 'https://assets.coingecko.com/coins/images/976/large/Tezos-logo.png' },
      { symbol: 'ALGOUSDT', id: 'algorand', name: 'Algorand', image: 'https://assets.coingecko.com/coins/images/4380/large/download.png' },
      { symbol: 'NEARUSDT', id: 'near-protocol', name: 'NEAR Protocol', image: 'https://assets.coingecko.com/coins/images/10365/large/near.png' },
      { symbol: 'VETUSDT', id: 'vechain', name: 'VeChain', image: 'https://assets.coingecko.com/coins/images/1167/large/VET_Token_Icon.png' }
    ];

    const tickerStrip = stripRef.current;
    if (!tickerStrip) return;

    // Build the HTML initially with a loading state (...) for the prices
    const tickerHTML = cryptoList
      .map(
        (coin) => `
          <div class="coin-item">
            <span class="coin-image"><img src="${coin.image}" alt="${coin.name} logo" width="20" height="20" /></span>
            <span class="coin-name">${coin.name}</span>
            <span class="coin-price" data-coin-symbol="${coin.symbol}">...</span>
          </div>
        `
      )
      .join('');

    tickerStrip.innerHTML = tickerHTML + tickerHTML;

    const ws = new WebSocket('wss://stream.binance.com:9443/ws/!miniTicker@arr');
    
    ws.onmessage = function (msg) {
        const prices = JSON.parse(msg.data);
        
        if (Array.isArray(prices)) {
            prices.forEach((tickerData: any) => {
                const symbol = tickerData.s;
                const price = parseFloat(tickerData.c);
                
                const priceElements = document.querySelectorAll(`[data-coin-symbol="${symbol}"]`);
                
                if (priceElements.length > 0) {
                    const precision = price >= 1 ? 2 : price >= 0.01 ? 4 : price >= 0.0001 ? 6 : 8;
                    const formattedPrice = '$' + price.toFixed(precision);
                    
                    priceElements.forEach(el => {
                        el.textContent = formattedPrice;
                    });
                }
            });
        }
    };

    // Clean up websocket on unmount
    return () => {
        if (ws.readyState === 1) {
            ws.close();
        }
    };
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
