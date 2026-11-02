
export const dynamic = "force-dynamic";

import BlogClient from "./BlogClient";
import { getBlogPosts } from "@/lib/blog";

import type { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "https://bridgekey.io/blogs",
    },
};

export default async function BlogIndexPage() {
    const items = await getBlogPosts();

    return <BlogClient items={items} />;
}
