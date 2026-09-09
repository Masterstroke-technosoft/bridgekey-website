
export const dynamic = "force-dynamic";

import BlogClient from "./BlogClient";

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;
const SITE_TOKEN = process.env.NEXT_PUBLIC_SITE_TOKEN;

// Strip any trailing slash so path concatenation never produces a double slash.
const CMS_BASE = CMS_URL?.replace(/\/+$/, "");

interface CmsPost {
    id: string;
    slug: string;
    heading: string;
    subHeading?: string;
    cardImage?: string;
    category?: string;
    featured?: boolean;
    publishedAt?: string;
    author?: {
        name?: string;
    };
}

interface BlogItem {
    image: string;
    category: string;
    heading: string;
    subHeading: string;
    author: string;
    date: string;
    rawDate: string;
    featured: boolean;
    link: string;
}

function formatDate(dateStr?: string) {
    if (!dateStr) return "";

    try {
        const d = new Date(dateStr);

        return d.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    } catch {
        return dateStr;
    }
}

async function getBlogPosts(): Promise<BlogItem[]> {

    try {
        if (!CMS_BASE || !SITE_TOKEN) {
            console.error("CMS URL or Site Token is missing");
            return [];
        }

        const res = await fetch(
            `${CMS_BASE}/api/v1/connector/posts?limit=30`,
            {
                headers: {
                    "x-site-token": SITE_TOKEN,
                },

                // Prevent stale CMS content.
                // Change to a number if you want revalidation.
                cache: "no-store",
            }
        );

        if (!res.ok) {
            throw new Error("Failed to fetch posts from backend");
        }

        const data: CmsPost[] = await res.json();

        return data.map((post) => ({
            image:
                post.cardImage ||
                "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",

            category:
                post.category?.toUpperCase() || "GENERAL",

            heading: post.heading,

            subHeading:
                "A practical guide to managing API keys securely, protecting application credentials, and simplifying authentication with Bridge Key.",

            author:
                post.author?.name || "MST Editorial Team",

            date: formatDate(post.publishedAt),

            rawDate: post.publishedAt || "",

            featured: Boolean(post.featured),

            link: `/blogs/${post.slug}`,
        }));
    } catch (error) {
        console.error(
            "Error fetching blog posts from CMS:",
            error
        );

        return [];
    }

}

export default async function BlogIndexPage() {
    const items = await getBlogPosts();

    return <BlogClient items={items} />;
}