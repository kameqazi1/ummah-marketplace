import Link from 'next/link';
import CategoryGrid from '@/components/CategoryGrid';
import { FiMapPin, FiSearch, FiTrendingUp } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Muslim-Owned Businesses in Your Community
            </h1>
            <p className="text-xl mb-8 text-emerald-50">
              Connect with trusted services, goods, and trades from the Ummah
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-4">
                <FiSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full py-3 outline-none text-gray-900"
                />
              </div>
              <div className="flex-1 flex items-center px-4 border-t md:border-t-0 md:border-l border-gray-200">
                <FiMapPin className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full py-3 outline-none text-gray-900"
                />
              </div>
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 transition font-semibold">
                Search
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div>
                <div className="text-3xl font-bold">1,000+</div>
                <div className="text-emerald-100">Businesses</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-emerald-100">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-emerald-100">Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600">
              Find what you need from our diverse range of Muslim-owned businesses
            </p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Businesses
            </h2>
            <Link href="/businesses" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              View All
            </Link>
          </div>
          <div className="text-center text-gray-500 py-8">
            Featured businesses will appear here
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiSearch className="text-3xl text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search</h3>
              <p className="text-gray-600">
                Browse or search for Muslim-owned businesses and services in your area
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Discover</h3>
              <p className="text-gray-600">
                View detailed profiles, reviews, and ratings from the community
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-600">
                Contact businesses directly and support the Ummah
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Own a Business?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Join our growing community and reach thousands of potential customers
          </p>
          <Link
            href="/add-business"
            className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
          >
            Add Your Business
          </Link>
        </div>
      </section>
    </div>
  );
}
