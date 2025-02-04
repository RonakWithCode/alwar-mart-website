import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';

const geist = Geist({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#4CAF50'
};

export const metadata = {
  metadataBase: new URL('https://alwarmart.in'),
  title: {
    default: 'Alwar Mart - Fastest Grocery Delivery in Alwar',
    template: '%s | Alwar Mart'
  },
  description: 'Order groceries online in Alwar with 30-minute delivery. Fresh products, best prices, and widest selection.',
  keywords: 'grocery delivery Alwar, online grocery, Alwar Mart, quick delivery, vegetables, fruits, grocery store near me , fresh vegetables, fresh fruits, fresh vegetables online, fresh fruits online, online grocery store, online grocery shopping, online grocery delivery, online grocery app, online grocery, online grocery app in near me , online grocery app in Ashok general store, online grocery app in Malviya Nagar, Alwar, online grocery app in kati ghati, grocery app in Alwar, online grocery app in Rajasthan, online grocery app in India, online grocery app in alwar',
  verification: {
    google: 'T-O-FaNv6bqnYxMcJZiapacJ1P54QeAlkBr1M26P_W0'
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Alwar Mart - Online Grocery Shopping in Alwar',
    description: 'Order groceries online in Alwar with 30-minute delivery. Fresh products, best prices, and widest selection.',
    url: 'https://alwarmart.in',
    siteName: 'Alwar Mart',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alwar Mart - Fastest Grocery Delivery in Alwar',
    description: 'Order groceries online in Alwar with 30-minute delivery. Fresh products, best prices, and widest selection.',
    images: ['/alwar-mart-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/logo-512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/maskable-icon.png'
      }
    ]
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <Navbar />
        {children}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Alwar Mart",
            "url": "https://alwarmart.in",
            "logo": "https://alwarmart.in/alwar-mart-logo.png",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61572771453179",
              "https://x.com/alwarmart_store",
              "https://instagram.com/alwarmart.store"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "[Your Phone]",
              "contactType": "customer service",
              "areaServed": "Alwar",
              "availableLanguage": ["English", "Hindi"]
            }
          })}
        </script>
      </body>
    </html>
  );
}
