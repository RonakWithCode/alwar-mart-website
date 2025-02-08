import Link from "next/link";

export const metadata = {
  title: 'Developer Information | Alwar Mart',
  description: 'Learn about Ronosoft Agency, the development team behind Alwar Mart.',
  openGraph: {
    title: 'Developer Information | Alwar Mart',
    description: 'Developed and maintained by Ronosoft Agency',
    type: 'website',
    url: 'https://alwarmart.in/developer-information',
    siteName: 'Alwar Mart',
  }
};

const services = [
  {
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions including social media management, paid advertising campaigns, and brand development strategies. We handle all aspects of online presence and marketing.',
    items: [
      'Social Media Management across all major platforms',
      'Meta & Google Advertising with optimized ROI',
      'TV Ads & Offline Marketing campaigns',
      'Brand Development and Identity Management',
      'Content Strategy and Creation',
      'Marketing Analytics and Reporting'
    ]
  },
  {
    title: 'Development',
    description: 'Full-stack development services focusing on modern technologies and best practices. We ensure scalable, secure, and performant applications.',
    items: [
      'App Development & Maintenance with regular updates',
      'Website Development using latest technologies',
      'API Integration and Development',
      'Performance Optimization and Testing',
      'Database Design and Management',
      'Cloud Infrastructure Setup'
    ]
  },
  {
    title: 'Business Operations',
    description: 'End-to-end business operation management including legal compliance, documentation, and partnership handling.',
    items: [
      'Legal Documentation and Compliance',
      'Business Development Strategy',
      'Partnership Management and Networking',
      'Compliance Handling and Updates',
      'Risk Assessment and Management',
      'Operational Efficiency Optimization'
    ]
  }
];

const policies = [
  {
    title: 'Technical Standards',
    description: 'We maintain high technical standards through rigorous quality control and modern development practices.',
    items: [
      'Data Security Best Practices including encryption and secure storage',
      'Performance Optimization for fast and reliable service',
      'Regular Updates & Maintenance schedules',
      'Code Quality Assurance through automated testing',
      'Continuous Integration and Deployment',
      'Regular Security Audits'
    ]
  },
  {
    title: 'Business Standards',
    description: 'Our business practices focus on transparency, reliability, and customer satisfaction.',
    items: [
      'Compliance Management with all relevant regulations',
      '24/7 Technical Support availability',
      'Comprehensive Documentation Standards',
      'Quality Assurance at every step',
      'Regular Performance Reviews',
      'Customer Feedback Integration'
    ]
  }
];

export default function DeveloperInformation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4CAF50]/10 to-[#45a649]/10 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Developer Information
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Powered by Ronosoft Agency - Your Digital Innovation Partner
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl space-y-8 sm:space-y-12">
          {/* About Section */}
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              About Ronosoft Agency
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Ronosoft Agency, established in 2023, has rapidly emerged as a leading digital solutions provider 
                in Rajasthan. We specialize in developing and maintaining high-performance e-commerce platforms, 
                with Alwar Mart being our flagship project. Our team of over 15 professionals brings together 
                expertise in mobile development, web technologies, digital marketing, and business operations.
              </p>
              <p className="mb-6">
                Our commitment to excellence is reflected in every aspect of our work, from code quality to 
                customer service. We believe in building sustainable, scalable solutions that drive real 
                business growth and user satisfaction. Through our comprehensive approach to digital solutions, 
                we ensure that every project we undertake receives the attention and expertise it deserves.
              </p>
              <p className="mb-6">
                At Ronosoft, we understand the unique challenges of the Indian market and specifically cater 
                to the needs of businesses in Tier 2 and Tier 3 cities. Our solutions are designed to bridge 
                the digital divide while maintaining world-class standards in technology and user experience.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-semibold text-gray-700">Location:</span>
                  <span className="text-gray-600">Alwar, Rajasthan, India</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-semibold text-gray-700">Founded:</span>
                  <span className="text-gray-600">2023</span>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-semibold text-gray-700">Specialization:</span>
                  <span className="text-gray-600">E-commerce Solutions</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="font-semibold text-gray-700">Team Size:</span>
                  <span className="text-gray-600">15+ Professionals</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Services
            </h2>
            <div className="space-y-8 sm:space-y-12">
              {services.map((service, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0 pb-6 sm:pb-8 last:pb-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm sm:text-base text-gray-600">
                        <svg className="w-5 h-5 mr-3 mt-0.5 text-[#4CAF50] flex-shrink-0" 
                             fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Development Policies */}
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Development Policies
            </h2>
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-600 mb-8">
              <p>
                At Ronosoft Agency, we maintain stringent development policies that ensure the highest 
                quality of service delivery. Our policies are designed to protect our clients&apos; interests 
                while maintaining transparency and efficiency in all our operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {policies.map((policy, index) => (
                <div key={index}>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                    {policy.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    {policy.description}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {policy.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm sm:text-base text-gray-600">
                        <svg className="w-5 h-5 mr-3 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Support & Updates */}
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Support & Updates
            </h2>
            <div className="space-y-6">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                At Ronosoft Agency, we understand that maintaining a high-performance e-commerce platform 
                requires constant attention and updates. Our comprehensive support system ensures that 
                Alwar Mart remains at the forefront of technology and user experience. We provide:
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Regular software updates and bug fixes with minimal downtime',
                  '24/7 technical support with guaranteed response times',
                  'Continuous performance monitoring and optimization',
                  'Proactive security patches and updates',
                  'Feature enhancements based on user feedback and market trends',
                  'Comprehensive documentation and training materials',
                  'Regular system health checks and maintenance',
                  'Dedicated support team for critical issues'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-sm sm:text-base text-gray-600">
                    <svg className="w-5 h-5 mr-3 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-gradient-to-r from-[#4CAF50] to-[#45a649] rounded-xl p-4 sm:p-6 md:p-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Business & Collaboration Inquiries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center">
                      <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                        />
                      </svg>
                      <a href="mailto:ronak@ronosoft.com" 
                         className="text-sm sm:text-base hover:underline">
                        ronak@ronosoft.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
                        />
                      </svg>
                      <a href="https://www.ronosoft.com" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:underline">
                        www.ronosoft.com
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                    Office Hours
                  </h3>
                  <p className="text-sm sm:text-base text-white/90">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM (IST)
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                  Let&apos;s Collaborate
                </h3>
                <p className="text-sm sm:text-base text-white/90">
                  For partnerships, collaborations, or development inquiries, 
                  please reach out to us. We&apos;re always open to new 
                  opportunities and innovations.
                </p>
              </div>
            </div>
          </div>

          {/* Attribution Note */}
          <div className="text-sm sm:text-base text-gray-500">
            <p>Developed with ❤️ by Ronosoft Agency</p>
          </div>
        </div>
      </div>
    </div>
  );
}
