'use client';

import { useState } from 'react';
import {
  FiUsers,
  FiBriefcase,
  FiTrendingUp,
  FiCheckCircle,
  FiClock,
  FiXCircle,
} from 'react-icons/fi';

export default function AdminDashboard() {
  const [scrapingUrl, setScrapingUrl] = useState('');
  const [scrapingCategory, setScrapingCategory] = useState('');
  const [scrapingStatus, setScrapingStatus] = useState<string>('');

  const handleScraping = async () => {
    try {
      setScrapingStatus('Scraping in progress...');
      const token = localStorage.getItem('token');

      const response = await fetch('/api/admin/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          url: scrapingUrl,
          category: scrapingCategory,
          defaultUserId: 'system-user-id', // Replace with actual system user
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setScrapingStatus(
          `Success! Created ${data.created} businesses, ${data.failed} failed.`
        );
      } else {
        setScrapingStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setScrapingStatus('Error during scraping');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Users</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">1,234</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FiUsers className="text-2xl text-blue-600" />
              </div>
            </div>
            <p className="text-green-600 text-sm mt-2">+12% from last month</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Businesses</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">567</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <FiBriefcase className="text-2xl text-emerald-600" />
              </div>
            </div>
            <p className="text-green-600 text-sm mt-2">+8% from last month</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending Approvals</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">23</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FiClock className="text-2xl text-yellow-600" />
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-2">Requires attention</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Monthly Growth</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">15%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FiTrendingUp className="text-2xl text-purple-600" />
              </div>
            </div>
            <p className="text-green-600 text-sm mt-2">On track</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Web Scraping */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Web Scraping</h2>
            <p className="text-gray-600 mb-4">
              Automatically import businesses from external directories
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Directory URL
                </label>
                <input
                  type="url"
                  value={scrapingUrl}
                  onChange={(e) => setScrapingUrl(e.target.value)}
                  placeholder="https://example-directory.com/businesses"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={scrapingCategory}
                  onChange={(e) => setScrapingCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select category</option>
                  <option value="Home Services">Home Services</option>
                  <option value="Professional Services">Professional Services</option>
                  <option value="Food & Catering">Food & Catering</option>
                  <option value="Education">Education</option>
                  <option value="Wedding Services">Wedding Services</option>
                </select>
              </div>

              <button
                onClick={handleScraping}
                disabled={!scrapingUrl || !scrapingCategory}
                className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
              >
                Start Scraping
              </button>

              {scrapingStatus && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">{scrapingStatus}</p>
                </div>
              )}
            </div>
          </div>

          {/* Pending Approvals */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Pending Approvals</h2>
            <p className="text-gray-600 mb-4">Review and approve new business listings</p>

            <div className="space-y-3">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Al-Barakah Halal Market</h3>
                    <p className="text-sm text-gray-600">Food & Catering</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                    Pending
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  123 Main St, Fremont, CA 94539
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-1.5 bg-emerald-600 text-white rounded text-sm hover:bg-emerald-700 flex items-center justify-center gap-1">
                    <FiCheckCircle />
                    Approve
                  </button>
                  <button className="flex-1 px-3 py-1.5 border border-red-600 text-red-600 rounded text-sm hover:bg-red-50 flex items-center justify-center gap-1">
                    <FiXCircle />
                    Reject
                  </button>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">Islamic Learning Center</h3>
                    <p className="text-sm text-gray-600">Education</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                    Pending
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  456 Oak Ave, San Jose, CA 95110
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-1.5 bg-emerald-600 text-white rounded text-sm hover:bg-emerald-700 flex items-center justify-center gap-1">
                    <FiCheckCircle />
                    Approve
                  </button>
                  <button className="flex-1 px-3 py-1.5 border border-red-600 text-red-600 rounded text-sm hover:bg-red-50 flex items-center justify-center gap-1">
                    <FiXCircle />
                    Reject
                  </button>
                </div>
              </div>

              <button className="w-full px-4 py-2 text-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-50 transition">
                View All Pending
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/admin/users"
              className="p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition text-center"
            >
              <FiUsers className="text-2xl mx-auto mb-2 text-gray-600" />
              <p className="text-sm font-medium">Manage Users</p>
            </a>
            <a
              href="/admin/businesses"
              className="p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition text-center"
            >
              <FiBriefcase className="text-2xl mx-auto mb-2 text-gray-600" />
              <p className="text-sm font-medium">Manage Businesses</p>
            </a>
            <a
              href="/admin/categories"
              className="p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition text-center"
            >
              <FiTrendingUp className="text-2xl mx-auto mb-2 text-gray-600" />
              <p className="text-sm font-medium">Categories</p>
            </a>
            <a
              href="/admin/settings"
              className="p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition text-center"
            >
              <FiCheckCircle className="text-2xl mx-auto mb-2 text-gray-600" />
              <p className="text-sm font-medium">Settings</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
