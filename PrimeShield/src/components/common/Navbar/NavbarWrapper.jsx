import Navbar from './Navbar';

/**
 * Server Component — fetches all StandardPages from Wagtail to show in the navbar.
 * 
 * Two strategies are tried in order:
 * 1. Pages with "Show in menus" ticked (show_in_menus=true)
 * 2. Fallback: all StandardPage pages (type=home.StandardPage)
 *
 * The slug and title are read from the default page fields — no custom fields needed.
 */
async function getMenuPages() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_WAGTAIL_API_URL || 'http://127.0.0.1:8000/api/v2';

    // Strategy 1: pages with "Show in menus" ticked in Wagtail admin
    const menuRes = await fetch(
      `${apiUrl}/pages/?show_in_menus=true`,
      { cache: 'no-store' }
    );
    if (menuRes.ok) {
      const menuData = await menuRes.json();
      if (menuData.items?.length > 0) {
        return menuData.items; // each item has: id, title, meta.slug
      }
    }

    // Strategy 2: fallback — fetch all StandardPage pages automatically
    const allRes = await fetch(
      `${apiUrl}/pages/?type=home.StandardPage`,
      { cache: 'no-store' }
    );
    if (!allRes.ok) return [];
    const allData = await allRes.json();
    return allData.items || [];

  } catch {
    return [];
  }
}

export default async function NavbarWrapper() {
  const menuPages = await getMenuPages();
  return <Navbar menuPages={menuPages} />;
}
