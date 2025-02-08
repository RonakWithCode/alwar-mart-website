import Link from "next/link";

export const metadata = {
  title: 'Open Source Licenses | Alwar Mart',
  description: 'View all open source libraries and their licenses used in Alwar Mart application.',
  openGraph: {
    title: 'Open Source Licenses | Alwar Mart',
    description: 'Our open source acknowledgments and licenses.',
    type: 'website',
    url: 'https://alwarmart.in/open-source',
    siteName: 'Alwar Mart',
  }
};

const licenses = [
  {
    name: 'OTPless',
    version: '2.5.3',
    author: 'OTPless Tech',
    license: 'MIT License',
    website: 'https://otpless.com',
    repository: 'https://github.com/otpless-tech/otpless-android-sdk'
  },
  {
    name: 'AndroidX Libraries',
    components: ['AppCompat', 'ConstraintLayout', 'Activity', 'GridLayout', 'Preference', 'SwipeRefreshLayout'],
    license: 'Apache License 2.0',
    website: 'https://developer.android.com/jetpack/androidx'
  },
  {
    name: 'Material Design Components',
    version: '1.12.0',
    author: 'Google',
    license: 'Apache License 2.0',
    website: 'https://material.io/develop/android',
    repository: 'https://github.com/material-components/material-components-android'
  },
  {
    name: 'Firebase Services',
    components: ['Authentication', 'Firestore', 'Realtime Database', 'Storage', 'Messaging'],
    license: 'Apache License 2.0',
    website: 'https://firebase.google.com',
    repository: 'https://github.com/firebase/firebase-android-sdk'
  },
  {
    name: 'Google Play Services',
    components: ['Maps', 'Location', 'Places API'],
    license: 'Google APIs Terms of Service',
    website: 'https://developers.google.com/android/guides/setup'
  },
  {
    name: 'Navigation Component',
    version: '2.7.6',
    license: 'Apache License 2.0',
    website: 'https://developer.android.com/guide/navigation',
    repository: 'https://github.com/android/architecture-components-samples'
  },
  {
    name: 'Room Database',
    version: '2.6.1',
    license: 'Apache License 2.0',
    website: 'https://developer.android.com/training/data-storage/room',
    repository: 'https://github.com/android/architecture-components-samples'
  },
  {
    name: 'Glide',
    version: '4.16.0',
    author: 'Bumptech',
    license: 'BSD, MIT, Apache 2.0',
    website: 'https://bumptech.github.io/glide/',
    repository: 'https://github.com/bumptech/glide'
  },
  {
    name: 'PhotoView',
    version: '2.3.0',
    author: 'Chris Banes',
    license: 'MIT License',
    repository: 'https://github.com/Baseflow/PhotoView'
  },
  {
    name: 'Facebook Shimmer',
    version: '0.5.0',
    author: 'Facebook',
    license: 'BSD License',
    website: 'https://facebook.github.io/shimmer-android/',
    repository: 'https://github.com/facebook/shimmer-android'
  },
  {
    name: 'OkHttp',
    version: '4.12.0',
    author: 'Square Inc.',
    license: 'Apache License 2.0',
    website: 'https://square.github.io/okhttp/',
    repository: 'https://github.com/square/okhttp'
  },
  {
    name: 'TinyCart',
    version: '1.0.1',
    author: 'Hishd',
    license: 'MIT License',
    repository: 'https://github.com/hishd/TinyCart'
  },
  {
    name: 'MultiDex Support',
    version: '2.0.1',
    license: 'Apache License 2.0',
    website: 'https://developer.android.com/studio/build/multidex',
    repository: 'https://android.googlesource.com/platform/frameworks/multidex'
  },
  {
    name: 'Testing Libraries',
    components: ['JUnit (4.13.2)', 'Espresso (3.6.1)'],
    license: 'Eclipse Public License 1.0, Apache License 2.0',
    website: 'https://developer.android.com/training/testing',
    repository: 'https://github.com/junit-team/junit4'
  }
];

export default function OpenSource() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 md:pt-32">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4CAF50]/10 to-[#45a649]/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Open Source Licenses</h1>
            <p className="text-lg text-gray-600">
              Alwar Mart acknowledges and appreciates the use of various open-source libraries 
              that help make our application possible.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Below is a comprehensive list of all open-source dependencies used in our application, 
              along with their respective licenses and acknowledgments.
            </p>
          </div>

          {/* License Cards */}
          <div className="space-y-8">
            {licenses.map((lib, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{lib.name}</h2>
                    {lib.version && (
                      <p className="text-sm text-[#4CAF50] mt-1">Version {lib.version}</p>
                    )}
                  </div>
                  <span className="px-3 py-1 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-sm whitespace-nowrap">
                    {lib.license}
                  </span>
                </div>
                
                {lib.author && (
                  <p className="text-gray-600 mt-2">Author: {lib.author}</p>
                )}
                
                {lib.components && (
                  <div className="mt-4">
                    <p className="text-gray-700 font-medium mb-2">Components:</p>
                    <div className="flex flex-wrap gap-2">
                      {lib.components.map((component, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-4 flex flex-wrap gap-4">
                  {lib.website && (
                    <a 
                      href={lib.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#4CAF50] hover:text-[#45a649] transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
                        />
                      </svg>
                      Website
                    </a>
                  )}
                  {lib.repository && (
                    <a 
                      href={lib.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#4CAF50] hover:text-[#45a649] transition-colors"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" 
                        />
                      </svg>
                      Repository
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-[#4CAF50] to-[#45a649] rounded-2xl p-8 text-white mt-12">
            <h2 className="text-2xl font-bold mb-6">Questions about Licensing?</h2>
            <p className="mb-6">
              If you have any questions regarding our use of open-source software or licensing, 
              please don&apos;t hesitate to contact us.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                <a href="mailto:support@alwarmart.in" className="hover:underline">
                  support@alwarmart.in
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                <span>7023941072</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
