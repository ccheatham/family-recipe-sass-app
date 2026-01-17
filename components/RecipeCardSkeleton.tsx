export default function RecipeCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      {/* Image Area Skeleton */}
      <div className="h-48 bg-gray-300 relative">
        {/* Category Badge Skeleton */}
        <div className="absolute top-3 right-3 bg-gray-200 rounded-full h-6 w-20"></div>
      </div>

      {/* Recipe Info Skeleton */}
      <div className="p-6">
        {/* Title Skeleton */}
        <div className="h-7 bg-gray-300 rounded w-3/4 mb-2"></div>

        {/* Description Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Meta Info Skeleton */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-16 bg-gray-200 rounded"></div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-12 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Author and Likes Skeleton */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="flex items-center space-x-1">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-8 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
