import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/service/firebase';

export default async function sitemap() {
  try {
    // Fetch all products from Firestore
    const productsSnapshot = await getDocs(collection(db, "Product"));
    const products = productsSnapshot.docs.map(doc => doc.data());
    
    const currentDate = new Date().toISOString();

    // Base URLs
    const baseUrls = [
      {
        url: 'https://alwarmart.in',
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://alwarmart.in/about',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://alwarmart.in/contact',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://alwarmart.in/return-policy',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: 'https://alwarmart.in/privacy-policy',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: 'https://alwarmart.in/terms',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      },
    ];

    // Product URLs
    const productUrls = products.map((product) => ({
      url: `https://alwarmart.in/product/${product.slug}`,
      lastModified: product.updatedAt || currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    }));

    // Category URLs
    const categories = [...new Set(products.map(product => product.category))];
    const categoryUrls = categories.map((category) => ({
      url: `https://alwarmart.in/category/${encodeURIComponent(category.toLowerCase())}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    }));

    return [...baseUrls, ...categoryUrls, ...productUrls];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return at least the homepage if there's an error
    return [
      {
        url: 'https://alwarmart.in',
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily',
        priority: 1,
      },
    ];
  }
} 