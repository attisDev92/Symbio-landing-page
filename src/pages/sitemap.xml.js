// sitemap.xml generado en el build, con alternates hreflang por idioma.
import { LANG_PATHS, HREFLANG, absUrl } from '../lib/site.js';

export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const alternates = Object.keys(LANG_PATHS)
    .map((l) => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${absUrl(LANG_PATHS[l])}"/>`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${absUrl('/')}"/>`)
    .join('\n');

  const landingUrls = Object.keys(LANG_PATHS).map((l) => `  <url>
    <loc>${absUrl(LANG_PATHS[l])}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${l === 'en' ? '1.0' : '0.9'}</priority>
${alternates}
  </url>`);

  const privacy = `  <url>
    <loc>${absUrl('/privacy.html')}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.2</priority>
  </url>`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[...landingUrls, privacy].join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

