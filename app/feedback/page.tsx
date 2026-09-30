"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import ParticleNetwork from "@/components/ParticleNetwork";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

const reasons = [
    "I found a wallet I like more",
    "BridgeKey is too slow or buggy",
    "BridgeKey doesn't have the features I need from my wallet",
    "Reinstalling to troubleshoot",
    "BridgeKey is too hard to use",
    "BridgeKey does not support the network I wish to use",
    "I lost access to my wallet",
    "I use BridgeKey on another device",
    "I no longer use or need a wallet",
    "I need to import another Secret Recovery Phrase",
    "I installed or uninstalled BridgeKey by mistake",
    "I was scammed",
    "Other",
];

export default function FeedbackPage() {
    const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
    const [feedback, setFeedback] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const toggleReason = (reason: string) => {
        setSelectedReasons((prev) =>
            prev.includes(reason)
                ? prev.filter((r) => r !== reason)
                : [...prev, reason]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedReasons.length === 0 && !feedback.trim()) return;

        setIsSubmitting(true);
        setSubmitError("");

        const sheetUrl = process.env.NEXT_PUBLIC_FEEDBACK_SHEET_URL;

        const payload = {
            timestamp: new Date().toLocaleString("en-US", {
                timeZone: "Asia/Kolkata",
                dateStyle: "medium",
                timeStyle: "short",
            }),
            reasons: selectedReasons.length > 0 ? selectedReasons.join(", ") : "None selected",
            additionalFeedback: feedback.trim() || "No additional comments",
        };

        try {
            if (sheetUrl) {
                await fetch(sheetUrl, {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });
            } else {
                // Log payload in console if sheet URL is not yet populated
                console.log("Feedback recorded for Google Sheet:", payload);
            }

            setIsSubmitted(true);
        } catch (err) {
            console.error("Error submitting feedback to Google Sheet:", err);
            // Even if network fails, show confirmation so the user is not stuck
            setIsSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <ParticleNetwork />
            <CursorGlow />
            <Navbar />
            <main className="feedback-page">
                <div className="feedback-bg" />

                <div className="feedback-container">
                    <div className="feedback-eyebrow">
                        BridgeKey · Feedback
                    </div>

                    <h1>
                        Help us understand
                        <br />
                        <span>why you left.</span>
                    </h1>

                    <p className="feedback-subtitle">
                        Your feedback helps us improve BridgeKey and build a better
                        experience for everyone.
                    </p>

                    {isSubmitted ? (
                        <div className="feedback-card feedback-success-card">
                            <div className="success-icon-wrap">
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h2>Thank you for your feedback</h2>
                            <p>
                                We appreciate your insights. Your response helps our team make
                                BridgeKey faster, safer, and more intuitive.
                            </p>
                            <Link
                                href="/"
                                className="feedback-submit"
                                style={{ textDecoration: "none", width: "auto", padding: "14px 32px" }}
                            >
                                Return to Homepage
                                <span>→</span>
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="feedback-card">
                            <div className="question">
                                <label>Why are you uninstalling BridgeKey?</label>
                                <span>Select all that apply</span>
                            </div>

                            <div className="reason-list">
                                {reasons.map((reason) => {
                                    const isSelected = selectedReasons.includes(reason);
                                    return (
                                        <button
                                            key={reason}
                                            type="button"
                                            onClick={() => toggleReason(reason)}
                                            className={`reason-option ${isSelected ? "selected" : ""}`}
                                            aria-pressed={isSelected}
                                        >
                                            <span className="checkbox-box">
                                                {isSelected && (
                                                    <svg
                                                        width="11"
                                                        height="11"
                                                        viewBox="0 0 12 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M2.5 6.2L4.8 8.5L9.5 3.5"
                                                            stroke="#001016"
                                                            strokeWidth="2.2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                )}
                                            </span>

                                            <span className="reason-text">{reason}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="message-field">
                                <label htmlFor="feedback">
                                    Anything else you'd like us to know?
                                    <span>Optional</span>
                                </label>

                                <textarea
                                    id="feedback"
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    placeholder="Tell us what we could improve..."
                                    rows={4}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || (selectedReasons.length === 0 && !feedback.trim())}
                                className="feedback-submit"
                            >
                                {isSubmitting ? (
                                    <>
                                        Submitting...
                                        <span className="animate-spin">⏳</span>
                                    </>
                                ) : (
                                    <>
                                        Submit Feedback
                                        <span>→</span>
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                    <div className="feedback-footer-links">
                        <a
                            href="https://chromewebstore.google.com/detail/bridgekey/bfjojdcfenehemjgjlepdjomkpginlkg"
                            className="feedback-install-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/assets/Google_Chrome_icon.webp"
                                alt="Google Chrome"
                                width={22}
                                height={22}
                                className="feedback-chrome-icon"
                            />
                            <span>Install Extension</span>
                        </a>

                        {/* <div>
                        <Link href="/" className="back-link">
                            ← Back to BridgeKey
                        </Link>
                    </div> */}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

