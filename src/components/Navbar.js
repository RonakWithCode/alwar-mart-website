"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 bg-white/90 backdrop-blur-md shadow-lg' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Alwar Mart Logo"
              width={isScrolled ? 60 : 70}
              height={isScrolled ? 50 : 60}
              className="transition-all duration-500"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`nav-link font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-[#4CAF50]' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                {item}
              </Link>
            ))}
            <button 
              className={`download-button ${
                isScrolled 
                  ? 'bg-gradient-to-r from-[#FFD700] to-[#4CAF50] text-white hover:shadow-lg' 
                  : 'bg-white text-[#4CAF50] hover:bg-opacity-90'
              }`}
            >
              <span className="flex items-center">
                Download App
                <svg 
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            <span className="sr-only">Menu</span>
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="mt-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block px-4 py-3 text-gray-800 hover:text-[#4CAF50] font-medium 
                         hover:bg-gray-50 rounded-xl transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="px-4 py-3">
              <button className="w-full download-button bg-gradient-to-r from-[#FFD700] to-[#4CAF50] text-white">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 