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
