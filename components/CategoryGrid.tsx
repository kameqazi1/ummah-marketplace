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
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Professional Services',
    slug: 'professional-services',
    icon: FiBriefcase,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    name: 'For Sale',
    slug: 'for-sale',
    icon: FiShoppingBag,
    color: 'bg-green-100 text-green-600',
  },
  {
    name: 'Trades & Repairs',
    slug: 'trades-repairs',
    icon: FiTool,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    name: 'Food & Catering',
    slug: 'food-catering',
    icon: FiTruck,
    color: 'bg-red-100 text-red-600',
  },
  {
    name: 'Community Events',
    slug: 'community-events',
    icon: FiUsers,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    name: 'Education',
    slug: 'education',
    icon: FiBook,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    name: 'Wedding Services',
    slug: 'wedding-services',
    icon: FiHeart,
    color: 'bg-pink-100 text-pink-600',
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className="p-6 rounded-lg border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all group"
          >
            <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <Icon className="text-2xl" />
            </div>
            <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600">
              {category.name}
            </h3>
          </Link>
        );
      })}
    </div>
  );
}
