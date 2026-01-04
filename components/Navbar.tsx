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
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <FiStar className="text-white text-xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">Ummah</span>
              <span className="text-[10px] text-stone-500 -mt-1 hidden sm:block">Marketplace</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/businesses" className="px-5 py-2.5 text-stone-700 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-all font-medium">
              Businesses
            </Link>
            <Link href="/listings" className="px-5 py-2.5 text-stone-700 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-all font-medium">
              Listings
            </Link>
            <Link href="/map" className="px-5 py-2.5 flex items-center text-stone-700 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-all font-medium">
              <FiMapPin className="mr-2" />
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
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/favorites" className="p-3 text-stone-700 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-all">
              <FiHeart className="text-xl" />
            </Link>
            <Link href="/login" className="px-5 py-2.5 text-stone-700 hover:text-teal-700 font-medium transition-all">
              Login
            </Link>
            <Link
              href="/register"
              className="px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 font-medium"
            >
              Sign Up
            </Link>
            <Link
              href="/add-business"
              className="px-6 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 font-medium"
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
          <div className="md:hidden py-6 border-t">
            <div className="flex flex-col space-y-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-3 pl-11 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
                <FiSearch className="absolute left-4 top-4 text-gray-400" />
              </div>
              <Link href="/businesses" className="text-stone-700 hover:text-teal-700 py-3 text-lg font-medium">
                Businesses
              </Link>
              <Link href="/listings" className="text-stone-700 hover:text-teal-700 py-3 text-lg font-medium">
                Listings
              </Link>
              <Link href="/map" className="text-stone-700 hover:text-teal-700 py-3 text-lg font-medium">
                Map View
              </Link>
              <Link href="/favorites" className="text-stone-700 hover:text-teal-700 py-3 text-lg font-medium">
                Favorites
              </Link>
              <Link href="/login" className="text-stone-700 hover:text-teal-700 py-3 text-lg font-medium">
                Login
              </Link>
              <Link
                href="/register"
                className="px-6 py-3.5 mt-2 bg-teal-600 text-white rounded-lg text-center font-medium"
              >
                Sign Up
              </Link>
              <Link
                href="/add-business"
                className="px-6 py-3.5 bg-amber-600 text-white rounded-lg text-center font-medium"
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
