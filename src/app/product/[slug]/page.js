import { getProductBySlug } from '@/service/firebase';
import Image from 'next/image';
import Link from 'next/link';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const product = await getProductBySlug(params);
  
  if (!product) {
    return {
      title: 'Product Not Found | Alwar Mart',
      description: 'The requested product could not be found.',
      robots: 'noindex'
    };
  }

  const productImage = product.ProductImage?.[0] || '/default-product-image.jpg';
  const productUrl = `https://alwarmart.com/product/${product.slug}`;

  return {
    title: `${product.productName} | Buy Online at Alwar Mart`,
    description: `Buy ${product.productName} ${product.weight ? `(${product.weight} ${product.weightSIUnit})` : ''} at best price from Alwar Mart. ${product.productDescription?.substring(0, 150)}...`,
    keywords: [
      product.productName,
      product.Brand,
      product.category,
      'online grocery',
      'Alwar Mart',
      ...(product.keywords || [])
    ].filter(Boolean).join(', '),
    alternates: {
      canonical: productUrl
    },
    openGraph: {
      title: product.productName,
      description: product.productDescription,
      url: productUrl,
      images: [{ url: productImage }],
      type: 'product',
      availability: product.isAvailable ? 'in stock' : 'out of stock',
      price: {
        amount: product.price,
        currency: 'INR',
      },
    },
    other: {
      'application/ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.productName,
        description: product.productDescription,
        image: product.ProductImage,
        brand: {
          '@type': 'Brand',
          name: product.Brand
        },
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: 'INR',
          availability: product.isAvailable ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
          seller: {
            '@type': 'Organization',
            name: 'Alwar Mart'
          },
          priceValidUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days from now
        },
        aggregateRating: product.rating ? {
          '@type': 'AggregateRating',
          ratingValue: product.rating,
          reviewCount: product.reviewCount || 0
        } : undefined,
        category: product.category,
        weight: product.weight ? {
          '@type': 'QuantitativeValue',
          value: product.weight,
          unitText: product.weightSIUnit
        } : undefined
      })
    }
  };
}

// Generate static paths for all products
export async function generateStaticParams() {
  // Implement this based on your needs
  // This helps with static site generation
  return [];
}

export default async function ProductPage({ params }) {
  const product = await getProductBySlug(params.slug);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">
            The product you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link 
            href="/"
            className="inline-block bg-[#4CAF50] text-white px-6 py-3 rounded-full hover:bg-[#45a649] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // Calculate savings
  const savings = product.mrp - product.price;
  const savingsPercentage = ((savings / product.mrp) * 100).toFixed(0);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="text-gray-500 hover:text-[#4CAF50]">Home</Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link href={`/category/${product.category}`} className="text-gray-500 hover:text-[#4CAF50]">
              {product.category}
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li className="text-[#4CAF50]">{product.productName}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square relative rounded-2xl overflow-hidden bg-white shadow-lg">
            {product.productImage && product.productImage.length > 0 ? (
              <Image
                src={product.productImage[0]}
                alt={product.productName}
                fill
                className="object-contain p-4"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <span className="text-gray-400">No image available</span>
              </div>
            )}
          </div>
          
          {/* Thumbnail Images */}
          {product.productImage && product.productImage.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.productImage.map((image, index) => (
                <div key={index} className="aspect-square relative rounded-lg overflow-hidden bg-white shadow cursor-pointer">
                  <Image
                    src={image}
                    alt={`${product.productImage} - Image ${index + 1}`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Title and Basic Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {product.productName}
            </h1>
            {product.Brand && (
              <p className="text-gray-600 mb-2">Brand: <span className="font-medium">{product.Brand}</span></p>
            )}
            {product.weight && (
              <p className="text-gray-600">
                Weight: <span className="font-medium">{product.weight} {product.weightSIUnit}</span>
              </p>
            )}
          </div>

          {/* Price Section */}
          <div className="bg-gray-50 p-6 rounded-xl space-y-3">
            <div className="flex items-baseline space-x-3">
              <span className="text-3xl font-bold text-[#4CAF50]">₹{product.price}</span>
              {product.mrp > product.price && (
                <>
                  <span className="text-xl text-gray-400 line-through">₹{product.mrp}</span>
                  <span className="text-lg font-medium text-red-500">{savingsPercentage}% OFF</span>
                </>
              )}
            </div>
            {savings > 0 && (
              <p className="text-green-600">You save ₹{savings} on this order</p>
            )}
            <p className="text-sm text-gray-500">Inclusive of all taxes</p>
          </div>

          {/* Stock Status */}
          <div>
            {product.isAvailable ? (
              <div className="flex items-center text-green-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">In Stock</span>
                {product.stockCount > 0 && (
                  <span className="text-gray-600 ml-2">({product.stockCount} units available)</span>
                )}
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="font-medium">Out of Stock</span>
              </div>
            )}
          </div>

          {/* Product Description */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Product Description</h2>
            <p className="text-gray-600 leading-relaxed">
              {product.productDescription || 'No description available'}
            </p>
          </div>

          {/* Additional Details */}
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Details</h2>
            <div className="grid grid-cols-2 gap-4">
              {product.category && (
                <div>
                  <span className="text-gray-600">Category:</span>
                  <p className="font-medium text-gray-800">{product.category}</p>
                </div>
              )}
              {product.subCategory && (
                <div>
                  <span className="text-gray-600">Sub Category:</span>
                  <p className="font-medium text-gray-800">{product.subCategory}</p>
                </div>
              )}
              {product.productLife && (
                <div>
                  <span className="text-gray-600">Product Life:</span>
                  <p className="font-medium text-gray-800">{product.productLife}</p>
                </div>
              )}
              {product.productType && (
                <div>
                  <span className="text-gray-600">Type:</span>
                  <p className="font-medium text-gray-800">{product.productType}</p>
                </div>
              )}
              {product.productIsFoodItem && (
                <div>
                  <span className="text-gray-600">Food Type:</span>
                  <p className="font-medium text-gray-800">{product.productIsFoodItem}</p>
                </div>
              )}
            </div>
          </div>

          {/* Add to Cart Section */}
          {product.isAvailable && (
            <div className="pt-6">
              <div className="flex items-center space-x-4">
                <button className="flex-1 bg-[#4CAF50] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#45a649] transition-colors">
                  Add to Cart
                </button>
                <button className="bg-gray-100 p-4 rounded-full hover:bg-gray-200 transition-colors">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 