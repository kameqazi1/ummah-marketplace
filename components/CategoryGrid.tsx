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
    gradient: 'from-teal-600 to-teal-700',
    bgGradient: 'from-teal-50 to-teal-100',
  },
  {
    name: 'Professional Services',
    slug: 'professional-services',
    icon: FiBriefcase,
    gradient: 'from-cyan-600 to-cyan-700',
    bgGradient: 'from-cyan-50 to-cyan-100',
  },
  {
    name: 'For Sale',
    slug: 'for-sale',
    icon: FiShoppingBag,
    gradient: 'from-emerald-600 to-emerald-700',
    bgGradient: 'from-emerald-50 to-emerald-100',
  },
  {
    name: 'Trades & Repairs',
    slug: 'trades-repairs',
    icon: FiTool,
    gradient: 'from-amber-600 to-amber-700',
    bgGradient: 'from-amber-50 to-amber-100',
  },
  {
    name: 'Food & Catering',
    slug: 'food-catering',
    icon: FiTruck,
    gradient: 'from-orange-600 to-orange-700',
    bgGradient: 'from-orange-50 to-orange-100',
  },
  {
    name: 'Community Events',
    slug: 'community-events',
    icon: FiUsers,
    gradient: 'from-blue-600 to-blue-700',
    bgGradient: 'from-blue-50 to-blue-100',
  },
  {
    name: 'Education',
    slug: 'education',
    icon: FiBook,
    gradient: 'from-violet-600 to-violet-700',
    bgGradient: 'from-violet-50 to-violet-100',
  },
  {
    name: 'Wedding Services',
    slug: 'wedding-services',
    icon: FiHeart,
    gradient: 'from-rose-600 to-rose-700',
    bgGradient: 'from-rose-50 to-rose-100',
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
            className="group relative overflow-hidden rounded-2xl bg-white border border-stone-200 hover:border-transparent hover:shadow-lg transition-all duration-300 card-hover"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

            {/* Content */}
            <div className="relative p-8">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.bgGradient} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300`}>
                <Icon className={`text-4xl bg-gradient-to-br ${category.gradient} bg-clip-text text-transparent group-hover:text-white transition-colors`} />
              </div>
              <h3 className="font-bold text-stone-900 group-hover:text-white transition-colors text-xl mb-3">
                {category.name}
              </h3>
              <div className="flex items-center text-base text-stone-500 group-hover:text-white/90 transition-colors">
                <span>Explore →</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
