import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiStar } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <FiStar className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-white">Ummah</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Connecting the Muslim community with trusted businesses, services, and trades.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-emerald-600 flex items-center justify-center transition-all hover:scale-110">
                <FiFacebook className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-emerald-600 flex items-center justify-center transition-all hover:scale-110">
                <FiTwitter className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-emerald-600 flex items-center justify-center transition-all hover:scale-110">
                <FiInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-emerald-600 flex items-center justify-center transition-all hover:scale-110">
                <FiLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/businesses" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Browse Businesses
                </Link>
              </li>
              <li>
                <Link href="/listings" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  All Listings
                </Link>
              </li>
              <li>
                <Link href="/map" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Map View
                </Link>
              </li>
              <li>
                <Link href="/add-business" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Add Your Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/category/services" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/category/for-sale" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  For Sale
                </Link>
              </li>
              <li>
                <Link href="/category/housing" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Housing
                </Link>
              </li>
              <li>
                <Link href="/category/jobs" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/category/community" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 group-hover:w-2 group-hover:h-2 transition-all"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-600">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-emerald-50 mb-6">Subscribe to get the latest Muslim businesses and community updates</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-emerald-600 rounded-xl hover:bg-gray-100 transition-all font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ummah Marketplace. All rights reserved.</p>
            <p className="text-center">Built with trust and service for the Muslim community 💚</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
