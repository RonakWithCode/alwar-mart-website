import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/service/firebase';

export default async function sitemap() {
  try {
    // Fetch all products from Firestore
    const products = await getDocs(collection(db, "Product"));
    
    // Get current date for lastModified
    const currentDate = new Date().toISOString();

    // Base URLs with more comprehensive structure
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
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: 'https://alwarmart.in/contact',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
    ];

    // Generate product URLs with better prioritization
    const productUrls = products.docs.map((doc) => {
      const product = doc.data();
      return {
        url: `https://alwarmart.in/product/${product.slug}`,
        lastModified: product.updatedAt || currentDate,
        changeFrequency: product.isAvailable ? 'daily' : 'weekly', // More frequent updates for available products
        priority: product.isAvailable ? 0.9 : 0.5, // Higher priority for available products
      };
    });

    // Generate category URLs
    const categories = [...new Set(products.docs.map(doc => doc.data().category))];
    const categoryUrls = categories.map((category) => ({
      url: `https://alwarmart.in/category/${encodeURIComponent(category.toLowerCase())}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    }));

    // Combine all URLs
    return [...baseUrls, ...categoryUrls, ...productUrls];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return basic sitemap in case of error
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