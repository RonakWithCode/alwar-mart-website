import Link from "next/link";

export const metadata = {
  title: 'Terms & Conditions | Alwar Mart',
  description: 'Read our terms and conditions for using Alwar Mart services. Learn about our policies, user responsibilities, and service commitments.',
  openGraph: {
    title: 'Terms & Conditions | Alwar Mart',
    description: 'Our terms of service and user agreement.',
    type: 'website',
    url: 'https://alwarmart.in/terms-and-conditions',
    siteName: 'Alwar Mart',
  }
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 md:pt-32">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4CAF50]/10 to-[#45a649]/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-600">Last updated: February 8, 2024</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Welcome to Alwar Mart! These Terms & Conditions govern your use of our website and mobile app. 
              By accessing or using our services, you agree to these terms.
            </p>
          </div>

          {/* General Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. General Information</h2>
            <div className="space-y-4">
              <p className="text-gray-600"><strong>Company Name:</strong> Alwar Mart</p>
              <p className="text-gray-600"><strong>Service:</strong> Online grocery shopping with 10-minute delivery in Alwar, Rajasthan (maximum delivery time: 45 minutes to 1 hour).</p>
              <p className="text-gray-600 italic">
                This timing is set based on psychological principles to ensure customer satisfaction by creating 
                a balance between high expectations and real-time logistics.
              </p>
            </div>
          </section>

          {/* User Accounts */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. User Accounts & Responsibilities</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Requirements</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Users must create an account using a phone number, OTP verification, and name</li>
                  <li>Users must provide accurate and up-to-date personal details</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Actions</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Fake orders</li>
                  <li>Multiple cancellations</li>
                  <li>Misuse of discounts</li>
                  <li>Abusive behavior toward delivery staff</li>
                  <li>Any fraudulent activities</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  If a user violates these terms, Alwar Mart reserves the right to suspend their account permanently.
                </p>
              </div>
            </div>
          </section>

          {/* Orders & Payments */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Orders, Payments & Refunds</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Methods</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>UPI</li>
                  <li>Debit/credit cards</li>
                  <li>Cash on Delivery (COD)</li>
                  <li>Wallet payments</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Order Cancellation</h3>
                <p className="text-gray-600">
                  Users can cancel an order within 60 seconds after placing it. After this, cancellation is not allowed.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Refund Policy</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Refunds will be processed if the delivery boy fails to deliver the product</li>
                  <li>No refund if customer is unavailable at delivery location</li>
                  <li>Video proof required for refund claims (missing/damaged products)</li>
                  <li>Deliveries are recorded using GoPro cameras and CCTV footage</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-[#4CAF50] to-[#45a649] rounded-2xl p-8 text-white mt-12">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Have Questions?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@alwarmart.in
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    7023941072
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link 
                    href="/support"
                    className="block px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                  >
                    Support Center
                  </Link>
                  <Link
                    href="/reportbug"
                    className="block px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                  >
                    Report an Issue
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
