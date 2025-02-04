export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      sitemap: 'https://alwarmart.in/sitemap.xml',
      host: 'https://alwarmart.in',
    }
  }