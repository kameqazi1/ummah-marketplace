import Link from 'next/link';
import CategoryGrid from '@/components/CategoryGrid';
import { FiMapPin, FiSearch, FiTrendingUp, FiCheckCircle, FiUsers, FiShield } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-blue-600 text-white py-24 md:py-32">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
              <FiCheckCircle className="text-emerald-200" />
              <span className="text-sm font-medium">Trusted by the Ummah</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
              Discover <span className="text-emerald-200">Muslim-Owned</span>
              <br />
              Businesses Nearby
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-emerald-50 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
              Connect with trusted services, goods, and trades from your local Muslim community
            </p>

            {/* Modern Search Bar */}
            <div className="bg-white rounded-2xl shadow-2xl p-3 flex flex-col md:flex-row gap-3 animate-scale-in max-w-3xl mx-auto" style={{ animationDelay: '0.4s' }}>
              <div className="flex-1 flex items-center px-4 py-1 bg-gray-50 rounded-xl">
                <FiSearch className="text-gray-400 mr-3 text-xl" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full py-3 outline-none text-gray-900 bg-transparent font-medium placeholder:text-gray-400"
                />
              </div>
              <div className="flex-1 flex items-center px-4 py-1 bg-gray-50 rounded-xl">
                <FiMapPin className="text-gray-400 mr-3 text-xl" />
                <input
                  type="text"
                  placeholder="City or ZIP code"
                  className="w-full py-3 outline-none text-gray-900 bg-transparent font-medium placeholder:text-gray-400"
                />
              </div>
              <button className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-8 py-4 rounded-xl hover:from-emerald-700 hover:to-emerald-600 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Search
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-4xl md:text-5xl font-bold mb-2">1,000+</div>
                <div className="text-emerald-100 text-sm md:text-base">Businesses</div>
              </div>
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-emerald-100 text-sm md:text-base">Categories</div>
              </div>
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
                <div className="text-emerald-100 text-sm md:text-base">Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fafafa"/>
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Explore</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-2">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find what you need from our diverse range of Muslim-owned businesses
            </p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 justify-center">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FiShield className="text-2xl text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Verified Businesses</h3>
                <p className="text-gray-600 text-sm">All businesses are verified by our team</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FiUsers className="text-2xl text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Community Driven</h3>
                <p className="text-gray-600 text-sm">Built for Muslims, by Muslims</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                <FiCheckCircle className="text-2xl text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Trusted Reviews</h3>
                <p className="text-gray-600 text-sm">Real feedback from real customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Simple Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-2">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                  <FiSearch className="text-4xl text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center font-bold text-emerald-700">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Search</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse or search for Muslim-owned businesses and services in your area
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                  <FiMapPin className="text-4xl text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-700">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Discover</h3>
              <p className="text-gray-600 leading-relaxed">
                View detailed profiles, reviews, and ratings from the community
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow">
                  <FiTrendingUp className="text-4xl text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center font-bold text-purple-700">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Connect</h3>
              <p className="text-gray-600 leading-relaxed">
                Contact businesses directly and support the Ummah
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-500 to-blue-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Own a Business?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-emerald-50 max-w-2xl mx-auto">
            Join our growing community and reach thousands of potential customers
          </p>
          <Link
            href="/add-business"
            className="inline-block px-10 py-5 bg-white text-emerald-600 rounded-2xl hover:bg-gray-50 transition-all font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
          >
            Add Your Business Free
          </Link>
        </div>
      </section>
    </div>
  );
}
