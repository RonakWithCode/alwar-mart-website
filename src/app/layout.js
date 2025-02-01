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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
