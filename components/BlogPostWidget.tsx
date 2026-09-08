'use client';

import { useEffect, useRef } from 'react';

interface BlogPostWidgetProps {
  cmsUrl?: string;
  siteToken?: string;
  slug: string;
}

const DEFAULT_DESCRIPTION =
  'A practical guide to managing API keys securely, protecting application credentials, and simplifying authentication with Bridge Key.';

export default function BlogPostWidget({
  cmsUrl,
  siteToken,
  slug,
}: BlogPostWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cmsUrl || !siteToken || !slug) return;

    // Load widget script dynamically on mount / slug change
    const script = document.createElement('script');
    script.src = `${cmsUrl}/widget.js?t=${Date.now()}`;
    script.async = true;

    script.onerror = () => {
      console.error('[masterstroke-widget] Failed to load widget script');
    };

    document.body.appendChild(script);

    // Layout and alignment styles only (original font colors preserved untouched)
    const layoutStyles = `
      :host, .mst-widget {
        width: 100% !important;
        max-width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
        box-sizing: border-box !important;
      }
      .mst-post {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        text-align: left !important;
        box-sizing: border-box !important;
      }
      .mst-post-heading,
      h1.mst-post-heading,
      .mst-post h1 {
        text-align: left !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        display: block !important;
        box-sizing: border-box !important;
      }
      .mst-post-subheading,
      p.mst-post-subheading,
      .mst-post p.mst-post-subheading {
        text-align: left !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
        display: block !important;
        box-sizing: border-box !important;
      }
      .mst-post-meta {
        display: flex !important;
        flex-wrap: wrap !important;
        align-items: center !important;
        justify-content: flex-start !important;
        width: 100% !important;
        max-width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
        box-sizing: border-box !important;
      }
      .mst-post-image {
        width: 100% !important;
        max-width: 100% !important;
        display: block !important;
      }
      .mst-post-body {
        width: 100% !important;
        max-width: 100% !important;
        text-align: left !important;
        box-sizing: border-box !important;
      }
      .mst-post-body * {
        text-align: left !important;
      }
    `;

    const applyStyles = () => {
      const host = containerRef.current;
      if (!host || !host.shadowRoot) return;

      const shadow = host.shadowRoot;

      if (!shadow.querySelector('#mst-layout-style')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'mst-layout-style';
        styleEl.textContent = layoutStyles;
        shadow.appendChild(styleEl);
      }

      // Direct inline override for elements created with inline styles
      const headings = shadow.querySelectorAll<HTMLElement>(
        '.mst-post-heading, h1, .mst-post-subheading, p.mst-post-subheading'
      );
      headings.forEach((el) => {
        el.style.textAlign = 'left';
        el.style.marginLeft = '0';
        el.style.marginRight = '0';
        el.style.maxWidth = '100%';
        el.style.width = '100%';
      });

      const subHeadingEl = shadow.querySelector<HTMLElement>(
        '.mst-post-subheading'
      );
      if (subHeadingEl) {
        subHeadingEl.textContent = DEFAULT_DESCRIPTION;
      }

      const post = shadow.querySelector<HTMLElement>('.mst-post');
      if (post) {
        post.style.textAlign = 'left';
        post.style.maxWidth = '100%';
        post.style.width = '100%';
        post.style.margin = '0';
      }

      const meta = shadow.querySelector<HTMLElement>('.mst-post-meta');
      if (meta) {
        meta.style.justifyContent = 'flex-start';
        meta.style.maxWidth = '100%';
        meta.style.width = '100%';
      }
    };

    const intervalId = setInterval(applyStyles, 40);
    const timeoutId = setTimeout(() => clearInterval(intervalId), 4000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [cmsUrl, siteToken, slug]);

  return (
    <div
      key={slug}
      ref={containerRef}
      data-widget="post"
      data-token={siteToken}
      data-slug={slug}
      className="w-full min-h-[400px] text-left"
    />
  );
}
