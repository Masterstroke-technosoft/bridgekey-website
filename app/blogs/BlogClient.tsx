"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ParticleNetwork from "@/components/ParticleNetwork";
import AccordionGallery, {
    AccordionGalleryItem,
} from "@/components/AccordionGallery";

interface BlogItem extends AccordionGalleryItem {
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

interface BlogClientProps {
    items: BlogItem[];
}

export default function BlogClient({
    items,
}: BlogClientProps) {

    const [searchQuery, setSearchQuery] = useState("");
    const [dateSort, setDateSort] =
        useState<"newest" | "oldest">("newest");
    const [featuredOnly, setFeaturedOnly] =
        useState(false);

    const filteredItems = useMemo(() => {
        let result = [...items];

        if (featuredOnly) {
            result = result.filter(
                (item) => Boolean(item.featured)
            );
        }

       
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase().trim();

            result = result.filter((item) => {
                const isFeaturedSearch =
                    q === "featured" && item.featured;

                const titleMatch = (
                    item.heading ||
                    item.label ||
                    ""
                )
                    .toLowerCase()
                    .includes(q);

                const subMatch = (
                    item.subHeading ||
                    item.excerpt ||
                    ""
                )
                    .toLowerCase()
                    .includes(q);

                const catMatch = (
                    item.category || ""
                )
                    .toLowerCase()
                    .includes(q);

                const authorMatch = (
                    item.author || ""
                )
                    .toLowerCase()
                    .includes(q);

                return (
                    isFeaturedSearch ||
                    titleMatch ||
                    subMatch ||
                    catMatch ||
                    authorMatch
                );
            });
        }

        result.sort((a, b) => {
            const timeA = a.rawDate
                ? new Date(a.rawDate).getTime()
                : 0;

            const timeB = b.rawDate
                ? new Date(b.rawDate).getTime()
                : 0;

            if (dateSort === "oldest") {
                return timeA - timeB;
            }

            return timeB - timeA;
        });

        return result;
    }, [
        items,
        searchQuery,
        dateSort,
        featuredOnly,
    ]);

    // const isFiltered =
    //     searchQuery.trim() !== "" ||
    //     dateSort !== "newest" ||
    //     featuredOnly;

    // const clearFilters = () => {
    //     setSearchQuery("");
    //     setDateSort("newest");
    //     setFeaturedOnly(false);
    // };

    return (
        <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
            <CursorGlow />
            <ParticleNetwork />
            <Navbar />

            <div className="mx-auto max-w-6xl px-4 pt-36 pb-20">

                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(0,229,192,0.2)] bg-[rgba(0,229,192,0.06)] text-[var(--teal,#00E5C0)] text-xs font-mono uppercase tracking-wider mb-4">
                        <span>BridgeKey Blog</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--teal,#00E5C0)] tracking-tight">
                        Articles & Insights
                    </h1>

                    <p className="mt-3 text-base text-[var(--ink-dim,#8FA0B6)] max-w-2xl">
                        Explore the latest news, Web3 guides, security practices, and product updates.
                    </p>
                </div>

                <div className="mb-10 bg-[#070F1F] border border-[rgba(143,160,182,0.15)] rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between shadow-xl">

                  
                    <div className="relative flex-1 max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                            </svg>
                        </div>

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) =>
                                setSearchQuery(e.target.value)
                            }
                            placeholder="Search articles by name or keyword..."
                            className="w-full bg-[#050A14] border border-[rgba(143,160,182,0.2)] text-white placeholder-gray-500 rounded-xl py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:border-[#00E5C0] focus:ring-1 focus:ring-[#00E5C0] transition-all"
                        />

                        {searchQuery && (
                            <button
                                onClick={() =>
                                    setSearchQuery("")
                                }
                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-white"
                                aria-label="Clear search"
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">

                       
                        <button
                            type="button"
                            onClick={() =>
                                setFeaturedOnly(
                                    !featuredOnly
                                )
                            }
                            className={`px-3.5 py-2.5 text-xs font-semibold rounded-xl border flex items-center gap-1.5 transition-all cursor-pointer select-none ${featuredOnly
                                ? "bg-[#00E5C0]/20 text-[#00E5C0] border-[#00E5C0] shadow-[0_0_15px_rgba(0,229,192,0.25)]"
                                : "bg-[#050A14] text-gray-300 border-[rgba(143,160,182,0.2)] hover:border-gray-500 hover:text-white"
                                }`}
                        >
                            <span
                                className={
                                    featuredOnly
                                        ? "text-[#00E5C0]"
                                        : "text-amber-400"
                                }
                            >
                                ★
                            </span>

                            <span>Featured</span>
                        </button>

                       
                        <div className="relative flex items-center">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        width="18"
                                        height="18"
                                        x="3"
                                        y="4"
                                        rx="2"
                                        ry="2"
                                    />
                                    <line
                                        x1="16"
                                        x2="16"
                                        y1="2"
                                        y2="6"
                                    />
                                    <line
                                        x1="8"
                                        x2="8"
                                        y1="2"
                                        y2="6"
                                    />
                                    <line
                                        x1="3"
                                        x2="21"
                                        y1="10"
                                        y2="10"
                                    />
                                </svg>
                            </div>

                            <select
                                value={dateSort}
                                onChange={(e) =>
                                    setDateSort(
                                        e.target.value as
                                        | "newest"
                                        | "oldest"
                                    )
                                }
                                className="bg-[#050A14] border border-[rgba(143,160,182,0.2)] text-gray-200 text-sm rounded-xl py-2.5 pl-9 pr-8 focus:outline-none focus:border-[#00E5C0] cursor-pointer appearance-none"
                            >
                                <option
                                    value="newest"
                                    className="bg-[#050A14] text-white"
                                >
                                    Date: Newest First
                                </option>

                                <option
                                    value="oldest"
                                    className="bg-[#050A14] text-white"
                                >
                                    Date: Oldest First
                                </option>
                            </select>

                            <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none text-gray-400">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </div>
                        </div>

                        {/* Reset */}
                        {/* {isFiltered && (
                            <button
                                onClick={clearFilters}
                                className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-[#00E5C0] border border-[#00E5C0]/30 rounded-xl hover:bg-[#00E5C0]/10 transition-colors"
                            >
                                Reset
                            </button>
                        )} */}
                    </div>
                </div>

                {/* Articles Display */}
                {filteredItems.length > 0 ? (
                    <div className="bg-[#070F1F] border border-[rgba(143,160,182,0.15)] rounded-2xl p-6 sm:p-8 shadow-xl">
                        <AccordionGallery
                            items={filteredItems}
                            defaultIndex={0}
                            expandRatio={
                                filteredItems.length > 1
                                    ? 0.58
                                    : 1
                            }
                            trigger="hover"
                            cardTheme="light"
                            height={470}
                            gap={24}
                            radius={20}
                        />
                    </div>
                ) : (
                    <div className="py-20 text-center bg-[#070F1F] border border-[rgba(143,160,182,0.15)] rounded-2xl p-8">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mx-auto text-gray-500 mb-4"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>

                        <p className="text-lg font-semibold text-gray-200">
                            No articles found
                        </p>

                        <p className="text-sm text-gray-400 mt-1 max-w-sm mx-auto">
                            {featuredOnly
                                ? "No featured articles are currently published."
                                : `No blog posts match your current search "${searchQuery}".`}
                        </p>

                        {/* <button
                            onClick={clearFilters}
                            className="mt-5 px-4 py-2 text-xs font-mono uppercase tracking-wider text-[#00E5C0] border border-[#00E5C0]/40 rounded-xl hover:bg-[#00E5C0]/10 transition-colors inline-flex items-center gap-2"
                        >
                            <span>Clear Filters</span>
                        </button> */}
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}