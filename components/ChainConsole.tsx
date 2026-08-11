"use client";

import React, { useEffect, useState } from 'react';

export default function ChainConsole() {
  const [mstBlock, setMstBlock] = useState(14829104);
  const [ethBlock, setEthBlock] = useState(20481920);
  const [log, setLog] = useState<string[]>(['>> Initializing multi-chain RPC provider...']);

  useEffect(() => {
    // Simulate live block ticking and RPC query logs
    const interval = setInterval(() => {
      // 1. Tick block heights
      setMstBlock(b => b + 1);
      if (Math.random() > 0.4) {
        setEthBlock(b => b + 1);
      }

      // 2. Add dynamic log commands
      const rpcMethods = [
        'eth_blockNumber',
        'mst_gasPrice',
        'eth_getBalance (0x4b72...71f2)',
        'polygon_estimateGas',
        'base_feeHistory'
      ];
      const randomMethod = rpcMethods[Math.floor(Math.random() * rpcMethods.length)];

      let mockResponse = '';
      if (randomMethod.includes('blockNumber')) {
        mockResponse = `<< 0x${Math.floor(Math.random() * 1000000).toString(16)}`;
      } else if (randomMethod.includes('gasPrice')) {
        mockResponse = `<< 1.0 Gwei`;
      } else if (randomMethod.includes('getBalance')) {
        mockResponse = `<< 42.941 MSTC`;
      } else {
        mockResponse = `<< success (0.012s)`;
      }

      setLog(prev => {
        const updated = [...prev, `>> ${randomMethod}`, mockResponse];
        if (updated.length > 6) {
          updated.shift();
          updated.shift();
        }
        return updated;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bk-chain-console">
      {/* Dashboard Top bar */}
      <div className="bk-chain-console__header">
        <div className="flex gap-1.5 items-center">
          <span className="w-2 h-2 rounded-full bg-[#00E5C0]" />
          <span className="font-mono text-[9px] tracking-widest text-[#00E5C0] uppercase">MULTI-CHAIN RPC WORKSPACE</span>
        </div>
        <span className="font-mono text-[9px] text-gray-500">PROVIDER: BRIDGEKEY</span>
      </div>

      {/* Network States List */}
      <div className="bk-chain-console__networks">
        <div className="bk-network-item">
          <span className="bk-network-item__name">MST Mainnet</span>
          <div className="bk-network-item__status">
            <span className="font-mono text-[10px] text-gray-400">Block #{mstBlock}</span>
            <span className="bk-status-pill bk-status-pill--active">CONNECTED</span>
          </div>
        </div>
        <div className="bk-network-item">
          <span className="bk-network-item__name">Ethereum Mainnet</span>
          <div className="bk-network-item__status">
            <span className="font-mono text-[10px] text-gray-400">Block #{ethBlock}</span>
            <span className="bk-status-pill bk-status-pill--active">CONNECTED</span>
          </div>
        </div>
        <div className="bk-network-item">
          <span className="bk-network-item__name">Polygon Mainnet</span>
          <div className="bk-network-item__status">
            <span className="bk-status-pill bk-status-pill--active">CONNECTED</span>
          </div>
        </div>
        <div className="bk-network-item">
          <span className="bk-network-item__name">Base Mainnet</span>
          <div className="bk-network-item__status">
            <span className="bk-status-pill bk-status-pill--active">CONNECTED</span>
          </div>
        </div>
      </div>

      {/* RPC Logger */}
      <div className="bk-rpc-logger">
        <span className="bk-rpc-logger__title">Live RPC Logs</span>
        <div className="bk-rpc-logger__terminal">
          {log.map((line, idx) => (
            <div key={idx} className={`bk-rpc-logger__line ${line.startsWith('>>') ? 'text-gray-400' : 'text-[#00E5C0] font-bold'}`}>
              {line}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .bk-chain-console {
          position: relative;
          background: rgba(7, 15, 31, 0.75);
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 24px;
          backdrop-filter: blur(12px);
          box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05);
          overflow: hidden;
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .bk-chain-console__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 14px;
        }

        .bk-chain-console__networks {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bk-network-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          padding: 10px 14px;
          transition: border-color 0.3s ease;
        }
        .bk-network-item:hover {
          border-color: rgba(0, 229, 192, 0.2);
        }

        .bk-network-item__name {
          font-size: 13px;
          font-weight: 500;
          color: white;
        }

        .bk-network-item__status {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bk-status-pill {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          font-weight: bold;
          letter-spacing: 0.05em;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .bk-status-pill--active {
          background: rgba(0, 229, 192, 0.1);
          color: #00E5C0;
          border: 1px solid rgba(0, 229, 192, 0.2);
        }

        /* RPC Logger block */
        .bk-rpc-logger {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .bk-rpc-logger__title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 8px;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
        }

        .bk-rpc-logger__terminal {
          background: #050a14;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          min-height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 6px;
        }

        .bk-rpc-logger__line {
          line-height: 1.4;
          word-break: break-all;
        }
      `}</style>
    </div>
  );
}
