import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/service/firebase';

export async function GET() {
  try {
    const products = await getDocs(collection(db, "Product"));
    
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://alwarmart.in</loc>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
        ${products.docs.map(doc => {
          const product = doc.data();
          const slug = product.slug || ''; // Use existing slug or empty string
          return `
            <url>
              <loc>https://alwarmart.in/product/${encodeURIComponent(slug)}</loc>
              <lastmod>${product.updatedAt || new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        }).join('')}
      </urlset>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
} 