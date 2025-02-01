import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';

const geist = Geist({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "Alwar Mart - Fastest Grocery Delivery in Alwar | 30 Min Delivery",
  description: "Order groceries, fruits & vegetables online in Alwar with 30-minute delivery. Fresh products, best prices, and widest selection. Download app now!",
  metadataBase: new URL('https://alwarmart.in'),
  keywords: 'grocery delivery Alwar, online grocery, Alwar Mart, quick delivery, vegetables, fruits, grocery store near me',
  verification: {
    google: 'T-O-FaNv6bqnYxMcJZiapacJ1P54QeAlkBr1M26P_W0',
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
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#4CAF50',
  manifest: '/manifest.json'
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
              "https://facebook.com/alwarmart",
              "https://twitter.com/alwarmart",
              "https://instagram.com/alwarmart"
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
