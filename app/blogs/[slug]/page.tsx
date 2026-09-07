// "use client";

// import { useParams } from "next/navigation";
// import Link from "next/link";
// import Script from "next/script";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import CursorGlow from "@/components/CursorGlow";
// import ParticleNetwork from "@/components/ParticleNetwork";

// const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;
// const SITE_TOKEN = process.env.NEXT_PUBLIC_SITE_TOKEN;

// export default function BlogPostPage() {
//   const params = useParams();
//   const slug = params?.slug as string;

//   return (
//     <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
//       <CursorGlow />
//       <ParticleNetwork />
//       <Navbar />
//       <Script src={`${CMS_URL}/widget.js`} strategy="afterInteractive" />

//       <div className="mx-auto max-w-4xl px-4 pt-36 pb-24">
//         {/* Back Link */}
//         <Link
//           href="/blogs"
//           className="inline-flex items-center gap-2 text-sm font-medium text-[var(--teal,#00E5C0)] hover:text-white mb-8 transition-colors group"
//         >
//           <svg
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="group-hover:-translate-x-1 transition-transform"
//           >
//             <path d="M19 12H5M12 19l-7-7 7-7" />
//           </svg>
//           <span>Back to all articles</span>
//         </Link>

//         {/* Clean, High-Contrast Reading Canvas for CMS Post Content */}
//         <article className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl border border-slate-200 text-[#111827]">
//           <div data-widget="post" data-token={SITE_TOKEN} data-slug={slug} />
//         </article>
//       </div>

//       <Footer />
//     </main>
//   );
// }







import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ParticleNetwork from "@/components/ParticleNetwork";

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;
const SITE_TOKEN = process.env.NEXT_PUBLIC_SITE_TOKEN;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <CursorGlow />
      <ParticleNetwork />
      <Navbar />

      <Script
        src={`${CMS_URL}/widget.js`}
        strategy="afterInteractive"
      />

      <div className="mx-auto max-w-4xl px-4 pt-36 pb-24">

        {/* Back Link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--teal,#00E5C0)] hover:text-white mb-8 transition-colors group"
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

        {/* Blog Content */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl border border-slate-200 text-[#111827]">
          <div
            data-widget="post"
            data-token={SITE_TOKEN}
            data-slug={slug}
          />
        </article>
      </div>

      <Footer />
    </main>
  );
}