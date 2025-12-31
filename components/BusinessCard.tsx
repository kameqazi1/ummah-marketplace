import Link from 'next/link';
import { FiMapPin, FiPhone, FiStar, FiHeart, FiExternalLink } from 'react-icons/fi';

interface BusinessCardProps {
  id: string;
  name: string;
  description?: string;
  category: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  logo?: string;
  rating?: number;
  reviewCount?: number;
  halalCertified?: boolean;
  verified?: boolean;
}

export default function BusinessCard({
  id,
  name,
  description,
  category,
  address,
  city,
  state,
  phone,
  logo,
  rating = 0,
  reviewCount = 0,
  halalCertified,
  verified,
}: BusinessCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <Link href={`/business/${id}`}>
        {/* Image/Logo */}
        <div className="h-48 bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
          {logo ? (
            <img src={logo} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="text-white text-4xl font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <Link href={`/business/${id}`}>
              <h3 className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition">
                {name}
              </h3>
            </Link>
            <p className="text-sm text-gray-600">{category}</p>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition">
            <FiHeart className="text-xl" />
          </button>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {verified && (
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              Verified
            </span>
          )}
          {halalCertified && (
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              Halal Certified
            </span>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-700 mb-3 line-clamp-2">
            {description}
          </p>
        )}

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center mb-3">
            <FiStar className="text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-semibold">{rating.toFixed(1)}</span>
            <span className="ml-1 text-sm text-gray-600">
              ({reviewCount} reviews)
            </span>
          </div>
        )}

        {/* Location */}
        <div className="flex items-start text-sm text-gray-600 mb-2">
          <FiMapPin className="mt-1 mr-2 flex-shrink-0" />
          <span>{address}, {city}, {state}</span>
        </div>

        {/* Phone */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <FiPhone className="mr-2" />
          <a href={`tel:${phone}`} className="hover:text-emerald-600 transition">
            {phone}
          </a>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/business/${id}`}
            className="flex-1 px-4 py-2 bg-emerald-600 text-white text-center rounded-lg hover:bg-emerald-700 transition text-sm font-medium"
          >
            View Details
          </Link>
          <a
            href={`tel:${phone}`}
            className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition text-sm font-medium"
          >
            <FiPhone />
          </a>
        </div>
      </div>
    </div>
  );
}
