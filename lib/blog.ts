const CMS_BASE = process.env.NEXT_PUBLIC_CMS_URL?.replace(/\/+$/, "");
const SITE_TOKEN = process.env.NEXT_PUBLIC_SITE_TOKEN;

// Only for posts published without a card image in the CMS.
const FALLBACK_IMAGE = "/assets/og-home.png";

interface CmsPost {
    id: string;
    slug: string;
    heading: string;
    subHeading?: string;
    cardImage?: string;
    category?: string;
    featured?: boolean;
    createdAt?: string;
    author?: {
        name?: string;
    };
}

export interface BlogPost {
    image: string;
    category: string;
    heading: string;
    subHeading: string;
    author: string;
    date: string;
    rawDate: string;
    featured: boolean;
    slug: string;
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

export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        if (!CMS_BASE || !SITE_TOKEN) {
            console.error("CMS URL or Site Token is missing");
            return [];
        }

        const res = await fetch(`${CMS_BASE}/api/v1/connector/posts`, {
            headers: {
                "x-site-token": SITE_TOKEN,
            },

            // Prevent stale CMS content.
            // Change to a number if you want revalidation.
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch posts from backend");
        }

        const data: CmsPost[] = await res.json();

        return data.map((post) => ({
            image: post.cardImage || FALLBACK_IMAGE,
            category: post.category?.toUpperCase() || "",
            heading: post.heading,
            subHeading: post.subHeading || "",
            author: post.author?.name || "",
            date: formatDate(post.createdAt),
            rawDate: post.createdAt || "",
            featured: Boolean(post.featured),
            slug: post.slug,
            link: `/blogs/${post.slug}`,
        }));
    } catch (error) {
        console.error("Error fetching blog posts from CMS:", error);
        return [];
    }
}
