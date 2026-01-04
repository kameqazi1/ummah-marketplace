import Link from 'next/link';
import {
  FiHome,
  FiShoppingBag,
  FiBriefcase,
  FiTool,
  FiUsers,
  FiTruck,
  FiBook,
  FiHeart,
} from 'react-icons/fi';

const categories = [
  {
    name: 'Home Services',
    slug: 'home-services',
    icon: FiHome,
    gradient: 'from-blue-500 to-blue-600',
    bgGradient: 'from-blue-50 to-blue-100',
  },
  {
    name: 'Professional Services',
    slug: 'professional-services',
    icon: FiBriefcase,
    gradient: 'from-purple-500 to-purple-600',
    bgGradient: 'from-purple-50 to-purple-100',
  },
  {
    name: 'For Sale',
    slug: 'for-sale',
    icon: FiShoppingBag,
    gradient: 'from-emerald-500 to-emerald-600',
    bgGradient: 'from-emerald-50 to-emerald-100',
  },
  {
    name: 'Trades & Repairs',
    slug: 'trades-repairs',
    icon: FiTool,
    gradient: 'from-orange-500 to-orange-600',
    bgGradient: 'from-orange-50 to-orange-100',
  },
  {
    name: 'Food & Catering',
    slug: 'food-catering',
    icon: FiTruck,
    gradient: 'from-red-500 to-red-600',
    bgGradient: 'from-red-50 to-red-100',
  },
  {
    name: 'Community Events',
    slug: 'community-events',
    icon: FiUsers,
    gradient: 'from-indigo-500 to-indigo-600',
    bgGradient: 'from-indigo-50 to-indigo-100',
  },
  {
    name: 'Education',
    slug: 'education',
    icon: FiBook,
    gradient: 'from-yellow-500 to-yellow-600',
    bgGradient: 'from-yellow-50 to-yellow-100',
  },
  {
    name: 'Wedding Services',
    slug: 'wedding-services',
    icon: FiHeart,
    gradient: 'from-pink-500 to-pink-600',
    bgGradient: 'from-pink-50 to-pink-100',
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {categories.map((category, index) => {
        const Icon = category.icon;
        return (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="group relative overflow-hidden rounded-2xl bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 card-hover"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

            {/* Content */}
            <div className="relative p-8">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.bgGradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300`}>
                <Icon className={`text-4xl bg-gradient-to-br ${category.gradient} bg-clip-text text-transparent group-hover:text-white transition-colors`} />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-white transition-colors text-xl mb-3">
                {category.name}
              </h3>
              <div className="flex items-center text-base text-gray-500 group-hover:text-white/80 transition-colors">
                <span>Explore →</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
