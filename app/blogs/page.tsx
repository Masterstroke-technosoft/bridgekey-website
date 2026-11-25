
export const dynamic = "force-dynamic";

import BlogClient from "./BlogClient";
import { getBlogPosts } from "@/lib/blog";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "BridgeKey Blog — Crypto Wallet Guides, Web3 Tutorials & MST Blockchain News",

    description:
        "BridgeKey blog — guides on non-custodial crypto wallets, self-custody, MST Blockchain, DeFi and Web3. Written for crypto users in India and globally.",

    keywords: [
        "crypto wallet blog India",
        "non-custodial wallet guide",
        "MST blockchain news",
        "DeFi tutorials India",
        "Web3 guides",
        "self-custody crypto India",
    ],

    alternates: {
        canonical: "https://bridgekey.io/blogs",
    },

    robots: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://bridgekey.io/blogs",
        siteName: "BridgeKey",
        title:
            "BridgeKey Blog — Crypto Wallet Guides, Web3 Tutorials & MST Blockchain News",
        description:
            "Guides on non-custodial wallets, self-custody, MST Blockchain, DeFi and Web3 for crypto users in India and globally.",
        images: [
            {
                url: "https://bridgekey.io/assets/og-blogs.png",
                width: 1200,
                height: 630,
                alt: "BridgeKey Blog — Crypto Wallet Guides",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        site: "@BridgekeyWallet",
        creator: "@BridgekeyWallet",
        title: "BridgeKey Blog — Crypto Wallet Guides & Web3 Tutorials",
        description:
            "Non-custodial wallet guides, MST Blockchain news and DeFi tutorials for India and the world.",
        images: ["https://bridgekey.io/assets/og-blogs.png"],
    },
};

export default async function BlogIndexPage() {
    const items = await getBlogPosts();

    return <BlogClient items={items} />;
}
