'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Mock recipe data (same as main recipes page)
const mockRecipes = [
  {
    id: '1',
    title: "Grandma's Classic Chocolate Chip Cookies",
    author: 'Sarah Johnson',
    description: 'The secret family recipe passed down for three generations. Perfectly crispy on the outside, chewy on the inside.',
    cookTime: '25 min',
    servings: 24,
    category: 'Dessert',
    isPublic: true,
    imageUrl: '/placeholder-cookie.jpg',
    likes: 142,
  },
  {
    id: '2',
    title: 'Italian Sunday Gravy',
    author: 'Marco Rossi',
    description: 'A traditional Italian red sauce that simmers all day. The foundation of our family Sunday dinners.',
    cookTime: '4 hours',
    servings: 8,
    category: 'Main Course',
    isPublic: true,
    imageUrl: '/placeholder-pasta.jpg',
    likes: 98,
  },
  {
    id: '3',
    title: 'Mom\'s Banana Bread',
    author: 'Emily Chen',
    description: 'Moist and flavorful banana bread that fills the house with the most amazing aroma.',
    cookTime: '1 hour',
    servings: 12,
    category: 'Breakfast',
    isPublic: true,
    imageUrl: '/placeholder-bread.jpg',
    likes: 76,
  },
  {
    id: '4',
    title: 'Uncle Pete\'s BBQ Ribs',
    author: 'Pete Wilson',
    description: 'Fall-off-the-bone ribs with a secret dry rub that took years to perfect.',
    cookTime: '3 hours',
    servings: 6,
    category: 'Main Course',
    isPublic: true,
    imageUrl: '/placeholder-ribs.jpg',
    likes: 203,
  },
  {
    id: '5',
    title: 'Aunt Maria\'s Flan',
    author: 'Maria Garcia',
    description: 'Silky smooth caramel custard that melts in your mouth. A celebration staple.',
    cookTime: '2 hours',
    servings: 8,
    category: 'Dessert',
    isPublic: true,
    imageUrl: '/placeholder-flan.jpg',
    likes: 134,
  },
  {
    id: '6',
    title: 'Dad\'s Famous Chili',
    author: 'John Smith',
    description: 'Award-winning chili recipe with the perfect blend of spices and a secret ingredient.',
    cookTime: '2.5 hours',
    servings: 10,
    category: 'Soup',
    isPublic: true,
    imageUrl: '/placeholder-chili.jpg',
    likes: 167,
  },
];

export default function SavedRecipesPage() {
  const [bookmarkedRecipes, setBookmarkedRecipes] = useState<typeof mockRecipes>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load bookmarked recipes from localStorage on mount
  useEffect(() => {
    try {
      const bookmarked = localStorage.getItem('bookmarkedRecipes');
      if (bookmarked) {
        const bookmarkedIds: string[] = JSON.parse(bookmarked);
        const filtered = mockRecipes.filter((recipe) => bookmarkedIds.includes(recipe.id));
        setBookmarkedRecipes(filtered);
      }
    } catch (error) {
      // Handle localStorage errors gracefully
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Saved Recipes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your personal collection of bookmarked family recipes
          </p>
        </div>

        {/* Recipe Grid */}
        {bookmarkedRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookmarkedRecipes.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/recipes/${recipe.id}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden hover:scale-[1.02]"
              >
                {/* Recipe Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-orange-200 to-red-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                    {recipe.category}
                  </div>
                </div>

                {/* Recipe Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {recipe.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {recipe.cookTime}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {recipe.servings}
                      </span>
                    </div>
                  </div>

                  {/* Author and Likes */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-600">by {recipe.author}</span>
                    <span className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-1 text-red-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      {recipe.likes}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-12">
            <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No saved recipes yet</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Start bookmarking your favorite recipes by clicking the bookmark icon on any recipe detail page
            </p>
            <Link
              href="/recipes"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Browse Recipes
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
