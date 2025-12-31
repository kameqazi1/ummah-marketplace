'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX, FiSearch, FiHeart, FiUser, FiMapPin } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-emerald-600">
              Ummah
            </div>
            <span className="text-gray-600 hidden sm:inline">Marketplace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/businesses" className="text-gray-700 hover:text-emerald-600 transition">
              Businesses
            </Link>
            <Link href="/listings" className="text-gray-700 hover:text-emerald-600 transition">
              Listings
            </Link>
            <Link href="/map" className="flex items-center text-gray-700 hover:text-emerald-600 transition">
              <FiMapPin className="mr-1" />
              Map View
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search businesses, services..."
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/favorites" className="text-gray-700 hover:text-emerald-600 transition">
              <FiHeart className="text-xl" />
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-emerald-600 transition">
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
            >
              Sign Up
            </Link>
            <Link
              href="/add-business"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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
