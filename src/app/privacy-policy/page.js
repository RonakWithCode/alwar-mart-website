import Link from "next/link";

export const metadata = {
  title: 'Privacy Policy | Alwar Mart',
  description:
    'Learn how Alwar Mart collects, uses, and protects your personal information in compliance with Google Play guidelines.',
  openGraph: {
    title: 'Privacy Policy | Alwar Mart',
    description:
      'Our commitment to protecting your privacy and data security following best practices and Google Play guidelines.',
    type: 'website',
    url: 'https://alwarmart.in/privacy-policy',
    siteName: 'Alwar Mart',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 md:pt-32">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4CAF50]/10 to-[#45a649]/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: February 8, 2024</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* 1. Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Alwar Mart (“we”, “us”, or “our”) is committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard your information when you
              use our app and website (collectively, the “Services”). This policy is designed to comply
              with Google Play guidelines and best practices.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1. Personal Information</h3>
                <p className="text-gray-600 mb-4">
                  We collect personal information that you provide voluntarily when using our Services, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>
                    Mobile phone number (used for authentication via our OTPLess service managed by Firebase)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2. Delivery Information</h3>
                <p className="text-gray-600 mb-4">
                  To ensure timely delivery of orders, we collect your delivery address and related location data.
                  This information is shared only with our authorized delivery personnel and is used solely for order fulfillment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3. Automatically Collected Information</h3>
                <p className="text-gray-600 mb-4">
                  When you use our Services, we automatically collect device and usage data including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>IP address, browser type, and operating system</li>
                  <li>Usage data such as pages visited, clicks, and time spent</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1. Service Delivery</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Processing and fulfilling orders</li>
                  <li>Managing your account and authenticating via our OTPLess service</li>
                  <li>Providing customer support and service notifications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2. Service Improvement</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Analyzing usage patterns to improve our Services</li>
                  <li>Debugging and resolving technical issues</li>
                  <li>Developing new features and personalizing user experience</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Data Sharing and Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Security</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1. Data Sharing</h3>
                <p className="text-gray-600 mb-4">
                  We do not share your personal information with third-party tracking or marketing services.
                  Your data is only accessible to our internal teams and authorized delivery personnel strictly for order fulfillment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2. Security Measures</h3>
                <p className="text-gray-600 mb-4">
                  We implement robust security measures, including encryption, regular security assessments,
                  and access controls to protect your personal information.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Your Rights and Choices */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights and Choices</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1. Access, Correction, and Deletion</h3>
                <p className="text-gray-600 mb-4">
                  You have the right to access, update, and correct your personal information. If you wish to delete your account,
                  please submit a request through <Link href="https://www.alwarmart.in/account-delete" className="underline">this link</Link>.
                  The deletion process typically takes 3-4 business days.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2. Communication Preferences</h3>
                <p className="text-gray-600 mb-4">
                  You may opt-out of marketing communications at any time; however, essential service notifications will continue.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Children Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our Services are not intended for individuals under the age of 13, and we do not knowingly collect personal information from children.
            </p>
          </section>

          {/* 7. Changes to This Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy periodically. Any changes will be posted on this page along with an updated effective date.
            </p>
          </section>

          {/* 8. Contact Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
            <div className="bg-gradient-to-r from-[#4CAF50] to-[#45a649] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Have Questions or Need Assistance?</h3>
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
          </section>
        </div>
      </div>
    </div>
  );
}
