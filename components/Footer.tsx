'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <motion.footer
      className="relative overflow-hidden border-t border-gray-900 bg-[#050A14] pt-24 pb-12 px-6 md:px-12 lg:px-24 z-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#00E5C0]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-20">


        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-900">

          {/* Brand Identity Column */}
          <motion.div className="col-span-2 md:col-span-3 lg:col-span-2 flex flex-col items-start gap-4" variants={itemVariants}>
            <Link href="/" className="flex items-center ml-28">
              <img
                src="/uploads/header-logo.png"
                alt="BridgeKey Logo"
                className="h-32 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mt-3">
              Your key. Your chain. Your future. Next-generation self-custody engineered for India and built for the global Web3 ecosystem.
            </p>
          </motion.div>

          {/* Links Categories Columns */}
          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <h5 className="font-mono text-xs text-gray-500 tracking-wider uppercase font-semibold">Product</h5>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              {['About', 'Features', 'Security', 'Multi-Chain'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-[#00E5C0] transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a href="/#mst" className="hover:text-[#00E5C0] transition-colors duration-200">MST Chain</a>
              </li>
              <li>
                <a href="/#how" className="hover:text-[#00E5C0] transition-colors duration-200">How It Works</a>
              </li>
            </ul>
          </motion.div>

          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <h5 className="font-mono text-xs text-gray-500 tracking-wider uppercase font-semibold">Chain</h5>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>
                <a href="https://mstblockchain.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E5C0] transition-colors duration-200">
                  MST L1 Portal
                </a>
              </li>
              <li>
                <a href="https://mstblockchain.com/portal" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E5C0] transition-colors duration-200">
                  Network Validators
                </a>
              </li>
              <li>
                <a href="https://mstscan.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E5C0] transition-colors duration-200">
                  Block Explorer
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div className="col-span-2 md:col-span-1 flex flex-col gap-4" variants={itemVariants}>
            <h5 className="font-mono text-xs text-gray-500 tracking-wider uppercase font-semibold">Legal & Support</h5>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-[#00E5C0] transition-colors duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#00E5C0] transition-colors duration-200">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-[#00E5C0] transition-colors duration-200">Help Center</Link>
              </li>
            </ul>
            <div className="flex flex-col gap-3 mt-4 w-full">
              <motion.a
                href="https://mstblockchain.com"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-800 text-white font-medium rounded-xl text-xs transition-all duration-300 hover:border-gray-600 hover:bg-white/5 w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Ecosystem Docs</span>
              </motion.a>
            </div>
          </motion.div>

        </div>

        {/* Footer Bottom Bar */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-12"
          variants={itemVariants}
        >
          <div className="text-gray-500 text-xs font-mono tracking-wide">
            © 2026 BridgeKey · CRYPTO WALLET · MADE IN INDIA
          </div>

          <div className="flex items-center gap-4">
            {/* Social Link X */}
            <motion.a
              href="https://x.com/BridgekeyWallet"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 2H21.98l-6.73 7.692L23.5 22h-6.46l-5.06-6.615L6.2 22H3.12l7.2-8.23L.5 2h6.62l4.58 6.05L18.9 2zm-1.13 18h1.8L6.15 3.9H4.22L17.77 20z" />
              </svg>
            </motion.a>

            {/* Social Link Telegram */}
            <motion.a
              href="https://t.me/s/mstblockchain"
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 3L2.8 10.4c-1.3.5-1.3 1.2-.2 1.5l4.9 1.5 1.9 5.9c.2.7.1 1 .9 1l2.8-2.7 5.8 4.3c1.1.6 1.8.3 2.1-1L24 4.5C24.4 2.8 23.4 2 22 3zM8.3 12.9l10.9-6.9c.5-.3.9-.1.5.2l-9 8.1-.3 3.3-2.1-4.7z" />
              </svg>
            </motion.a>

            {/* Social Link Instagram */}
            <motion.a
              href="https://www.instagram.com/bridgekeywallet/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.5 1.5h-7A3 3 0 0 0 1.5 4.5v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm1.5 10a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7z" />
                <path d="M8 4.5A3.5 3.5 0 1 0 8 11.5 3.5 3.5 0 1 0 8 4.5zm0 5.5A2 2 0 1 1 8 6a2 2 0 0 1 0 4z" />
                <circle cx="12" cy="4" r="0.8" />
              </svg>
            </motion.a>
          </div>

        </motion.div>

      </div>
    </motion.footer>
  );
}
