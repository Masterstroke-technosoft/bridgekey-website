"use client";

import { useState } from "react";

const faqs = [
    {
        question: "Is BridgeKey a non-custodial wallet?",
        answer:
            "Yes. BridgeKey is fully non-custodial. Your private keys and Secret Recovery Phrase are stored only on your device. BridgeKey's servers never access your wallet credentials or crypto assets. Only you control your funds.",
    },
    {
        question: "Can BridgeKey access my crypto?",
        answer:
            "No. BridgeKey has zero access to your private keys, recovery phrase or digital assets. Even if BridgeKey's servers were compromised, your assets would remain secure on the blockchain.",
    },
    {
        question: "What happens if I lose my phone?",
        answer:
            "Your crypto exists on the blockchain, not on your phone. Restore full access on any new device using your Secret Recovery Phrase (12 or 24 words) that you saved securely during wallet setup.",
    },
    {
        question: "Does BridgeKey require KYC?",
        answer:
            "No. BridgeKey requires no KYC, no identity verification, no email address and no personal information. Create and use your crypto wallet with complete privacy in under a minute.",
    },
    {
        question: "How does BridgeKey protect my wallet?",
        answer:
            "BridgeKey uses biometric authentication (fingerprint or Face ID), device password protection, local AES-256 encryption, and requires your explicit approval for every transaction. Your Secret Recovery Phrase is generated on-device and never transmitted to any server.",
    },
    {
        question: "Is BridgeKey safe for large crypto holdings?",
        answer:
            "BridgeKey is a self-custody hot wallet suitable for daily use. For very large holdings, pair BridgeKey with a supported hardware wallet — Ledger, Keystone or Ngrave Zero — to keep private keys in cold storage while using BridgeKey as the signing interface.",
    },
    {
        question: "What is a Secret Recovery Phrase?",
        answer:
            "Your Secret Recovery Phrase is a 12 or 24-word sequence that gives full access to your wallet. Store it offline on paper in a safe location. Never photograph it or store it digitally. BridgeKey staff will never ask for your recovery phrase.",
    },
    {
        question: "Has BridgeKey been security audited?",
        answer:
            "BridgeKey follows industry-standard non-custodial wallet security practices including local key storage, AES-256 encryption and biometric gating. Security audit reports will be published when available.",
    },
];

export default function SecurityFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative overflow-hidden bg-[#050505] px-6 py-24 sm:px-10 lg:px-20">

            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/[0.06] blur-[150px]" />

            <div className="relative mx-auto max-w-6xl">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.8)]" />

                        <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/50">
                            Security FAQ
                        </span>
                    </div>

                    <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Frequently Asked
                        <span
                            className="block"
                            style={{
                                color: "var(--teal)",
                                fontFamily: "Syne, sans-serif",
                            }}
                        >
                            Security Questions
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                        Learn more about BridgeKey security, wallet protection,
                        private keys and keeping your digital assets safe.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="mt-16 grid gap-4 md:grid-cols-2">

                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.question}
                                className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                                    ? "border-pink-400/30 bg-white/[0.06]"
                                    : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.04]"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenIndex(
                                            isOpen ? null : index
                                        )
                                    }
                                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left"
                                >
                                    <div className="flex items-start gap-4">

                                        <span
                                            style={{
                                                color: "white",
                                                fontFamily: "JetBrains Mono, monospace",
                                                fontSize: "12px",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span
                                            style={{
                                                color: "var(--teal)",
                                                fontFamily: "JetBrains Mono, monospace",
                                                fontWeight: 500,
                                                fontSize: "14px",
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            {faq.question}
                                        </span>

                                    </div>

                                    <span
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg text-white transition-all duration-300 ${isOpen
                                            ? "rotate-45"
                                            : "group-hover:border-white/20"
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`grid transition-all duration-300 ${isOpen
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-white/[0.07] px-6 pb-6 pt-5 pl-[4.5rem]">
                                            <p
                                                style={{
                                                    color: "var(--ink-dim)",
                                                    fontFamily: "Inter, sans-serif",
                                                    fontSize: "15px",
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>

                {/* Bottom security message */}
                <div className="mx-auto mt-14 max-w-2xl text-center">
                    <p className="text-xs leading-6 text-white/25">
                        Your security starts with protecting your wallet
                        credentials. Never share your recovery phrase or
                        private keys with anyone.
                    </p>
                </div>

            </div>
        </section>
    );
}