// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, orderBy, limit, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0uywtTXu4FMHzZHs9MzVVEaOxlkgC1EQ",
  authDomain: "e-commerce-11d7d.firebaseapp.com",
  databaseURL: "https://e-commerce-11d7d-default-rtdb.firebaseio.com",
  projectId: "e-commerce-11d7d",
  storageBucket: "e-commerce-11d7d.appspot.com",
  messagingSenderId: "24117533764",
  appId: "1:24117533764:web:c412b95eddee1f2fb97011",
  measurementId: "G-2GH8XB7GY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

// Enhanced search function with keyword matching (similar to Java implementation)
export async function searchProducts(searchTerm) {
  try {
    if (!searchTerm || searchTerm.trim() === '') {
      return []; // Return empty array for empty search
    }

    const productsRef = collection(db, "Product");
    const searchTermLower = searchTerm.toLowerCase().trim();
    
    // Create query similar to Java implementation
    const keywordQuery = query(
      productsRef,
      where("keywords", "array-contains", searchTermLower)
    );

    const querySnapshot = await getDocs(keywordQuery);
    const products = [];

    querySnapshot.forEach((doc) => {
      const product = {
        id: doc.id,
        ...doc.data()
      };
      products.push(product);
    });

    return products;
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
}

// Enhanced slug generation with better URL handling
export function generateSlug(productName, brand = '') {
  const fullName = `${brand} ${productName}`
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove hyphens from start and end

  return fullName.substring(0, 100); // Limit length
}

// Enhanced product retrieval by slug with keyword support
export async function getProductBySlug(slug) {
  try {
    const productsRef = collection(db, "Product");
    const normalizedSlug = decodeURIComponent(slug)
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');

    // First try exact slug match
    const slugQuery = query(productsRef, where("slug", "==", normalizedSlug));
    let querySnapshot = await getDocs(slugQuery);

    // If no results, try keyword match
    if (querySnapshot.empty) {
      const words = normalizedSlug.split('-');
      const keywordQuery = query(
        productsRef,
        where("keywords", "array-contains-any", words)
      );
      querySnapshot = await getDocs(keywordQuery);
    }

    if (querySnapshot.empty) {
      return null;
    }

    const productDoc = querySnapshot.docs[0];
    const productData = productDoc.data();

    return {
      id: productDoc.id,
      ...productData,
      productName: productData.productName || 'Untitled Product',
      productDescription: productData.productDescription || '',
      price: productData.price || 0,
      mrp: productData.mrp || 0,
      isAvailable: !!productData.isAvailable,
      keywords: productData.keywords || [],
      ProductImage: productData.ProductImage || [],
      slug: normalizedSlug
    };
  } catch (error) {
    console.error("Error getting product:", error);
    throw error;
  }
}

// Get product by ID (keeping for backward compatibility)
export async function getProductById(productId) {
  try {
    const productsRef = collection(db, "Product");
    const q = query(productsRef, where("productId", "==", productId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const productDoc = querySnapshot.docs[0];
    return {
      id: productDoc.id,
      ...productDoc.data()
    };
  } catch (error) {
    console.error("Error getting product by ID:", error);
    throw error;
  }
}

// Helper function to generate keywords for a product
export function generateProductKeywords(product) {
  const keywords = new Set();
  
  // Add product name words
  if (product.productName) {
    product.productName.toLowerCase().split(/\s+/).forEach(word => keywords.add(word));
  }
  
  // Add brand
  if (product.Brand) {
    product.Brand.toLowerCase().split(/\s+/).forEach(word => keywords.add(word));
  }
  
  // Add category
  if (product.category) {
    product.category.toLowerCase().split(/\s+/).forEach(word => keywords.add(word));
  }

  // Add subcategory
  if (product.subCategory) {
    product.subCategory.toLowerCase().split(/\s+/).forEach(word => keywords.add(word));
  }

  return Array.from(keywords);
}

// When adding a new product, use this structure
export async function addProduct(productData) {
  try {
    const keywords = generateProductKeywords(productData);
    const slug = generateSlug(productData.productName, productData.Brand);
    
    const productToAdd = {
      ...productData,
      keywords: keywords,
      slug: slug,
      productNameLower: productData.productName.toLowerCase(),
      brandLower: productData.Brand?.toLowerCase() || '',
      categoryLower: productData.category?.toLowerCase() || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const docRef = await addDoc(collection(db, "Product"), productToAdd);
    return { id: docRef.id, ...productToAdd };
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
}

/**
 * Product Model Structure
 * @typedef {Object} ProductModel
 * @property {boolean} isAvailable - Whether the product is available
 * @property {string} productId - Unique identifier for the product
 * @property {string} productName - Name of the product
 * @property {string} productDescription - Description of the product
 * @property {string} Brand - Brand name
 * @property {string} category - Product category
 * @property {string} subCategory - Product subcategory
 * @property {number} price - Current price
 * @property {number} mrp - Maximum retail price
 * @property {number} discount - Discount percentage
 * @property {number} stockCount - Available stock
 * @property {number} minSelectableQuantity - Minimum quantity that can be selected
 * @property {number} MaxSelectableQuantity - Maximum quantity that can be selected
 * @property {number} SelectableQuantity - Current selectable quantity
 * @property {string} weight - Product weight
 * @property {string} weightSIUnit - Weight unit (kg, g, etc.)
 * @property {string} productLife - Product expiry/life
 * @property {string} productType - Type of product
 * @property {string} productIsFoodItem - Food item classification
 * @property {Array<string>} keywords - SEO keywords
 * @property {Array<string>} ProductImage - Product images URLs
 * @property {Array<Object>} [variations] - Product variations (optional)
 */

export default { searchProducts, getProductById, getProductBySlug, generateSlug, addProduct };