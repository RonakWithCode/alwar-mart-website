import Link from 'next/link';

export const metadata = {
  title: 'Return & Refund Policy | Alwar Mart',
  description: 'Alwar Mart return and refund policy. We accept returns for damaged products with proper documentation. Fast delivery across Alwar, Rajasthan.',
  openGraph: {
    title: 'Return & Refund Policy | Alwar Mart',
    description: 'Learn about Alwar Mart\'s return and refund policies. We ensure customer satisfaction with our quality products and services.',
    type: 'website',
    url: 'https://alwarmart.in/return-policy',
    siteName: 'Alwar Mart',
  }
};

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Return & Refund Policy</h1>
          <p className="mt-2 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Alwar Mart</h2>
            <p className="text-gray-600 leading-relaxed">
              Alwar Mart is a cutting-edge e-commerce platform based in Alwar, Rajasthan, specializing in delivering groceries within 40 to 45 minutes. We aim to provide a seamless shopping experience with a wide range of products, ensuring quick and reliable delivery.
            </p>
          </section>

          {/* Return Policy */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Return Policy Overview</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                At Alwar Mart, we maintain a strict no-exchange policy to ensure the quality and freshness of our products. However, we do accept returns under specific circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Products damaged during delivery</li>
                <li>Items received in compromised condition from our warehouse</li>
                <li>Products that don't match the description on our platform</li>
              </ul>
            </div>
          </section>

          {/* Return Process */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Return Process</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-[#4CAF50] pl-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Documentation Required</h3>
                <p className="text-gray-600">
                  To process a return, customers must provide:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>Video recording of the damaged product</li>
                  <li>Clear photographs showing the damage</li>
                  <li>Order number and delivery details</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#4CAF50] pl-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Processing Timeline</h3>
                <p className="text-gray-600">
                  Return requests are typically processed within 2-3 business days after receiving all required documentation.
                </p>
              </div>
            </div>
          </section>

          {/* Service Area & Support */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service Area & Customer Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800">Delivery Coverage</h3>
                <p className="text-gray-600">
                  We provide delivery services across Alwar, Rajasthan, India.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800">Customer Support</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    24/7 Chat Support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Support (9 AM - 5 PM)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">Have Questions?</h3>
                <p className="text-gray-600 mb-4">
                  Our customer service team is here to help you with any questions about our return policy.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center text-[#4CAF50] hover:text-[#45a649] transition-colors"
                >
                  Contact Support
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Quick Support</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Email: support@alwarmart.in</li>
                  <li>Phone: 9414641072</li>
                  <li>WhatsApp: 7023941072</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
