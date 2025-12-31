import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Ummah Marketplace</h3>
            <p className="text-sm text-gray-400">
              Connecting the Muslim community with trusted businesses, services, and trades.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-emerald-500 transition">
                <FiFacebook />
              </a>
              <a href="#" className="hover:text-emerald-500 transition">
                <FiTwitter />
              </a>
              <a href="#" className="hover:text-emerald-500 transition">
                <FiInstagram />
              </a>
              <a href="#" className="hover:text-emerald-500 transition">
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/businesses" className="hover:text-emerald-500 transition">
                  Browse Businesses
                </Link>
              </li>
              <li>
                <Link href="/listings" className="hover:text-emerald-500 transition">
                  All Listings
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-emerald-500 transition">
                  Map View
                </Link>
              </li>
              <li>
                <Link href="/add-business" className="hover:text-emerald-500 transition">
                  Add Your Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/services" className="hover:text-emerald-500 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/category/for-sale" className="hover:text-emerald-500 transition">
                  For Sale
                </Link>
              </li>
              <li>
                <Link href="/category/housing" className="hover:text-emerald-500 transition">
                  Housing
                </Link>
              </li>
              <li>
                <Link href="/category/jobs" className="hover:text-emerald-500 transition">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/category/community" className="hover:text-emerald-500 transition">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-emerald-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-500 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-500 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-500 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-500 transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ummah Marketplace. All rights reserved.</p>
          <p className="mt-2">Built with trust and service for the Muslim community.</p>
        </div>
      </div>
    </footer>
  );
}
