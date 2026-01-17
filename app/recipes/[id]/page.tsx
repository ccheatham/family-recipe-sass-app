'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

// Mock recipe data (in a real app, this would come from a database)
const getRecipeById = (id: string) => {
  const recipes: Record<string, any> = {
    '1': {
      id: '1',
      title: "Grandma's Classic Chocolate Chip Cookies",
      author: 'Sarah Johnson',
      authorAvatar: 'SJ',
      description: 'The secret family recipe passed down for three generations. Perfectly crispy on the outside, chewy on the inside.',
      story: 'My grandmother used to make these cookies every Sunday afternoon. The smell would fill the entire house, and we kids would gather around the kitchen, waiting for the first batch to come out of the oven. She always said the secret was to slightly underbake them and let them cool on the pan. Now I make these with my own grandchildren, keeping the tradition alive.',
      cookTime: '25 min',
      prepTime: '15 min',
      servings: 24,
      category: 'Dessert',
      difficulty: 'Easy',
      isPublic: true,
      likes: 142,
      ingredients: [
        '2 1/4 cups all-purpose flour',
        '1 tsp baking soda',
        '1 tsp salt',
        '1 cup (2 sticks) butter, softened',
        '3/4 cup granulated sugar',
        '3/4 cup packed brown sugar',
        '2 large eggs',
        '2 tsp vanilla extract',
        '2 cups semi-sweet chocolate chips',
        '1 cup chopped walnuts (optional)',
      ],
      instructions: [
        'Preheat your oven to 375°F (190°C).',
        'In a small bowl, combine flour, baking soda, and salt. Set aside.',
        'In a large mixing bowl, beat softened butter with both sugars until creamy and light.',
        'Add eggs one at a time, beating well after each addition. Stir in vanilla extract.',
        'Gradually blend in the flour mixture until just combined.',
        'Fold in chocolate chips and walnuts (if using).',
        'Drop rounded tablespoons of dough onto ungreased cookie sheets, spacing them about 2 inches apart.',
        'Bake for 9-11 minutes or until golden brown around the edges but still soft in the center.',
        'Cool on baking sheet for 2 minutes, then transfer to a wire rack.',
        'Store in an airtight container for up to one week (if they last that long!).',
      ],
      tips: [
        'For extra chewy cookies, refrigerate the dough for 30 minutes before baking.',
        'Don\'t overbake! The cookies will continue to cook on the hot pan after removing from oven.',
        'Use room temperature butter for best results.',
      ],
    },
  };
  return recipes[id] || null;
};

export default function RecipeDetailPage() {
  const params = useParams();
  const recipeId = params.id as string;
  const recipe = getRecipeById(recipeId);
  const [isLiked, setIsLiked] = useState(false);
  const [servingMultiplier, setServingMultiplier] = useState(1);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Recipe Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the recipe you're looking for.</p>
          <Link
            href="/recipes"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
          >
            Browse All Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/recipes"
          className="inline-flex items-center text-gray-600 hover:text-orange-500 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Recipes
        </Link>

        {/* Recipe Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          {/* Hero Image */}
          <div className="h-64 md:h-96 bg-gradient-to-br from-orange-200 to-red-200 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-32 h-32 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            {/* Category Badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
              {recipe.category}
            </div>
          </div>

          {/* Recipe Info */}
          <div className="p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {recipe.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">{recipe.description}</p>

            {/* Author and Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-bold">
                  {recipe.authorAvatar}
                </div>
                <div>
                  <p className="text-sm text-gray-500">Recipe by</p>
                  <p className="font-semibold text-gray-900">{recipe.author}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all duration-200 ${
                    isLiked
                      ? 'bg-red-50 border-red-500 text-red-500'
                      : 'border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500'
                  }`}
                  aria-label="Like this recipe"
                >
                  <svg className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="font-semibold">{recipe.likes + (isLiked ? 1 : 0)}</span>
                </button>

                <button className="p-2 rounded-full border-2 border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors" aria-label="Share this recipe">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>

                <button className="p-2 rounded-full border-2 border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors" aria-label="Bookmark this recipe">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Recipe Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">Prep Time</p>
                <p className="font-semibold text-gray-900">{recipe.prepTime}</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">Cook Time</p>
                <p className="font-semibold text-gray-900">{recipe.cookTime}</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">Servings</p>
                <p className="font-semibold text-gray-900">{recipe.servings * servingMultiplier}</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">Difficulty</p>
                <p className="font-semibold text-gray-900">{recipe.difficulty}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Story */}
        {recipe.story && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              The Story Behind the Recipe
            </h2>
            <p className="text-gray-700 leading-relaxed italic">{recipe.story}</p>
          </div>
        )}

        {/* Ingredients and Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Ingredients</h2>
                <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setServingMultiplier(Math.max(0.5, servingMultiplier - 0.5))}
                    className="p-1 hover:bg-white rounded transition-colors"
                    aria-label="Decrease serving size"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="text-sm font-semibold px-2" aria-live="polite" aria-atomic="true">{servingMultiplier}x</span>
                  <button
                    onClick={() => setServingMultiplier(servingMultiplier + 0.5)}
                    className="p-1 hover:bg-white rounded transition-colors"
                    aria-label="Increase serving size"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    </div>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-gray-700 leading-relaxed">{instruction}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Tips */}
              {recipe.tips && recipe.tips.length > 0 && (
                <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Pro Tips
                  </h3>
                  <ul className="space-y-2">
                    {recipe.tips.map((tip: string, index: number) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="text-yellow-600 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* More from this author */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Love this recipe?</h3>
          <p className="text-gray-600 mb-6">Share your own family recipes with the community!</p>
          <Link
            href="/recipes/create"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Share Your Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}
