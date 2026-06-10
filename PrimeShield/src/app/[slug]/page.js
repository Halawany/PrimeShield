import { notFound } from 'next/navigation';
import Navbar from "@/components/common/Navbar/NavbarWrapper";
import Footer from "@/components/sections/Footer/Footer";
import HeroSection from "@/components/sections/Hero/HeroSection";
import pageStyles from '../page.module.css';
import styles from './page.module.css';

async function getWagtailPage(slug) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_WAGTAIL_API_URL || 'http://127.0.0.1:8000/api/v2';

    // Step 1: /pages/find/ returns a 302 redirect to the detail URL — follow it manually
    // to extract the page ID from the Location header (e.g. /api/v2/pages/4/)
    const findRes = await fetch(`${apiUrl}/pages/find/?html_path=/${slug}/`, {
      redirect: 'manual', // don't auto-follow — we read the Location header instead
      cache: 'no-store',  // always fetch fresh — changes in Wagtail admin appear instantly
    });

    // 302 is expected — anything else (404, 500) means page not found
    if (findRes.status !== 302) {
      console.error(`Page not found for slug "${slug}": ${findRes.status}`);
      return null;
    }

    // Extract page ID from redirect Location: /api/v2/pages/4/ → "4"
    const location = findRes.headers.get('location') || '';
    const match = location.match(/\/pages\/(\d+)\//);
    if (!match) {
      console.error(`Could not parse page ID from Location: ${location}`);
      return null;
    }
    const pageId = match[1];

    // Step 2: Fetch full page detail by ID (includes body / api_fields)
    const detailRes = await fetch(`${apiUrl}/pages/${pageId}/`, {
      cache: 'no-store',  // always fetch fresh
    });

    if (!detailRes.ok) {
      console.error(`Failed to fetch detail for page ${pageId}: ${detailRes.status}`);
      return null;
    }

    return await detailRes.json();
  } catch (error) {
    console.error("Error fetching Wagtail data:", error);
  }
  return null;
}

export default async function StandardPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const pageData = await getWagtailPage(slug);

  // If no page found in Wagtail, return a 404
  if (!pageData) {
    notFound();
  }

  // Render blocks
  const blocks = pageData.body || [];

  // Separate hero blocks from other content blocks
  const heroBlocks = blocks.filter((b) => b.type === 'hero');
  const contentBlocks = blocks.filter((b) => b.type !== 'hero');

  return (
    <main className={pageStyles.section}>
      <Navbar />

      {/* Hero blocks rendered full-width, outside the container */}
      {heroBlocks.map((block, index) => (
        <HeroSection key={`hero-${index}`} data={block.value} />
      ))}

      {/* Non-hero content blocks inside a padded container */}
      {contentBlocks.length > 0 && (
        <div className={`container ${styles.contentArea}`}>
          {contentBlocks.map((block, index) => {
            if (block.type === 'rich_text') {
              return (
                <div
                  key={index}
                  className={styles.richText}
                  dangerouslySetInnerHTML={{ __html: block.value }}
                />
              );
            }
            return null;
          })}
        </div>
      )}

      <Footer />
    </main>
  );
}
