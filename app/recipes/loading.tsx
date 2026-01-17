import RecipeCardSkeleton from '@/components/RecipeCardSkeleton';

const categories = ['All', 'Breakfast', 'Main Course', 'Dessert', 'Soup', 'Appetizer'];

export default function RecipesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Family Recipe Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover delicious recipes shared by families around the world. Each dish tells a story.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                disabled
                className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-full shadow-sm text-gray-900 bg-gray-50 cursor-not-allowed"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                disabled
                className="px-6 py-2 rounded-full font-medium bg-white text-gray-700 border border-gray-300 cursor-not-allowed opacity-60"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Grid with Skeleton Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <RecipeCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
