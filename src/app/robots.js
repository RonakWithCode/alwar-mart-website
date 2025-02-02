export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: ['/'],
          disallow: [
            '/admin/',
            '/api/',
            '/private/',
            '/*?*', // Prevent crawling of search results and filtered pages
          ],
        },
      ],
      sitemap: 'https://alwarmart.in/sitemap.xml',
    }
  }