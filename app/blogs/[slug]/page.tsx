export const dynamic = "force-dynamic";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ParticleNetwork from "@/components/ParticleNetwork";
import BlogPostWidget from "@/components/BlogPostWidget";

import type { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  return {
    alternates: {
      canonical: `https://bridgekey.io/blogs/${slug}`,
    },
  };
}

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;
const SITE_TOKEN = process.env.NEXT_PUBLIC_SITE_TOKEN;

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

interface SidebarBlogItem {
  image: string;
  category: string;
  heading: string;
  subHeading: string;
  author: string;
  date: string;
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

async function getOtherBlogPosts(): Promise<SidebarBlogItem[]> {
  try {
    if (!CMS_URL || !SITE_TOKEN) {
      return [];
    }

    const res = await fetch(
      `${CMS_URL}/api/v1/connector/posts?limit=20`,
      {
        headers: {
          "x-site-token": SITE_TOKEN,
        },
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
      category: post.category?.toUpperCase() || "GENERAL",
      heading: post.heading,
      subHeading: post.subHeading || "",
      author: post.author?.name || "MST Editorial Team",
      date: formatDate(post.publishedAt),
      slug: post.slug,
      link: `/blogs/${post.slug}`,
    }));
  } catch (error) {
    console.error("Error fetching other blog posts:", error);
    return [];
  }
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const allPosts = await getOtherBlogPosts();

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <CursorGlow />
      <ParticleNetwork />
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--teal,#00E5C0)] hover:text-white transition-colors group"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to all articles</span>
          </Link>
        </div>

        {/* 2-Column Responsive Layout: Left (Main Content) & Right (Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Column: Active Blog Content */}
          <div className="lg:col-span-8 w-full">
            <article className=" rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl border border-slate-200 text-[#1a1a1a] w-full min-h-[600px]">
              <BlogPostWidget
                cmsUrl={CMS_URL}
                siteToken={SITE_TOKEN}
                slug={slug}
              />
            </article>
          </div>

          {/* Right Column: Other Blogs / Recent Articles Sidebar */}
          <aside className="lg:col-span-4 w-full lg:sticky lg:top-28">
            <div className="bg-[#070F1F] border border-[rgba(143,160,182,0.18)] rounded-2xl p-5 sm:p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgba(143,160,182,0.15)]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--teal,#00E5C0)] shadow-[0_0_8px_#00E5C0]" />
                  <h2 className="text-lg font-bold text-white tracking-wide">
                    More Articles
                  </h2>
                </div>
                <Link
                  href="/blogs"
                  className="text-xs font-mono text-[var(--teal,#00E5C0)] hover:underline"
                >
                  View All
                </Link>
              </div>

              {/* List of Small Blog Boxes */}
              <div className="flex flex-col gap-3.5">
                {allPosts.length > 0 ? (
                  allPosts.map((post) => {
                    const isCurrent = post.slug === slug;

                    return (
                      <Link
                        key={post.slug}
                        href={`/blogs/${post.slug}`}
                        className={`group flex items-start gap-3.5 p-3 rounded-xl border transition-all duration-200 ${isCurrent
                          ? "bg-[rgba(0,229,192,0.08)] border-[var(--teal,#00E5C0)] shadow-[0_0_15px_rgba(0,229,192,0.15)] pointer-events-none"
                          : "bg-[#050A14]/70 border-[rgba(143,160,182,0.12)] hover:border-[rgba(0,229,192,0.4)] hover:bg-[#050A14] hover:shadow-lg"
                          }`}
                      >
                        {/* Thumbnail Image */}
                        <div className="relative w-20 h-16 sm:w-24 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-900 border border-slate-800">
                          <img
                            src={post.image}
                            alt={post.heading}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Text Details */}
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--teal,#00E5C0)]">
                              {post.category}
                            </span>
                            {isCurrent && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[var(--teal,#00E5C0)]/20 text-[var(--teal,#00E5C0)] font-semibold">
                                Active
                              </span>
                            )}
                          </div>

                          <h3 className={`text-xs sm:text-sm font-bold line-clamp-2 leading-snug transition-colors ${isCurrent ? "text-[var(--teal,#00E5C0)]" : "text-gray-200 group-hover:text-white"
                            }`}>
                            {post.heading}
                          </h3>

                          <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mt-1">
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <div className="text-center py-6 text-gray-400 text-xs">
                    <p>New articles will appear here as they are published.</p>
                  </div>
                )}
              </div>
            </div>
          </aside>

        </div>
      </div>

      <Footer />
    </main>
  );
}