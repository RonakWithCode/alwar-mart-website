export async function generateMetadata({ params }) {
  const category = decodeURIComponent(params.slug);
  
  return {
    title: `${category} - Buy Online at Alwar Mart`,
    description: `Shop ${category} online with 30-minute delivery in Alwar. Fresh products, best prices, and widest selection at Alwar Mart.`,
    keywords: `${category}, grocery delivery, Alwar Mart, online grocery shopping`,
    alternates: {
      canonical: `https://alwarmart.in/category/${params.slug}`,
    },
    openGraph: {
      title: `${category} - Alwar Mart`,
      description: `Shop ${category} online with fast delivery in Alwar`,
      url: `https://alwarmart.in/category/${params.slug}`,
      type: 'website',
    }
  };
} 