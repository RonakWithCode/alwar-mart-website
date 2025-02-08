import Link from "next/link";

export const metadata = {
  title: 'Privacy Policy | Alwar Mart',
  description: 'Learn about how Alwar Mart collects, uses, and protects your personal information. We prioritize your privacy and data security.',
  openGraph: {
    title: 'Privacy Policy | Alwar Mart',
    description: 'Our commitment to protecting your privacy and personal information.',
    type: 'website',
    url: 'https://alwarmart.in/privacy-policy',
    siteName: 'Alwar Mart',
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 md:pt-32">
      {/* Hero Section - Keeping this centered for visual appeal */}
      <div className="bg-gradient-to-r from-[#4CAF50]/10 to-[#45a649]/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: February 8, 2024</p>
          </div>
        </div>
      </div>

      {/* Main Content - Left aligned */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              This Privacy Policy describes how Alwar Mart (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares your personal information when you use our website (alwarmart.in) and mobile application (collectively, the &ldquo;Services&rdquo;). By accessing or using our Services, you agree to this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
            </p>
          </div>

          {/* Information Collection */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.1. Personal Information</h3>
                <p className="text-gray-600 mb-4">We collect the following types of personal information:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Delivery addresses and location data</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Account credentials</li>
                  <li>Order history and preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1.2. Automatically Collected Information</h3>
                <p className="text-gray-600 mb-4">When you use our Services, we automatically collect:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, clicks)</li>
                  <li>Location data (with your permission)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1. Core Service Delivery</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Processing and fulfilling orders</li>
                  <li>Managing your account</li>
                  <li>Providing customer support</li>
                  <li>Sending service notifications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2. Service Improvement</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Analyzing usage patterns</li>
                  <li>Debugging and fixing issues</li>
                  <li>Developing new features</li>
                  <li>Personalizing user experience</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Data Sharing and Security</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1. Third-Party Service Providers</h3>
                <p className="text-gray-600">We share data with trusted service providers for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Payment processing</li>
                  <li>Delivery services</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Customer support tools</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2. Security Measures</h3>
                <p className="text-gray-600">We implement security measures including:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data storage practices</li>
                </ul>
              </div>
            </div>
          </div>

          {/* User Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Your Rights and Choices</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1. Access and Control</h3>
                <p className="text-gray-600">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request data deletion</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2. Account Deletion</h3>
                <p className="text-gray-600">
                  You can request account deletion through our website at www.alwarmart.in/deleting-account. 
                  The process typically takes 3-4 business days to complete.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section - Keeping this styled differently */}
          <div className="bg-gradient-to-r from-[#4CAF50] to-[#45a649] rounded-2xl p-8 text-white mt-12">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Have Questions?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    contact@alwarmart.in
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
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
                    href="/deleting-account"
                    className="block px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                  >
                    Account Deletion
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
          </div>
        </div>
      </div>
    </div>
  );
}
