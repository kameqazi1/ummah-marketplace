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
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200 card-hover">
      <Link href={`/business/${id}`}>
        {/* Image/Logo */}
        <div className="relative h-56 bg-gradient-to-br from-emerald-500 via-emerald-400 to-blue-500 flex items-center justify-center overflow-hidden">
          {logo ? (
            <img src={logo} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <div className="text-white text-6xl font-bold group-hover:scale-110 transition-transform duration-300">
              {name.charAt(0)}
            </div>
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Link>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <Link href={`/business/${id}`}>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-1 mb-2">
                {name}
              </h3>
            </Link>
            <p className="text-base text-gray-500 font-medium">{category}</p>
          </div>
          <button className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
            <FiHeart className="text-xl" />
          </button>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {verified && (
            <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-semibold rounded-full">
              ✓ Verified
            </span>
          )}
          {halalCertified && (
            <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-semibold rounded-full">
              ✓ Halal
            </span>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="text-base text-gray-600 mb-5 line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center mb-5 pb-5 border-b border-gray-100">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`text-base ${
                    i < Math.floor(rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-base font-bold text-gray-900">{rating.toFixed(1)}</span>
            <span className="ml-1 text-base text-gray-500">
              ({reviewCount})
            </span>
          </div>
        )}

        {/* Location */}
        <div className="flex items-start text-base text-gray-600 mb-4 gap-2">
          <FiMapPin className="mt-0.5 flex-shrink-0 text-emerald-600 text-lg" />
          <span className="line-clamp-1">{address}, {city}, {state}</span>
        </div>

        {/* Phone */}
        <div className="flex items-center text-base text-gray-600 mb-6 gap-2">
          <FiPhone className="flex-shrink-0 text-emerald-600 text-lg" />
          <a href={`tel:${phone}`} className="hover:text-emerald-600 font-medium transition">
            {phone}
          </a>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href={`/business/${id}`}
            className="flex-1 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-center rounded-xl hover:from-emerald-700 hover:to-emerald-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-semibold text-base"
          >
            View Details
          </Link>
          <a
            href={`tel:${phone}`}
            className="px-5 py-3.5 border-2 border-emerald-600 text-emerald-600 rounded-xl hover:bg-emerald-50 transition-all font-semibold flex items-center justify-center"
          >
            <FiPhone className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
