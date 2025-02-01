import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/service/firebase';
import { generateSlug } from '@/service/firebase';

export async function GET() {
  const products = await getDocs(collection(db, "Product"));
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://alwarmart.com</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${products.docs.map(doc => {
        const product = doc.data();
        // Generate clean slug for each product
        const slug = generateSlug(product.productName, product.Brand);
        return `
          <url>
            <loc>https://alwarmart.com/product/${encodeURIComponent(slug)}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
          </url>
        `;
      }).join('')}
    </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 