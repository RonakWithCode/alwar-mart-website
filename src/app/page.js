import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alwar Mart: #1 Grocery Delivery App in Alwar | 30 Min Delivery</title>
        <meta name="description" content="Order groceries, fruits, vegetables & daily essentials from Alwar Mart. ✓30-minute delivery ✓Best prices ✓3000+ products. Serving all areas in Alwar, Rajasthan." />
        <meta name="keywords" content="grocery delivery Alwar, online grocery Alwar, Alwar Mart, quick delivery Alwar, vegetables Alwar, fruits Alwar, grocery store near me" />
        
        {/* Additional SEO meta tags */}
        <meta property="og:title" content="Alwar Mart: #1 Grocery Delivery App in Alwar | 30 Min Delivery" />
        <meta property="og:description" content="Order groceries, fruits, vegetables & daily essentials from Alwar Mart. ✓30-minute delivery ✓Best prices ✓3000+ products. Serving all areas in Alwar, Rajasthan." />
        <meta property="og:image" content="/alwar-mart-banner.jpg" />
        <meta property="og:url" content="https://alwarmart.in" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alwar Mart: #1 Grocery Delivery App in Alwar" />
        <meta name="twitter:description" content="Order groceries, fruits, vegetables & daily essentials with 30-minute delivery in Alwar." />
        
        <link rel="canonical" href="https://alwarmart.in" />
        
        {/* Local SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Alwar Mart",
            "image": "/alwar-mart-logo.png",
            "description": "Fastest grocery delivery service in Alwar with 30-minute delivery guarantee",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "[Your Street Address]",
              "addressLocality": "Alwar",
              "addressRegion": "Rajasthan",
              "postalCode": "[Your Postal Code]",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "[Your Latitude]",
              "longitude": "[Your Longitude]"
            },
            "url": "https://alwarmart.in",
            "telephone": "[Your Phone Number]",
            "priceRange": "₹₹",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "06:00",
              "closes": "23:00"
            }
          })}
        </script>
      </Head>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#4CAF50] via-[#45a649] to-[#FFD700] overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-full bg-grid-pattern opacity-10"></div>
            <div className="absolute top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 lg:px-6">
            {/* Adjusted padding-top for better spacing below navbar */}
            <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen pt-32 lg:pt-28 pb-12 gap-8 lg:gap-16">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 z-10 animate-fadeIn">
                <div className="max-w-xl">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    Fresh Groceries
                    <span className="block mt-2 text-yellow-300">Delivered in 30 Min</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                    Experience the convenience of doorstep delivery with Alwar&apos;s most trusted grocery app. Fresh vegetables, fruits, and daily essentials at your fingertips.
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <button className="group bg-white hover:bg-opacity-95 text-[#4CAF50] px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300">
                      <span className="flex items-center justify-center">
                        Download App
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition duration-300">
                      View Products
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="grid grid-cols-3 gap-6 sm:gap-8">
                    <div className="text-center sm:text-left">
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-1">30k+</div>
                      <div className="text-sm sm:text-base text-white/80">Happy Customers</div>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-1">3000+</div>
                      <div className="text-sm sm:text-base text-white/80">Products</div>
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="text-3xl sm:text-4xl font-bold text-white mb-1">4.8⭐</div>
                      <div className="text-sm sm:text-base text-white/80">App Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - App Preview with adjusted positioning */}
              <div className="w-full lg:w-1/2 relative z-10">
                <div className="relative max-w-md mx-auto lg:mr-0 px-8 sm:px-12 lg:px-0 mt-8 lg:mt-0">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-white/20 rounded-full blur-2xl"></div>
                  
                  {/* Main App Preview - Adjusted size and position */}
                  <div className="relative animate-float">
                    <Image
                      src="/app-mockup.png"
                      alt="Alwar Mart App Preview"
                      width={340}
                      height={680}
                      className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500"
                      priority
                    />
                    
                    {/* Floating Cards - Adjusted positioning */}
                    <div className="absolute -right-4 sm:-right-6 top-1/4 bg-white p-3 sm:p-4 rounded-xl shadow-lg animate-float-delay">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-green-600 font-semibold whitespace-nowrap">30 Min Delivery</span>
                      </div>
                    </div>
                    
                    <div className="absolute -left-4 sm:-left-6 top-2/3 bg-white p-3 sm:p-4 rounded-xl shadow-lg animate-float">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-sm sm:text-base text-yellow-500 font-semibold whitespace-nowrap">Best Prices</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#ffffff" fillOpacity="1" 
                    d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
        </section>

        {/* App Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose <span className="text-[#4CAF50]">Alwar Mart</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of happy customers who make their grocery shopping easier with our app
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Feature Cards */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Lightning Fast Delivery</h3>
                <p className="text-gray-600">Get your groceries delivered in just 30 minutes. No more waiting or planning ahead.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Best Market Prices</h3>
                <p className="text-gray-600">Enjoy wholesale prices and exclusive app-only discounts on all your favorite items.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Guaranteed</h3>
                <p className="text-gray-600">Fresh products, carefully selected and quality checked before delivery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="py-20 bg-gradient-to-br from-[#4CAF50]/10 to-[#FFD700]/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
              {/* Left Side - App Screenshots */}
              <div className="lg:w-1/2 relative">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#4CAF50]/20 to-[#FFD700]/20 rounded-full blur-2xl"></div>
                  <div className="relative flex justify-center">
                    <Image
                      src="/app-screens.png"
                      alt="Alwar Mart App Screenshots"
                      width={400}
                      height={600}
                      className="rounded-3xl shadow-2xl"
                      priority
                    />
                    {/* Floating Elements */}
                    <div className="absolute -right-4 top-1/4 bg-white p-4 rounded-xl shadow-lg animate-float">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">4.8</span>
                        </div>
                        <div>
                          <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                          <div className="text-sm text-gray-600">App Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Download CTA */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Download Our App &
                  <span className="block text-[#4CAF50]">Start Saving Today!</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join over 30,000 happy customers who&apos;re already enjoying:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Exclusive app-only discounts',
                    'Express 30-minute delivery',
                    'Real-time order tracking',
                    'Personalized recommendations',
                    'Easy reordering of favorites'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.08-.46-2.07-.48-3.2 0-1.42.61-2.16.44-3.04-.35C4.43 17.01 3.47 12.11 4.85 9.45c1-1.93 2.77-3.09 4.7-3.16 1.46-.06 2.84.74 3.74.74.89 0 2.57-.92 4.32-.78 1.47.12 2.8.75 3.77 1.86-3.31 2.14-2.77 6.82.55 8.5-.64 1.31-1.48 2.62-2.88 3.67zM12.9 5.88c-.17-1.87 1.52-3.42 3.35-3.42.23 1.98-1.75 3.47-3.35 3.42z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 01-.497-.544c-.599-.952-.568-2.27-.568-3.486V5.844c0-1.217-.031-2.534.568-3.486.14-.223.308-.412.497-.544zm11.321 10.92l2.454-2.453L21.39 12l-4.006 1.719-2.454-2.453 1.832 4.527-1.832-4.527zM5.89.658l10.522 6.03L14.579 12l1.833-5.312L5.89.658z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Loved by Thousands in Alwar
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See what our customers have to say about their experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Testimonial Cards */}
              {[
                {
                  name: "Rahul S.",
                  review: "Best grocery app in Alwar! The 30-minute delivery is a game-changer for busy professionals like me.",
                  rating: 5
                },
                {
                  name: "Priya M.",
                  review: "Fresh vegetables and great prices. I've been using Alwar Mart for 6 months and never had any quality issues.",
                  rating: 5
                },
                {
                  name: "Amit K.",
                  review: "The app is super easy to use and the delivery is always on time. Highly recommended!",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-yellow-400 mb-4">{"⭐".repeat(testimonial.rating)}</div>
                  <p className="text-gray-600 mb-4">{testimonial.review}</p>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Feature Card Component
function FeatureCard({ title, description, icon }) {
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
