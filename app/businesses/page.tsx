'use client';

import { useState, useEffect } from 'react';
import BusinessCard from '@/components/BusinessCard';
import { FiFilter, FiGrid, FiList, FiMapPin } from 'react-icons/fi';
import Link from 'next/link';

interface Business {
  id: string;
  name: string;
  description?: string;
  category: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  logo?: string;
  rating: number;
  reviewCount: number;
  halalCertified: boolean;
  verified: boolean;
}

export default function BusinessesPage() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    category: '',
    city: '',
    halalCertified: false,
    verified: false,
  });

  useEffect(() => {
    fetchBusinesses();
  }, [filters]);

  const fetchBusinesses = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filters.category) params.append('category', filters.category);
      if (filters.city) params.append('city', filters.city);
      if (filters.halalCertified) params.append('halalCertified', 'true');
      if (filters.verified) params.append('verified', 'true');

      const response = await fetch(`/api/businesses?${params.toString()}`);
      const data = await response.json();
      setBusinesses(data.businesses || []);
    } catch (error) {
      console.error('Error fetching businesses:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Browse Businesses</h1>
              <p className="text-gray-600 mt-1">
                Discover Muslim-owned businesses in your community
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/map"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
              >
                <FiMapPin />
                Map View
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-6 sticky top-20">
              <div className="flex items-center gap-2 mb-4">
                <FiFilter className="text-gray-600" />
                <h2 className="text-lg font-semibold">Filters</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">All Categories</option>
                  <option value="Home Services">Home Services</option>
                  <option value="Professional Services">Professional Services</option>
                  <option value="Food & Catering">Food & Catering</option>
                  <option value="Education">Education</option>
                  <option value="Wedding Services">Wedding Services</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Health & Wellness">Health & Wellness</option>
                </select>
              </div>

              {/* City Filter */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  value={filters.city}
                  onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                  placeholder="Enter city"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Checkbox Filters */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.halalCertified}
                    onChange={(e) => setFilters({ ...filters, halalCertified: e.target.checked })}
                    className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-700">Halal Certified</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.verified}
                    onChange={(e) => setFilters({ ...filters, verified: e.target.checked })}
                    className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-700">Verified Only</span>
                </label>
              </div>

              <button
                onClick={() => setFilters({ category: '', city: '', halalCertified: false, verified: false })}
                className="w-full mt-6 px-4 py-2 text-sm text-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-50 transition"
              >
                Clear Filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* View Mode Toggle */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {loading ? 'Loading...' : `${businesses.length} businesses found`}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  <FiGrid />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-600'}`}
                >
                  <FiList />
                </button>
              </div>
            </div>

            {/* Businesses Grid */}
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-emerald-600 border-r-transparent"></div>
                <p className="mt-4 text-gray-600">Loading businesses...</p>
              </div>
            ) : businesses.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-gray-600 text-lg">No businesses found</p>
                <p className="text-gray-500 mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
                {businesses.map((business) => (
                  <BusinessCard key={business.id} {...business} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
