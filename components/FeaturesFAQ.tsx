
"use client";

import { useState } from "react";

const faqs = [
    {
        question: "What is BridgeKey?",
        answer:
            "BridgeKey is a secure crypto wallet that allows you to manage your digital assets, connect with supported blockchain networks, and interact with Web3 applications.",
    },
    {
        question: "Is BridgeKey a non-custodial wallet?",
        answer:
            "Yes. BridgeKey is designed as a non-custodial wallet, giving you control over your wallet and private keys.",
    },
    {
        question: "Which cryptocurrencies does BridgeKey support?",
        answer:
            "BridgeKey supports multiple blockchain networks and digital assets. Available assets may vary depending on the supported network and wallet version.",
    },
    {
        question: "Can I connect BridgeKey to Web3 applications?",
        answer:
            "Yes. BridgeKey can connect with compatible Web3 applications, allowing you to interact with decentralized services directly through your wallet.",
    },
    {
        question: "How do I keep my BridgeKey wallet secure?",
        answer:
            "Keep your recovery phrase and private keys completely private. Never share them with anyone, including anyone claiming to be BridgeKey support.",
    },
    {
        question: "What happens if I lose my recovery phrase?",
        answer:
            "Your recovery phrase is required to restore your wallet. If you lose it and don't have another recovery method, access to the wallet may not be recoverable.",
    },
];

export default function FAQSection() {

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative min-h-[700px] overflow-hidden bg-[#050505] px-6 py-24 sm:px-10 lg:px-20">

            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/[0.07] blur-[150px]" />

            <div className="pointer-events-none absolute left-[-150px] top-20 h-[350px] w-[350px] rounded-full bg-purple-500/[0.06] blur-[130px]" />

            <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-blue-500/[0.05] blur-[130px]" />

            <div className="relative mx-auto flex min-h-[600px] max-w-5xl flex-col items-center justify-center">

                {/* =========================
            INTRO / CENTER CONTENT
        ========================== */}


                {/* =========================
            FAQ CONTENT
        ========================== */}


                <div className="w-full animate-[fadeIn_0.4s_ease-out]">

                    {/* Header */}
                    <div className="mb-10 flex flex-col items-center text-center">

                        {/* <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />

                                <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                                    BridgeKey FAQ
                                </span>
                            </div> */}

                        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            How can <span style={{ color: "var(--teal)", fontFamily: "Syne, sans-serif", }}> we help?</span>
                        </h2>


                        <p className="mt-4 max-w-lg text-sm leading-6 text-white/40 sm:text-base">
                            Find answers to common questions about BridgeKey.
                        </p>

                    </div>

                    {/* Questions */}
                    <div className="mx-auto max-w-3xl space-y-3">

                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={faq.question}
                                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                                        ? "border-pink-400/30 bg-white/[0.055]"
                                        : "border-white/10 bg-white/[0.025] hover:border-white/20"
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenIndex(isOpen ? null : index)
                                        }
                                        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-7"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex items-center gap-4">
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
                                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg text-white/60 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                                                }`}
                                        >
                                            +
                                        </span>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ${isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="border-t border-white/[0.07] px-6 pb-6 pt-5 sm:px-7 sm:pl-[4.5rem]">
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

                    {/* Back Button */}
                    {/* <div className="mt-8 flex justify-center">

                            <button
                                type="button"
                                onClick={() => {
                                    setShowFAQs(false);
                                    setOpenIndex(0);
                                }}
                                className="text-sm text-white/40 transition-colors hover:text-white"
                            >
                                ← Back to overview
                            </button>

                        </div> */}

                </div>

            </div>
        </section>
    );
}

