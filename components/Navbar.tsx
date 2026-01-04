'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSearch, FiHeart, FiUser, FiMapPin, FiStar } from 'react-icons/fi';

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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg'
          : 'bg-white/80 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <FiStar className="text-white text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">Ummah</span>
              <span className="text-[10px] text-gray-500 -mt-1 hidden sm:block">Marketplace</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/businesses" className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all font-medium">
              Businesses
            </Link>
            <Link href="/listings" className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all font-medium">
              Listings
            </Link>
            <Link href="/map" className="px-4 py-2 flex items-center text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all font-medium">
              <FiMapPin className="mr-1.5" />
              Map View
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search businesses, services..."
                className="w-full px-4 py-2.5 pl-11 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all bg-white/50"
              />
              <FiSearch className="absolute left-4 top-3.5 text-gray-400" />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/favorites" className="p-2.5 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
              <FiHeart className="text-xl" />
            </Link>
            <Link href="/login" className="px-4 py-2.5 text-gray-700 hover:text-emerald-600 font-medium transition-all">
              Login
            </Link>
            <Link
              href="/register"
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
            >
              Sign Up
            </Link>
            <Link
              href="/add-business"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
            >
              Add Business
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
              <Link href="/businesses" className="text-gray-700 hover:text-emerald-600 py-2">
                Businesses
              </Link>
              <Link href="/listings" className="text-gray-700 hover:text-emerald-600 py-2">
                Listings
              </Link>
              <Link href="/map" className="text-gray-700 hover:text-emerald-600 py-2">
                Map View
              </Link>
              <Link href="/favorites" className="text-gray-700 hover:text-emerald-600 py-2">
                Favorites
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-emerald-600 py-2">
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-center"
              >
                Sign Up
              </Link>
              <Link
                href="/add-business"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg text-center"
              >
                Add Business
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
